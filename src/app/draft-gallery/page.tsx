'use client'

import { useState, useRef } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

interface DragItem {
  id: string
  src: string
}

export default function DraftGallery() {
  const [galleryImages, setGalleryImages] = useState<DragItem[]>([
    // Initial arrangement - you can drag and drop to reorder
    { id: '1', src: '/gallery/brooke-lark-M8kOBYwJBsg-unsplash.jpg' },
    { id: '2', src: '/gallery/eiliv-aceron-w0JzqJZYX_E-unsplash.jpg' },
    { id: '3', src: '/gallery/luisa-brimble-HvXEbkcXjSk-unsplash.jpg' },
    { id: '4', src: '/gallery/jason-jarrach-spVXtMn-3IY-unsplash.jpg' },
    { id: '5', src: '/gallery/brooke-lark-gWM8XSSefrw-unsplash.jpg' },
    { id: '6', src: '/gallery/alexandra-tran-IjrBf8rtKXE-unsplash.jpg' },
    { id: '7', src: '/gallery/kelsey-booth-rdOdR8DYIq8-unsplash.jpg' },
    { id: '8', src: '/gallery/jenn-kosar-9Er-MNdzrPA-unsplash.jpg' },
    { id: '9', src: '/gallery/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg' },
    { id: '10', src: '/gallery/erol-ahmed--N2Jdazh03Y-unsplash.jpg' },
    { id: '11', src: '/gallery/keesha-s-kitchen-vI_rW7JP-0E-unsplash.jpg' },
    { id: '12', src: '/gallery/israel-palacio-EsIrydgWxX0-unsplash.jpg' },
    { id: '13', src: '/gallery/luisa-brimble-vIm26fn_QKg-unsplash.jpg' },
    { id: '14', src: '/gallery/micheile-henderson-UzmWI5LwP70-unsplash.jpg' },
    { id: '15', src: '/gallery/aasiya-khan-4SzToZgnPcM-unsplash.jpg' },
    { id: '16', src: '/gallery/adam-bartoszewicz-DcsOKrzAF6o-unsplash.jpg' },
    { id: '17', src: '/gallery/bao-menglong-NwiLnjlaUk8-unsplash.jpg' },
    { id: '18', src: '/gallery/leanna-myers-XyBO_q2aInM-unsplash.jpg' },
    { id: '19', src: '/gallery/mariah-hewines-J89GBos3avo-unsplash.jpg' },
    { id: '20', src: '/gallery/megan-allen-YjiQSp9ftDM-unsplash.jpg' },
    { id: '21', src: '/gallery/luisa-brimble--Zn-91fcQLg-unsplash.jpg' },
    { id: '22', src: '/gallery/elisa-corvaro-DJoaulLVdEE-unsplash.jpg' },
    { id: '23', src: '/gallery/chris-curry-Fkn8D7DwwEQ-unsplash.jpg' },
    { id: '24', src: '/gallery/igor-rand-XpoJtR-n9D0-unsplash.jpg' },
    { id: '25', src: '/gallery/leanna-myers-omP-kDbTc8w-unsplash.jpg' },
    { id: '26', src: '/gallery/megan-bucknall-rh0YhbINkF4-unsplash.jpg' },
    { id: '27', src: '/gallery/natalia-gusakova-7skcX5OOQB0-unsplash.jpg' },
    { id: '28', src: '/gallery/shakti-rajpurohit-F6ajnawxySY-unsplash.jpg' },
    { id: '29', src: '/gallery/jametlene-reskp-Nk8qGIRzhm8-unsplash.jpg' },
    { id: '30', src: '/gallery/micah-giszack-Oo0bBkYK15k-unsplash.jpg' },
    { id: '31', src: '/gallery/mor-shani-gZ2CdzkxWRE-unsplash.jpg' },
    { id: '32', src: '/gallery/sigmund-CqUGPBKBYT4-unsplash.jpg' },
    { id: '33', src: '/gallery/birk-enwald-jrjc8flOi64-unsplash.jpg' },
    { id: '34', src: '/gallery/tommao-wang-MglZiOTvW4k-unsplash.jpg' }
  ])

  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const dragCounter = useRef(0)

  const deleteImage = (imageId: string) => {
    setGalleryImages(prev => prev.filter(img => img.id !== imageId))
  }

  const handleDragStart = (e: React.DragEvent, item: DragItem) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverIndex(index)
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    dragCounter.current++
  }

  const handleDragLeave = (e: React.DragEvent) => {
    dragCounter.current--
    if (dragCounter.current === 0) {
      setDragOverIndex(null)
    }
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    dragCounter.current = 0
    setDragOverIndex(null)

    if (!draggedItem) return

    const dragIndex = galleryImages.findIndex(item => item.id === draggedItem.id)
    if (dragIndex === dropIndex) return

    const newImages = [...galleryImages]
    const [removed] = newImages.splice(dragIndex, 1)
    newImages.splice(dropIndex, 0, removed)

    setGalleryImages(newImages)
    setDraggedItem(null)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
    setDragOverIndex(null)
    dragCounter.current = 0
  }

  const exportOrder = () => {
    const order = galleryImages.map(img => img.src)
    const orderString = order.map(src => `    '${src}',`).join('\n')
    console.log('Gallery order for deployment:')
    console.log('const galleryImages: string[] = [')
    console.log(orderString)
    console.log(']')
    
    // Copy to clipboard if possible
    if (navigator.clipboard) {
      const fullString = `const galleryImages: string[] = [\n${orderString}\n]`
      navigator.clipboard.writeText(fullString).then(() => {
        alert('Gallery order copied to clipboard! Check the browser console for the full code.')
      })
    } else {
      alert('Gallery order logged to console. Copy the array from there.')
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F3F0' }}>
      <Navigation />

      {/* Gallery Header */}
      <section className="pt-32 pb-8 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4" style={{ color: '#333333' }}>
            Draft Gallery - Drag & Drop Editor
          </h1>
          <p className="text-lg font-serif mb-6" style={{ color: '#666666' }}>
            Drag and drop the images below to arrange them how you want. When you&apos;re happy with the layout, click &ldquo;Export Order&rdquo; to get the code.
          </p>
          <button
            onClick={exportOrder}
            className="bg-espresso hover:bg-espresso/90 text-white font-serif py-3 px-8 rounded-full text-base font-medium transition-colors duration-300 shadow-lg mb-8"
          >
            Export Order for Deployment
          </button>
        </div>
      </section>

      {/* Draggable Gallery Grid */}
      <section className="pb-20 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                className={`aspect-square rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-move group relative ${
                  dragOverIndex === index ? 'ring-4 ring-espresso ring-opacity-50 scale-105' : ''
                } ${
                  draggedItem?.id === item.id ? 'opacity-50 scale-95' : ''
                }`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`Kept Kitchen culinary presentation ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                </div>
                
                {/* Delete button - BIG AND OBVIOUS */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteImage(item.id)
                  }}
                  className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg"
                  style={{ zIndex: 9999, fontSize: '18px' }}
                  title="Delete this image"
                >
                  ×
                </button>
                
                {/* Drag indicator */}
                <div className="absolute top-2 right-12 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-move">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 9h6v6h-6z"/>
                    <path d="M21 9h-6v6h6z"/>
                    <path d="M9 21h6v-6h-6z"/>
                    <path d="M3 9h6v6H3z"/>
                  </svg>
                </div>
                
                {/* Index number for reference */}
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="bg-white border border-warm-taupe/20 rounded-xl p-6">
            <h3 className="text-xl font-serif font-bold text-espresso mb-4">How to Use</h3>
            <div className="text-left space-y-2 text-espresso font-serif">
              <p>• <strong>Drag & Drop:</strong> Click and drag any image to reposition it</p>
              <p>• <strong>Delete Images:</strong> Hover over any image and click the red X button to remove it</p>
              <p>• <strong>Visual Feedback:</strong> Blue ring shows drop target, images fade when dragging</p>
              <p>• <strong>Position Numbers:</strong> Top-left corner shows current position</p>
              <p>• <strong>Export:</strong> Click &ldquo;Export Order&rdquo; when satisfied to get the deployment code</p>
              <p>• <strong>Deployment:</strong> I&apos;ll use your final arrangement for the live gallery</p>
            </div>
          </div>
        </div>
      </section>

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