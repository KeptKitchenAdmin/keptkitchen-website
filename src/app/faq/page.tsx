'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Set<string>>(new Set())

  // Debug: Check if component is even running
  useEffect(() => {
    console.log('FAQ component mounted')
  }, [])

  const toggleFAQ = (index: string) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim()
      if (trimmedLine === '') {
        return <div key={index} className="h-4" />
      }
      if (trimmedLine.startsWith('• ')) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="text-espresso mr-3 mt-1 flex-shrink-0">•</span>
            <span className="flex-1 leading-relaxed">{trimmedLine.substring(2)}</span>
          </div>
        )
      }
      return (
        <div key={index} className="mb-3 leading-relaxed">
          {trimmedLine}
        </div>
      )
    })
  }

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
• New parents navigating postpartum nutrition recovery with new baby demands and no time to cook
• Athletes & performance-driven professionals with custom macro or fuel goals
• Dual-career households who want restaurant-quality meals at home, without outsourcing taste or control`
        },
        {
          q: 'How does weekly service work?',
          a: `We match you with a dedicated chef who prepares meals in your home on a recurring schedule. Depending on your needs, this could be one set cook day per week, multiple visits, or daily coverage. Each week, your chef sends a custom menu based on your preferences; you select what you'd like, and they handle the rest: shopping, cooking, cleanup, and storing labeled meals in your fridge.

Special requests, changes, and accommodations are always welcome.

Service plans are tailored to your household size, schedule, and goals. Details like menu timing and communication are established during onboarding.`
        },
        {
          q: 'Can I request meals for specific dietary goals?',
          a: `Absolutely. Your assigned chef will tailor menus each week to align with your dietary goals and preferences - whether you're looking for gluten-free, vegetarian, vegan, low-fat, high-protein, or other common lifestyle approaches. All meals are designed specifically for you and can reflect ingredient preferences, sensitivities, and nutritional priorities.

We aim to create food that is not only tailored to your needs, but also deeply enjoyable, well-balanced, nutrient-dense, and sustainably deliverable each week. If you're unsure whether your needs are a fit, feel free to contact us and ask!`
        },
        {
          q: 'Do I need to be home when my chef arrives?',
          a: 'Not unless you want to be! Many of our clients provide a key or access code for unattended service. We handle everything and leave your kitchen spotless.'
        },
        {
          q: 'Do you offer service for special events or one-off occasions?',
          a: 'Yes, for existing clients only. If you need elevated meal prep or intimate full-service catering for a small private dinner party, weekend guests, travel support, or a celebration at home, just let us know. All special requests are subject to chef availability, so please let us know 2 weeks in advance if possible.'
        },
        {
          q: 'Which areas do you service?',
          a: 'We currently service all of the Portland OR and Vancouver WA metro areas.'
        },
        {
          q: 'Can I choose what\'s prepared?',
          a: 'That\'s entirely up to you. Some clients prefer to review and approve menus each week; others simply share their preferences and let their chef handle everything. Your service works however you want it to.'
        }
      ]
    },
    {
      category: 'Add-Ons & Scheduling',
      questions: [
        {
          q: 'What are the extra add-ons like? What is included?',
          a: 'Add-ons are optional extras like breakfast items, snacks, and kid-friendly meals.',
          linkText: 'See our sample menus for examples.',
          linkHref: '/sample-menus'
        },
        {
          q: 'How long will my weekly service take?',
          a: 'Most cook days take anywhere from 3–8 hours depending on the number of entrees and add-ons. This time includes prepping, cooking, packaging, and cleaning. Time varies based on the weekly plans you&apos;ve chosen.'
        },
        {
          q: 'When will my chef arrive? Can I schedule any time?',
          a: `Arrival times are scheduled in advance. Chefs can arrive anywhere between 9am–3pm and are available 7-days a week. We'll do our best to accommodate your preferred day/time, depending on chef availability.

If you would like to request arrival or departure times outside this time frame, please let us know during onboarding and we will do our best to accommodate.`
        }
      ]
    },
    {
      category: 'Pricing & Groceries',
      questions: [
        {
          q: 'What\'s included in the weekly rate?',
          a: `Your weekly rate reflects the full creative and culinary expertise of a private chef dedicated to your household. This includes weekly menu development customized to your preferences and dietary needs, featuring new, thoughtfully crafted meals each week.

All shopping, preparation, cooking, packaging, kitchen cleanup, and reheating instructions are included by your chef.

All that's billed separately are your grocery costs and any optional add-ons you choose.`
        },
        {
          q: 'Can I purchase my own groceries for these meals?',
          a: 'Each menu is built around specific ingredients in precise quantities, and our chefs are trained to source exactly what\'s needed for your service. For that reason, we handle all grocery shopping on your behalf.'
        },
        {
          q: 'How much do groceries cost?',
          a: 'Grocery costs vary depending on how many meals and extras you\'ve selected, the number of people we\'re cooking for, and whether you prefer conventional items or organic, grass-fed, or specialty ingredients. We are happy to work with you to optimize grocery costs as much as possible. All grocery charges are billed separately based on actual receipts.'
        }
      ]
    },
    {
      category: 'Cancellations & Rescheduling',
      questions: [
        {
          q: 'What happens if my chef is sick or needs to cancel?',
          a: 'In the rare event your chef must cancel, we make every effort to temporarily swap in another chef for your scheduled cook-time. Depending on timing and availability, we may need to shift your cook date or time. If we\'re unable to provide service that week, you won\'t be charged.'
        },
        {
          q: 'What if I need to cancel service? What is your cancellation policy?',
          a: `All clients must provide 30 days\' notice to cancel.

For clients on 12-month agreements – If you request to terminate your agreement before the your agreement end date, the remaining contract balance will be billed in full.`
        },
        {
          q: 'What if I need to reschedule my cook date same-week or just skip a week?',
          a: `We understand that travel, illness, or unexpected scheduling conflicts can come up. Our goal is to be as accommodating as possible, while still preserving the consistency our chefs rely on.

Rescheduling Within the Same Week: If you need to move your cook day within the same week, we require at least 48 hours\' notice. We\'ll do our best to reschedule based on chef availability.

Skipping a Full Week: If you need to skip a full week of service, please notify us by Thursday at 10:00pm the week prior. Skipped weeks will not be billed, and service will resume the following week.

If a chef purchases groceries on your service day and you cancel, you will be billed for both the grocery cost and that week\'s service fee.

Skipped weeks do not extend your contract term, and each client is allowed two skips per quarter. We reserve ongoing chef availability for clients with consistent weekly service. Frequent skips may result in a loss of your reserved chef time or adjustments to your service schedule.`
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src="/Homepage3 - notes from our clients.jpg"
          alt="Premium wine pairings and cellar selections for in-home culinary experiences"
          fill
          className="object-cover"
          style={{ objectPosition: '40% 30%' }}
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
      </div>
      
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
            </div>
          </div>
        </section>

        <section className="py-8 px-6 relative z-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <h2 className="text-3xl font-serif text-white mb-8">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => {
                      const currentIndex = `${categoryIndex}-${index}`
                      const isOpen = openIndexes.has(currentIndex)
                      
                      return (
                        <div 
                          key={index}
                          className="border border-warm-taupe/20 rounded-xl" style={{ backgroundColor: '#F5F3F0' }}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              console.log('FAQ clicked:', currentIndex)
                              toggleFAQ(currentIndex)
                            }}
                            className="w-full text-left p-6 flex justify-between items-start cursor-pointer hover:bg-ivory/90 transition-colors bg-transparent border-none relative z-10"
                          >
                            <span className="text-lg font-serif font-medium text-espresso pr-4">{faq.q}</span>
                            <span className="text-espresso text-xl font-bold flex-shrink-0">
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="text-espresso font-serif font-light">
                                {formatText(faq.a)}
                                {faq.linkText && faq.linkHref && (
                                  <div className="mt-2">
                                    <Link 
                                      href={faq.linkHref} 
                                      className="text-maple hover:text-maple/80 underline transition-colors"
                                    >
                                      {faq.linkText}
                                    </Link>
                                  </div>
                                )}
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

        <Footer />
      </div>
    </div>
  )
}