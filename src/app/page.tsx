'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

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
      question: "How does the private chef service work?",
      answer: "Our private chefs come to your home with fresh ingredients and prepare customized meals based on your preferences. We handle everything from menu planning to cleanup, allowing you to enjoy restaurant-quality dining in the comfort of your home."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve the greater metropolitan area and surrounding suburbs. Contact us to confirm service availability in your specific location."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 48 hours in advance for regular service. For special events or holidays, we suggest booking 1-2 weeks ahead to ensure availability."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely. Our chefs are experienced in preparing meals for various dietary needs including vegetarian, vegan, gluten-free, keto, and allergy-specific requirements."
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Kept Kitchen has transformed our family dinners. The quality is exceptional and having more time with my family is priceless.",
      title: "Busy Professional"
    },
    {
      name: "David L.",
      text: "The attention to detail and personalized service exceeded all expectations. It's like having a Michelin-star restaurant in our home.",
      title: "Tech Executive"
    },
    {
      name: "Jennifer K.",
      text: "Perfect for our dinner parties. Our guests are always impressed, and I actually get to enjoy the evening.",
      title: "Art Collector"
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--soft-white)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--soft-white)] backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif text-[var(--black)]">
              Kept Kitchen Co.
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[var(--charcoal)] hover:opacity-70 transition-opacity">Services</a>
              <a href="#about" className="text-[var(--charcoal)] hover:opacity-70 transition-opacity">About</a>
              <a href="#testimonials" className="text-[var(--charcoal)] hover:opacity-70 transition-opacity">Testimonials</a>
              <a href="#faq" className="text-[var(--charcoal)] hover:opacity-70 transition-opacity">FAQ</a>
              <button className="btn-primary">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[var(--charcoal)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M6 6L18 18M6 18L18 6" />
                ) : (
                  <path d="M3 12H21M3 6H21M3 18H21" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-[var(--taupe)] pt-6">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-[var(--charcoal)]">Services</a>
                <a href="#about" className="text-[var(--charcoal)]">About</a>
                <a href="#testimonials" className="text-[var(--charcoal)]">Testimonials</a>
                <a href="#faq" className="text-[var(--charcoal)]">FAQ</a>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--black)] mb-6 leading-tight">
              Elevate Your
              <span className="block">Home Dining</span>
            </h1>
            <p className="text-xl text-[var(--charcoal)] mb-10 max-w-2xl mx-auto">
              Experience the luxury of a private chef. Exceptional cuisine, 
              personalized menus, and impeccable service in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Book Your Chef</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[var(--cream)]">
        <div className="container mx-auto px-6 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[var(--black)] mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg rounded-lg">
              <div className="w-20 h-20 bg-[var(--taupe)] rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-serif text-[var(--black)] mb-4">Weekly Service</h3>
              <p className="text-[var(--charcoal)]">
                Regular meal preparation tailored to your schedule and preferences. 
                Fresh, healthy meals ready when you are.
              </p>
            </div>
            <div className="text-center p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg rounded-lg">
              <div className="w-20 h-20 bg-[var(--taupe)] rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-serif text-[var(--black)] mb-4">Dinner Parties</h3>
              <p className="text-[var(--charcoal)]">
                Impress your guests with restaurant-quality cuisine and professional service. 
                Perfect for intimate gatherings.
              </p>
            </div>
            <div className="text-center p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg rounded-lg">
              <div className="w-20 h-20 bg-[var(--taupe)] rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-serif text-[var(--black)] mb-4">Special Events</h3>
              <p className="text-[var(--charcoal)]">
                From anniversaries to celebrations, make every occasion memorable 
                with customized menus and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto scroll-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--black)] mb-6">
                Crafted with Care
              </h2>
              <p className="text-[var(--charcoal)] mb-6">
                At Kept Kitchen Co., we believe that exceptional food is about more than just ingredients. 
                It&apos;s about the care, creativity, and passion that goes into every dish.
              </p>
              <p className="text-[var(--charcoal)] mb-6">
                Our chefs bring years of experience from the world&apos;s finest kitchens to your home, 
                creating personalized culinary experiences that reflect your tastes and lifestyle.
              </p>
              <p className="text-[var(--charcoal)]">
                From sourcing the freshest local ingredients to presenting each plate with artistic precision, 
                we handle every detail so you can savor the moment.
              </p>
            </div>
            <div className="bg-[var(--beige)] aspect-[4/5] rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[var(--taupe)] relative">
        <div className="container mx-auto px-6 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[var(--black)] mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[var(--white)] p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <p className="text-[var(--charcoal)] mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-serif text-[var(--black)] text-lg">{testimonial.name}</p>
                  <p className="text-sm text-[var(--warm-gray)]">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[var(--black)] mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-[var(--taupe)] pb-4"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left py-4 flex justify-between items-center hover:opacity-70 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-[var(--black)]">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-[var(--charcoal)] transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="pb-4">
                    <p className="text-[var(--charcoal)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="container mx-auto px-6 text-center scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--black)] mb-6">
            Ready to Elevate Your Dining?
          </h2>
          <p className="text-xl text-[var(--charcoal)] mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how Kept Kitchen Co. can transform your home dining experience.
          </p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--charcoal)] text-[var(--white)]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Kept Kitchen Co.</h3>
              <p className="text-[var(--warm-gray)]">
                Exceptional private chef services for discerning clients.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-[var(--warm-gray)]">
                <li><a href="#" className="hover:text-[var(--white)] transition-colors">Weekly Service</a></li>
                <li><a href="#" className="hover:text-[var(--white)] transition-colors">Dinner Parties</a></li>
                <li><a href="#" className="hover:text-[var(--white)] transition-colors">Special Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-[var(--warm-gray)]">
                <li><a href="#" className="hover:text-[var(--white)] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[var(--white)] transition-colors">Our Chefs</a></li>
                <li><a href="#" className="hover:text-[var(--white)] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-[var(--warm-gray)]">
                <li>hello@keptkitchen.co</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--warm-gray)] pt-8 text-center text-[var(--warm-gray)]">
            <p>&copy; 2024 Kept Kitchen Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}