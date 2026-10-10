/**
 * Google Apps Script web app that stores Entersight landing-page leads.
 *
 * Setup (once):
 *  1. Create a Google Sheet, then Extensions → Apps Script, paste this file.
 *  2. Set SECRET to a long random string and NOTIFY_EMAIL to who gets alerts.
 *  3. Deploy → New deployment → Web app; Execute as: Me; Who has access: Anyone.
 *  4. On Vercel set LEAD_WEBHOOK_URL (the /exec URL) and LEAD_WEBHOOK_SECRET
 *     (same as SECRET), then redeploy.
 */
const SECRET = "CHANGE_ME";
const NOTIFY_EMAIL = "info@entersight-tech.com";
const SHEET_NAME = "Leads";

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: "bad_json" });
  }
  if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Thời gian", "Họ tên", "SĐT", "Doanh nghiệp", "Vấn đề", "Trang", "Trình duyệt"]);
    sheet.setFrozenRows(1);
  }

  // leading apostrophe keeps the phone's leading 0; strip formula prefixes
  const safe = (v) => String(v || "").replace(/^[=+\-@]/, "'$&");
  sheet.appendRow([
    new Date(),
    safe(data.name),
    "'" + String(data.phone || ""),
    safe(data.company),
    safe(data.message),
    safe(data.source),
    safe(data.userAgent),
  ]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "[Entersight] Lead mới: " + data.name + " — " + data.phone,
    body:
      "Họ tên: " + data.name +
      "\nSĐT: " + data.phone +
      "\nDoanh nghiệp: " + (data.company || "—") +
      "\nVấn đề: " + (data.message || "—") +
      "\n\nSheet: " + ss.getUrl(),
  });

  return json({ ok: true });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
