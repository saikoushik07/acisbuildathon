import { Trophy, Award, Medal, Star } from 'lucide-react';

const prizes = [
  {
    icon: Trophy,
    title: '1st Place',
    prize: 'Grand Prize',
    description: 'Top prize for the best AI-powered MVP',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Award,
    title: '2nd Place',
    prize: 'Runner Up',
    description: 'Outstanding innovation and execution',
    color: 'from-gray-300 to-gray-500'
  },
  {
    icon: Medal,
    title: '3rd Place',
    prize: 'Third Prize',
    description: 'Excellent technical implementation',
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: Star,
    title: 'Special Awards',
    prize: 'Category Winners',
    description: 'Best UI/UX, Best Innovation, Best Tech Stack',
    color: 'from-cyan-400 to-blue-600'
  }
];

export default function Prizes() {
  return (
    <section id="prizes" className="py-16 md:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Prizes</span> & Recognition
          </h2>
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
            Compete for exciting prizes and showcase your skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 card-hover text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br ${prize.color} rounded-2xl mb-4 md:mb-6 glow-effect`}>
                <prize.icon size={32} className="text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-white">{prize.title}</h3>
              <p className="text-cyan-400 font-semibold mb-2 text-sm md:text-base">{prize.prize}</p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{prize.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 md:p-8 rounded-2xl text-center max-w-2xl mx-auto">
          <Award size={40} className="text-cyan-400 mx-auto mb-3 md:mb-4" />
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">All Participants Receive</h3>
          <p className="text-lg md:text-xl text-cyan-400 font-semibold">Certificate of Participation</p>
          <p className="text-xs md:text-sm text-gray-400 mt-2">Recognize your commitment to innovation and learning</p>
        </div>
      </div>
    </section>
  );
}
