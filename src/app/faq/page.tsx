'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function FAQ() {
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

    const elements = document.querySelectorAll('.scroll-fade-in')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      category: 'Service Basics',
      questions: [
        {
          q: 'How does the service work?',
          a: 'Your personal chef visits your home once or twice weekly, bringing fresh ingredients and preparing a week&apos;s worth of meals customized to your preferences. They handle everything from menu planning to cleanup, leaving your kitchen spotless and your fridge stocked with labeled, ready-to-heat meals.'
        },
        {
          q: 'What areas do you serve?',
          a: 'We currently serve the greater metropolitan area and surrounding suburbs within a 30-mile radius. Contact us to confirm service availability in your specific location.'
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least one week in advance for regular service. For special events or holidays, we suggest booking 2-3 weeks ahead to ensure chef availability.'
        }
      ]
    },
    {
      category: 'Scheduling & Flexibility',
      questions: [
        {
          q: 'What if I need to reschedule my cook date same-week or just skip a week?',
          a: `We understand that travel, illness, or unexpected scheduling conflicts can come up. Our goal is to be as accommodating as possible, while still preserving the consistency our chefs rely on.

**Rescheduling Within the Same Week:**
If you need to move your cook day within the same week, we require at least 48 hours&apos; notice. We&apos;ll do our best to reschedule based on chef availability.

**Skipping a Full Week:**
If you need to skip a full week of service, please notify us by Thursday at 10:00pm for the following week.
• Week-to-week clients: Skipped weeks will not be billed, and service will resume the following week.
• 6-month agreements: Clients may skip up to 3 weeks per term.
• 12-month agreements: Clients may skip up to 6 weeks per term.

Skipped weeks do not extend your contract term. If a chef purchases groceries on your service day and you cancel, you will be billed for both the grocery cost and that week&apos;s service fee.

We reserve ongoing chef availability for clients with consistent weekly service. Frequent skips may result in a loss of your reserved chef time or adjustments to your service schedule.`
        },
        {
          q: 'Can I change my service day?',
          a: 'Yes, we can adjust your regular service day based on chef availability. We ask for at least one week&apos;s notice for permanent schedule changes.'
        }
      ]
    },
    {
      category: 'Menu & Dietary',
      questions: [
        {
          q: 'Can you accommodate dietary restrictions?',
          a: 'Absolutely. Our chefs are experienced in preparing meals for various dietary needs including vegetarian, vegan, gluten-free, keto, paleo, and allergy-specific requirements. We&apos;ll discuss your specific needs during the consultation.'
        },
        {
          q: 'How are menus created?',
          a: 'Your chef creates custom weekly menus based on your preferences, dietary needs, and seasonal availability. You&apos;ll receive your menu in advance and can request modifications. Menus evolve based on your ongoing feedback.'
        },
        {
          q: 'What if my kids are picky eaters?',
          a: 'We specialize in family-friendly options! Our chefs are skilled at creating kid-approved meals while gradually introducing new flavors. We can prepare separate kid portions or create meals the whole family will enjoy.'
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          q: 'What does the service cost?',
          a: 'Our service starts at $500 per week for households of 2-4 people, including groceries. Pricing varies based on household size, service frequency, dietary requirements, and menu complexity. We&apos;ll provide a detailed quote during your consultation.'
        },
        {
          q: 'Are groceries included?',
          a: 'Yes! The price includes all groceries. Your chef shops for the highest quality ingredients, prioritizing organic and locally-sourced items when possible. You&apos;ll never need to reimburse for groceries or deal with receipts.'
        },
        {
          q: 'How does billing work?',
          a: 'We bill weekly in advance via credit card or ACH transfer. For committed clients, we offer 6-month and 12-month agreements with preferred pricing and guaranteed chef availability.'
        }
      ]
    },
    {
      category: 'Chef & Service',
      questions: [
        {
          q: 'Will I have the same chef each week?',
          a: 'Yes! You&apos;ll be matched with a dedicated chef who will learn your preferences and become familiar with your kitchen. In case of chef vacation or illness, we provide a fully-briefed substitute.'
        },
        {
          q: 'What are your chefs&apos; qualifications?',
          a: 'All Kept Kitchen chefs have a minimum of 10 years professional experience, many from Michelin-starred restaurants. They&apos;re thoroughly vetted, insured, and trained in our service standards.'
        },
        {
          q: 'What if I work from home?',
          a: 'Our chefs are trained to work efficiently and quietly. Many of our clients work from home and appreciate how seamlessly our chefs integrate into their routine without disruption.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-bone">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-ivory to-bone">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-espresso mb-8 animate-fade-in-up">
              FAQ
            </h1>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 scroll-fade-in">
                <h2 className="text-3xl font-serif text-clay mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = categoryIndex * 100 + index
                    return (
                      <div 
                        key={index}
                        className="bg-ivory border border-warm-taupe/20 rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                          className="w-full text-left p-6 flex justify-between items-start"
                        >
                          <h3 className="text-lg font-medium text-espresso pr-4">{faq.q}</h3>
                          <svg 
                            className={`w-5 h-5 text-espresso flex-shrink-0 transition-transform duration-300 ${
                              openIndex === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openIndex === globalIndex && (
                          <div className="px-6 pb-6">
                            <div className="text-espresso font-light whitespace-pre-line leading-relaxed">
                              {faq.a}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-bone to-ivory">
        <div className="container mx-auto px-6 text-center scroll-fade-in">
          <h2 className="text-4xl font-serif text-espresso mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-espresso mb-10 max-w-2xl mx-auto font-light">
            We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/contact">
            <button className="btn-primary">CONTACT US</button>
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