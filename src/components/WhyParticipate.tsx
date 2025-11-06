import { Lightbulb, Briefcase, Gift, Network, FolderGit2 } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Learn AI-Powered Development',
    description: 'Master modern AI tools and builders that are shaping the future of software development'
  },
  {
    icon: Briefcase,
    title: 'Build Real Products',
    description: 'Create functional MVPs with real-world applications and API integrations'
  },
  {
    icon: Gift,
    title: 'Win Exciting Prizes',
    description: 'Compete for top prizes and recognition for your innovative solutions'
  },
  {
    icon: Network,
    title: 'Network with Tech Community',
    description: 'Connect with fellow developers, mentors, and industry professionals'
  },
  {
    icon: FolderGit2,
    title: 'Portfolio-Ready Projects',
    description: 'Showcase your work to potential employers and build your developer portfolio'
  }
];

export default function WhyParticipate() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gradient">Participate?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 card-hover"
            >
              <div className="bg-cyan-500/10 border border-cyan-500/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <reason.icon size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
