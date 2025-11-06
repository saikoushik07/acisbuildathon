import { Handshake } from 'lucide-react';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-400">
            Partnering with industry leaders to make this event possible
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="aspect-video bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center card-hover"
            >
              <div className="text-gray-600 text-center">
                <Handshake size={40} className="mx-auto mb-2" />
                <p className="text-xs">Sponsor Logo</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/30 max-w-2xl mx-auto">
            <Handshake size={48} className="text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in Sponsoring?</h3>
            <p className="text-gray-400 mb-6">
              Partner with us to support innovation and reach talented developers
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
