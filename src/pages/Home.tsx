import {Car,Wrench,CheckCircle,Award,Clock,DollarSign,Star,ArrowRight,Shield,Users,ChevronLeft,ChevronRight} from 'lucide-react';
import React, { useState, useEffect } from 'react';


const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Mechanics',
      description: 'Certified professionals with years of experience',
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick turnaround without compromising quality',
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Competitive rates with transparent pricing',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'We stand behind every service we provide',
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Car Repair',
      description: 'Complete repair solutions for all vehicle issues',
    },
    {
      icon: Car,
      title: 'Diagnostics',
      description: 'Advanced engine diagnostics and troubleshooting',
    },
    {
      icon: Shield,
      title: 'Maintenance',
      description: 'Regular maintenance to keep your car running smoothly',
    },
  ];

  const testimonials = [
    {
      name: 'David Kamau',
      rating: 5,
      text: 'Exceptional service! They fixed my car quickly and at a fair price. Highly recommend A-One Auto Services.',
    },
    {
      name: 'Sarah Mwangi',
      rating: 5,
      text: 'Professional team with great attention to detail. My car has never run better. Thank you!',
    },
    {
      name: 'James Ochieng',
      rating: 5,
      text: 'Best auto service in Nairobi! Reliable, honest, and skilled mechanics. Will definitely return.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual auto service images
  const images = [
    'http://www.a-oneauto.co.ke/images/1.jpg',
    'http://www.a-oneauto.co.ke/images/2.jpg',
    'http://www.a-oneauto.co.ke/images/3.jpg',
    'http://www.a-oneauto.co.ke/images/4.jpg',
    'http://www.a-oneauto.co.ke/images/5.jpg',
    'http://www.a-oneauto.co.ke/images/6.jpg',
    'http://www.a-oneauto.co.ke/images/7.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-[#003399] via-[#0044aa] to-[#0055cc] text-white py-24 overflow-hidden h-[600px] md:h-[700px]">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Auto service ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003399]/90 via-[#0044aa]/85 to-[#0055cc]/80"></div>
            </div>
          ))}
        </div>

        {/* Decorative blur elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFCC00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFCC00] rounded-full blur-3xl"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Auto Service Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Experience excellence in automotive care with skilled mechanics,
              modern equipment, and unmatched customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FFCC00] text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-all hover:scale-105 shadow-xl flex items-center space-x-2">
                <span>Book Service Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+254722521446"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 shadow-xl"
              >
                Call +254 722 521 446
              </a>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? 'w-12 h-3 bg-[#FFCC00]'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-[#FFCC00]"
              >
                <div className="bg-gradient-to-br from-[#003399] to-[#0055cc] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#FFCC00]" />
                </div>
                <h3 className="text-xl font-bold text-[#003399] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#003399] to-[#0055cc] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <service.icon className="w-20 h-20 text-[#FFCC00]" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#003399] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-[#003399] font-semibold hover:text-[#FFCC00] transition-colors flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FFCC00] text-[#FFCC00]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#003399] to-[#0055cc] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#003399]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003399] to-[#0055cc] text-white">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-[#FFCC00] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Book your appointment today and experience the A-One difference.
            Professional service, fair prices, and satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#FFCC00] text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-all hover:scale-105 shadow-xl">
              Book Appointment
            </button>
            <a
              href="tel:+254722521446"
              className="bg-white text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
