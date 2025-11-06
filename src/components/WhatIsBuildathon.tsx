import { Lightbulb, Zap, Target, Users, Code2, Clock } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Real MVP Creation',
    description: 'Transform ideas into functioning products, not just concepts'
  },
  {
    icon: Zap,
    title: '7-Hour Sprint',
    description: 'Build complete applications in a single day of focused development'
  },
  {
    icon: Code2,
    title: 'AI-Powered Tools',
    description: 'Use modern AI assistants like Bolt, Cursor, and v0 to accelerate development'
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Work in teams of 2-4 members with diverse skills'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Focus on solving real problems and creative solutions'
  },
  {
    icon: Clock,
    title: 'Ship Fast',
    description: 'Learn rapid development practices and modern workflows'
  }
];

export default function WhatIsBuildathon() {
  return (
    <section id="what" className="py-16 md:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            What is <span className="text-gradient">Buildathon?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ACIS Buildathon is a 7-hour intensive development competition where students collaborate
            to build real, functioning applications using AI-powered development tools. It's about shipping
            working products, not just ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 card-hover"
            >
              <div className="bg-cyan-500/10 border border-cyan-500/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-8 md:p-10 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
              Why Buildathon Matters
            </h3>
            <div className="space-y-4 text-gray-300 text-sm md:text-base">
              <p>
                It prepares students for modern software development where AI collaboration is becoming the norm.
                Learn how to work with AI coding assistants, build real products quickly, and bridge the gap between classroom theory and real-world MVP creation.
              </p>
              <p>
                Whether you're a beginner or an experienced developer, the AI-powered tools level the playing field,
                allowing you to focus on innovation and problem-solving rather than getting stuck in boilerplate code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
