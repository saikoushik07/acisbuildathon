import { Bot, Zap, Rocket, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'AI-Powered Tools',
    description: 'Leverage cutting-edge AI builders and LLMs to rapidly develop your MVP'
  },
  {
    icon: Zap,
    title: '7 Hours Sprint',
    description: 'Fast-paced development environment to bring your ideas to life'
  },
  {
    icon: Rocket,
    title: 'Real MVPs',
    description: 'Build production-ready applications with API integrations'
  },
  {
    icon: Trophy,
    title: 'Win Prizes',
    description: 'Compete for exciting prizes and recognition'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">The Event</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ACIS Buildathon 2025 is a revolutionary 7-hour sprint where students harness the power of
            AI-driven development tools to create real-world MVPs. Experience rapid prototyping, learn
            cutting-edge technologies, and compete for exciting prizes while building portfolio-ready projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 card-hover"
            >
              <div className="bg-gradient-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 glow-effect">
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
