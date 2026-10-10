This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Lead form → Google Sheet + email

The contact form posts to `/api/lead`, which forwards to a Google Apps Script
web app (`scripts/lead-to-sheet.gs`) that appends a row to a Sheet and emails
`info@entersight-tech.com`.

1. Create a Google Sheet → Extensions → Apps Script → paste `scripts/lead-to-sheet.gs`.
2. Set `SECRET` (long random string) and `NOTIFY_EMAIL` in the script.
3. Deploy → New deployment → Web app, *Execute as: Me*, *Who has access: Anyone*.
4. In Vercel → Project → Settings → Environment Variables add
   `LEAD_WEBHOOK_URL` (the `/exec` URL) and `LEAD_WEBHOOK_SECRET` (same as `SECRET`), then redeploy.

Until both variables are set the form shows an error with the Zalo hotline
instead of pretending the lead was sent.
