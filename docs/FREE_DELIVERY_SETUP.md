# Free / No Extra Cost Delivery Setup

Recommended launch flow for VibeCode Safety Kit v1 — zero additional tools required.

---

## 1. Create a dedicated Gmail

Create: **vibecodesafety@gmail.com**

Use this as the support and delivery identity for v1.

---

## 2. Create a Google Drive delivery folder

- Open Google Drive signed in as vibecodesafety@gmail.com.
- Create a folder named: `VibeCode-Safety-Kit-Delivery`

---

## 3. Zip the product folder

```
zip -r VibeCode-Safety-Kit-v1.zip digital-product/VibeCode-Safety-Kit-v1/
```

---

## 4. Upload ZIP to Google Drive

- Upload `VibeCode-Safety-Kit-v1.zip` into the delivery folder.
- Right-click → Share → Change to **Anyone with the link → Viewer**.
- Copy the share link.

---

## 5. Add the download link to your environment

In `.env.local`:

```
NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK=https://drive.google.com/...
```

The `/success` page will automatically show a **Download VibeCode Safety Kit** button when this variable is set.

---

## 6. Create Stripe Payment Link

1. Stripe Dashboard → Products → Create product.
2. Name: `VibeCode Safety Kit — Launch Edition`
3. Price: `$29.99` — **one-time** (not recurring).
4. Create Payment Link.
5. Set **After payment** → Redirect to: `https://yourdomain.com/success`
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

Create a sheet named: `VibeCode Safety Kit — Buyers`

Columns:

| Purchase Date | Customer Name | Customer Email | Stripe Payment ID | Access Sent? | Opted Into Updates? | Issue? | Notes |
|---|---|---|---|---|---|---|---|

After each Stripe notification email arrives, log the buyer manually and confirm they have the Google Drive link (it is included automatically via the /success redirect).

---

## 9. Test the full purchase flow

1. Set Stripe to **test mode**.
2. Use a test card to complete a purchase.
3. Confirm you are redirected to `/success`.
4. Confirm the **Download VibeCode Safety Kit** button appears.
5. Click the button and confirm the ZIP downloads in an incognito window.
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
