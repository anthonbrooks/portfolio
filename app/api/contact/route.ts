import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "anthonybrooks226@gmail.com",
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: message,
    });
    return Response.json({ success: true });
  } catch (err: any) {
    console.error("sendEmail error:", err);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
