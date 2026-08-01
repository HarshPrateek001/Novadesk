import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, unitType, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
  }

  // Log the enquiry (in production, connect to CRM / email service like Resend/SendGrid)
  console.log("📩 New Enquiry:", { name, email, phone, unitType, message });

  return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });
}
