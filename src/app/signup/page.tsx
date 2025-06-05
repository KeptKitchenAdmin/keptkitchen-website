'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    householdSize: '',
    dietaryRestrictions: '',
    serviceFrequency: 'weekly',
    startDate: '',
    additionalInfo: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-maple/10 via-soft-white to-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-deep-charcoal mb-6 animate-fade-in-up">
              Begin Your Journey
            </h1>
            <p className="text-xl text-charcoal font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Let&apos;s create a service that fits perfectly into your life.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-serif text-deep-charcoal mb-6">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">First Name</label>
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h2 className="text-2xl font-serif text-deep-charcoal mb-6">Service Address</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-charcoal mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Preferences */}
                <div>
                  <h2 className="text-2xl font-serif text-deep-charcoal mb-6">Service Preferences</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Household Size</label>
                      <select
                        name="householdSize"
                        value={formData.householdSize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="1-2">1-2 people</option>
                        <option value="3-4">3-4 people</option>
                        <option value="5-6">5-6 people</option>
                        <option value="7+">7+ people</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Service Frequency</label>
                      <select
                        name="serviceFrequency"
                        value={formData.serviceFrequency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      >
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="custom">Custom Schedule</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-charcoal mb-2">Dietary Restrictions or Preferences</label>
                      <textarea
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Please list any allergies, dietary restrictions, or strong preferences..."
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Preferred Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-2xl font-serif text-deep-charcoal mb-6">Additional Information</h2>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your household, schedule, or any special requirements..."
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button type="submit" className="btn-primary px-12 py-4 text-lg">
                    Submit Application
                  </button>
                  <p className="text-sm text-charcoal font-light mt-4">
                    We&apos;ll contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-white mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Kept Kitchen Co.</h3>
              <p className="text-warm-gray font-light">
                Premium private chef services for discerning families and professionals.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warm-gray font-light">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-warm-gray font-light">
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-warm-gray font-light">
                <li>hello@keptkitchen.co</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-gray/30 pt-8 text-center text-warm-gray">
            <p>&copy; 2024 Kept Kitchen Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}