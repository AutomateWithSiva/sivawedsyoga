# Wedding Reception Invitation

A premium, modern, responsive wedding reception invitation website built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- Mobile-first, fully responsive
- Vercel-ready

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout, fonts, SEO meta
│   ├── page.tsx        # Home page (all sections)
│   ├── globals.css     # Global styles
│   └── icon.tsx        # Favicon placeholder (dynamic)
├── components/
│   ├── Hero.tsx        # Full-screen hero with animated background
│   ├── EventDetails.tsx # Date, time, venue cards + Add to Calendar
│   ├── Countdown.tsx   # Live countdown to event
│   ├── Gallery.tsx     # Image grid + lightbox
│   ├── RSVP.tsx        # RSVP form with validation
│   ├── MapSection.tsx  # Google Maps embed
│   ├── Footer.tsx      # Thank you / footer
│   └── index.ts        # Re-exports
├── lib/
│   └── constants.ts    # Event date, venue, calendar link
└── public/             # Static assets (add favicon.ico here if preferred)
```

## Commands to Run Locally

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Lint
npm run lint
```

## Deployment on Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI** (one-time):
   ```bash
   npm i -g vercel
   ```

2. **Log in** (one-time):
   ```bash
   vercel login
   ```

3. **Deploy** from the project root:
   ```bash
   vercel
   ```
   - Follow prompts (link to existing project or create new one).
   - For production: `vercel --prod`

### Option 2: Deploy via GitHub + Vercel

1. Push this project to a **GitHub** repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. **Import** your GitHub repo.
4. Leave **Framework Preset** as **Next.js**; root directory as `.`
5. Click **Deploy**. Vercel will run `npm run build` and deploy.

### Option 3: Deploy with Vercel Git integration

1. In Vercel dashboard: **New Project** → Import Git repository.
2. Connect your repo (GitHub/GitLab/Bitbucket).
3. Build command: `npm run build` (default).
4. Output directory: `.next` (default for Next.js).
5. Deploy. Future pushes to the main branch will auto-deploy.

### After deployment

- Your site will have a URL like `https://your-project.vercel.app`.
- Add a **custom domain** in Vercel: Project → Settings → Domains.
- **Environment variables**: if you add any later, set them in Project → Settings → Environment Variables.

## Customization

- **Event & venue**: Edit `lib/constants.ts` (date, time, venue name, address, calendar link).
- **Gallery**: Replace placeholder image URLs in `components/Gallery.tsx` with your own (or use local images in `public/` and `next/image`).
- **Map embed**: For the best map embed, go to [Google Maps](https://www.google.com/maps), search for **Sowbhagya Mahal**, click **Share → Embed a map**, copy the iframe `src`, and set it in `components/MapSection.tsx` as `MAP_EMBED_URL`.
- **Favicon**: Replace `app/icon.tsx` with a static `app/favicon.ico`, or keep the dynamic icon and change the “W”/styling in `icon.tsx`.
- **SEO / Open Graph**: Update `metadata` and `openGraph` in `app/layout.tsx`. Add an image for social sharing: `openGraph: { images: ['/og-image.jpg'] }` and place `og-image.jpg` in `public/`.

## Features

- **Hero**: Full-screen hero, soft gold/cream gradient, “You’re Invited”, date/time, scroll indicator.
- **Event details**: Date, time, venue cards; Add to Calendar (Google); Open in Maps link.
- **Countdown**: Live countdown to March 6, 2026, 6:00 PM IST.
- **Gallery**: Grid of placeholder images; click to open lightbox (replace with your photos).
- **RSVP**: Form (name, phone, number of guests, message) with frontend validation; success message on submit (no backend).
- **Map**: Google Maps embed and “Open in Google Maps” link.
- **Footer**: Thank you message and minimal layout.
- **Design**: Gold + cream + soft pastels; Playfair Display / Cormorant headings; glassmorphism-style cards; smooth scroll and Framer Motion animations.

## License

Private / personal use.
