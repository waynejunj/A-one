import {
  Wrench,
  Car,
  Droplet,
  Gauge,
  Battery,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Car Repair & Maintenance',
      description:
        'Comprehensive repair solutions for all makes and models. Our expert technicians diagnose and fix mechanical issues quickly and efficiently, ensuring your vehicle runs at peak performance.',
      features: [
        'Brake system repair and replacement',
        'Suspension and steering repairs',
        'Transmission services',
        'Exhaust system repairs',
        'Clutch replacement',
      ],
      image: 'https://images.pexels.com/photos/4489739/pexels-photo-4489739.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Car,
      title: 'Engine Diagnostics',
      description:
        'State-of-the-art computerized diagnostics to identify engine problems accurately. We use advanced scanning tools to read error codes, analyze performance data, and pinpoint issues.',
      features: [
        'Check engine light diagnosis',
        'Performance testing',
        'Emission system checks',
        'Fuel system analysis',
        'Sensor calibration',
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Car Wash & Detailing',
      description:
        'Professional car cleaning services that restore your vehicle\'s showroom shine. From basic washes to complete detailing packages, we make your car look brand new.',
      features: [
        'Exterior hand wash and wax',
        'Interior deep cleaning',
        'Paint polishing and protection',
        'Upholstery shampooing',
        'Engine bay cleaning',
      ],
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Gauge,
      title: 'Wheel Alignment',
      description:
        'Precision wheel alignment services to improve handling, extend tire life, and ensure safe driving. Our computerized alignment system guarantees accuracy.',
      features: [
        '4-wheel computerized alignment',
        'Tire balancing',
        'Tire rotation',
        'Steering angle adjustment',
        'Suspension inspection',
      ],
      image: 'https://images.pexels.com/photos/13861/IMG_3496.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Battery,
      title: 'Battery Services',
      description:
        'Complete battery testing, maintenance, and replacement services. We stock quality batteries for all vehicle types and offer free testing and installation.',
      features: [
        'Battery health testing',
        'Battery replacement',
        'Charging system diagnosis',
        'Terminal cleaning and protection',
        'Emergency jump-start service',
      ],
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Droplet,
      title: 'Oil Change',
      description:
        'Quick and professional oil change services using premium lubricants. Regular oil changes are essential for engine longevity and we make it fast and affordable.',
      features: [
        'Full synthetic oil options',
        'Oil filter replacement',
        'Fluid level checks',
        'Multi-point inspection',
        'Quick 30-minute service',
      ],
      image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Assistance',
      description:
        '24/7 roadside assistance and emergency repair services. When you\'re stranded, we\'re just a call away with fast response times and mobile repair capabilities.',
      features: [
        '24/7 emergency hotline',
        'Mobile repair services',
        'Towing assistance',
        'Battery jump-start',
        'Flat tire changes',
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-[#003399] to-[#0055cc] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Comprehensive automotive solutions delivered by skilled professionals
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">
              Expert Services for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we provide complete
              automotive care with attention to detail and commitment to quality.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003399] to-[#0055cc] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#FFCC00]">
                    <div className="bg-gradient-to-br from-[#003399] to-[#0055cc] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-[#FFCC00]" />
                    </div>

                    <h3 className="text-3xl font-bold text-[#003399] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#003399] text-lg mb-3">
                        What's Included:
                      </h4>
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 bg-gradient-to-r from-[#003399] to-[#0055cc] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003399] to-[#0055cc] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Why Choose A-One Auto Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#FFCC00] mb-2">
                  15+
                </div>
                <p className="text-lg">Years of Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#FFCC00] mb-2">
                  50+
                </div>
                <p className="text-lg">Expert Technicians</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#FFCC00] mb-2">
                  99%
                </div>
                <p className="text-lg">Customer Satisfaction</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl mb-8 text-gray-100">
                Ready to experience professional automotive care?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#FFCC00] text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700] transition-all hover:scale-105 shadow-xl">
                  Schedule Service
                </button>
                <a
                  href="tel:+254722435888"
                  className="bg-white text-[#003399] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  Call +254 722 435 888
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
