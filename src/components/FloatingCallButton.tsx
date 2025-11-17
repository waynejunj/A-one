import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+254722435888"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#FFCC00] to-[#FFA500] text-[#003399] p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-12 right-0 bg-[#003399] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Call +254 722 435 888
      </span>
    </a>
  );
};

export default FloatingCallButton;
