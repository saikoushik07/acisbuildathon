import { ExternalLink } from 'lucide-react';

export default function Register() {
  const handleRegister = () => {
    window.open('https://forms.gle/FVZESvxRshzvmnpF9', '_blank');
  };

  return (
    <section id="register" className="py-16 md:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-cyan-500/30 glow-effect">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Ready to <span className="text-gradient">Build?</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Join us for an incredible day of innovation, learning, and building the future with AI.
              Register now to secure your spot at ACIS Buildathon 2025!
            </p>

            <div className="space-y-3 md:space-y-4 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <p className="text-cyan-400 font-semibold mb-1 text-sm md:text-base">Event Date</p>
                <p className="text-white text-base md:text-lg">November 13, 2025</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <p className="text-cyan-400 font-semibold mb-1 text-sm md:text-base">Venue</p>
                <p className="text-white text-base md:text-lg">SR University Campus, Warangal</p>
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="inline-flex items-center justify-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-gradient-accent text-white font-bold text-base md:text-lg rounded-full hover-glow transition-all w-full md:w-auto"
            >
              Register Now
              <ExternalLink size={20} />
            </button>

            <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
              Click the button above to fill out the registration form
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
