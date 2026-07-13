import assert from "node:assert/strict";
import test from "node:test";
import nodemailer from "nodemailer";

import { app, normalizeContact, validateContact } from "./server.js";

const validContact = {
  name: "A Person",
  email: "person@example.com",
  company: "Example Company",
  website: "https://example.com",
  buildOrFix: "A useful product",
  help: ["Plan the Product Architecture"],
};

/**
 * Posts contact data to the temporary test server from a distinct caller IP.
 *
 * @param {number} port Temporary server port.
 * @param {Record<string, unknown>} payload Contact request payload.
 * @param {string} ipAddress Simulated caller IP address.
 * @returns {Promise<Response>} Contact endpoint response.
 */
function postContact(port, payload, ipAddress) {
  return fetch(`http://127.0.0.1:${port}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": ipAddress,
    },
    body: JSON.stringify(payload),
  });
}

test("contact validation accepts a complete submission and rejects an invalid email", () => {
  const contact = normalizeContact(validContact);

  assert.equal(validateContact(contact), "");
  assert.equal(validateContact({ ...contact, email: "invalid" }), "Please enter a valid email address.");
});

test("contact endpoint handles delivery, bot, failure, and rate-limit branches", async (context) => {
  process.env.SMTP_USER = "brian@ologi.io";
  process.env.SMTP_PASS = "test-app-password";

  const sendMail = context.mock.fn(async () => ({ messageId: "test-message" }));
  context.mock.method(nodemailer, "createTransport", () => ({ sendMail }));
  context.mock.method(console, "error", () => {});

  const server = app.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });
  const address = server.address();

  try {
    const successResponse = await postContact(address.port, validContact, "203.0.113.1");
    const internalMessage = sendMail.mock.calls[0].arguments[0];
    const confirmationMessage = sendMail.mock.calls[1].arguments[0];

    assert.equal(successResponse.status, 200);
    assert.equal(sendMail.mock.callCount(), 2);
    assert.equal(internalMessage.from, "Ologi <hello@ologi.io>");
    assert.equal(internalMessage.to, "hello@ologi.io");
    assert.equal(internalMessage.replyTo, validContact.email);
    assert.equal(confirmationMessage.to, validContact.email);
    assert.equal(confirmationMessage.replyTo, "hello@ologi.io");

    sendMail.mock.resetCalls();
    const botResponse = await postContact(address.port, { ...validContact, companyPhone: "filled-by-bot" }, "203.0.113.2");
    assert.equal(botResponse.status, 200);
    assert.equal(sendMail.mock.callCount(), 0);

    process.env.SMTP_PASS = "";
    const unconfiguredResponse = await postContact(address.port, validContact, "203.0.113.3");
    assert.equal(unconfiguredResponse.status, 503);
    assert.equal(sendMail.mock.callCount(), 0);
    process.env.SMTP_PASS = "test-app-password";

    sendMail.mock.mockImplementation(async () => {
      throw new Error("Primary delivery failed");
    });
    const failedDeliveryResponse = await postContact(address.port, validContact, "203.0.113.4");
    assert.equal(failedDeliveryResponse.status, 502);

    sendMail.mock.resetCalls();
    let confirmationAttempt = 0;
    sendMail.mock.mockImplementation(async () => {
      confirmationAttempt += 1;
      if (confirmationAttempt === 2) {
        throw new Error("Confirmation failed");
      }
      return { messageId: "test-message" };
    });
    const failedConfirmationResponse = await postContact(address.port, validContact, "203.0.113.5");
    assert.equal(failedConfirmationResponse.status, 200);
    assert.equal(sendMail.mock.callCount(), 2);

    for (let attempt = 1; attempt <= 5; attempt += 1) {
      const allowedResponse = await postContact(address.port, { name: "Incomplete" }, "203.0.113.6");
      assert.equal(allowedResponse.status, 400);
    }
    const limitedResponse = await postContact(address.port, { name: "Incomplete" }, "203.0.113.6");
    assert.equal(limitedResponse.status, 429);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
