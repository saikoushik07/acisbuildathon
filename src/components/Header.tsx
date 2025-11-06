import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/SRU_Main_Logo_Colour.png"
              alt="SR University Logo"
              className="h-12 md:h-16 object-contain"
            />
            <div className="hidden md:block text-xs text-gray-300 max-w-xs leading-tight">
              School of Computer Science<br />and Artificial Intelligence
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('details')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Details
            </button>
            <button onClick={() => scrollToSection('prizes')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Prizes
            </button>
            <button onClick={() => scrollToSection('sponsors')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Sponsors
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="px-6 py-2 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all"
            >
              Register Now
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <img
              src="/ACIS-FINAL-DRAFT-modified.png"
              alt="ACIS Logo"
              className="h-12 md:h-16 object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('details')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Details
            </button>
            <button onClick={() => scrollToSection('prizes')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Prizes
            </button>
            <button onClick={() => scrollToSection('sponsors')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Sponsors
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="px-6 py-2 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all text-center"
            >
              Register Now
            </button>
          </nav>
        )}
      </div>

      <div className="md:hidden bg-gray-900/50 text-center py-2 text-xs text-gray-300">
        School of Computer Science and Artificial Intelligence
      </div>
    </header>
  );
}
