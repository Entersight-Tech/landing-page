import { NextResponse } from "next/server";
import { validateLead } from "@/lib/lead";

/**
 * Receives the contact form and forwards it to a Google Apps Script web app
 * (scripts/lead-to-sheet.gs) that appends a row to the leads Sheet and emails
 * the team. Configure on Vercel:
 *   LEAD_WEBHOOK_URL    — the Apps Script /exec URL
 *   LEAD_WEBHOOK_SECRET — same value as SECRET in the script
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  // honeypot: real users never see or fill this field
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const result = validateLead(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const url = process.env.LEAD_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("[lead] LEAD_WEBHOOK_URL / LEAD_WEBHOOK_SECRET not configured");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...result.lead,
        secret,
        source: req.headers.get("referer") ?? "",
        userAgent: req.headers.get("user-agent") ?? "",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    // "unauthorized" = secret mismatch; no JSON = wrong URL or a script that crashed
    if (!res.ok || !data?.ok)
      throw new Error(`webhook responded ${res.status}: ${data ? data.error ?? "not ok" : "non-JSON body"}`);
  } catch (err) {
    console.error("[lead] forwarding failed", err);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
