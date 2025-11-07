import { Handshake } from 'lucide-react';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400">
            Partnering with industry leaders to make this event possible
          </p>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-10 rounded-2xl border border-cyan-500/30 max-w-3xl mx-auto">
            <Handshake size={48} className="text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Sponsorship Opportunities Available</h3>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
              Partner with us to support innovation and reach talented developers. Sponsor logos will be displayed here once confirmed.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all text-sm md:text-base"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
