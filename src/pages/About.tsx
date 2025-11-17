import { Target, Award, Users, Wrench, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on the quality of our work or parts we use.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and safety are our top priorities.',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Honest pricing and transparent communication in every service.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We stay updated with the latest automotive technologies.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Satisfied Customers' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '99%', label: 'Success Rate' },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-[#003399] to-[#0055cc] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About A-One Auto Services</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Your trusted automotive partner, delivering excellence since day one
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#003399] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  A-One Auto Services began with a simple mission: to provide honest,
                  reliable, and high-quality automotive services to the people of Nairobi
                  and beyond. What started as a small workshop has grown into one of the
                  region's most trusted auto service centers.
                </p>
                <p>
                  Over the years, we've built our reputation on the foundations of
                  technical expertise, customer service excellence, and unwavering
                  integrity. Every vehicle that comes through our doors receives the same
                  meticulous attention to detail, whether it's a routine oil change or a
                  complex engine repair.
                </p>
                <p>
                  Our team of certified mechanics combines decades of experience with
                  cutting-edge diagnostic equipment to ensure your vehicle receives the
                  best possible care. We treat every car as if it were our own, and every
                  customer as part of the A-One family.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#003399] to-[#0055cc] rounded-2xl p-8 shadow-2xl">
                <Wrench className="w-24 h-24 text-[#FFCC00] mx-auto mb-6" />
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">15+ Years</h3>
                  <p className="text-xl text-gray-200">
                    Of Excellence in Automotive Service
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFCC00] rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-[#003399] font-semibold">
                  "Quality service isn't expensive, it's priceless."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-[#FFCC00] to-[#FFA500] rounded-2xl p-12 shadow-2xl">
                <Target className="w-20 h-20 text-[#003399] mb-6" />
                <h3 className="text-3xl font-bold text-[#003399] mb-4">Our Mission</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  To provide exceptional automotive services that exceed customer
                  expectations through skilled craftsmanship, honest communication, and
                  dedication to vehicle safety and performance.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#003399] mb-6">
                What Drives Us
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  We believe that quality automotive service should be accessible,
                  transparent, and trustworthy. That's why we've built our business on
                  principles that put you first.
                </p>
                <p>
                  Every member of our team is committed to delivering results that not
                  only meet but exceed industry standards. We invest in ongoing training,
                  state-of-the-art equipment, and genuine parts to ensure your vehicle
                  receives the care it deserves.
                </p>
                <p>
                  When you choose A-One Auto Services, you're not just getting a service
                  provider—you're gaining a long-term partner dedicated to keeping your
                  vehicle running safely and efficiently for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#FFCC00]"
              >
                <div className="bg-gradient-to-br from-[#003399] to-[#0055cc] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-[#FFCC00]" />
                </div>
                <h3 className="text-xl font-bold text-[#003399] mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003399] to-[#0055cc] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-200">
              Numbers that speak to our commitment and success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-5xl font-bold text-[#FFCC00] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#003399] mb-6">
            Experience the A-One Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicles.
            Schedule your service today.
          </p>
          <button className="bg-gradient-to-r from-[#003399] to-[#0055cc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-xl">
            Book Your Service Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
