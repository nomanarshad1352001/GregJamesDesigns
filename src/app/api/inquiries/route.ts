import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  type: z
    .enum([
      "general",
      "stock-plan",
      "modification",
      "custom-design",
      "building-kit",
      "consultation",
      "ebook",
    ])
    .default("general"),
  firstName: z.string().min(1, "First name is required").max(120),
  lastName: z.string().max(120).optional().default(""),
  email: z.string().email("A valid email is required").max(200),
  phone: z.string().max(40).optional().default(""),
  planName: z.string().max(200).optional().default(""),
  location: z.string().max(300).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  timeline: z.string().max(120).optional().default(""),
  budget: z.string().max(120).optional().default(""),
  meta: z.record(z.string(), z.string()).optional().default({}),
});

/**
 * Demo inquiry endpoint — validates the payload and acknowledges receipt.
 * Wire this to your CRM, email service, or database in production.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 },
      );
    }

    const data = parsed.data;
    console.log(
      `[inquiry] ${data.type} — ${data.firstName} ${data.lastName} <${data.email}>` +
        (data.planName ? ` · plan: ${data.planName}` : ""),
    );

    // Simulate processing latency for a realistic UX.
    await new Promise((r) => setTimeout(r, 450));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Inquiry submission failed", err);
    return NextResponse.json(
      { error: "We could not process your request right now" },
      { status: 500 },
    );
  }
}
