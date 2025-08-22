'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function DraftHome() {
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
    <div className="min-h-screen overflow-x-hidden">
      <img src='/images/ogmessage.jpg?v=2' alt='Kept Kitchen preview image' style={{width:'1px', height:'1px', opacity:0, position:'absolute', top:'0', left:'0', zIndex:'-1', pointerEvents:'none'}} />
      <Navigation />

      {/* DRAFT NOTICE */}
      <div className="fixed top-20 left-4 z-50 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
        🚧 DRAFT VERSION - NOT LIVE
      </div>

      {/* Section 1 - EXACT match to Homepage1.png layout */}
      <section className="relative h-[65vh] md:min-h-screen md:h-[120vh] flex items-center justify-center">
        <Image
          src="/Homepage1.jpg"
          alt="Private chef preparing handmade noodles for in-home dining in Portland"
          fill
          className="object-cover md:object-[50%_35%] object-[50%_10%]"
          priority
        />
        {/* Darkening overlay with blue tint */}
        <div className="absolute inset-0 bg-black/70 z-[5]" />
        
        {/* Additional blue-tinted overlay */}
        <div className="absolute inset-0 bg-blue-900/20 z-[6]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Single cohesive content container */}
          <div className="relative bg-black/5 backdrop-blur-[2px] rounded-3xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 border border-white/5">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-6 sm:mb-8 leading-tight font-light">
              Private Chef Services for<br />Elevated Home Life
            </h1>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 max-w-4xl mx-auto">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-serif leading-relaxed" style={{ fontWeight: '300', letterSpacing: '0.02em' }}>
                In-home culinary excellence for families, executives, and food lovers.
              </h2>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-serif leading-relaxed" style={{ fontWeight: '300', letterSpacing: '0.02em' }}>
                Experienced chefs, locally sourced ingredients, and elevated menus tailored to your home.
              </h2>
            </div>
            
            <Link href="/signup">
              <button className="bg-white/90 hover:bg-white text-black font-serif py-3 px-8 rounded-full text-base font-medium transition-colors duration-300 shadow-lg">
                Sign Up for Services
              </button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Section 2 - EXACT match to Homepage2.png layout */}
      <section className="relative h-[52vh] md:h-[100vh] flex items-center">
        <Image
          src="/Homepage2.jpg"
          alt="Elegant bowl plating by luxury in-home chef for Portland families and executives"
          fill
          className="object-cover md:object-[50%_70%] object-[50%_55%]"
        />
        {/* Darkening overlay with blue tint */}
        <div className="absolute inset-0 bg-black/70 z-[5]" />
        
        {/* Additional blue-tinted overlay */}
        <div className="absolute inset-0 bg-blue-900/20 z-[6]" />
        
        <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-end px-6">
          <div className="w-full max-w-xl md:mr-12 text-center" style={{ transform: 'translateY(-20px)' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight font-normal">
              Your kitchen, kept to the<br />highest standard.
            </h1>
            <h2 className="text-base md:text-lg text-white mb-8 font-serif leading-relaxed max-w-lg mx-auto">
              Every menu is shaped by the season and sourced with intention; meals are prepared with care, precision, and an understanding of what it feels like to be nourished.
            </h2>
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