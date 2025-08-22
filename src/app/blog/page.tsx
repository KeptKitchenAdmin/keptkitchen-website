'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />
      
      {/* Main Content */}
      <section className="pt-32 pb-12 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto" style={{maxWidth: '1200px'}}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif leading-tight text-4xl md:text-5xl lg:text-6xl" style={{ color: '#333333' }}>
              Blog
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif leading-relaxed mt-6 mx-auto" style={{ color: '#333333' }}>
              Thoughtful writing on culinary services, real-life wellness, and the evolving definition of self-care.
            </h2>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured Blog Post */}
            <Link href="/blog/is-a-private-chef-worth-it">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 relative">
                  <Image
                    src="/luisa-brimble-aFzg83dvnAI-unsplash.jpg"
                    alt="Elegant dining setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl mb-3" style={{ color: '#333333' }}>
                    Is a Private Chef Worth It? A Breakdown for Busy Professionals and Families
                  </h2>
                  <p className="text-gray-600 font-serif leading-relaxed mb-4">
                    For many families and professionals, the idea of hiring a private chef conjures images of live-in cooks plating foie gras in a marble kitchen. But a new, modern private chef model has emerged...
                  </p>
                  <div className="text-sm text-gray-500 font-serif">
                    July 13, 2025 • 5 min read
                  </div>
                </div>
              </article>
            </Link>

            {/* Second Blog Post */}
            <Link href="/blog/postpartum-nutrition-done-right">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 relative">
                  <Image
                    src="/New_Mom.jpg"
                    alt="new mom with baby postpartum nutrition and recovery support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl mb-3" style={{ color: '#333333' }}>
                    Postpartum Nutrition Done Right: Private Chef Services for New Moms
                  </h2>
                  <p className="text-gray-600 font-serif leading-relaxed mb-4">
                    Support your healing with nutrient-dense meals designed for postpartum recovery. Learn how private chef services help new moms navigate sleep deprivation and breastfeeding...
                  </p>
                  <div className="text-sm text-gray-500 font-serif">
                    July 13, 2025 • 6 min read
                  </div>
                </div>
              </article>
            </Link>

            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-serif">Coming Soon</span>
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl mb-3" style={{ color: '#333333' }}>
                  Another Post
                </h2>
                <p className="text-gray-600 font-serif leading-relaxed mb-4">
                  Stay tuned for insights on seasonal menus, locally sourced ingredients, and nutrition tips.
                </p>
                <div className="text-sm text-gray-500 font-serif">
                  Coming Soon
                </div>
              </div>
            </article>

          </div>
          
        </div>
      </section>
      
      <Footer />
    </div>
  )
}