import { Resend } from 'resend';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function sanitize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '');
}

function userReplyHtml({ name }) {
  const brandBg = '#ffffff';
  const brandText = '#0A2540';
  const neon = '#00D4FF';
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Thanks for contacting DevWeaveX</title>
    </head>
    <body style="margin:0;padding:0;background:${brandBg};font-family:Inter,Arial,Helvetica,sans-serif;color:${brandText};">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brandBg};">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
              <tr>
                <td style="padding:32px 24px;text-align:center;border-bottom:1px solid #e5e7eb;">
                  <div style="font-weight:800;font-size:24px;letter-spacing:0.5px;">DevWeaveX</div>
                  <div style="margin-top:8px;color:${neon};font-weight:700;">Digital products that feel fast</div>
                </td>
              </tr>
              <tr>
                <td style="padding:24px 24px 8px 24px;">
                  <h2 style="margin:0 0 12px 0;font-size:20px;color:${brandText};">Hi ${sanitize(name) || 'there'},</h2>
                  <p style="margin:0 0 12px 0;line-height:1.6;">Thanks for reaching out to DevWeaveX. Your message is in and our team will get back to you shortly.</p>
                  <p style="margin:0 0 12px 0;line-height:1.6;">If this is urgent, reply to this email directly.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px 24px 24px;">
                  <a href="https://devweavex.com" style="display:inline-block;background:${neon};color:#0b1020;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:700;">Visit DevWeaveX</a>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px;color:#6b7280;font-size:12px;border-top:1px solid #e5e7eb;">© ${new Date().getFullYear()} DevWeaveX • Karachi, Pakistan</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function adminNotifyHtml({ name, email, service, budget, message }) {
  const brandBg = '#ffffff';
  const brandText = '#0A2540';
  const neon = '#00D4FF';
  const row = (label, value) => `
    <tr>
      <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;width:160px;font-weight:600;">${label}</td>
      <td style="padding:8px 12px;border:1px solid #e5e7eb;">${sanitize(value)}</td>
    </tr>`;
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>New Contact Submission - DevWeaveX</title>
    </head>
    <body style="margin:0;padding:0;background:${brandBg};font-family:Inter,Arial,Helvetica,sans-serif;color:${brandText};">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brandBg};">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
              <tr>
                <td style="padding:24px 24px;text-align:left;border-bottom:1px solid #e5e7eb;">
                  <div style="font-weight:800;font-size:20px;">New Contact Submission</div>
                  <div style="margin-top:6px;color:${neon};font-weight:700;">DevWeaveX</div>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                    ${row('Name', name)}
                    ${row('Email', email)}
                    ${row('Service', service)}
                    ${row('Budget', budget || '—')}
                    ${row('Message', message)}
                  </table>
                  <p style="margin-top:16px;font-size:12px;color:#6b7280;">Received at ${new Date().toLocaleString()}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Fallback to Resend onboarding address if a verified FROM_EMAIL isn't set yet
  const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'; // temporary testing address from Resend
  const notifyEmail = process.env.NOTIFY_EMAIL || 'devweavex@gmail.com';

  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Missing RESEND_API_KEY' }) };
  }
  // fromEmail always exists now due to fallback above

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { name, email, service, budget, message, botField } = payload;
  if (botField) {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }
  if (!name || !email || !service || !message) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  const resend = new Resend(apiKey);
  const fromHeader = `DevWeaveX <${fromEmail}>`;

  try {
    const [userRes, adminRes] = await Promise.all([
      resend.emails.send({
        from: fromHeader,
        to: email,
        subject: 'Thanks for contacting DevWeaveX',
        html: userReplyHtml({ name }),
        text: `Hi ${sanitize(name) || 'there'},\n\nThanks for reaching out to DevWeaveX. Your message is in and our team will get back to you shortly. If this is urgent, reply to this email directly.\n\n— DevWeaveX` ,
        reply_to: notifyEmail,
      }),
      resend.emails.send({
        from: fromHeader,
        to: notifyEmail,
        subject: `New Contact - ${sanitize(name)} (${sanitize(service)})`,
        html: adminNotifyHtml({ name, email, service, budget, message }),
        text: `New contact submission:\nName: ${sanitize(name)}\nEmail: ${sanitize(email)}\nService: ${sanitize(service)}\nBudget: ${sanitize(budget || '—')}\nMessage: ${sanitize(message)}\nReceived at: ${new Date().toLocaleString()}`,
        reply_to: email,
      }),
    ]);

    const result = { userId: userRes?.id || null, adminId: adminRes?.id || null };
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, result }) };
  } catch (err) {
    const msg = typeof err?.message === 'string' ? err.message : 'Failed to send email';
    return { statusCode: 500, headers, body: JSON.stringify({ error: msg }) };
  }
}
