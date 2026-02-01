'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cityNeighborhood: '',
    serviceFrequency: '',
    timeline: '',
    householdSnapshot: '',
    dietPreferencesAllergies: '',
    additionalComments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json() as { success: boolean; error?: string }

      if (result.success) {
        setSubmitMessage('Thank you! Your service request has been submitted successfully. We will contact you soon.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          cityNeighborhood: '',
          serviceFrequency: '',
          timeline: '',
          householdSnapshot: '',
          dietPreferencesAllergies: '',
          additionalComments: ''
        })
      } else {
        setSubmitMessage('Sorry, there was an error submitting your request. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />

      {/* Hero Section - Larger banner */}
      <section className="relative -mt-20">
        <div className="relative h-[60vh] min-h-[500px] pt-20 overflow-hidden">
          <Image
            src="/Sign up banner.jpg"
            alt="Pacific Northwest in-home fine dining ambiance with in-home private chef services"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 75%' }}
            priority
            quality={100}
          />
          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10" style={{transform: 'translateY(-10px)'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center leading-tight px-4">
              <span className="md:hidden">Now Accepting<br />New Clients</span>
              <span className="hidden md:inline">Now Accepting New Clients</span>
            </h1>
          </div>
          {/* SVG mask for curved bottom */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="curved-mask">
                <rect width="400" height="300" fill="white" />
                <path d="M0,220 Q200,280 400,220 L400,300 L0,300 Z" fill="black" />
              </mask>
            </defs>
            <rect 
              width="400" 
              height="300" 
              fill="white" 
              mask="url(#curved-mask)"
              style={{ mixBlendMode: 'multiply' }}
            />
          </svg>
        </div>
      </section>

      {/* Content Section - More space from header */}
      <section className="pt-8 md:pt-12 pb-4 px-6 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-8">
            <p className="text-base md:text-xl text-deep-charcoal font-serif font-light mb-2 leading-relaxed">
              If you&apos;re interested in securing a spot, please take a moment to fill out our Service Request Form.
            </p>
            <p className="text-base md:text-xl text-deep-charcoal font-serif font-light leading-relaxed">
              We will be reviewing all submissions personally and will reach out as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pt-2 pb-8 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12" style={{ boxShadow: '0 -5px 15px -3px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div>
                  <div className="text-base font-serif font-bold text-charcoal mb-4">Contact Info</div>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-serif font-medium text-charcoal mb-2">First Name (required)</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-serif font-medium text-charcoal mb-2">Last Name (required)</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-serif font-medium text-charcoal mb-2">Email (required)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif font-medium text-charcoal mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif font-medium text-charcoal mb-2">City / Neighborhood (required)</label>
                      <input
                        type="text"
                        name="cityNeighborhood"
                        value={formData.cityNeighborhood}
                        onChange={handleChange}
                        required
                        placeholder="Example: Portland - Pearl District, or Beaverton - Cedar Hills"
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all placeholder:text-xs placeholder:font-serif placeholder:italic placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Service Model */}
                <div>
                  <div className="text-base font-serif font-bold text-charcoal mb-4">Preferred Service Model</div>
                  <div className="space-y-4">
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value="weekly-service"
                        checked={formData.serviceFrequency === 'weekly-service'}
                        onChange={handleChange}
                        className="mt-1 mr-3 flex-shrink-0"
                      />
                      <div className="text-sm font-serif text-charcoal">
                        <div className="font-bold mb-1">Weekly Service</div>
                        <div className="text-gray-600 leading-relaxed">Your chef prepares meals on a set day (or two) each week, based on your custom menu selections.</div>
                      </div>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value="premium-hourly"
                        checked={formData.serviceFrequency === 'premium-hourly'}
                        onChange={handleChange}
                        className="mt-1 mr-3 flex-shrink-0"
                      />
                      <div className="text-sm font-serif text-charcoal">
                        <div className="font-bold mb-1">Premium Hourly Service</div>
                        <div className="text-gray-600 leading-relaxed">Higher frequency, flexible scheduling - Ideal for daily meal coverage or multiple visits per week. (12-hour weekly minimum)</div>
                      </div>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value="not-sure-yet"
                        checked={formData.serviceFrequency === 'not-sure-yet'}
                        onChange={handleChange}
                        className="mt-1 mr-3 flex-shrink-0"
                      />
                      <div className="text-sm font-serif text-charcoal">
                        <div className="font-bold mb-1">Not Sure Yet</div>
                        <div className="text-gray-600 leading-relaxed">We&apos;ll help you find the right fit.</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <div className="text-base font-serif font-bold text-charcoal mb-2">Timeline (required)</div>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all font-serif"
                  >
                    <option value="">Select your preferred timeline</option>
                    <option value="asap">As soon as Possible</option>
                    <option value="30-days">Within 30-days</option>
                    <option value="exploring">Just Exploring</option>
                  </select>
                </div>

                {/* Household Snapshot */}
                <div>
                  <div className="text-base font-serif font-bold text-charcoal mb-2">Household Snapshot (optional)</div>
                  <p className="text-sm font-serif text-gray-600 mb-2">Example: 2 adults + 2 kids (ages 3 and 6)</p>
                  <textarea
                    name="householdSnapshot"
                    value={formData.householdSnapshot}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>


                {/* Diet Preferences and Allergies */}
                <div>
                  <div className="text-base font-serif font-bold text-charcoal mb-2">
                    Do you or does anyone in your family have any specific diet preferences or allergies?
                  </div>
                  <p className="text-sm font-serif text-gray-600 mb-2">Gluten Free, Vegan, Vegetarian, etc.</p>
                  <textarea
                    name="dietPreferencesAllergies"
                    value={formData.dietPreferencesAllergies}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Additional Comments */}
                <div>
                  <div className="text-base font-serif font-bold text-charcoal mb-2">Any additional comments? (optional)</div>
                  <p className="text-sm font-serif text-gray-600 mb-2">Scheduling preferences, goals, or questions</p>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  
                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-100 text-green-800 font-serif border border-green-200' 
                        : 'bg-red-100 text-red-800 font-serif border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}