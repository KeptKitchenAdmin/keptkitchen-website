'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen relative">
      <Image
        src="/Homepage3 - notes from our clients.jpg"
        alt="FAQ Background"
        fill
        className="object-cover"
        style={{ objectPosition: '40% 30%' }}
        priority
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10">
        <Navigation />

        <section className="relative pt-32 pb-8 px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/90 font-serif font-light">
                Still wondering how it works? We&apos;ve got you
              </p>
              {/* Simple test */}
              <button 
                onClick={() => alert('JavaScript works!')}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Test JavaScript
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}