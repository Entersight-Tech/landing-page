/**
 * Google Apps Script web app that stores Entersight landing-page leads.
 *
 * Setup (once):
 *  1. Paste this file into Apps Script — from a Sheet (Extensions → Apps
 *     Script) or standalone at script.google.com. A standalone script creates
 *     an "Entersight Leads" Sheet in your Drive on the first lead.
 *  2. Set SECRET to a long random string (NOTIFY_EMAIL = who gets alerts;
 *     several addresses can be comma-separated).
 *  3. Deploy → New deployment → Web app; Execute as: Me; Who has access: Anyone.
 *  4. On Vercel set LEAD_WEBHOOK_URL (the /exec URL) and LEAD_WEBHOOK_SECRET
 *     (same as SECRET), then redeploy.
 *  5. Check: opening the /exec URL in a browser shows {"ok":true,"service":"entersight-leads"}.
 */
const SECRET = "CHANGE_ME";
const NOTIFY_EMAIL = "thanhlp18@gmail.com";
const SHEET_NAME = "Leads";

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: "bad_json" });
  }
  if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

  try {
    saveLead(data);
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  }
  return json({ ok: true });
}

function saveLead(data) {
  const ss = leadsSpreadsheet();
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
    replyTo: NOTIFY_EMAIL,
    body:
      "Họ tên: " + data.name +
      "\nSĐT: " + data.phone +
      "\nDoanh nghiệp: " + (data.company || "—") +
      "\nVấn đề: " + (data.message || "—") +
      "\nTrang: " + (data.source || "—") +
      "\n\nSheet: " + ss.getUrl(),
  });
}

// the bound Sheet, or (standalone script) one created once and remembered
function leadsSpreadsheet() {
  const bound = SpreadsheetApp.getActiveSpreadsheet();
  if (bound) return bound;
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty("SHEET_ID");
  if (id) return SpreadsheetApp.openById(id);
  const ss = SpreadsheetApp.create("Entersight Leads");
  props.setProperty("SHEET_ID", ss.getId());
  return ss;
}

// health check: open the /exec URL in a browser
function doGet() {
  return json({ ok: true, service: "entersight-leads" });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
