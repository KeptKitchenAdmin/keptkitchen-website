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
      <section className="py-8 lg:py-12 px-4 lg:px-6 xl:px-8 2xl:px-16">
        <div className="w-full">
          <div className="w-full">
            
            {/* Private Chef Service Plans - Full Width */}
            <div className="mb-8 lg:mb-12 w-full">
              <div className="bg-white border border-warm-taupe/20 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 w-full">
                <h3 className="text-3xl font-serif font-bold text-espresso mb-6">Our Services</h3>
                <div className="space-y-4 text-espresso font-serif leading-relaxed">
                  <p>Kept Kitchen Co. offers two ways to work with a private chef. Both are held to the same standard of cooking and professionalism. Each tier differs by service flexibility, frequency, and access to your chef.</p>
                </div>
              </div>
            </div>

            {/* Two Column Layout for remaining content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 w-full">
              
              {/* Left Column - Service Information */}
              <div className="space-y-6">
                
                {/* Service Range */}
                <div className="bg-white border border-warm-taupe/20 rounded-xl p-6 lg:p-8 w-full">
                  <div className="text-left">
                    <span className="text-2xl font-serif text-espresso font-bold">Weekly Culinary Service</span>
                    <p className="text-lg font-serif text-espresso mt-4 mb-4 italic">Designed for clients who prefer one or two structured cook days per week, with meals prepared in their home by a dedicated chef and enjoyed over several days.</p>
                    
                    <p className="text-lg font-serif text-espresso mt-4 mb-4">One or two days per week, your dedicated chef comes to your home to prepare a selection of meals you&apos;ve chosen from menus shaped around your tastes, dietary needs, and health goals. Those meals are then ready to support the days ahead - for family dinners, workdays, busy evenings, or grab-and-go moments.</p>
                    
                    <p className="text-lg font-serif text-espresso mt-4 mb-4">Clients choose this service because it removes the recurring stress of meal planning, grocery shopping, and daily cooking, while ensuring they consistently eat well. It fits naturally into demanding schedules and does not require you to be home during cooking sessions.</p>
                    
                    <p className="text-lg font-serif text-espresso mt-4 mb-4">Over time, your chef becomes familiar with your tastes and preferences, making each week easier and more supportive than the last.</p>
                    
                    <p className="text-lg font-serif text-espresso mt-4 mb-4 font-medium">This is our most popular service and the foundation of how many clients work with us, offering consistent private chef support through defined weekly engagements.</p>
                  </div>
                </div>

                {/* Signature Private Service */}
                <div className="bg-white border border-warm-taupe/20 rounded-xl p-6 lg:p-8 w-full">
                  <h4 className="text-xl font-serif font-bold text-espresso mb-4">The Signature Private Service</h4>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    This is our most immersive level of private chef engagement, allowing for more customizable services, and expanded access to your chef.
                  </p>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    Rather than booking individual cooking sessions, clients engage their chef on a weekly retainer, reserving a custom number of hours each week that can be applied as needed. This structure allows you to apply your chef&apos;s time throughout the week in a more fluid, custom way, on a day-to-day basis, accommodating changing schedules, and supporting your dietary needs throughout the week.
                  </p>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    Some clients prefer to continue working from planned menus; others rely on their chef to cook intuitively based on established preferences, dietary needs, and day-to-day requests. Both approaches are supported, and many households move between them naturally over time.
                  </p>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    This service is chosen by clients who want flexibility, frequency, and the ability to direct their chef&apos;s time toward what matters most in a given week — whether that&apos;s daily meals, specific dietary support, or special occasions.
                  </p>
                  <p className="text-espresso font-serif font-light mb-4 leading-relaxed">
                    Clients typically utilize this service between 12–35 hours per week, depending on your needs and preferred level of chef involvement.
                  </p>
                  <Link href="/signup" className="inline-block mt-4 bg-espresso text-white px-4 py-2 rounded-lg hover:bg-espresso/90 transition-colors font-serif">
                    Get Started with a new-client intake form
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Images sized to match corresponding text boxes */}
              <div className="space-y-6">
                {/* Image 1 - taller to match Weekly Culinary Service box */}
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/IMESSAGE_PREVIEW.jpg"
                    alt="Elegant private dining table setting with wine glasses and gourmet appetizers"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[400px] lg:h-[500px] rounded-xl"
                  />
                </div>
                
                {/* Image 2 - full size natural display */}
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/nataliya-melnychuk-NDfAjk9Mfek-unsplash copy.jpg"
                    alt="Beautiful culinary presentation with fresh ingredients"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
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
          <div className="text-center w-full max-w-4xl mx-auto">
            <h4 className="text-xl font-serif font-bold text-white mb-4">Hosting a special occasion?</h4>
            <p className="text-white font-serif font-light mb-4 leading-relaxed text-base">
              We offer private chef services for intimate gatherings, celebratory dinners, or wine-paired evenings with friends — exclusively for existing clients. From coursed menus to grazing tables, our chefs will create a bespoke culinary experience in your home.
            </p>
            <Link href="/contact">
              <button className="bg-espresso hover:bg-espresso/90 text-white font-serif py-3 px-8 rounded-full text-base font-medium transition-colors duration-300 shadow-lg mt-4">
                Contact Us To Get Started
              </button>
            </Link>
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
          <div className="text-center px-6 w-full max-w-7xl mx-auto">
          <h4 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">Hosting a special occasion?</h4>
          <p className="text-white font-serif font-light mb-8 leading-relaxed text-2xl md:text-3xl">
            We offer private chef services for intimate gatherings, celebratory dinners, or wine-paired evenings with friends — exclusively for existing clients. From coursed menus to grazing tables, our chefs will create a bespoke culinary experience in your home.
          </p>
          <Link href="/contact">
            <button className="bg-espresso hover:bg-espresso/90 text-white font-serif py-3 px-8 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg mt-6">
              Contact Us To Get Started
            </button>
          </Link>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}