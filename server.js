import express from "express";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5050;
const contactEmail = process.env.CONTACT_EMAIL || "hello@ologi.io";
const requiredContactFields = ["name", "email", "company", "website", "buildOrFix"];
const contactFieldNames = [
  "name",
  "email",
  "role",
  "company",
  "website",
  "companyDescription",
  "stage",
  "signal",
  "buildOrFix",
  "stack",
];
const requestLimits = new Map();

app.set("trust proxy", 1);
app.use(express.json({ limit: "20kb" }));

/**
 * Allows a small number of contact attempts per IP address and Heroku dyno.
 *
 * @param {express.Request} request Incoming contact request.
 * @param {express.Response} response Express response.
 * @param {express.NextFunction} next Continues to the contact handler.
 * @returns {void}
 * @sideeffect Updates the in-memory request counter for the caller's IP address.
 */
function limitContactRequests(request, response, next) {
  const now = Date.now();
  const current = requestLimits.get(request.ip);

  if (!current || current.resetAt <= now) {
    requestLimits.set(request.ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    next();
    return;
  }

  if (current.count >= 5) {
    response.status(429).json({ error: "Please wait before trying again." });
    return;
  }

  current.count += 1;
  next();
}

/**
 * Normalizes the public contact payload to the fields used in email messages.
 *
 * @param {Record<string, unknown>} body Untrusted JSON request body.
 * @returns {Record<string, string | string[]>} Normalized contact data.
 */
function normalizeContact(body) {
  const contact = Object.fromEntries(contactFieldNames.map((fieldName) => [
    fieldName,
    String(body[fieldName] || "").trim().slice(0, 4000),
  ]));

  contact.help = Array.isArray(body.help)
    ? body.help.filter((item) => typeof item === "string").map((item) => item.trim().slice(0, 200)).slice(0, 10)
    : [];

  return contact;
}

/**
 * Finds the first validation error in a normalized contact submission.
 *
 * @param {Record<string, string | string[]>} contact Normalized contact data.
 * @returns {string} A public error message, or an empty string when valid.
 */
function validateContact(contact) {
  const missingField = requiredContactFields.find((fieldName) => !contact[fieldName]);

  if (missingField) {
    return "Please complete all required fields.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
    return "Please enter a valid email address.";
  }

  return "";
}

/**
 * Formats a contact submission as readable plain text.
 *
 * @param {Record<string, string | string[]>} contact Validated contact data.
 * @param {express.Request} request Original request containing source metadata.
 * @returns {string} Plain-text project brief.
 */
function formatContact(contact, request) {
  const lines = [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Role / Title: ${contact.role || "Not provided"}`,
    `Company / Project: ${contact.company}`,
    `Website: ${contact.website}`,
    `Stage: ${contact.stage || "Not provided"}`,
    `Traffic / Usage / Revenue: ${contact.signal || "Not provided"}`,
    `Help requested: ${contact.help.length ? contact.help.join(", ") : "Not provided"}`,
    "",
    "Company description:",
    contact.companyDescription || "Not provided",
    "",
    "What they are trying to build or fix:",
    contact.buildOrFix,
    "",
    "Current platform / stack:",
    contact.stack || "Not provided",
    "",
    `Submitted: ${new Date().toISOString()}`,
    `Source: ${request.get("origin") || request.get("referer") || "Direct"}`,
  ];

  return lines.join("\n");
}

/**
 * Sends the project brief to Ologi and a short acknowledgement to the visitor.
 *
 * @param {express.Request} request Incoming contact request.
 * @param {express.Response} response Express response.
 * @returns {Promise<void>}
 * @sideeffect Sends up to two email messages through Google Workspace SMTP.
 */
async function submitContact(request, response) {
  const body = request.body && typeof request.body === "object" ? request.body : {};

  if (String(body.companyPhone || "").trim()) {
    response.json({ ok: true });
    return;
  }

  const contact = normalizeContact(body);
  const validationError = validateContact(contact);

  if (validationError) {
    response.status(400).json({ error: validationError });
    return;
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    response.status(503).json({ error: "Contact email is not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const sender = `Ologi <${contactEmail}>`;

  try {
    await transporter.sendMail({
      from: sender,
      to: contactEmail,
      replyTo: contact.email,
      subject: `Ologi inquiry: ${contact.company.slice(0, 80)}`,
      text: formatContact(contact, request),
    });

    try {
      await transporter.sendMail({
        from: sender,
        to: contact.email,
        replyTo: contactEmail,
        subject: "Ologi received your project notes",
        text: `Hi ${contact.name},\n\nThanks for sharing what you're working on. I've received your project notes and will review them shortly. If there is a clear fit, I'll follow up at this email address.\n\nBrian\nOlogi\n${contactEmail}`,
      });
    } catch {
      console.error("The contact was received, but its confirmation email could not be sent.");
    }

    response.json({ ok: true });
  } catch {
    console.error("The contact notification email could not be sent.");
    response.status(502).json({ error: "Your project notes could not be sent. Please email hello@ologi.io directly." });
  }
}

// ponytail: this per-dyno limiter is enough for one Heroku web dyno; use shared storage only when scaling horizontally.
app.post("/api/contact", limitContactRequests, submitContact);

app.use(express.static(path.join(__dirname, "public")));

app.use("/assets", (_req, res) => {
  res.sendStatus(404);
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log(`Ologi is running at http://localhost:${port}`);
  });
}

export { app, normalizeContact, validateContact };
