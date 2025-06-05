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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt="Premium culinary experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 md:p-20 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-espresso mb-8 leading-[1.15] tracking-tight">
                Private chef services for elevated home life
              </h1>
              <p className="text-xl md:text-2xl text-espresso mb-12 font-light leading-relaxed">
                For families and professionals who value time, nourishment, and peace of mind – we bring rhythm back to the dinner table.
              </p>
              <Link href="/signup">
                <button className="btn-primary text-lg px-10 py-4">SIGN UP FOR SERVICES</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-ivory to-bone">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-8 leading-tight">
              Your Kitchen, kept to the highest standard
            </h2>
            <p className="text-xl text-espresso mb-8 font-light leading-relaxed">
              We provide weekly chef services that give back your time, nourish your body, and support your home – bringing relief, not more to manage.
            </p>
            <p className="text-lg text-espresso mb-12 font-light max-w-3xl mx-auto">
              We tailor our service to your routines, your space, and your standards. From planning and shopping to cooking and cleanup, we handle the details so you can spend your time on other things.
            </p>
            <Link href="/services">
              <button className="btn-secondary">EXPLORE OUR SERVICES</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-deep-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-muted-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h3 className="text-3xl md:text-4xl font-serif text-bone">
              Notes from our clients:
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-muted-gold text-4xl mb-4">{index + 1}.</div>
                <p className="text-bone/90 font-light text-lg leading-relaxed mb-6">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-bone to-ivory">
        <div className="container mx-auto px-6 text-center scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-6">
            Ready to reclaim your time?
          </h2>
          <p className="text-xl text-espresso mb-10 max-w-2xl mx-auto font-light">
            Join families who&apos;ve discovered the peace of a professionally kept kitchen.
          </p>
          <Link href="/signup">
            <button className="btn-primary">GET STARTED TODAY</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-espresso text-bone">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Kept Kitchen Co.</h3>
              <p className="text-warm-taupe font-light">
                Premium private chef services for discerning families and professionals.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warm-taupe font-light">
                <li><Link href="/about" className="hover:text-bone transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-bone transition-colors">Services</Link></li>
                <li><Link href="/signup" className="hover:text-bone transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-warm-taupe font-light">
                <li><Link href="/faq" className="hover:text-bone transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-bone transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-warm-taupe font-light">
                <li>hello@keptkitchen.co</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-taupe/30 pt-8 text-center text-warm-taupe">
            <p>&copy; 2024 Kept Kitchen Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}