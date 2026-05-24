import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 3000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

async function sendContactMessage({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
  const providerApiKey = process.env.CONTACT_PROVIDER_API_KEY;

  if (process.env.NODE_ENV === "development") {
    console.info("Contact form submission", {
      toConfigured: Boolean(contactToEmail),
      fromConfigured: Boolean(contactFromEmail),
      providerConfigured: Boolean(providerApiKey),
      name,
      email,
      messageLength: message.length,
    });
    return { ok: true as const };
  }

  if (!contactToEmail || !providerApiKey) {
    return {
      ok: false as const,
      status: 503,
      error: "Contact email delivery is not configured yet.",
    };
  }

  // TODO: Connect this route to Resend, SendGrid, Gmail SMTP, or another email provider before production launch.
  // TODO: Use CONTACT_TO_EMAIL as the private recipient address.
  void contactFromEmail;
  void providerApiKey;
  void name;
  void email;
  void message;

  return {
    ok: false as const,
    status: 503,
    error: "Contact email provider is not connected yet.",
  };
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const company = asTrimmedString(body.company);

  if (company) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  const result = await sendContactMessage({ name, email, message });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true });
}
