"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const emailAddr = process.env.EMAIL_ADDR;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      throw new Error("Missing fields");
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "anthonybrooks226@gmail.com",
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: message,
    });
    return { success: true };
  } catch (err: any) {
    console.error("sendEmail error:", err);
    return { success: false, error: err.message || "Unknown error" };
  }
}
