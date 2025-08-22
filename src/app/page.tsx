'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.scroll-fade-in')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Mobile Section 1 - Hero with image */}
      <section className="relative h-[80vh] flex items-center justify-center md:hidden">
        <Image
          src="/Homepage1.jpg"
          alt="Private Chef Services for Elevated Home Life"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 35%' }}
          priority
        />
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }} />
        
        <div className="relative z-20 text-center px-6 max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif text-white mb-4 leading-tight font-light">
            Private Chef Services for<br />Elevated home life
          </h1>
          <p className="text-base text-white mb-6 font-serif leading-relaxed">
            In-Home Culinary Excellence for Families,<br />Executives, and Food Lovers
          </p>
          <Link href="/services">
            <button className="bg-white/90 hover:bg-white text-black font-serif py-2 px-6 rounded-full text-sm font-medium transition-colors duration-300 shadow-lg">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* Desktop Section 1 - Hero with image */}
      <section className="relative min-h-screen h-[120vh] flex items-center justify-center hidden md:flex">
        <Image
          src="/Homepage1.jpg"
          alt="Private Chef Services for Elevated Home Life"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 35%' }}
          priority
        />
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }} />
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight font-light">
            Private Chef Services for<br />Elevated home life
          </h1>
          <p className="text-xl md:text-3xl text-white mb-8 font-serif leading-relaxed">
            In-Home Culinary Excellence for Families,<br />Executives, and Food Lovers
          </p>
          <Link href="/services">
            <button className="bg-white/90 hover:bg-white text-black font-serif font-medium py-3 px-8 rounded-full text-base transition-colors duration-300 shadow-lg">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* Mobile Section 2 - Gray background, no image */}
      <section className="py-16 px-6 md:hidden" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-serif text-gray-800 mb-6 leading-tight">
            Experienced Chefs, Locally Sourced Ingredients, and Elevated Menus Tailored to Your Home
          </h2>
          <p className="text-base text-gray-700 mb-8 font-serif leading-relaxed">
            We provide weekly chef services that give back your time, nourish your body, and support your home, bringing relief, not more to manage. We tailor our services to your routines, your space, and your standards. From planning and shopping to cooking and cleanup, we handle every detail so you can spend your time elsewhere.
          </p>
          <Link href="/services">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-serif py-3 px-6 rounded-full text-sm font-medium transition-colors duration-300">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* Desktop Section 2 - Gray background, no image */}
      <section className="py-20 px-6 hidden md:block" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8 leading-tight">
            Experienced Chefs, Locally Sourced Ingredients, and Elevated Menus Tailored to Your Home
          </h2>
          <p className="text-lg text-gray-700 mb-10 font-serif leading-relaxed max-w-3xl mx-auto">
            We provide weekly chef services that give back your time, nourish your body, and support your home, bringing relief, not more to manage. We tailor our services to your routines, your space, and your standards. From planning and shopping to cooking and cleanup, we handle every detail so you can spend your time elsewhere.
          </p>
          <Link href="/services">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-serif py-3 px-8 rounded-full text-base font-medium transition-colors duration-300">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}