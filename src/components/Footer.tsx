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
          
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <h4 className="font-serif text-sm font-medium text-stone-300 mb-1">Now Serving</h4>
              <p className="footer-tagline font-serif text-xs text-white">Portland & Vancouver</p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-medium text-stone-300 mb-1">Contact</h4>
              <a 
                href="mailto:management@thekeptkitchen.com" 
                className="font-serif text-xs text-white hover:text-warm-taupe transition-colors block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-stone-300">Kept Kitchen Co.</h3>
            <p className="footer-tagline font-serif text-sm text-white">Portland&apos;s Premier Private Chef Services</p>
          </div>
          
          <div className="space-y-1">
            <h4 className="font-serif text-base font-medium text-stone-300">Now Serving</h4>
            <p className="footer-tagline font-serif text-sm text-white">Portland, Vancouver, and surrounding areas.</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-serif text-base font-medium text-stone-300">Contact</h4>
            <div className="space-y-1">
              <a 
                href="mailto:management@thekeptkitchen.com" 
                className="font-serif text-sm text-white hover:text-warm-taupe transition-colors block"
              >
                Management@thekeptkitchen.com
              </a>
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