'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />
      
      {/* Main Content */}
      <section className="pt-32 pb-12 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto" style={{maxWidth: '1400px'}}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            
            {/* Left Side - Content */}
            <div className="space-y-8 pr-0 md:pr-4">
              <h1 className="font-serif leading-tight text-center" style={{ fontSize: '64px', color: '#333333' }}>
                About Us
              </h1>
              
              <div className="space-y-6">
                
                <p className="text-base md:text-lg font-serif font-bold leading-relaxed" style={{ color: '#333333' }}>
                  When meals are prepared with care and clarity, the impact is felt far beyond the kitchen.
                </p>
                
                <p className="text-base md:text-lg font-serif leading-relaxed" style={{ color: '#333333' }}>
                  Founded by nutrition and culinary experts with extensive backgrounds in nutrition consulting and culinary operations, our team brings a unique perspective that shapes everything we do - from how we hire and train chefs to how we design meals and support long-term wellbeing.
                </p>
                
                <p className="text-base md:text-lg font-serif leading-relaxed" style={{ color: '#333333' }}>
                  When meals are planned, prepared, and handled properly, the effects are felt across every part of your day: more energy, more control, and fewer decisions.
                </p>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative h-full min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="Outdoor private dining setup with wine service for luxury meal experiences"
                fill
                className="object-cover"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}