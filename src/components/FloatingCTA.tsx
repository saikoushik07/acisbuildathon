import { ArrowUp, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://chat.whatsapp.com/C4YeIXhWwaBA1q5pqYJyOj', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
          <button
            onClick={scrollToRegister}
            className="px-4 md:px-6 py-2 md:py-3 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all shadow-lg text-sm md:text-base"
          >
            Register
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-10 md:w-12 h-10 md:h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all hover-glow shadow-lg"
            title="Join WhatsApp"
          >
            <MessageCircle size={20} className="text-white" />
          </button>
          <button
            onClick={scrollToTop}
            className="w-10 md:w-12 h-10 md:h-12 bg-gray-800 border border-cyan-500/50 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow shadow-lg"
            title="Back to top"
          >
            <ArrowUp size={18} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
}
