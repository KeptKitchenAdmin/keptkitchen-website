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

      {/* Section 1 - EXACT match to Homepage1.png layout */}
      <section className="relative min-h-screen h-[120vh] flex items-center justify-center">
        <Image
          src="/Homepage1.jpg"
          alt="Private Chef Services for Elevated Home Life"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 35%' }}
          priority
        />
        {/* Darkening overlay with blue tint */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />
        
        {/* Additional blue-tinted overlay */}
        <div className="absolute inset-0 bg-blue-900/15 z-[6]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="relative inline-block">
            {/* Very tight blur background behind main heading */}
            <div className="absolute inset-0 -inset-x-2 -inset-y-1 bg-black/5 backdrop-blur-[1px] rounded-lg" />
            <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight font-light px-2 py-1">
              Private Chef Services for<br />Elevated Home Life
            </h1>
          </div>
          <div className="relative inline-block">
            {/* Very subtle blurred background box with seamless edges */}
            <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-black/5 backdrop-blur-[1px] rounded-2xl" />
            <p className="relative text-lg md:text-xl text-white mb-8 font-serif font-bold leading-relaxed max-w-5xl mx-auto px-4 py-2 whitespace-nowrap">
              For families and professionals who value time, nourishment, and peace of mind —<br />
              we bring rhythm back to the dinner table.
            </p>
          </div>
          <Link href="/signup">
            <button className="bg-white/80 hover:bg-white/90 text-black font-serif font-medium py-2 px-8 rounded-full text-base transition-colors duration-300 backdrop-blur-sm">
              Sign Up for Services
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2 - EXACT match to Homepage2.png layout */}
      <section className="relative h-[100vh] flex items-center">
        <Image
          src="/Homepage2.jpg"
          alt="Your kitchen, kept to the highest standard"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 70%' }}
        />
        {/* Darkening overlay with blue tint */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />
        
        {/* Additional blue-tinted overlay */}
        <div className="absolute inset-0 bg-blue-900/15 z-[6]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 max-w-xl" style={{ transform: 'translateY(-50%) translateY(-32px)' }}>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight font-normal text-center">
              Your kitchen, kept to the<br />highest standard.
            </h2>
            <p className="text-base md:text-lg text-black mb-4 font-serif leading-relaxed text-left max-w-lg">
              We provide weekly chef services that give back your time, nourish your body, and support your home - bringing relief, not more to manage.
            </p>
            <p className="text-sm md:text-base text-black mb-8 font-serif leading-relaxed text-left max-w-lg">
              We tailor our service to your routines, your space, and your standards. From planning and shopping to cooking and cleanup, we handle the details so you can spend your time on other things.
            </p>
            <div className="flex justify-center">
              <Link href="/services">
                <button className="bg-white/80 hover:bg-white/90 text-black font-serif py-1.5 px-6 rounded-full text-sm transition-colors duration-300 backdrop-blur-sm">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}