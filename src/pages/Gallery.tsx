import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4489739/pexels-photo-4489739.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Engine Repair',
      description: 'Complete engine overhaul and restoration',
    },
    {
      before: 'https://images.pexels.com/photos/5214145/pexels-photo-5214145.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Car Detailing',
      description: 'Professional wash and detailing service',
    },
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Oil Change Service',
      description: 'Quick and efficient oil change',
    },
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Battery Replacement',
      description: 'New battery installation and testing',
    },
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4489739/pexels-photo-4489739.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brake System Repair',
      description: 'Complete brake system service',
    },
    {
      before: 'https://images.pexels.com/photos/5214145/pexels-photo-5214145.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/13861/IMG_3496.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wheel Alignment',
      description: 'Precision wheel alignment service',
    },
  ];

  const workImages = [
    'https://images.pexels.com/photos/4489739/pexels-photo-4489739.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13861/IMG_3496.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5214145/pexels-photo-5214145.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4489739/pexels-photo-4489739.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-[#003399] to-[#0055cc] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              See the quality of our work through real results
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Witness the dramatic improvements our expert services deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item.before)}>
                      <img
                        src={item.before}
                        alt="Before"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          BEFORE
                        </span>
                      </div>
                    </div>
                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage(item.after)}>
                      <img
                        src={item.after}
                        alt="After"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-[#FFCC00]/80 flex items-center justify-center">
                        <span className="text-[#003399] font-bold text-lg">
                          AFTER
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003399] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">
              Our Workshop in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our state-of-the-art facility and expert team at work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {workImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Workshop ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003399] to-[#0055cc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the same quality service showcased in our gallery. Book your
            appointment today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#FFCC00] text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-all hover:scale-105 shadow-xl">
              Book Service Now
            </button>
            <a
              href="tel:+254722435888"
              className="bg-white text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Call +254 722 435 888
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white text-[#003399] p-2 rounded-full hover:bg-[#FFCC00] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
