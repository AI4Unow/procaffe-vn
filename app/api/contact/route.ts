/**
 * Contact / Lead Capture API Route.
 * Receives form submissions from the storefront (inquiry, callback, review)
 * and logs them to the server console.
 *
 * For production, connect this to an email service (Resend, SendGrid, etc.)
 * or persist to a database.
 */
import { NextResponse } from "next/server";

interface ContactPayload {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    source: string;          // "rental-inquiry" | "contact-modal" | "product-callback" | "review"
    product_slug?: string;
    rating?: number;
}

export async function POST(request: Request) {
    try {
        const body: ContactPayload = await request.json();

        // Basic validation
        if (!body.source) {
            return NextResponse.json(
                { error: "Missing 'source' field" },
                { status: 400 },
            );
        }

        if (!body.name && !body.phone && !body.email && !body.message) {
            return NextResponse.json(
                { error: "At least one contact field is required" },
                { status: 400 },
            );
        }

        // Log for now — replace with email/DB in production
        console.log("[LEAD]", JSON.stringify({
            timestamp: new Date().toISOString(),
            ...body,
        }));

        return NextResponse.json(
            { success: true, message: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất." },
            { status: 200 },
        );
    } catch (err) {
        console.error("[LEAD ERROR]", err);
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 },
        );
    }
}
