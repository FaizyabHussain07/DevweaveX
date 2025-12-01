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
})

console.log('DevweaveX loaded')
