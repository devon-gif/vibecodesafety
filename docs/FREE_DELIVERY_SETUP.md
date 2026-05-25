# Free / No Extra Cost Delivery Setup

Deprecated internal note: this file documents the earlier one-time launch
delivery flow. The current public product is VibeCode Safety Membership at
$6.99/month or $59/year. Use `docs/CHECKOUT_TODO.md` and
`docs/LAUNCH_CHECKLIST.md` for the active subscription launch flow.

Recommended launch flow for VibeCode Safety Kit v1 - zero additional tools required.

---

## 1. Create a dedicated Gmail

Create: **vibecodesafety@gmail.com**

Use this as the support and delivery identity for v1.

---

## 2. Create a Google Drive delivery folder

- Open Google Drive signed in as vibecodesafety@gmail.com.
- Create a folder named: `VibeCode-Safety-Kit-Delivery`

---

## 3. Use the final product ZIP

```
digital-product/final/VibeCode-Safety-Kit-v1-Launch-Edition.zip
```

Before upload, open the ZIP locally and confirm it contains
`QUICKSTART.md` at the root of the product folder.

---

## 4. Upload ZIP to Google Drive

- Upload `VibeCode-Safety-Kit-v1-Launch-Edition.zip` into the delivery folder.
- Right-click → Share → Change to **Anyone with the link → Viewer**.
- Copy the share link.
- Test the share link in an incognito window before launch.

---

## Direct Google Drive File Download

For direct download, use a file link, not a folder link.

Steps:

1. Upload `VibeCode-Safety-Kit-v1-Launch-Edition-FINAL.zip` as a single file to Google Drive.
2. Set sharing to anyone with the link can view.
3. Copy the file share link.
4. Extract the file id from:
   `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
5. Convert it to:
   `https://drive.google.com/uc?export=download&id=FILE_ID`
6. Add that to `.env.local`:
   `NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK=https://drive.google.com/uc?export=download&id=FILE_ID`

---

## Hidden Access Page

Use this as the Stripe success redirect:
`https://YOUR-VERCEL-URL/access/vcs-launch-edition-2026-k9p4`

This is not true security. It is obscurity-based launch delivery. True
protection requires server-side payment verification or a digital delivery
platform.

---

## 5. Add the download link to your environment

In `.env.local`:

```
NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK=https://drive.google.com/uc?export=download&id=FILE_ID
```

The hidden access page will automatically show a **Download the ZIP** button
when this variable is set.

---

## 6. Create Stripe Payment Link

1. Stripe Dashboard → Products → Create product.
2. Name: `VibeCode Safety Kit - Launch Edition`
3. Price: `$29.99` - **one-time** (not recurring).
4. Create Payment Link.
5. Set **After payment** → Redirect to:
   `https://yourdomain.com/access/vcs-launch-edition-2026-k9p4`
6. Copy the Payment Link URL.

Add it to `.env.local`:

```
NEXT_PUBLIC_CHECKOUT_LINK=https://buy.stripe.com/...
```

---

## 7. Enable Stripe email receipts

Stripe Dashboard → Settings → Emails:

- ✅ Enable **Successful payments** (sends receipt to customer).
- ✅ Enable **Successful payments** account notification (notifies you).

---

## 8. Create a Google Sheet buyer tracker

Create a sheet named: `VibeCode Safety Kit - Buyers`

Columns:

| Purchase Date | Customer Name | Customer Email | Stripe Payment ID | Access Sent? | Opted Into Updates? | Issue? | Notes |
|---|---|---|---|---|---|---|---|

After each Stripe notification email arrives, log the buyer manually and confirm they have the Google Drive link (it is included automatically via the hidden access page redirect).

---

## 9. Test the full purchase flow

1. Set Stripe to **test mode**.
2. Use a test card to complete a purchase.
3. Confirm you are redirected to `/access/vcs-launch-edition-2026-k9p4`.
4. Confirm the **Download the ZIP** button appears.
5. Click the button and confirm the direct ZIP download starts or Google
   shows its download confirmation.
6. Switch Stripe to **live mode** for production.

---

## ⚠️ Warning

This is low-cost and simple, but **not fully secure**. A Google Drive link can be forwarded or shared publicly. This is acceptable for v1 at $29.99.

**Upgrade later** to Gumroad, Lemon Squeezy, SendOwl, or custom Stripe webhook delivery if sales prove demand.

---

## Local dev

Run the dev server on port 3001:

```
pnpm run dev
```

Site: http://localhost:3001
