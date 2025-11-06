import { ArrowUp } from 'lucide-react';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <button
            onClick={scrollToRegister}
            className="px-6 py-3 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all shadow-lg"
          >
            Register Now
          </button>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800 border border-cyan-500/50 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow shadow-lg"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
}
