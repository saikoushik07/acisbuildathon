import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/ACIS-FINAL-DRAFT-modified.png"
              alt="ACIS Logo"
              className="h-16 object-contain mb-4"
            />
            <p className="text-gray-400 text-sm">
              Building the future with AI-powered innovation
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('details')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Event Details
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('prizes')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Prizes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sponsors')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Sponsors
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:2403A52L02@sru.edu.in" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <Mail size={14} />
                  Email Us
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                +91 7671030069
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ACIS - Advanced Computing Innovation Society. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            School of Computer Science and Artificial Intelligence, SR University
          </p>
        </div>
      </div>
    </footer>
  );
}
