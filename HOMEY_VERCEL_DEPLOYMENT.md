# HOMEY Vercel Deployment Notes

This is the Next.js version of the HOMEY B2B website for Vercel deployment.

## Core Pages

- `/` - HOMEY homepage
- `/products` - product category page
- `/products/p35-pu-sealant` - P35 product detail page
- `/become-a-distributor` - distributor cooperation page
- `/blog` - technical article listing page
- `/contact` - contact page with OpenStreetMap embeds
- `/quote` - inquiry form page
- `/thank-you` - form submission success page

## Domain

Production domain:

```text
https://www.siliconesealant.shop
```

The sitemap and robots files use this domain.

## Inquiry Email

Inquiry forms submit to:

```text
2536708496@qq.com
```

The forms use FormSubmit. The first submission may require email confirmation before future inquiries are delivered.

## Vercel

Recommended project settings:

```text
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
```

After uploading these files to GitHub, Vercel should automatically redeploy the project.
