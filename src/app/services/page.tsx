'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Services() {
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

  const services = [
    {
      title: 'Weekly Chef Service',
      description: 'Your personal chef visits once or twice weekly, preparing a full week of meals tailored to your preferences.',
      features: [
        'Custom weekly menus',
        'Grocery shopping included',
        'Full kitchen cleanup',
        'Meals stored and labeled',
        'Dietary accommodations'
      ]
    },
    {
      title: 'Family Meal Solutions',
      description: 'Specialized service for busy families with options that work for both parents and kids.',
      features: [
        'Kid-friendly options',
        'School lunch prep',
        'Family dinner solutions',
        'Snack preparation',
        'Special occasion meals'
      ]
    },
    {
      title: 'Executive Service',
      description: 'Discreet, efficient service designed for busy professionals who value their time and privacy.',
      features: [
        'Minimal disruption',
        'Ready-to-heat meals',
        'Breakfast & lunch prep',
        'Late meeting dinners',
        'Entertainment ready'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-bone">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-deep-brown to-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-muted-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif text-bone mb-8 leading-tight animate-fade-in-up">
              Chef services built around you
            </h3>
            <p className="text-xl text-bone/90 font-light animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              From quiet executives to growing families, we support households that never stop moving – 
              with seasonal menus, personal touches, and chefs you actually trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-ivory border border-warm-taupe/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 scroll-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-serif text-espresso mb-4">{service.title}</h3>
                  <p className="text-espresso font-light mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-clay mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-espresso font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-ivory to-bone">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center text-espresso mb-16 scroll-fade-in">
              How It Works
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We learn about your household, dietary preferences, and lifestyle to match you with the perfect chef.'
                },
                {
                  step: '02',
                  title: 'Chef Matching',
                  description: 'Meet your dedicated chef who will become familiar with your kitchen, preferences, and routines.'
                },
                {
                  step: '03',
                  title: 'Weekly Menu Planning',
                  description: 'Your chef creates custom menus each week, incorporating your feedback and seasonal ingredients.'
                },
                {
                  step: '04',
                  title: 'Service Day',
                  description: 'Your chef shops, cooks, packages, and cleans – leaving your kitchen spotless and fridge full.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 items-start scroll-fade-in">
                  <div className="text-5xl font-serif text-muted-gold/30">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-serif text-espresso mb-2">{item.title}</h3>
                    <p className="text-lg text-espresso font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-8">
              An Investment in Your Time
            </h2>
            <p className="text-xl text-espresso font-light mb-12 leading-relaxed">
              Our service starts at $500 per week, including groceries, for households of 2-4 people. 
              Pricing varies based on household size, service frequency, and specific requirements.
            </p>
            <div className="bg-warm-taupe/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-espresso font-light mb-6">
                When you consider the time saved, stress eliminated, and quality of life improved, 
                our clients consistently tell us it&apos;s the best investment they&apos;ve made.
              </p>
              <p className="text-2xl font-serif text-clay italic">
                &ldquo;Honestly cheaper than what I was spending on takeout, 
                and infinitely better for my family.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Callout */}
      <section className="py-20 px-6 bg-gradient-to-b from-bone to-ivory">
        <div className="container mx-auto text-center scroll-fade-in">
          <h3 className="text-3xl font-serif text-espresso mb-6">
            Have additional questions?
          </h3>
          <p className="text-lg text-espresso font-light mb-8">
            Check out our <Link href="/faq" className="underline">FAQ</Link> page or feel free to <Link href="/contact" className="underline">Contact Us</Link>! We would love to hear from you.
          </p>
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