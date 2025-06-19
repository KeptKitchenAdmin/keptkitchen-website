import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-deep-charcoal text-bone py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Left Column - Company Info */}
          <div className="space-y-2">
            <h3 className="font-serif text-3xl text-bone">Kept Kitchen Co.</h3>
          </div>
          
          {/* Middle Column - Service Area */}
          <div className="space-y-2">
            <h4 className="font-sans text-xl font-medium text-bone">Now Serving</h4>
            <p className="font-sans text-bone/90">Portland, Vancouver, and surrounding areas.</p>
          </div>
          
          {/* Right Column - Contact */}
          <div className="space-y-3">
            <h4 className="font-sans text-xl font-medium text-bone">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:management@thekeptkitchen.com" 
                className="font-sans text-bone/90 hover:text-bone transition-colors block"
              >
                Management@thekeptkitchen.com
              </a>
              <Link 
                href="/contact" 
                className="font-sans text-bone/90 hover:text-bone transition-colors underline block"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-bone/20 mt-8 pt-6">
          <p className="text-bone/60 text-xs font-sans">&copy; 2025 Kept Kitchen LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}