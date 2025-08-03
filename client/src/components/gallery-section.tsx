const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Nusa Penida dramatic cliffs',
    title: 'Nusa Penida Cliffs',
    description: 'Breathtaking ocean views'
  },
  {
    src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Bali jungle swing adventure',
    title: 'Bali Swing',
    description: 'Thrilling jungle adventure'
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Luxury private pool villa',
    title: 'Private Villas',
    description: 'Luxury accommodations'
  },
  {
    src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Ubud rice terraces',
    title: 'Ubud Rice Fields',
    description: 'Cultural landscapes'
  },
  {
    src: 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Romantic candlelight dinner on beach',
    title: 'Candlelight Dinner',
    description: 'Romantic experiences'
  },
  {
    src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Traditional Balinese temple',
    title: 'Temple Exploration',
    description: 'Spiritual journeys'
  }
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold charcoal mb-6">
            Experience <span className="tropical-teal">Bali's Magic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From breathtaking landscapes to cultural treasures, witness the diverse beauty that makes Bali 
            an unforgettable destination for every traveler.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover gallery-image transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
