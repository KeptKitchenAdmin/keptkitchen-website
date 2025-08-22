'use client'

import { useState } from 'react'

interface Step {
  title: string
  description: string
}

interface ServicesAccordionProps {
  steps: Step[]
}

export default function ServicesAccordion({ steps }: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div 
          key={index}
          className="border border-warm-taupe/20 rounded-xl hover:shadow-md transition-all duration-300" style={{ backgroundColor: 'white' }}
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
  )
}