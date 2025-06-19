'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
      category: 'Service Overview',
      questions: [
        {
          q: 'Who is private chef service for?',
          a: `Kept Kitchen Co. serves high-functioning households where time is scarce, standards are high, and food is foundational.

Our clients include:
• Executives & Founders who need meals handled with zero friction
• Busy families balancing multiple schedules, children, activities, and nutrition needs
• New parents navigating postpartum nutrition recovery with and new baby demands and no time to cook
• Athletes & performance-driven professionals with custom macro or fuel goals
• Dual-career households who want restaurant-quality meals at home, without outsourcing taste or control

We're here to deliver meals that are thoughtful, nutrient-aligned, professionally executed, and always ready when you are.`
        },
        {
          q: 'How does weekly service work?',
          a: 'We match you with a dedicated chef who prepares 3–5 entrées and optional add-ons in your home each week, based on weekly customized menus aligned to your dietary preferences, goals, and household schedule. Each entrée includes two large portions. Groceries are billed separately, and meals are labeled and stored in your fridge before we leave.'
        },
        {
          q: 'Which areas do you service?',
          a: 'We currently service all of the Portland OR and Vancouver WA metro areas.'
        }
      ]
    },
    {
      category: 'Pricing & What\'s Included',
      questions: [
        {
          q: 'What\'s included in the weekly rate?',
          a: `Your weekly rate reflects the full creative and culinary expertise of a private chef dedicated to your household. This includes weekly menu development customized to your preferences and dietary needs, featuring new, thoughtfully crafted meals each week.

All shopping, preparation, cooking, packaging, kitchen cleanup, and reheating instructions are included by your chef.

All that's billed separately are your grocery costs and any optional add-ons you choose.`
        },
        {
          q: 'How much do groceries cost?',
          a: 'Grocery costs vary depending on how many meals and extras you\'ve selected, the number of people we\'re cooking for, and whether you prefer conventional items or organic, grass-fed, or specialty ingredients. All grocery charges are billed separately based on actual receipts.'
        },
        {
          q: 'What are the extra add-ons like? What is included?',
          a: `Add-ons are optional and billed per serving in increments of 4–8. Add-on items are things like:
• Breakfasts & small bites – chia pudding, overnight oats, egg muffins, frittatas, muffins, granola, etc.
• Kid-favorite meals – compact, reheatable options like turkey meatballs, veggie mac, chicken tenders, sesame noodles, etc.

Add-on options are rotate weekly by default, but you can always request repeat favorites!`
        }
      ]
    },
    {
      category: 'Menu Planning & Dietary Needs',
      questions: [
        {
          q: 'Can I request meals for specific dietary goals?',
          a: `Absolutely. Your assigned chef will tailor menus each week to align with your dietary goals and preferences — whether you're looking for gluten-free, vegetarian, vegan, low-fat, high-protein, or other common lifestyle approaches. All meals are designed specifically for you and can reflect ingredient preferences, sensitivities, and nutritional priorities.

We aim to create food that is not only tailored to your needs, but also deeply enjoyable, well-balanced, nutrient-dense, and sustainably deliverable each week. If you're unsure whether your needs are a fit, feel free to contact us and ask!`
        },
        {
          q: 'How far in advance do I choose my menu?',
          a: `Your chef will send your custom menu every Friday by 5pm. You'll confirm your selections by Sunday evening at 5pm. Your invoice will follow on Monday for the upcoming week of service.

Have a special request for the week? Let your chef know by Thursday at 10pm!`
        },
        {
          q: 'Can I choose my own menu?',
          a: `You'll receive a curated menu every Friday and can approve, swap, or make requests by Sunday evening. We build your meals around your goals, preferences, and lifestyle.

Have a special request for your upcoming menu? Let your chef know on Thursday by 10pm!`
        },
        {
          q: 'Can I purchase my own groceries for these meals?',
          a: 'Each menu is built around specific ingredients in precise quantities, and our chefs are trained to source exactly what\'s needed for your service. For that reason, we handle all grocery shopping on your behalf.'
        }
      ]
    },
    {
      category: 'Scheduling & Logistics',
      questions: [
        {
          q: 'Do I need to be home when my chef arrives?',
          a: 'Not unless you want to be! Many of our clients provide a key or access code for unattended service. We handle everything and leave your kitchen spotless.'
        },
        {
          q: 'How long will my weekly service take?',
          a: 'Most cook days take anywhere from 3–8 hours depending on the number of entrees and add-ons. This time includes prepping, cooking, packaging, and cleaning. Time varies based on the amount of meals you have chosen.'
        },
        {
          q: 'When will my chef arrive? Can I schedule any time?',
          a: `Arrival times are scheduled in advance. Chefs can arrive anywhere between 9am–3pm, and are available 7-days a week. We'll do our best to accommodate your preferred day/time, depending on chef availability and kitchen access.

If you need arrival times outside this time frame, please let us know and we will do our best to accommodate.`
        },
        {
          q: 'Can I split service across two cook days per week?',
          a: `We offer optional split service for clients who require 10+ total portions (5–6+ entrees) per week, and prefer fresher food midweek. This option is ideal for larger households or clients who value smaller, more frequent prep sessions.

Clients with split service can also receive a discounted rate! Let us know during onboarding if you'd like to request this.`
        },
        {
          q: 'What if I need to reschedule my cook date same-week or just skip a week?',
          a: `We understand that travel, illness, or unexpected scheduling conflicts can come up. Our goal is to be as accommodating as possible, while still preserving the consistency our chefs rely on.

Rescheduling Within the Same Week: If you need to move your cook day within the same week, we require at least 48 hours' notice. We'll do our best to reschedule based on chef availability.

Skipping a Full Week: If you need to skip a full week of service, please notify us by Thursday at 10:00pm for the following week.
• Week-to-week clients: Skipped weeks will not be billed, and service will resume the following week.
• 12-month agreements: Clients may skip up to 6 weeks per term.

Skipped weeks do not extend your contract term.

If a chef purchases groceries on your service day and you cancel, you will be billed for both the grocery cost and that week's service fee.

We reserve ongoing chef availability for clients with consistent weekly service. Frequent skips may result in a loss of your reserved chef time or adjustments to your service schedule.`
        }
      ]
    },
    {
      category: 'Special Requests & Cancellations',
      questions: [
        {
          q: 'Do you offer service for special events or one-off occasions?',
          a: 'Yes, for existing clients only. If you need elevated meal prep or intimate full-service catering for a small private dinner party, weekend guests, travel support, or a celebration at home, just let us know. All special requests are subject to chef availability.'
        },
        {
          q: 'What happens if my chef is sick or needs to cancel?',
          a: 'In the rare event your chef must cancel, we make every effort to temporarily swap in another chef for your scheduled cook-time. Depending on timing and availability, we may need to shift your cook date or time. If we\'re unable to provide service that week, you won\'t be charged.'
        },
        {
          q: 'What if I need to cancel service? What is your cancellation policy?',
          a: `Our cancellation policy depends on the type of service agreement you select:

Week-to-week clients must submit cancellation requests by Thursday at 10:00pm for the upcoming week. Cancellations after this cutoff will be billed as scheduled.

12-month agreement clients must provide 30 days' notice to cancel. If your agreement is terminated before the end date, the remaining contract balance will be billed in full.`
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
            <h1 className="text-5xl md:text-6xl font-serif text-espresso mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-espresso/80 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Still wondering how it works? We&apos;ve got you
            </p>
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

      <Footer />
    </div>
  )
}