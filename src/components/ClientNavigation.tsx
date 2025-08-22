'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ClientNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/signup', label: 'Sign Up' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ]

  const needsLightText = true

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'shadow-lg' 
        : ''
    }`} style={{
      backgroundColor: 'rgba(43, 43, 43, 0.80)'
    }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-2xl font-serif font-medium tracking-wide transition-colors -ml-2 ${
            needsLightText ? 'text-white hover:text-bone' : 'text-espresso hover:text-clay'
          }`}>
            Kept Kitchen Co.
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-serif tracking-[0.12em] uppercase transition-all duration-300 pb-1 ${
                  pathname === item.href
                    ? needsLightText ? 'text-bone border-b-2 border-bone' : 'text-clay border-b-2 border-clay'
                    : needsLightText ? 'text-white hover:text-bone hover:border-b-2 hover:border-bone/30' : 'text-espresso hover:text-clay hover:border-b-2 hover:border-clay/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              needsLightText ? 'text-white hover:text-bone' : 'text-espresso hover:text-clay'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M3 12H21M3 6H21M3 18H21" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-warm-taupe/20 pt-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-serif tracking-wider uppercase ${
                    pathname === item.href
                      ? needsLightText ? 'text-bone' : 'text-clay'
                      : needsLightText ? 'text-white hover:text-bone' : 'text-espresso hover:text-clay'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}