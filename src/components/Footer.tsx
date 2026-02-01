import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full text-bone py-6 px-4 md:py-4 md:pl-8 md:pr-4" style={{ backgroundColor: '#2B2B2B' }}>
      <div className="w-full">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <div className="text-center">
            <h3 className="font-serif text-xl text-stone-300 mb-1">Kept Kitchen Co.</h3>
            <p className="footer-tagline font-serif text-xs text-white mb-3">Portland&apos;s Premier Private Chef Services</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <h4 className="font-serif text-sm font-medium text-stone-300 mb-1">Now Serving</h4>
              <p className="footer-tagline font-serif text-xs text-white">Portland & Vancouver</p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-medium text-stone-300 mb-1">Contact</h4>
              <a 
                href="mailto:management@thekeptkitchen.com" 
                className="font-serif text-xs text-white hover:text-stone-300 transition-colors block"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-serif text-sm font-medium text-stone-300 mb-2">Explore</h4>
            <div className="font-serif text-xs text-white leading-relaxed">
              <div>
                <Link href="/services" className="hover:text-stone-300 transition-colors">Services</Link>
                <span className="mx-1">·</span>
                <Link href="/gallery" className="hover:text-stone-300 transition-colors">Gallery</Link>
                <span className="mx-1">·</span>
                <Link href="/sample-menus" className="hover:text-stone-300 transition-colors">Sample Menus</Link>
                <span className="mx-1">·</span>
                <Link href="/faq" className="hover:text-stone-300 transition-colors">FAQ</Link>
              </div>
              <div className="mt-1">
                <Link href="/how-it-works" className="hover:text-stone-300 transition-colors">How It Works</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-stone-300 mb-1">Kept Kitchen Co.</h3>
            <p className="footer-tagline font-serif text-sm text-white">Portland&apos;s Premier Private Chef Services</p>
          </div>
          
          <div className="flex flex-col">
            <div className="h-8 flex items-end">
              <h4 className="font-serif text-base font-medium text-stone-300">Now Serving</h4>
            </div>
            <p className="footer-tagline font-serif text-sm text-white mt-1">Portland, Vancouver, and surrounding areas.</p>
          </div>
          
          <div className="flex flex-col">
            <div className="h-8 flex items-end">
              <h4 className="font-serif text-base font-medium text-stone-300">Contact</h4>
            </div>
            <a 
              href="mailto:management@thekeptkitchen.com" 
              className="font-serif text-sm text-white hover:text-stone-300 transition-colors block mt-1"
            >
              Management@thekeptkitchen.com
            </a>
          </div>
          
          <div className="flex flex-col">
            <div className="h-8 flex items-end">
              <h4 className="font-serif text-base font-medium text-stone-300">Explore</h4>
            </div>
            <div className="font-serif text-sm text-white leading-relaxed mt-1">
              <div>
                <Link href="/services" className="hover:text-stone-300 transition-colors">Services</Link>
                <span className="mx-1">·</span>
                <Link href="/gallery" className="hover:text-stone-300 transition-colors">Gallery</Link>
                <span className="mx-1">·</span>
                <Link href="/sample-menus" className="hover:text-stone-300 transition-colors">Sample Menus</Link>
                <span className="mx-1">·</span>
                <Link href="/faq" className="hover:text-stone-300 transition-colors">FAQ</Link>
              </div>
              <div className="mt-1">
                <Link href="/how-it-works" className="hover:text-stone-300 transition-colors">How It Works</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-bone/20 mt-4 pt-3 md:mt-3">
          <p className="text-bone/60 text-xs font-serif text-center md:text-left">&copy; 2025 Kept Kitchen Co. LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}