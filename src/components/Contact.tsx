import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-cyan-500/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Saikoushik Nalubola</h3>
              <p className="text-cyan-400 font-semibold">ACIS President</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:2403A52L02@sru.edu.in"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center glow-effect">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">2403A52L02@sru.edu.in</p>
                </div>
              </a>

              <a
                href="tel:+917671030069"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center glow-effect">
                  <Phone size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+91 7671030069</p>
                </div>
              </a>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <p className="text-center text-gray-400 mb-4">Follow Us</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-accent transition-all hover-glow"
                >
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
