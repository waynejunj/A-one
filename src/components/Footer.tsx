import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-[#003399] to-[#001f5c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#FFCC00] mb-4">
              A-One Auto Services
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for quality automotive services. We deliver
              excellence with every repair, maintenance, and service.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FFCC00] hover:text-[#003399] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FFCC00] hover:text-[#003399] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#FFCC00] hover:text-[#003399] transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#FFCC00] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'gallery', 'booking', 'contact'].map(
                (page) => (
                  <li key={page}>
                    <button
                      onClick={() => onNavigate(page)}
                      className="text-gray-300 hover:text-[#FFCC00] transition-colors capitalize"
                    >
                      {page === 'booking' ? 'Book Now' : page.replace('_', ' ')}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#FFCC00] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Car Repair & Maintenance</li>
              <li>Engine Diagnostics</li>
              <li>Car Wash & Detailing</li>
              <li>Wheel Alignment</li>
              <li>Battery Services</li>
              <li>Oil Change</li>
              <li>Emergency Assistance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#FFCC00] mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#FFCC00]" />
                <a
                  href="tel:+254722435888"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors"
                >
                  +254 722 435 888
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#FFCC00]" />
                <a
                  href="mailto:info@a-oneauto.co.ke"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors"
                >
                  info@a-oneauto.co.ke
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <div>Mon - Sat: 8:00 AM - 6:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} A-One Auto Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
