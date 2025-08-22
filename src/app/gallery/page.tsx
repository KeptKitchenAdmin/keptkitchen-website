'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Curated gallery images arranged by user preference
  const galleryImages: string[] = [
    '/gallery/brooke-lark-M8kOBYwJBsg-unsplash.jpg',
    '/gallery/eiliv-aceron-w0JzqJZYX_E-unsplash.jpg',
    '/gallery/brooke-lark-gWM8XSSefrw-unsplash.jpg',
    '/gallery/bao-menglong-NwiLnjlaUk8-unsplash.jpg',
    '/gallery/luisa-brimble-vIm26fn_QKg-unsplash.jpg',
    '/gallery/alexandra-tran-IjrBf8rtKXE-unsplash.jpg',
    '/gallery/micheile-henderson-UzmWI5LwP70-unsplash.jpg',
    '/gallery/israel-palacio-EsIrydgWxX0-unsplash.jpg',
    '/gallery/jenn-kosar-9Er-MNdzrPA-unsplash.jpg',
    '/gallery/keesha-s-kitchen-vI_rW7JP-0E-unsplash.jpg',
    '/gallery/anacristina-smith-EJuEpcZeW4I-unsplash.jpg',
    '/gallery/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg',
    '/gallery/kelsey-booth-rdOdR8DYIq8-unsplash.jpg',
    '/gallery/erol-ahmed--N2Jdazh03Y-unsplash.jpg',
    '/gallery/aasiya-khan-4SzToZgnPcM-unsplash.jpg',
    '/gallery/adam-bartoszewicz-DcsOKrzAF6o-unsplash.jpg',
    '/gallery/igor-rand-XpoJtR-n9D0-unsplash.jpg',
    '/gallery/mariah-hewines-J89GBos3avo-unsplash.jpg',
    '/gallery/leanna-myers-XyBO_q2aInM-unsplash.jpg',
    '/gallery/megan-allen-YjiQSp9ftDM-unsplash.jpg',
    '/gallery/leanna-myers-omP-kDbTc8w-unsplash.jpg',
    '/gallery/elisa-corvaro-DJoaulLVdEE-unsplash.jpg',
    '/gallery/tommao-wang-MglZiOTvW4k-unsplash.jpg',
    '/gallery/chris-curry-Fkn8D7DwwEQ-unsplash.jpg',
    '/gallery/megan-bucknall-rh0YhbINkF4-unsplash.jpg',
    '/gallery/shakti-rajpurohit-F6ajnawxySY-unsplash.jpg',
    '/gallery/jametlene-reskp-Nk8qGIRzhm8-unsplash.jpg',
    '/gallery/mor-shani-gZ2CdzkxWRE-unsplash.jpg',
    '/gallery/sigmund-CqUGPBKBYT4-unsplash.jpg',
    '/gallery/birk-enwald-jrjc8flOi64-unsplash.jpg',
  ]

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />

      {/* Gallery Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8" style={{ color: '#333333' }}>
            A Closer Look at the Culinary Experience
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(image)}
                >
                  <Image
                    src={image}
                    alt={`Kept Kitchen culinary presentation ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8B4513' }}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4" style={{ color: '#333333' }}>
                  Gallery Coming Soon
                </h3>
                <p className="text-gray-600 font-serif leading-relaxed">
                  We&apos;re preparing beautiful images of our culinary creations to showcase the exceptional quality and presentation our clients enjoy.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Kept Kitchen culinary presentation"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Note */}
      <section className="pb-8 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <p className="text-xs text-gray-500 font-serif italic max-w-2xl mx-auto">
            These images reflect the tone, aesthetic, and standard of presentation our clients enjoy. Client-specific imagery coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}