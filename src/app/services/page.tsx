'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

    const elements = document.querySelectorAll('.')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      title: 'Submit Your Intake Form',
      description: 'Tell us about your household, food preferences, dietary needs, and schedule, so we can match you with the right chef.'
    },
    {
      title: 'Get Matched & Meet Your Chef',
      description: 'We&apos;ll introduce you to your private chef and schedule a brief Zoom call or in-home kitchen assessment to align on needs, kitchen setup, and service goals. We will also answer any questions you may have!'
    },
    {
      title: 'Choose Your Weekly Plan',
      description: 'Select your base plan (3–6 entrees/week) and any additional add-ons. Once confirmed, we&apos;ll send you a simple service agreement to secure your start date.'
    },
    {
      title: 'Personalized Menu Every Week',
      description: 'Your chef will send a tailored menu each Friday, you will make your selections each Sunday, and get your invoice each Monday.'
    },
    {
      title: 'Cook Day',
      description: 'Your chef shops, cooks, labels, and stores everything in your fridge – no coordination or cleanup needed on your part.'
    },
    {
      title: 'Enjoy & Provide Feedback Anytime',
      description: 'Meals are ready when you are. You can text or email your chef any time to adjust preferences or offer feedback. We want to ensure you&apos;re happy with your experience and will always adapt as your needs evolve.'
    }
  ]

  return (
    <div className="min-h-screen bg-bone">
      <Navigation />

      {/* Part 1: Hero and Service Plans */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/Extra Option6.jpg"
          alt="Chef services built around you"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 35%' }}
          priority
        />
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-black/55 z-[5]" />
        
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              {/* Very subtle blended background behind text */}
              <div className="absolute inset-0 -inset-x-0.5 -inset-y-0.5 bg-black/4 backdrop-blur-[1px] rounded-xl"></div>
              <h1 className="relative text-4xl md:text-6xl font-serif text-bone mb-8 leading-tight tracking-tight px-1 py-0.5">
                Chef services built around you
              </h1>
            </div>
            <div className="relative inline-block max-w-3xl">
              {/* Very subtle blended background behind subtitle */}
              <div className="absolute inset-0 -inset-x-0.5 -inset-y-0.5 bg-black/4 backdrop-blur-[1px] rounded-xl"></div>
              <p className="relative text-xl text-white font-serif font-light leading-relaxed tracking-wide px-1 py-0.5">
                From quiet executives to growing families, we support households that never stop moving - with seasonal menus, personal touches, and chefs you actually trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Service Plans */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-4 text-center ">
              Weekly Service Plans
            </h2>
            <p className="text-lg text-espresso/80 mb-12 text-center font-serif font-light">
              Each entrée includes two large portions. Groceries billed separately.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="bg-ivory border border-warm-taupe/20 rounded-xl p-8  hover:shadow-xl transition-all duration-300 hover:border-muted-gold/40">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-serif text-espresso tracking-wide">3 Entrées (6 servings)</h3>
                  </div>
                  <div className="text-2xl font-serif text-espresso tracking-wide">$525<span className="text-lg text-espresso/70">/week</span></div>
                </div>
              </div>
              
              <div className="bg-ivory border border-warm-taupe/20 rounded-xl p-8  hover:shadow-xl transition-all duration-300 hover:border-muted-gold/40">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-serif text-espresso tracking-wide">4 Entrées (8 servings)</h3>
                  </div>
                  <div className="text-2xl font-serif text-espresso tracking-wide">$625<span className="text-lg text-espresso/70">/week</span></div>
                </div>
              </div>
              
              <div className="bg-ivory border border-warm-taupe/20 rounded-xl p-8  hover:shadow-xl transition-all duration-300 hover:border-muted-gold/40">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-serif text-espresso tracking-wide">5 Entrées (10 servings)</h3>
                    <p className="text-sm text-espresso/70 font-light italic">4 unique entrées + 1 duplicate of your choice</p>
                  </div>
                  <div className="text-2xl font-serif text-espresso tracking-wide">$750<span className="text-lg text-espresso/70">/week</span></div>
                </div>
              </div>
              <p className="text-sm text-espresso/70 font-serif italic mt-4 text-center">
                Service plans are month-to-month with weekly billing. Receive 5% off services with a 1-year commitment
              </p>
            </div>

            {/* Optional Add-Ons */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-espresso mb-4 text-center ">
                Optional Add-Ons
              </h3>
              <p className="text-lg text-espresso/80 mb-8 text-center font-serif font-light">
                Supplement your weekly meals with chef-prepared extras
              </p>
              
              <div className="space-y-8">
                {/* Breakfast Add-Ons */}
                <div className="bg-ivory border border-warm-taupe/20 rounded-xl p-8  hover:shadow-lg transition-all duration-300">
                  <h4 className="text-xl font-serif text-espresso mb-3 tracking-wide">Breakfast / Small Bite Add-Ons</h4>
                  <div className="flex flex-wrap gap-6 mb-2">
                    <span className="text-espresso font-serif font-medium tracking-wide">4 servings <span className="text-clay font-serif">+$60</span></span>
                    <span className="text-espresso font-serif font-medium tracking-wide">6 servings <span className="text-clay font-serif">+$90</span></span>
                  </div>
                </div>
                
                {/* Kid-Favorite Meals */}
                <div className="bg-ivory border border-warm-taupe/20 rounded-xl p-8  hover:shadow-lg transition-all duration-300">
                  <h4 className="text-xl font-serif text-espresso mb-3 tracking-wide">Kid-Favorite Meals Add-Ons</h4>
                  <div className="flex flex-wrap gap-6 mb-4">
                    <span className="text-espresso font-serif font-medium tracking-wide">4 servings <span className="text-clay font-serif">+$80</span></span>
                    <span className="text-espresso font-serif font-medium tracking-wide">8 servings <span className="text-clay font-serif">+$145</span></span>
                  </div>
                  <p className="text-espresso/80 font-serif font-light mb-2">
                    Chef-prepared staples designed for picky eaters and busy schedules. Examples include turkey meatballs with sweet potato fries, veggie mac, sesame noodles with chicken.
                  </p>
                </div>
              </div>
              <p className="text-sm text-espresso/70 font-serif italic mt-4 text-center">
                Kid portions are about 1/2 the size of our standard large adult portions
              </p>
            </div>

            {/* Split Service Option */}
            <div className="bg-warm-taupe/10 rounded-xl p-6 mb-8 ">
              <h4 className="text-2xl font-serif font-bold text-espresso mb-2">Prefer two cook dates per week?</h4>
              <p className="text-espresso font-serif font-light mb-4">
                We offer split service on any plan for clients who need 10+ portions, want fresher meals midweek, or simply prefer smaller batches.
              </p>
              <Link href="/signup" className="text-sm text-espresso/70 font-serif italic underline hover:text-espresso/80 transition-colors">
                Get Started with a new-client intake form
              </Link>
            </div>

            {/* Special Occasions */}
            <div className="bg-clay/10 rounded-xl p-6 ">
              <h4 className="text-2xl font-serif font-bold text-espresso mb-2">Special occasion or private dinner?</h4>
              <p className="text-espresso font-serif font-light mb-2">
                From small birthday parties and private dinners to a charcuterie & wine night with your friends, we offer one-off services for existing clients.
              </p>
              <p className="text-sm text-espresso/70 font-serif italic">
                Subject to chef availability. <Link href="/contact" className="underline hover:text-espresso/80 transition-colors">Contact us</Link> for custom pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-ivory to-bone">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Description */}
              <div className="">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso mb-8">
                  How It Works
                </h2>
                <p className="text-lg text-espresso font-serif font-light mb-6 leading-relaxed">
                  We offer premium in-home chef services for busy households who want fresh, nutritious meals without the stress of planning, shopping, or cooking.
                </p>
                <p className="text-lg text-espresso font-serif font-light mb-6 leading-relaxed">
                  Your dedicated chef comes to you each week, prepares a set number of entrées tailored to your preferences, and leaves your kitchen spotless.
                </p>
                <p className="text-lg text-espresso font-serif font-light mb-6 leading-relaxed">
                  We know the weight that comes with planning meals, scrambling for last-minute groceries, and trying to make the &ldquo;right&rdquo; food decisions day after day. Our service was built to remove that mental load – so your time, energy, and focus can be spent where it matters most.
                </p>
                <p className="text-xl text-espresso font-serif font-medium">
                  Let us handle the planning, shopping, and cooking – so you can focus on what matters most.
                </p>
              </div>

              {/* Right Column - Accordion Steps */}
              <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white border border-warm-taupe/20 rounded-xl hover:shadow-md transition-all duration-300 "
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-start"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-serif text-clay">{index + 1}.</span>
                      <h3 className="text-lg font-serif font-medium text-espresso">{step.title}</h3>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-espresso flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-12">
                        <p className="text-espresso font-serif font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center  mt-16">
              <p className="text-lg text-espresso font-serif font-light">
                Have additional questions? Check out our{' '}
                <Link href="/faq" className="text-espresso underline hover:text-espresso/80 transition-colors">
                  FAQ page
                </Link>
                {' '}or feel free to{' '}
                <Link href="/contact" className="text-espresso underline hover:text-espresso/80 transition-colors">
                  Contact Us
                </Link>
                ! We would love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}