import { Globe, Smartphone, Boxes, Cpu } from 'lucide-react';

const techCategories = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Build responsive web apps with modern frameworks and tools'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Responsive',
    description: 'Create applications that work seamlessly across all devices'
  },
  {
    icon: Boxes,
    title: 'API Integrations',
    description: 'Connect to external services and build powerful integrations'
  },
  {
    icon: Cpu,
    title: 'AI/LLM-Powered',
    description: 'Leverage AI builders and rapid prototyping tools'
  }
];

export default function TechScope() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Tech <span className="text-gradient">Scope</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore unlimited possibilities with modern development tools and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-cyan-500/30 card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-14 md:w-20 h-14 md:h-20 bg-gradient-accent rounded-2xl mb-4 md:mb-6 glow-effect">
                <category.icon size={32} className="text-white" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-white">{category.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
