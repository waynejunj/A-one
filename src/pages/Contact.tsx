import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Nairobi, Kenya'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+254 722 521 446'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@a-oneauto.co.ke'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-[#003399] to-[#0055cc] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Get in touch with our expert team. We're here to help with all your
              automotive needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#003399] mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Have questions about our services? Need a quote? Want to schedule an
                appointment? We're here to help! Reach out through any of the
                channels below or visit us at our location.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#FFCC00]"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#003399] to-[#0055cc] p-3 rounded-lg flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#FFCC00]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#003399] mb-2">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-[#FFCC00] to-[#FFA500] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#003399] mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-800 mb-4">
                  For urgent matters or emergency services, call us directly:
                </p>
                <a
                  href="tel:+254722521446"
                  className="inline-block bg-[#003399] text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all shadow-lg"
                >
                  Call +254 722 521 446
                </a>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="https://wa.me/254722521446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="mailto:info@a-oneauto.co.ke"
                  className="flex-1 bg-[#003399] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#0055cc] transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
                <div className="bg-gradient-to-r from-[#003399] to-[#0055cc] p-6 text-white">
                  <h3 className="text-2xl font-bold">Find Us Here</h3>
                </div>

                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036287036!2d36.70730744999999!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="A-One Auto Services Location"
                  />
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-[#003399] text-lg mb-3">
                    Easy to Find
                  </h4>
                  <p className="text-gray-600 mb-4">
                    We're conveniently located in Nairobi with ample parking space
                    for your vehicle. Look for our distinctive blue and yellow
                    signage.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-[#003399] mb-2">
                      Business Hours:
                    </h5>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold text-red-600">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#003399] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-left">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#003399] mb-2">
                  Do I need an appointment?
                </h3>
                <p className="text-gray-600">
                  While walk-ins are welcome, we recommend booking an appointment to
                  ensure minimal wait time and guaranteed service availability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#003399] mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept cash, mobile money (M-Pesa), and all major credit and
                  debit cards for your convenience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#003399] mb-2">
                  Do you provide warranty on services?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide warranty coverage on both parts and labor. The
                  warranty period varies by service type and will be clearly
                  communicated before work begins.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#003399] mb-2">
                  Can I wait while my car is serviced?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We have a comfortable waiting area with complimentary
                  refreshments. For longer services, we can also arrange alternative
                  transportation if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#003399] to-[#0055cc] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Quality Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Contact us today to schedule your service or visit our workshop. Our
            expert team is ready to help you.
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

export default Contact;
