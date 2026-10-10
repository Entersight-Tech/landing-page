// Shared between the contact form and /api/lead so both validate the same way.

export type Lead = {
  name: string;
  phone: string;
  company: string;
  message: string;
};

export const LIMITS = { name: 80, company: 120, message: 1500 } as const;

/** Strips spaces, dots and dashes; accepts 0xxxxxxxxx or +84xxxxxxxxx. */
export function normalizePhone(raw: string): string | null {
  const p = raw.replace(/[\s.\-()]/g, "");
  if (/^0\d{9,10}$/.test(p)) return p;
  if (/^\+?84\d{9,10}$/.test(p)) return "0" + p.replace(/^\+?84/, "");
  return null;
}

/** Returns the cleaned lead, or an error message in Vietnamese for the form. */
export function validateLead(input: Record<string, unknown>): { lead: Lead } | { error: string } {
  const str = (k: string) => (typeof input[k] === "string" ? (input[k] as string).trim() : "");
  const name = str("name");
  const company = str("company");
  const message = str("message");
  const phone = normalizePhone(str("phone"));

  if (name.length < 2 || name.length > LIMITS.name) return { error: "Vui lòng nhập họ và tên." };
  if (!phone) return { error: "Số điện thoại chưa đúng định dạng (VD: 0912 345 678)." };
  if (company.length > LIMITS.company || message.length > LIMITS.message)
    return { error: "Nội dung quá dài, vui lòng rút gọn." };

  return { lead: { name, phone, company, message } };
}
