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
    <section id="prizes" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Prizes</span> & Recognition
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compete for exciting prizes and showcase your skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 card-hover text-center"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${prize.color} rounded-2xl mb-6 glow-effect`}>
                <prize.icon size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{prize.title}</h3>
              <p className="text-cyan-400 font-semibold mb-3">{prize.prize}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{prize.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-8 rounded-2xl text-center max-w-2xl mx-auto">
          <Award size={48} className="text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-white">All Participants Receive</h3>
          <p className="text-xl text-cyan-400 font-semibold">Certificate of Participation</p>
          <p className="text-gray-400 mt-2">Recognize your commitment to innovation and learning</p>
        </div>
      </div>
    </section>
  );
}
