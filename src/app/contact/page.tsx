'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-deep-charcoal to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-maple rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-walnut rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-white/90 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We&apos;re here to answer your questions and help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif text-deep-charcoal mb-6">Get in Touch</h2>
                  <p className="text-lg text-charcoal font-light leading-relaxed mb-8">
                    Whether you&apos;re ready to start service or just exploring your options, 
                    we&apos;d love to hear from you. Our team responds to all inquiries within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-maple/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-maple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-deep-charcoal mb-1">Email</h3>
                      <p className="text-charcoal font-light">hello@keptkitchen.co</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-maple/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-maple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-deep-charcoal mb-1">Phone</h3>
                      <p className="text-charcoal font-light">(555) 123-4567</p>
                      <p className="text-sm text-warm-gray mt-1">Monday - Friday, 9am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-maple/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-maple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-deep-charcoal mb-1">Service Area</h3>
                      <p className="text-charcoal font-light">Greater Metropolitan Area</p>
                      <p className="text-sm text-warm-gray mt-1">30-mile radius from city center</p>
                    </div>
                  </div>
                </div>

                <div className="bg-maple/10 rounded-2xl p-8">
                  <h3 className="text-xl font-serif text-deep-charcoal mb-4">Office Hours</h3>
                  <div className="space-y-2 text-charcoal font-light">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-serif text-deep-charcoal mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
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
                    <label className="block text-sm font-medium text-charcoal mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                    >
                      <option value="">Select a topic...</option>
                      <option value="new-service">New Service Inquiry</option>
                      <option value="existing-client">Existing Client Support</option>
                      <option value="chef-application">Chef Application</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
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

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-white">
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