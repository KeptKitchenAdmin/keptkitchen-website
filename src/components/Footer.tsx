import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-deep-charcoal text-bone py-4 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Left Column - Company Info */}
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-stone-300">Kept Kitchen Co.</h3>
          </div>
          
          {/* Middle Column - Service Area */}
          <div className="space-y-1">
            <h4 className="font-serif text-base font-medium text-stone-300">Now Serving</h4>
            <p className="font-serif text-sm text-white">Portland, Vancouver, and surrounding areas.</p>
          </div>
          
          {/* Right Column - Contact */}
          <div className="space-y-2">
            <h4 className="font-serif text-base font-medium text-stone-300">Contact</h4>
            <div className="space-y-1">
              <a 
                href="mailto:management@thekeptkitchen.com" 
                className="font-serif text-sm text-white hover:text-warm-taupe transition-colors block"
              >
                Management@thekeptkitchen.com
              </a>
              <Link 
                href="/contact" 
                className="font-serif text-sm text-white hover:text-warm-taupe transition-colors underline block"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-bone/20 mt-3 pt-3">
          <p className="text-bone/60 text-xs font-serif">&copy; 2025 Kept Kitchen LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}