'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json() as { success: boolean; error?: string }

      if (result.success) {
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        })
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Full page background image */}
      <Image
        src="/ContactUs_top_banner.jpg"
        alt="Warm hospitality and luxury culinary service ambiance in Portland and Vancouver"
        fill
        className="object-cover"
        style={{ objectPosition: '50% 50%' }}
        priority
      />
      {/* Full page darkening overlay */}
      <div className="absolute inset-0 bg-black/60 z-[5]" />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-2 px-6 min-h-[40vh] flex items-center z-10">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-6 animate-fade-in-up">
              <span className="md:hidden">We would love to<br />hear from you!</span>
              <span className="hidden md:inline">We would love to hear from you!</span>
            </h1>
            <p className="text-xl text-white font-serif font-light animate-fade-in-up mb-4" style={{ animationDelay: '0.2s' }}>
              <span className="md:hidden">Looking to sign up for services?<br /><Link href="/signup" className="text-white underline hover:text-white/80 transition-colors italic">Click here</Link></span>
              <span className="hidden md:inline">Looking to sign up for services? <Link href="/signup" className="text-white underline hover:text-white/80 transition-colors italic">Click here</Link></span>
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pt-2 pb-12 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12" style={{ boxShadow: '0 -5px 15px -3px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <h2 className="text-2xl font-serif text-deep-charcoal mb-6 text-center">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <div className="text-sm font-serif font-medium text-charcoal mb-4">Name (required)</div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-serif font-medium text-charcoal mb-2">First Name</label>
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
                        <label className="block text-sm font-serif font-medium text-charcoal mb-2">Last Name</label>
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
                  </div>

                  {/* Email */}
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

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-serif font-medium text-charcoal mb-2">Message (required)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
                </form>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}