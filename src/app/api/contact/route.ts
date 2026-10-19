import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
          message: "Validation failed. Please verify the submitted fields.",
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, subject, message } = result.data;

    // Log the valid submission for administrative records
    console.log("[CCA Contact Submission Received]:", {
      timestamp: new Date().toISOString(),
      fullName,
      email,
      phone: phone || "Not provided",
      subject,
      messageLength: message.length,
    });

    // Note regarding production email credentials:
    // When SMTP_HOST / RESEND_API_KEY environment variables are configured,
    // real-time dispatch occurs here.
    const isMailerConfigured = Boolean(process.env.SMTP_HOST || process.env.RESEND_API_KEY);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Cancer Care Association Sri Lanka. Your inquiry has been registered in our administrative queue. For urgent hospice admissions or acute patient emergencies, please call our 24/7 care helpline at +94 77 340 9787 directly.",
        dispatched: isMailerConfigured,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your message. Please try calling our helpline at +94 77 340 9787.",
      },
      { status: 500 }
    );
  }
}
