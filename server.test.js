import assert from "node:assert/strict";
import test from "node:test";

import { app, normalizeContact, validateContact } from "./server.js";

test("contact validation accepts a complete submission and rejects an invalid email", () => {
  const contact = normalizeContact({
    name: "A Person",
    email: "person@example.com",
    company: "Example",
    website: "https://example.com",
    buildOrFix: "A useful product",
    help: ["Plan the Product Architecture"],
  });

  assert.equal(validateContact(contact), "");
  assert.equal(validateContact({ ...contact, email: "invalid" }), "Please enter a valid email address.");
});

test("contact endpoint rejects incomplete submissions without attempting email", async () => {
  const server = app.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });
  const address = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${address.port}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "A Person" }),
    });
    const result = await response.json();

    assert.equal(response.status, 400);
    assert.equal(result.error, "Please complete all required fields.");
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
