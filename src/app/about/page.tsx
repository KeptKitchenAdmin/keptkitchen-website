'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function About() {
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

  return (
    <div className="min-h-screen bg-bone">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-ivory via-bone to-sand">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif text-espresso mb-6 leading-tight animate-fade-in-up">
              Structure, Simplicity, and Seriously Good Food
            </h3>
            <h3 className="text-3xl md:text-4xl font-serif text-espresso animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              The Details That Define Us
            </h3>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Expertly Matched */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-in">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-6">
                  Expertly matched, thoroughly vetted.
                </h2>
                <p className="text-lg text-espresso font-light leading-relaxed">
                  Every Kept chef is hand-selected for their culinary skill, professionalism, and presence in the home. 
                  We work only with seasoned chefs, compensate them well, and create an environment where they&apos;re 
                  genuinely invested in the families they serve.
                </p>
              </div>
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/2.jpg"
                  alt="Professional chef at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Menus Designed with Care */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-in">
              <div className="order-2 md:order-1 relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/3.jpg"
                  alt="Fresh seasonal ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-6">
                  Menus designed with care, built around you.
                </h2>
                <p className="text-lg text-espresso font-light leading-relaxed">
                  Each week, your chef creates a menu tailored to your preferences, health goals, and evolving feedback. 
                  We prioritize organic seasonal ingredients and nutrient-dense selections - sourcing from trusted local 
                  vendors whenever possible, and always with your household&apos;s wellbeing in mind. The result is food 
                  that feels personal, aligned, and deeply satisfying.
                </p>
              </div>
            </div>

            {/* Service Shaped Around Real Households */}
            <div className="grid md:grid-cols-2 gap-12 items-center scroll-fade-in">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-6">
                  A service shaped around real households.
                </h2>
                <p className="text-lg text-espresso font-light leading-relaxed">
                  We serve high-performing homes of all kinds, from working parents to households with complex schedules. 
                  Whether it&apos;s meals your kids will actually eat, lunch ready to take with you, or dinner handled 
                  after a packed day, we tailor every detail to fit your rhythm.
                </p>
              </div>
              <div className="bg-gradient-to-br from-warm-taupe/20 to-clay/20 h-96 md:h-[500px] rounded-2xl flex items-center justify-center">
                <div className="text-center p-12">
                  <p className="text-6xl font-serif text-clay mb-4">10+</p>
                  <p className="text-xl text-espresso font-light">Years average chef experience</p>
                </div>
              </div>
            </div>

            {/* We Handle Everything */}
            <div className="scroll-fade-in">
              <div className="bg-deep-brown text-bone rounded-3xl p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-8">
                  We handle everything, so you don&apos;t have to.
                </h2>
                <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
                  From planning and shopping to cooking, packaging, and cleanup, your chef manages the full process. 
                  Meals are neatly prepared and stocked in your fridge, ready when you are. No coordination, no stress, 
                  no work on your part.
                </p>
                <p className="text-lg font-light italic text-muted-gold">
                  We replace food stress with consistent, nourishing meals, so home life feels easier, 
                  and you can show up where it matters.
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="text-center scroll-fade-in">
              <p className="text-lg text-espresso font-light leading-relaxed max-w-3xl mx-auto">
                <strong>Our team is led by founders with extensive backgrounds in nutrition consulting and culinary operations.</strong><br/>
                That foundation shapes everything we do – from how we hire and train chefs to how we design meals and 
                support long-term wellbeing. The result is food that&apos;s both deeply satisfying and designed to 
                support long-term wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-bone to-ivory">
        <div className="container mx-auto px-6 text-center scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-6">
            Experience the difference
          </h2>
          <p className="text-xl text-espresso mb-10 max-w-2xl mx-auto font-light">
            Let us show you what it means to have your kitchen professionally kept.
          </p>
          <Link href="/signup">
            <button className="btn-primary">START YOUR JOURNEY</button>
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