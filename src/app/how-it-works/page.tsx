import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServicesAccordion from '@/components/ServicesAccordion'

export default function HowItWorks() {
  const steps = [
    {
      title: 'Submit New Client Intake Form',
      description: 'Submitting your intake form provides us with key information about your preferences and needs. Once submitted, we\'ll be in touch shortly to schedule an onboarding meeting.'
    },
    {
      title: 'Onboarding & Kitchen Assessment',
      description: 'We\'ll schedule a kitchen assessment to discuss your unique needs, review your kitchen setup, and answer any questions you may have. If our services are a good fit, we\'ll follow up with a service agreement and schedule your first cook date.'
    },
    {
      title: 'Personalized menus every week',
      description: 'Each week, your chef sends a custom menu for your review and selection. Menus feature seasonal offerings made with organic produce, grass-fed proteins, and high-quality ingredients.'
    },
    {
      title: 'Service Days',
      description: 'On your scheduled cook day(s), your chef handles everything - shopping, preparation, plating, labeling, storage, and cleanup, leaving your kitchen spotless.'
    },
    {
      title: 'Ongoing Scheduling',
      description: 'You\'ll have direct access to your chef\'s calendar to book recurring service or add additional days. Plan weeks ahead, adjust as needed, and maintain seamless service on your terms.'
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 min-h-[40vh] flex items-center overflow-hidden">
        <Image
          src="/jivitharsan-suresh-Nm4NP4s78Hg-unsplash.jpg"
          alt="Elegant culinary ingredients and preparation"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 30%' }}
          priority
        />
        <div className="absolute inset-0 z-10" style={{backgroundColor: 'rgba(0,0,0,0.4)'}} />
        
        <div className="w-full relative z-20">
          <div className="flex justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight tracking-tight text-center">
              What to Expect from Our<br />In-Home Chef Experience
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Description */}
              <div className="">
                <p className="text-lg text-espresso font-serif font-light mb-6 leading-relaxed">
                  We offer private in-home chef services for households seeking exceptional, thoughtfully prepared meals without the time investment on planning, shopping, prepping, cooking, or cleaning. Each week, you&apos;ll receive custom menus and dedicated attention from your assigned chef — tailored to your preferences, schedule, and household needs.
                </p>
                <p className="text-lg text-espresso font-serif font-light mb-6 leading-relaxed">
                  Service is designed to be flexible: cook days can repeat weekly or shift based on your calendar. Your chef handles everything from planning and shopping to cleanup, delivering a seamless, high-touch experience that evolves with you.
                </p>
              </div>

              {/* Right Column - Accordion Steps */}
              <ServicesAccordion steps={steps} />
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6" style={{ backgroundColor: '#F5F3F0' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border border-warm-taupe/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-serif font-bold text-espresso mb-4">Ready to get started?</h4>
              <p className="text-espresso font-serif mb-6 leading-relaxed">Complete our service request form and we&apos;ll be in touch to schedule your consultation.</p>
              <Link href="/signup">
                <button className="bg-espresso hover:bg-espresso/90 text-white font-serif py-3 px-8 rounded-full text-base font-medium transition-colors duration-300 shadow-lg">
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}