'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

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

  const testimonials = [
    {
      text: "I&apos;ve used local private chefs before, but Kept is the first company that really exceeded all expectations.",
      name: "Sarah M.",
      title: "Tech Executive"
    },
    {
      text: "With three kids and no time to cook, their kid food add-ons brought sooo much order, joy, and actual peace back to our evenings.",
      name: "Jennifer K.",
      title: "Working Mother"
    },
    {
      text: "I used to dread meal planning, now I come home to food I actually can&apos;t wait to eat. It&apos;s so much less stressful to only have to plan my own breakfast now.",
      name: "David L.",
      title: "Investment Banker"
    },
    {
      text: "Honestly this has been the most high-value service I&apos;ve ever invested in. I can&apos;t even tell you how much easier it&apos;s made my life.",
      name: "Amanda R.",
      title: "CEO"
    },
    {
      text: "Honestly all the food I&apos;ve tried is just amazing. Having a private chef sounds like a luxury, but when you compare this to how much money I&apos;d otherwise have spent eating out and ordering Uber eats, it&apos;s honestly cheaper and actually nutritious.",
      name: "Michael T.",
      title: "Entrepreneur"
    },
    {
      text: "I work long hours and value my privacy - my chef really understands how to get the job done without disrupting my routine.",
      name: "Patricia H.",
      title: "Private Equity Partner"
    }
  ]

  return (
    <div className="min-h-screen bg-bone">
      <Navigation />

      {/* Hero Section - Exact match to HomePage1.png */}
      <section className="relative h-screen">
        <Image
          src="/HomePage1.png"
          alt="Private Chef Services for Elevated Home Life"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Second Section - Exact match to Homepage2.png */}
      <section className="relative h-screen">
        <Image
          src="/Homepage2.png"
          alt="Your kitchen, kept to the highest standard"
          fill
          className="object-cover"
        />
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-bone">
        <div className="container mx-auto">
          <div className="text-center mb-16 scroll-fade-in">
            <h3 className="text-3xl md:text-4xl font-serif text-espresso">
              Notes from our clients:
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-500 scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-espresso font-light text-lg leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}