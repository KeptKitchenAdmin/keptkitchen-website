import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServicesAccordion from '@/components/ServicesAccordion'

export default function Services() {

  const steps = [
    {
      title: 'Sign Up for Services',
      description: 'Submitting your intake form will provide us with information on your needs, dietary restrictions, food preferences, preparation frequency, schedule, and more, so we can match you with a chef that\'s right for you.'
    },
    {
      title: 'Kitchen Assessment & Onboarding',
      description: 'We\'ll reach out to schedule a kitchen assessment to review your intake form, kitchen equipment, service goals, and answer any questions you may have! If our services are a good fit for you and your needs, we will follow-up with a service agreement and schedule your first cook date with your new chef.'
    },
    {
      title: 'Personalized menus every week',
      description: 'Each Friday, your chef will send a custom weekly menu for your review and selection. Menus feature seasonal offerings made with organic produce, grass-fed proteins, and high-quality ingredients as much as possible. Clients start with a base plan and can add breakfasts, snacks, kid-friendly favorites, or additional cook days as needed.'
    },
    {
      title: 'Cook Day',
      description: 'On your scheduled cook day, your chef takes care of everything - shopping, preparation, plating, labeling, storage, and cleanup, leaving your kitchen spotless and your fridge stocked with beautifully prepared meals.'
    },
    {
      title: 'Enjoy, Relax, and Provide Feedback Any Time',
      description: 'You can text or email your chef any time to adjust preferences or offer feedback - just make sure you submit any special requests or changes for the upcoming week by Thursday at 10pm. We will always adapt as your needs and tastes evolve.'
    },
    {
      title: 'Schedule Your Next Cook Date',
      description: 'Whether you wish to have recurring service on the same day each week, or want to add additional service days, you\'ll have direct access to your chef\'s calendar to book in advance. Plan weeks ahead, adjust as needed, and maintain a seamless experience on your terms.'
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 min-h-[30vh] flex items-center overflow-hidden">
        <Image
          src="/jivitharsan-suresh-Nm4NP4s78Hg-unsplash.jpg"
          alt="Elegant culinary ingredients and preparation"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 30%' }}
          priority
        />
        {/* Darkening overlay - v2 */}
        <div className="absolute inset-0 z-10" style={{backgroundColor: 'rgba(0,0,0,0.4)'}} />
        
        
        <div className="w-full relative z-20">
          {/* Mobile Header */}
          <div className="flex justify-center md:hidden">
            <h1 className="text-3xl font-serif text-white mb-6 leading-tight tracking-tight px-4 py-2 bg-black/40 rounded-lg text-center">
              <span className="whitespace-nowrap">A Seamless Culinary Experience,</span><br /><span className="whitespace-nowrap">Designed for You</span>
            </h1>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:flex justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight tracking-tight px-6 py-3 bg-black/40 rounded-lg text-center">
              A Seamless Culinary Experience,<br />Designed for You
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="relative inline-block max-w-3xl">
              {/* Very subtle blended background behind subtitle */}
              <div className="absolute inset-0 -inset-x-0.5 -inset-y-0.5 bg-black/20 rounded-xl"></div>
              <p className="relative text-xl text-white font-serif font-light leading-relaxed tracking-wide px-1 py-0.5">
                
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      <br />

      
      {/* Part 2: Service Overview */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Private Chef Service Plans - Full Width */}
            <div className="mb-12">
              <div className="bg-white border border-warm-taupe/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-serif font-bold text-espresso mb-6">Private Chef Service Plans & Pricing</h3>
                <div className="space-y-4 text-espresso font-serif leading-relaxed">
                  <p>Weekly service plans start at <span className="font-bold">$499/week</span> and vary based on food volume, weekly service frequency, custom add-ons, and commitment length. Premium service tiers with expanded offerings and frequent weekly in-home visits may range up to $1,200+/week.</p>
                  <p>Discounted rates are available for clients on 6- or 12-month commitments.</p>
                </div>
              </div>
            </div>

            {/* Two Column Layout for remaining content */}
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              
              {/* Left Column - Service Information */}
              <div className="space-y-6">
                
                {/* Service Range */}
                <div className="bg-white border border-warm-taupe/20 rounded-xl p-8">
                  <div className="text-left">
                    <span className="text-2xl font-serif text-espresso font-bold">Weekly Base Service Plans</span>
                    <p className="text-lg font-serif text-espresso mt-4 mb-4">3, 4, or 5 Entrée Base (6, 8, or 10 servings)</p>
                    <p className="text-sm text-espresso/70 font-serif italic">
                      Each entrée includes two large portions.
                    </p>
                    <p className="text-sm text-espresso/70 font-serif italic">
                      Groceries billed separately.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-warm-taupe/20">
                  <div className="text-left">
                    <h3 className="text-xl font-serif font-bold text-espresso mb-2">Optional Add-Ons</h3>
                    <p className="text-espresso/80 mb-6 font-serif"><em>Supplement your weekly meals with chef-prepared extras</em></p>
                    <div className="text-left space-y-3 mb-4">
                      <p className="text-espresso font-serif">• Breakfast / Snack Add-On (4 or 6 serving options)</p>
                      <p className="text-espresso font-serif">• Kid-Favorite Meals Add-On (4 or 6 serving options)</p>
                    </div>
                    <p className="text-espresso/70 font-serif text-sm leading-relaxed mb-2">
                      Curious about what kinds of things our chefs list in these menu add-ons? Check out our example menus here.
                    </p>
                    <p className="text-xs text-espresso/60 font-serif italic">
                      Kid portions are about 1/2 the size of our standard large adult portions
                    </p>
                  </div>
                  </div>
                </div>

                {/* Multiple Visits */}
                <div className="bg-white border border-warm-taupe/20 rounded-xl p-8">
                  <h4 className="text-xl font-serif font-bold text-espresso mb-4">Prefer multiple chef visits per week?</h4>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    For households that enjoy smaller-batch cooking, added flexibility, or an enhanced in-home presence, we offer custom service plans with multiple chef visits per week. 
                  </p>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    Whether you&apos;re planning shared meals with family or simply prefer more frequent private chef service, we&apos;ll tailor a schedule that fits your rhythm and lifestyle. Just let us know during onboarding.
                  </p>
                  <Link href="/signup" className="inline-block mt-4 bg-espresso text-white px-4 py-2 rounded-lg hover:bg-espresso/90 transition-colors font-serif">
                    Get Started with a new-client intake form
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex">
                <Image
                  src="/IMESSAGE_PREVIEW.jpg"
                  alt="Elegant private dining table setting with wine glasses and gourmet appetizers"
                  width={600}
                  height={1200}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title with Background Image */}
      <section className="relative" style={{padding: '3rem 1.5rem'}}>
        <Image
          src="/jivitharsan-suresh-Nm4NP4s78Hg-unsplash.jpg"
          alt="Elegant culinary ingredients and preparation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></div>
        <div className="container mx-auto relative z-10">
          {/* Mobile Header */}
          <div className="text-center md:hidden">
            <h2 className="text-3xl font-serif font-light text-white mb-6 opacity-90 leading-tight px-4">
              <span className="whitespace-nowrap">What to Expect from Our</span><br /><span className="whitespace-nowrap">In-Home Chef Experience</span>
            </h2>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:block text-center">
            <h2 style={{fontSize: '4.5rem', fontFamily: 'var(--font-serif)', fontWeight: '300', color: 'white', marginBottom: '2rem', opacity: '0.9', lineHeight: '1.4'}}>
              What to Expect
            </h2>
          </div>
        </div>
      </section>

      {/* What to Expect from Our In-Home Chef Experience */}
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
                <p className="text-lg text-espresso font-serif font-light mb-6 leading-relaxed">
                  Whether you&apos;re looking to nourish your family, streamline your week, or elevate your everyday meals, your chef is there to create a seamless, high-touch experience that evolves with you.
                </p>
                <p className="text-lg text-espresso font-serif font-bold mb-6 leading-relaxed">
                  Welcome to elevated living, one meal at a time.
                </p>
              </div>

              {/* Right Column - Accordion Steps */}
              <ServicesAccordion steps={steps} />
            </div>

          </div>
        </div>
      </section>

      {/* Full Background Image Section with Special Occasions Content */}
      
      {/* Mobile Layout */}
      <section className="relative w-full h-[70vh] md:hidden">
        <Image
          src="/halanna-halila-LC3f9Iyrsfw-unsplash.jpg"
          alt="Elegant outdoor tea setting with fresh flowers and gourmet treats"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></div>
        
        <div className="absolute inset-0 flex items-start justify-center z-10 px-4 pt-12">
          <div className="text-center max-w-md mx-auto">
            <h4 className="text-xl font-serif font-bold text-white mb-4">Hosting a special occasion?</h4>
            <p className="text-white font-serif font-light mb-4 leading-relaxed text-base">
              We offer private chef services for intimate gatherings, celebratory dinners, or wine-paired evenings with friends — exclusively for existing clients. From coursed menus to grazing tables, our chefs will create a bespoke culinary experience in your home.
            </p>
            <p className="text-xs text-white/90 font-serif italic">
              Availability is limited. <Link href="/contact" className="underline hover:text-white/80 transition-colors font-medium">Contact us to inquire about custom pricing.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="relative w-full hidden md:block" style={{height: 'auto'}}>
        <div style={{width: '100%', height: '0', paddingBottom: '75%', position: 'relative'}}>
          <Image
            src="/halanna-halila-LC3f9Iyrsfw-unsplash.jpg"
            alt="Elegant outdoor tea setting with fresh flowers and gourmet treats"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></div>
        
        <div className="absolute inset-0 flex items-start justify-center z-10 pt-40">
          <div className="text-center px-6 max-w-5xl mx-auto">
          <h4 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">Hosting a special occasion?</h4>
          <p className="text-white font-serif font-light mb-8 leading-relaxed text-2xl md:text-3xl">
            We offer private chef services for intimate gatherings, celebratory dinners, or wine-paired evenings with friends — exclusively for existing clients. From coursed menus to grazing tables, our chefs will create a bespoke culinary experience in your home.
          </p>
          <p className="text-sm md:text-base text-white/90 font-serif italic">
            Availability is limited. <Link href="/contact" className="underline hover:text-white/80 transition-colors font-medium">Contact us to inquire about custom pricing.</Link>
          </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-12 px-6" style={{ backgroundColor: '#F5F3F0' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border border-warm-taupe/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-serif font-bold text-espresso mb-4">Join the waitlist to begin</h4>
              <p className="text-espresso font-serif mb-6 leading-relaxed">We&apos;ll follow up to schedule a kitchen-assessment, discuss your dietary preferences, needs, pricing, and answer all your questions before matching you with your dedicated chef.</p>
              <Link href="/signup">
                <button className="bg-espresso hover:bg-espresso/90 text-white font-serif py-3 px-8 rounded-full text-base font-medium transition-colors duration-300 shadow-lg">
                  Join Our Waitlist
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