import Lenis from 'lenis'
import { injectLayout } from './components/layout'
import { createIcons, icons } from 'lucide'

// Initialize after initial HTML paints to keep first render snappy
window.addEventListener('DOMContentLoaded', () => {
  // Inject shared layout (navbar + footer)
  injectLayout()

  // Simple fade-in on scroll (no GSAP needed)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

  // Initialize Lucide icons (replace <i data-lucide="..."> with SVGs)
  createIcons({ icons })

  // Smooth Scroll (lightweight) – start after content is visible
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // EmailJS autoresponse wiring (reads credentials from Vite env)
  const form = document.getElementById('contactForm') as HTMLFormElement | null
  const emailjs: any = (window as any).emailjs
  const EMAILJS_PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '') as string
  const EMAILJS_SERVICE_ID = (import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '') as string
  const EMAILJS_TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '') as string

  console.log('EmailJS env present', {
    hasPublic: !!EMAILJS_PUBLIC_KEY,
    hasService: !!EMAILJS_SERVICE_ID,
    hasTemplate: !!EMAILJS_TEMPLATE_ID,
  })

  try {
    if (emailjs && typeof emailjs.init === 'function' && EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      console.log('EmailJS initialized')
    } else {
      console.warn('EmailJS init skipped (missing library or public key)')
    }
  } catch (e) {
    console.error('EmailJS init error', e)
  }

  if (form && emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
    form.addEventListener('contact:submitted', (ev: Event) => {
      try {
        const custom = ev as CustomEvent
        const d = (custom.detail || {}) as Record<string, string>
        const params = {
          to_email: String(d.email || ''),
          from_name: String(d.name || 'DevWeaveX'),
          user_name: String(d.name || ''),
          user_email: String(d.email || ''),
          service: String(d.service || ''),
          budget: String(d.budget || ''),
          message: String(d.message || '')
        }
        if (params.to_email) {
          emailjs
            .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
            .then(() => console.log('EmailJS: autoresponse sent'))
            .catch((err: any) => console.error('EmailJS: send error', err))
        } else {
          console.warn('EmailJS: missing recipient email, skipping send')
        }
      } catch (_) {}
    })
  }
})

console.log('DevweaveX loaded')
