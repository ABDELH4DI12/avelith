# Avelith Studio

Avelith Studio is a Next.js App Router website. `app/page.jsx` composes the sections in `app/components/sections/`. Gallery cards live in `app/components/gallery/`, their content in `app/data/`, styles in `app/styles/`, and browser animations in `app/lib/animations.js`.

## Run locally

Use Node.js 20.9 or newer. If you use nvm, run `nvm use` first. Then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the production build, run `npm run build` and `npm run start`.

Gallery images and motion videos live in `public/assets/` as optimized local files. The six website concepts use original generated images in `public/assets/web-concepts/`, with source images in `design-assets/web-concepts/`. The hero and studio artwork use responsive versions from `public/assets/site/`, with source images and prompts in `design-assets/site/`. Each gallery loads its images shortly before it enters the viewport; motion videos load when their cards come into view. Google Fonts still load remotely. See [CREDITS.md](CREDITS.md) for visual sources. The public contact address is set once in `app/data/contact.js`.
# avelith
