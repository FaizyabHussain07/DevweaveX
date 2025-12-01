export function injectLayout() {
    // Navbar
    const navbar = document.createElement('nav')
    navbar.className = 'fixed top-0 w-full z-50 glass-strong px-6 py-4'
    navbar.innerHTML = `
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gradient-to-br from-[#00D4FF] to-[#A78BFA] rounded-lg flex items-center justify-center">
                    <span class="text-[#0A2540] font-black text-xl">DX</span>
                </div>
                <span class="text-2xl font-bold font-heading gradient-text">DevweaveX</span>
            </a>
            <div class="hidden md:flex gap-6 items-center">
                <a href="/" class="hover:text-[#00D4FF] transition font-medium">Home</a>
                <a href="/pages/about.html" class="hover:text-[#00D4FF] transition font-medium">About</a>
                <a href="/pages/services.html" class="hover:text-[#00D4FF] transition font-medium">Services</a>
                <a href="/pages/portfolio.html" class="hover:text-[#00D4FF] transition font-medium">Portfolio</a>
                <a href="/pages/contact.html" class="px-6 py-2 bg-gradient-to-r from-[#00D4FF] to-[#A78BFA] text-[#0A2540] rounded-full font-bold hover:shadow-lg hover:shadow-[#00D4FF]/50 transition">Get Started</a>
            </div>
        </div>
    `
    document.body.prepend(navbar)

    // Footer
    const footer = document.createElement('footer')
    footer.className = 'bg-[#0A2540]/80 border-t border-white/10 py-12 mt-20'
    footer.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-gradient-to-br from-[#00D4FF] to-[#A78BFA] rounded-lg flex items-center justify-center">
                            <span class="text-[#0A2540] font-black text-xl">DX</span>
                        </div>
                        <h3 class="text-2xl font-bold gradient-text">DevweaveX</h3>
                    </div>
                    <p class="text-gray-400">Weaving Code into Digital Success</p>
                    <p class="text-gray-500 text-sm mt-2">Karachi, Pakistan</p>
                </div>
                <div>
                    <h4 class="font-bold mb-4 text-[#00D4FF]">Quick Links</h4>
                    <div class="space-y-2">
                        <a href="/" class="block text-gray-400 hover:text-[#00D4FF] transition">Home</a>
                        <a href="/pages/about.html" class="block text-gray-400 hover:text-[#00D4FF] transition">About</a>
                        <a href="/pages/services.html" class="block text-gray-400 hover:text-[#00D4FF] transition">Services</a>
                        <a href="/pages/portfolio.html" class="block text-gray-400 hover:text-[#00D4FF] transition">Portfolio</a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4 text-[#A78BFA]">Contact</h4>
                    <div class="space-y-2 text-gray-400 text-sm">
                        <a href="mailto:devweavex@gmail.com" class="block hover:text-[#00D4FF] transition">devweavex@gmail.com</a>
                        <a href="tel:+923352811970" class="block hover:text-[#00D4FF] transition">+92 335 2811970</a>
                        <p>Karachi, Pakistan</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4 text-[#00D4FF]">Follow Us</h4>
                    <div class="flex gap-3">
                        <a href="https://www.linkedin.com/in/faizyabhussain/" target="_blank" class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A2540] transition text-sm font-bold">in</a>
                        <a href="https://github.com/FaizyabHussain07" target="_blank" class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A2540] transition text-sm font-bold">gh</a>
                        <a href="https://www.instagram.com/syedfaizyabhussain07/" target="_blank" class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00D4FF] hover:text-[#0A2540] transition text-sm font-bold">ig</a>
                    </div>
                </div>
            </div>
            <div class="text-center text-gray-400 border-t border-white/10 pt-8">
                <p class="text-sm">&copy; 2025 DevweaveX. All rights reserved. Built with ❤️ by Syed Faizyab Hussain</p>
            </div>
        </div>
    `
    document.body.append(footer)
}
