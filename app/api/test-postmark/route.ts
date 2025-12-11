import { NextResponse } from "next/server";
import { sendProductEmail } from "@/lib/postmark";

export async function GET() {
  try {
    await sendProductEmail({
      toEmail: "tvoja-test-adresa@gmail.com",
      firstName: "Test",
      productType: "MAIN_OFFER",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("test-postmark error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}

