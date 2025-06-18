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
    country: 'United States',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    serviceFrequency: '',
    startDate: '',
    householdInfo: '',
    idealDays: [] as string[],
    mealQuantity: '',
    breakfastAddOn: false,
    dietPreferences: '',
    allergies: '',
    favorites: '',
    groceryPreference: '',
    proteins: [] as string[],
    spiceLevel: '',
    vegetarianPreference: '',
    additionalComments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      if (name === 'idealDays' || name === 'proteins') {
        const currentArray = formData[name] as string[]
        if (checkbox.checked) {
          setFormData({
            ...formData,
            [name]: [...currentArray, value]
          })
        } else {
          setFormData({
            ...formData,
            [name]: currentArray.filter(item => item !== value)
          })
        }
      } else {
        setFormData({
          ...formData,
          [name]: checkbox.checked
        })
      }
    } else if (type === 'radio') {
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
          country: 'United States',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zip: '',
          serviceFrequency: '',
          startDate: '',
          householdInfo: '',
          idealDays: [] as string[],
          mealQuantity: '',
          breakfastAddOn: false,
          dietPreferences: '',
          allergies: '',
          favorites: '',
          groceryPreference: '',
          proteins: [] as string[],
          spiceLevel: '',
          vegetarianPreference: '',
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
    <div className="min-h-screen bg-soft-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-maple/10 via-soft-white to-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-deep-charcoal mb-6 animate-fade-in-up">
              Now Accepting Clients for Fall 2025
            </h1>
            <p className="text-xl text-charcoal font-light animate-fade-in-up mb-4" style={{ animationDelay: '0.2s' }}>
              If you&apos;re interested in securing a spot, please take a moment to fill out our Service Request Form.
            </p>
            <p className="text-lg text-charcoal font-light italic animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              We will be reviewing all submissions personally and will reach out as soon as possible.
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
                {/* Name */}
                <div>
                  <div className="text-sm font-medium text-charcoal mb-4">Name (required)</div>
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
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Email (required)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Address */}
                <div>
                  <div className="text-sm font-medium text-charcoal mb-4">Address (required)</div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        readOnly
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Address Line 1 (required)</label>
                      <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Address Line 2</label>
                      <input
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">City (required)</label>
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
                        <label className="block text-sm font-medium text-charcoal mb-2">State (required)</label>
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
                        <label className="block text-sm font-medium text-charcoal mb-2">ZIP Code (required)</label>
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

                {/* Preferred Service Frequency */}
                <div>
                  <div className="text-sm font-medium text-charcoal mb-2">Preferred Service Frequency</div>
                  <p className="text-sm text-charcoal mb-4">How many days per week would you like your meals prepared?</p>
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value="once"
                        checked={formData.serviceFrequency === 'once'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">Once per week (most common)</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value="twice"
                        checked={formData.serviceFrequency === 'twice'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">Twice per week (split service – higher volume or freshness)</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value="unsure"
                        checked={formData.serviceFrequency === 'unsure'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">Not sure yet – I&apos;d like to discuss options</span>
                    </label>
                  </div>
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">When would you like to begin services?</label>
                  <select
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="3-4weeks">3-4 weeks</option>
                    <option value="1month">1 month or more</option>
                  </select>
                </div>

                {/* Household Info */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    How many people are in your household? What are their ages?
                  </label>
                  <textarea
                    name="householdInfo"
                    value={formData.householdInfo}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Ideal Days */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    What would be your ideal in-home cook or delivery day(s)?
                  </label>
                  <p className="text-sm text-gray-600 mb-4">Please check all that apply</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday or Sunday'].map((day) => (
                      <label key={day} className="flex items-center">
                        <input
                          type="checkbox"
                          name="idealDays"
                          value={day}
                          checked={formData.idealDays.includes(day)}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-charcoal">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weekly Meal Quantity */}
                <div>
                  <div className="text-sm font-medium text-charcoal mb-2">Weekly Meal Quantity</div>
                  <p className="text-sm text-charcoal mb-4">
                    How many entrees (2 portions each) and add-ons do you anticipate ordering per week?
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="mealQuantity"
                        value="3entrees"
                        checked={formData.mealQuantity === '3entrees'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">3 Entrees (6 portions)</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="mealQuantity"
                        value="4entrees"
                        checked={formData.mealQuantity === '4entrees'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">4 Entrees (8 portions)</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="mealQuantity"
                        value="5entrees"
                        checked={formData.mealQuantity === '5entrees'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">5 Entrees (10 portions)</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="mealQuantity"
                        value="6entrees"
                        checked={formData.mealQuantity === '6entrees'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">6 Entrees (12 portions – available only for split service)</span>
                    </label>
                    <label className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        name="breakfastAddOn"
                        checked={formData.breakfastAddOn}
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span className="text-sm text-charcoal">Breakfast Add-On (4 or 6 servings)</span>
                    </label>
                  </div>
                </div>

                {/* Diet Preferences */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Do you or does anyone in your family have any specific diet preferences?
                  </label>
                  <p className="text-sm text-gray-600 mb-2">Gluten Free, Paleo, Vegan, Vegetarian, etc.</p>
                  <textarea
                    name="dietPreferences"
                    value={formData.dietPreferences}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Allergies */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Please list any food allergies, intolerances, or strong dislikes.
                  </label>
                  <p className="text-sm text-gray-600 mb-2">Dairy, peanuts, brussel sprouts, etc.</p>
                  <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Favorites */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Please list any dishes, ingredients, or cuisines that you LOVE
                  </label>
                  <p className="text-sm text-gray-600 mb-2">Spicy food, Italian food, Soup, etc.</p>
                  <textarea
                    name="favorites"
                    value={formData.favorites}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Grocery Preference */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Do you have a grocery preference on conventional or organic items or produce?
                  </label>
                  <textarea
                    name="groceryPreference"
                    value={formData.groceryPreference}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  />
                </div>

                {/* Proteins */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-4">
                    Please check off all proteins that you enjoy
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3">
                    {[
                      'Chicken (light meat)', 'Chicken (dark meat)', 'Beef', 'Pork',
                      'Lamb', 'Duck', 'Tofu', 'Tempeh', 'Eggs', 'Turkey',
                      'Fish (salmon, tuna, white fish)', 'Shellfish (shrimp, scallops, clams)',
                      'Sausage', 'Beans/Legumes', 'Bison'
                    ].map((protein) => (
                      <label key={protein} className="flex items-start text-sm">
                        <input
                          type="checkbox"
                          name="proteins"
                          value={protein}
                          checked={formData.proteins.includes(protein)}
                          onChange={handleChange}
                          className="mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-charcoal leading-tight">{protein}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Spice Level */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Which spice level do you prefer?
                  </label>
                  <select
                    name="spiceLevel"
                    value={formData.spiceLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-maple/50 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="none">No spice</option>
                    <option value="mild">Mild</option>
                    <option value="medium">Medium</option>
                    <option value="hot">Hot</option>
                    <option value="very-hot">Very Hot</option>
                  </select>
                </div>

                {/* Vegetarian Preference */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-4">
                    Would you like any of your meals to be vegetarian?
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="vegetarianPreference"
                        value="all"
                        checked={formData.vegetarianPreference === 'all'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">Yes, all of them please</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="vegetarianPreference"
                        value="some"
                        checked={formData.vegetarianPreference === 'some'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">Some of them is fine</span>
                    </label>
                    <label className="flex items-start">
                      <input
                        type="radio"
                        name="vegetarianPreference"
                        value="none"
                        checked={formData.vegetarianPreference === 'none'}
                        onChange={handleChange}
                        className="mt-1 mr-3"
                      />
                      <span className="text-sm text-charcoal">Nope, I&apos;d like some meat in all of them!</span>
                    </label>
                  </div>
                </div>

                {/* Additional Comments */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Any additional comments?
                  </label>
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
                    className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  
                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
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