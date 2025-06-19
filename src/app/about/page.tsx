'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Full Screen Layout matching reference exactly */}
      <section className="relative min-h-screen bg-warm-taupe/20" style={{ backgroundImage: `url('/3.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-warm-taupe/40"></div>
        
        {/* Top Headlines */}
        <div className="relative z-10 pt-32 pb-16 px-16">
          <div className="bg-white shadow-2xl shadow-black/20 px-12 py-10 max-w-4xl">
            <h1 className="text-6xl font-serif text-espresso mb-6 leading-[1.1] tracking-[-0.02em] font-normal">
              Structure, Simplicity, and Seriously Good Food
            </h1>
            <h2 className="text-2xl font-serif text-espresso/70 font-light tracking-[0.02em]">
              The Details That Define Us
            </h2>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 grid grid-cols-2 gap-0 min-h-[calc(100vh-300px)]">
          
          {/* Left Column - Stacked Text Boxes */}
          <div className="px-16 space-y-8">
            
            {/* Box 1: Expertly matched */}
            <div className="bg-white shadow-xl shadow-black/15 px-8 py-8 border-l-2 border-clay">
              <h3 className="text-xl font-serif text-espresso mb-4 font-medium tracking-[-0.01em]">
                Expertly matched, thoroughly vetted.
              </h3>
              <p className="text-base text-espresso/80 leading-[1.7] font-light">
                Every Kept chef is hand-selected for their culinary skill, professionalism, and presence in the home. We work only with seasoned chefs, compensate them well, and create an environment where they&apos;re genuinely invested in the families they serve.
              </p>
            </div>

            {/* Box 2: Menus designed with care */}
            <div className="bg-white shadow-xl shadow-black/15 px-8 py-8 border-l-2 border-clay">
              <h3 className="text-xl font-serif text-espresso mb-4 font-medium tracking-[-0.01em]">
                Menus designed with care, built around you.
              </h3>
              <p className="text-base text-espresso/80 leading-[1.7] font-light">
                Each week, your chef creates a menu tailored to your preferences, health goals, and evolving feedback. We prioritize organic seasonal ingredients and nutrient-dense selections - sourcing from trusted local vendors whenever possible, and always with your household&apos;s wellbeing in mind. The result is food that feels personal, aligned, and deeply satisfying.
              </p>
            </div>

            {/* Box 3: Service shaped around real households */}
            <div className="bg-white shadow-xl shadow-black/15 px-8 py-8 border-l-2 border-clay">
              <h3 className="text-xl font-serif text-espresso mb-4 font-medium tracking-[-0.01em]">
                A service shaped around real households.
              </h3>
              <p className="text-base text-espresso/80 leading-[1.7] font-light">
                We serve high-performing homes of all kinds, from working parents to households with complex schedules. Whether it&apos;s meals your kids will actually eat, lunch ready to take with you, or dinner handled after a packed day, we tailor every detail to fit your rhythm.
              </p>
            </div>

            {/* Box 4: We handle everything */}
            <div className="bg-white shadow-xl shadow-black/15 px-8 py-8 border-l-2 border-clay">
              <h3 className="text-xl font-serif text-espresso mb-4 font-medium tracking-[-0.01em]">
                We handle everything, so you don&apos;t have to.
              </h3>
              <p className="text-base text-espresso/80 leading-[1.7] font-light">
                From planning and shopping to cooking, packaging, and cleanup, your chef manages the full process. Meals are neatly prepared and stocked in your fridge, ready when you are. No coordination, no stress, no work on your part.
              </p>
            </div>
            
          </div>

          {/* Right Column - Text overlays on the pottery background */}
          <div className="px-16 py-12 flex flex-col justify-center space-y-8">
            
            {/* Main Quote - Luxury style */}
            <div className="bg-white shadow-xl shadow-black/15 px-8 py-8 border-l-2 border-clay">
              <p className="text-2xl font-serif text-espresso leading-[1.4] font-light tracking-[-0.01em]">
                We replace food stress with consistent, nourishing meals, so home life feels easier, and you can show up where it matters.
              </p>
            </div>

            {/* Leadership Text - Luxury style */}
            <div className="bg-white shadow-xl shadow-black/15 px-8 py-8 border-l-2 border-clay">
              <p className="text-base text-espresso/80 leading-[1.7] font-light mb-6">
                Our team is led by founders with extensive backgrounds in nutrition consulting and culinary operations. That foundation shapes everything we do - from how we hire and train chefs to how we design meals and support long-term wellbeing.
              </p>
              <p className="text-base text-espresso/80 leading-[1.7] font-light">
                The result is food that&apos;s both deeply satisfying and designed to support long-term wellbeing.
              </p>
            </div>
            
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}