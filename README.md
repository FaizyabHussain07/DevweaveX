# DevweaveX - Professional Software House Website

![DevweaveX](https://img.shields.io/badge/DevweaveX-2025-00D4FF?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)

A complete, ultra-professional, multi-page software house website for **DevweaveX** built with modern web technologies.

## 🚀 Features

- ✨ **5 Complete Pages**: Home, About, Services, Portfolio, Contact
- 🎨 **Premium Dark Design**: Glassmorphism, neon accents, smooth animations
- 📱 **Fully Responsive**: Mobile-first design, works on all devices
- ⚡ **Lightning Fast**: Optimized with Vite, Tailwind CSS
- 🔍 **SEO Ready**: Meta tags, Open Graph, semantic HTML
- 🌐 **Real Projects**: 6 live project showcases with iframes
- 💬 **WhatsApp Integration**: Floating contact button
- 🎯 **Professional Layout**: Navbar, Footer, consistent branding

## 📁 Project Structure

```
devweavex-website/
├── pages/              # All HTML pages
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   └── contact.html
├── src/
│   ├── components/
│   │   └── layout.ts   # Navbar & Footer injector
│   ├── main.ts         # Entry point
│   └── style.css       # Tailwind + custom styles
├── public/             # Static assets
├── index.html          # Home page
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json
```

## 🛠️ Tech Stack

- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.9
- **Animations**: GSAP, Lenis (smooth scroll)
- **Icons**: Lucide
- **Carousel**: Swiper

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Pages Overview

### 1. **Home** (`/`)
- Hero section with stats (50+ Projects, 6+ Case Studies, 24/7 Support)
- Services preview grid (6 services)
- Featured projects (3 showcases)
- Client testimonials
- CTA section

### 2. **About** (`/pages/about.html`)
- Founder profile (Syed Faizyab Hussain)
- Mission & Vision
- Tech stack marquee
- Journey timeline
- Contact information

### 3. **Services** (`/pages/services.html`)
- 6 detailed service offerings:
  - Custom Website Development
  - Web & Mobile Apps
  - AI-Powered Tools & SaaS
  - No-Code / Low-Code Solutions
  - UI/UX Design & Branding
  - Full-Stack Digital Products
- Process workflow
- Pricing information

### 4. **Portfolio** (`/pages/portfolio.html`)
- 6 real projects with live iframes:
  - README Builder AI
  - MyPage Bio Link
  - Wibba Web Builder
  - Quiz Builder AI
  - Faizyab Al-Quran
  - Modern College Website
- Tech stack badges
- Live demo & GitHub links

### 5. **Contact** (`/pages/contact.html`)
- Contact form
- Email, Phone, Location
- Social media links
- Business hours
- Google Maps embed

## 🎨 Design System

### Colors
- **Background**: `#0A2540` (Deep Blue)
- **Neon Cyan**: `#00D4FF`
- **Purple**: `#A78BFA`

### Typography
- **Body**: Inter (Google Fonts)
- **Headings**: Outfit (Google Fonts)

### Components
- **Glass Effect**: `backdrop-blur-lg` with transparency
- **Neon Text**: Custom text-shadow effects
- **Hover Animations**: Scale, color transitions

## 📞 Contact Information

- **Email**: devweavex@gmail.com
- **Phone/WhatsApp**: +92 335 2811970
- **Location**: Karachi, Pakistan
- **LinkedIn**: [Syed Faizyab Hussain](https://www.linkedin.com/in/faizyabhussain/)
- **GitHub**: [FaizyabHussain07](https://github.com/FaizyabHussain07)
- **Instagram**: [@syedfaizyabhussain07](https://www.instagram.com/syedfaizyabhussain07/)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist/ folder
```

### Manual
1. Run `npm run build`
2. Upload `dist/` folder to your hosting
3. Configure server to serve `index.html` for SPA routing

## 📝 License

© 2025 DevweaveX. All rights reserved.

Built with ❤️ by **Syed Faizyab Hussain**

---

**Ready to deploy to devweavex.com** 🚀
