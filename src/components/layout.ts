export function injectLayout() {
    // Navbar
    const navbar = document.createElement('nav')
    navbar.className = 'fixed top-0 w-full z-50 glass-strong px-6 py-4'
    navbar.innerHTML = `
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" class="flex items-center gap-3" aria-label="DevweaveX Home">
                <img src="/logo-devweavex.png" alt="DevweaveX logo" width="220" height="40" class="rounded-lg" />
            </a>
            <div class="hidden md:flex gap-6 items-center">
                <a href="/" class="hover:text-[#00D4FF] transition font-medium">Home</a>
                <a href="/pages/about.html" class="hover:text-[#00D4FF] transition font-medium">About</a>
                <a href="/pages/services.html" class="hover:text-[#00D4FF] transition font-medium">Services</a>
                <a href="/pages/blog.html" class="hover:text-[#00D4FF] transition font-medium">Blog</a>
                <a href="/pages/portfolio.html" class="hover:text-[#00D4FF] transition font-medium">Portfolio</a>
                <a href="/pages/contact.html" class="px-6 py-2 bg-gradient-to-r from-[#00D4FF] to-[#A78BFA] text-[#0A2540] rounded-full font-bold hover:shadow-lg hover:shadow-[#00D4FF]/50 transition">Get Started</a>
            </div>
            <button id="navToggle" aria-label="Open menu" class="hamburger md:hidden">
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>
        <div id="mobileMenu" class="md:hidden max-w-7xl mx-auto px-2 pt-2 hidden">
          <div class="glass rounded-2xl p-4 flex flex-col gap-2">
            <a href="/" class="block px-3 py-2 rounded-lg hover:bg-white/10">Home</a>
            <a href="/pages/about.html" class="block px-3 py-2 rounded-lg hover:bg-white/10">About</a>
            <a href="/pages/services.html" class="block px-3 py-2 rounded-lg hover:bg-white/10">Services</a>
            <a href="/pages/blog.html" class="block px-3 py-2 rounded-lg hover:bg-white/10">Blog</a>
            <a href="/pages/portfolio.html" class="block px-3 py-2 rounded-lg hover:bg-white/10">Portfolio</a>
            <a href="/pages/contact.html" class="block px-3 py-2 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#A78BFA] text-[#0A2540] font-bold">Get Started</a>
          </div>
        </div>
    `
    document.body.prepend(navbar)

    // Footer
    const footer = document.createElement('footer')
    footer.className = 'bg-[#A0B8C7] border-t border-[#0A2540]/10 py-12 mt-20'
    footer.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                     <a href="/" class="flex items-center gap-3" aria-label="DevweaveX Home">
                        <img src="/logo-devweavex.png" alt="DevweaveX logo" width="220" height="40" class="rounded-lg" />
                    </a>
                        </div>
                    <p class="text-[#0A2540]/70">Weaving Code into Digital Success</p>
                    <p class="text-[#0A2540]/60 text-sm mt-2">Karachi, Pakistan</p>
                </div>
                <div>
                    <h4 class="font-bold mb-4 text-[#1D3470]">Quick Links</h4>
                    <div class="space-y-2">
                        <a href="/" class="block text-[#0A2540]/70 hover:text-[#00D4FF] transition">Home</a>
                        <a href="/pages/about.html" class="block text-[#0A2540]/70 hover:text-[#00D4FF] transition">About</a>
                        <a href="/pages/services.html" class="block text-[#0A2540]/70 hover:text-[#00D4FF] transition">Services</a>
                        <a href="/pages/blog.html" class="block text-[#0A2540]/70 hover:text-[#00D4FF] transition">Blog</a>
                        <a href="/pages/portfolio.html" class="block text-[#0A2540]/70 hover:text-[#00D4FF] transition">Portfolio</a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4 text-[#1D3470]">Contact</h4>
                    <div class="space-y-2 text-[#0A2540]/70 text-sm">
                        <a href="mailto:devweavex@gmail.com" class="block hover:text-[#00D4FF] transition">devweavex@gmail.com</a>
                        <a href="tel:+923352811970" class="block hover:text-[#00D4FF] transition">+92 335 2811970</a>
                        <p>Karachi, Pakistan</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4 text-[#1D3470]">Follow Us</h4>
                    <div class="flex gap-3">
                        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/faizyabhussain/" target="_blank" class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A2540] transition">
                            <i data-lucide="linkedin" class="w-5 h-5"></i>
                        </a>
                        <a aria-label="GitHub" href="https://github.com/FaizyabHussain07" target="_blank" class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A2540] transition">
                            <i data-lucide="github" class="w-5 h-5"></i>
                        </a>
                        <a aria-label="Instagram" href="https://www.instagram.com/syedfaizyabhussain07/" target="_blank" class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A2540] transition">
                            <i data-lucide="instagram" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-center text-[#0A2540]/60 border-t border-[#0A2540]/10 pt-8">
                <p class="text-sm">&copy; 2025 DevweaveX. All rights reserved. Built with ❤️ by Syed Faizyab Hussain</p>
            </div>
        </div>
    `
    document.body.append(footer)

    // Mobile nav toggle logic
    const toggleBtn = document.getElementById('navToggle') as HTMLButtonElement | null
    const mobileMenu = document.getElementById('mobileMenu')
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = toggleBtn.classList.toggle('open')
        mobileMenu.classList.toggle('hidden', !isOpen)
      })
    }
}
