import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full backdrop-blur-sm animate-float">
          <p className="text-cyan-400 font-medium text-sm">Powered by AI-Driven Development</p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gold">ACIS</span>
          <br />
          <span className="text-gradient">BUILDATHON 2025</span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
          Build Your Future with AI
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 text-white">
          <Calendar className="text-cyan-400" size={32} />
          <span className="text-2xl md:text-4xl font-semibold">November 13, 2025</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToRegister}
            className="group px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover-glow transition-all flex items-center gap-2 text-lg"
          >
            Register Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <a
            href="#details"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all text-lg"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">7</div>
            <div className="text-gray-400">Hours Sprint</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100+</div>
            <div className="text-gray-400">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">3</div>
            <div className="text-gray-400">Top Prizes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">AI</div>
            <div className="text-gray-400">Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
