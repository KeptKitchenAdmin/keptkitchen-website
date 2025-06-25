'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {

  return (
    <div className="min-h-screen bg-bone">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-espresso mb-8 leading-tight">
            About Kept Kitchen Co.
          </h1>
          <p className="text-xl text-espresso/80 font-serif font-light leading-relaxed max-w-3xl mx-auto">
            We&apos;re a premium private chef service designed for busy households who value fresh, nutritious meals without the stress of planning, shopping, or cooking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-espresso mb-6">Founded by nutrition and culinary experts</h2>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed mb-6">
                Our team is led by founders with extensive backgrounds in nutrition consulting and culinary operations. That foundation shapes everything we do - from how we hire and train chefs to how we design meals and support long-term wellbeing.
              </p>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed">
                The result is food that&apos;s both deeply satisfying and designed to support your family&apos;s health and energy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-espresso mb-6">How we&apos;re different</h2>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed mb-6">
                Every detail is designed around busy households who value both quality and convenience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-espresso mb-4 font-medium">Expertly matched, thoroughly vetted</h3>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed mb-8">
                Every Kept chef is hand-selected for their culinary skill, professionalism, and presence in the home. We work only with seasoned chefs, compensate them well, and create an environment where they&apos;re genuinely invested in the families they serve.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-espresso mb-4 font-medium">Menus designed with care, built around you</h3>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed mb-8">
                Each week, your chef creates a menu tailored to your preferences, health goals, and evolving feedback. We prioritize organic seasonal ingredients and nutrient-dense selections - sourcing from trusted local vendors whenever possible.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-espresso mb-4 font-medium">A service shaped around real households</h3>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed mb-8">
                We serve high-performing homes of all kinds, from working parents to households with complex schedules. Whether it&apos;s meals your kids will actually eat, lunch ready to take with you, or dinner handled after a packed day, we tailor every detail to fit your rhythm.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-espresso mb-4 font-medium">We handle everything, so you don&apos;t have to</h3>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed mb-8">
                From planning and shopping to cooking, packaging, and cleanup, your chef manages the full process. Meals are neatly prepared and stocked in your fridge, ready when you are. No coordination, no stress, no work on your part.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-espresso mb-6">Ready to transform your home life?</h2>
              <p className="text-lg text-espresso/80 font-serif font-light leading-relaxed">
                Join the families who&apos;ve made mealtime stress a thing of the past.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}