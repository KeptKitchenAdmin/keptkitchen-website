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
    <div className="min-h-screen">
      <Navigation />

      {/* Section 1 - EXACT match to Homepage1.png layout */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/Homepage1.jpg"
          alt="Private Chef Services for Elevated Home Life"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight font-light">
            Private Chef Services for<br />Elevated Home Life
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            For families and professionals who value time, nourishment, and peace of mind —<br />
            we bring rhythm back to the dinner table.
          </p>
          <Link href="/signup">
            <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-3 px-8 rounded-full text-base transition-colors duration-300">
              Sign Up for Services
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2 - EXACT match to Homepage2.png layout */}
      <section className="relative h-screen flex items-center">
        <Image
          src="/Homepage2.jpg"
          alt="Your kitchen, kept to the highest standard"
          fill
          className="object-cover"
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-12">
          <div className="max-w-lg ml-auto text-right">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight font-normal">
              Your kitchen, kept to the<br />highest standard.
            </h2>
            <p className="text-base md:text-lg text-black mb-4 font-semibold leading-relaxed">
              We provide weekly chef services that give back<br />
              your time, nourish your body, and support your<br />
              home - bringing relief, not more to manage.
            </p>
            <p className="text-sm md:text-base text-black mb-8 font-normal leading-relaxed">
              We tailor our service to your routines, your space, and your standards.<br />
              From planning and shopping to cooking and cleanup, we handle the<br />
              details so you can spend your time on other things.
            </p>
            <Link href="/services">
              <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full text-sm transition-colors duration-300">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3 - Exact match to NotesFromOurClients1.png with Homepage3.jpg background */}
      <section className="relative min-h-screen">
        <Image
          src="/Homepage3.jpg"
          alt="Notes from our clients"
          fill
          className="object-cover"
        />
        <div className="relative z-10 py-20 px-16">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-12 font-light">
            Notes from Our Clients
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <div className="bg-stone-100 p-6 text-left">
              <p className="text-black text-sm leading-relaxed mb-4 font-normal">
                &ldquo;I&apos;ve used local private chefs before, but Kept is the first company that really exceeded all expectations.&rdquo;
              </p>
              <p className="text-gray-700 text-xs font-normal">— Sarah H, Vancouver WA</p>
            </div>
            
            <div className="bg-stone-100 p-6 text-left">
              <p className="text-black text-sm leading-relaxed mb-4 font-normal">
                &ldquo;I used to dread meal planning, now i come home to food I actually can&apos;t wait to eat. It&apos;s so much less stressful to only have to plan my own breakfast now&rdquo;
              </p>
              <p className="text-gray-700 text-xs font-normal">— Nada G, North Hills</p>
            </div>
            
            <div className="bg-stone-100 p-6 text-left">
              <p className="text-black text-sm leading-relaxed mb-4 font-normal">
                &ldquo;With three kids and no time to cook, their kid food add-ons brought sooo much order, joy, and actual peace back to our evenings.&rdquo;
              </p>
              <p className="text-gray-700 text-xs font-normal">— Erin & Josh, Vancouver WA</p>
            </div>
            
            <div className="bg-stone-100 p-6 text-left">
              <p className="text-black text-sm leading-relaxed mb-4 font-normal">
                &ldquo;Honestly this has been the most high-value service i&apos;ve ever invested in. I can&apos;t even tell you how much easier it&apos;s made my life.&rdquo;
              </p>
              <p className="text-gray-700 text-xs font-normal">— James L, Beaverton</p>
            </div>
            
            <div className="bg-stone-100 p-6 text-left">
              <p className="text-black text-sm leading-relaxed mb-4 font-normal">
                &ldquo;I work long hours and value my privacy - my chef really understands how to get the job done without disrupting my routine.&rdquo;
              </p>
              <p className="text-gray-700 text-xs font-normal">— Anonymous, Vancouver WA</p>
            </div>
            
            <div className="bg-stone-100 p-6 text-left">
              <p className="text-black text-sm leading-relaxed mb-4 font-normal">
                &ldquo;I&apos;ve tried other private chefs in the past, but none have delivered the same level of experience, flavor, and reliability I get with Kept. The difference in quality is obvious.&rdquo;
              </p>
              <p className="text-gray-700 text-xs font-normal">— Avery L, Northeast Portland</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - EXACT Footer match to NotesFromOurClients2 + Footer.png */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-16">
          <div className="grid grid-cols-3 gap-16 text-left">
            
            {/* Column 1 */}
            <div>
              <h4 className="text-white font-serif text-lg mb-2 font-normal">Kept Kitchen Co.</h4>
              <p className="text-gray-300 text-sm font-light">Kept Kitchen LLC.</p>
            </div>
            
            {/* Column 2 */}
            <div>
              <h4 className="text-white text-sm font-normal mb-2">Now Serving</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Portland, Vancouver, and<br />
                surrounding areas
              </p>
            </div>
            
            {/* Column 3 */}
            <div>
              <h4 className="text-white text-sm font-normal mb-2">Contact</h4>
              <p className="text-gray-300 text-sm mb-1 font-light">Management@thekeptkitchen.com</p>
              <Link href="/contact" className="text-gray-300 text-sm underline hover:text-white font-light">
                Contact Us
              </Link>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  )
}