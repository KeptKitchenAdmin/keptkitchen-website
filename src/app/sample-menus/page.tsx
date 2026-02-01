'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation as SwiperNavigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function SampleMenus() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const menuImages = [
    '/menus/ENTREE EXAMPLE %231.png',
    '/menus/BREAKFAST EXAMPLE %231.png',
    '/menus/KID FAVS EXAMPLE %231.png',
    '/menus/ENTREE EXAMPLE %232.png',
    '/menus/SMALL BITES EXAMPLE %231.png',
    '/menus/VEG ENTREE EXAMPLE.png',
    '/menus/BREAKFAST EXAMPLE %232.png',
    '/menus/ENTREE EXAMPLE %233.png',
    '/menus/SMALL BITES EXAMPLE %232.png',
    '/menus/KID FAVS EXAMPLE %232.png'
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 767px) {
            .mobile-hero {
              padding-bottom: 0.5rem !important;
            }
            .mobile-carousel {
              padding-top: 0.25rem !important;
              padding-bottom: 0.5rem !important;
            }
          }
        `
      }} />
      <div className="min-h-screen" style={{ backgroundColor: '#D4CFC9' }}>
        <Navigation />

      {/* Hero Section */}
      <section className="mobile-hero relative pt-32 pb-8 px-6 min-h-[35vh] flex items-center overflow-hidden">
        <Image
          src="/jivitharsan-suresh-Nm4NP4s78Hg-unsplash.jpg"
          alt="Elegant culinary preparations"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 30%' }}
          priority
        />
        <div className="absolute inset-0 z-10" style={{backgroundColor: 'rgba(0,0,0,0.4)'}} />
        
        <div className="w-full relative z-20">
          <div className="flex justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight tracking-tight">
                Sample Menus
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-serif font-light">
                Explore our seasonal menu selections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="mobile-carousel px-6" style={{ paddingTop: '10px', paddingBottom: '1.5rem' }}>
        <div className="w-full px-4">
          <div className="max-w-none mx-auto">
            <Swiper
              modules={[SwiperNavigation]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="relative"
            >
              {menuImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[800px] flex items-center justify-center">
                    <Image
                      src={image}
                      alt={`Menu ${index + 1}`}
                      width={700}
                      height={900}
                      className="cursor-pointer transition-transform duration-300 hover:scale-105"
                      style={{ width: '650px', height: 'auto' }}
                      sizes="700px"
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                </SwiperSlide>
              ))}
              
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
                <svg className="w-6 h-6 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
                <svg className="w-6 h-6 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Modal for Full Size Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Menu detail"
              width={600}
              height={800}
              className="object-contain max-w-full max-h-none"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}

        <Footer />
      </div>
    </>
  )
}