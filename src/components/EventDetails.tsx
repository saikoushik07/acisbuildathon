import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const details = [
  {
    icon: Calendar,
    title: 'Date',
    value: 'November 13, 2025'
  },
  {
    icon: MapPin,
    title: 'Venue',
    value: 'SR University Campus, Warangal'
  },
  {
    icon: Clock,
    title: 'Duration',
    value: '7 Hours'
  },
  {
    icon: Users,
    title: 'Team Size',
    value: '2-4 members'
  }
];

export default function EventDetails() {
  return (
    <section id="details" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Event <span className="text-gradient">Details</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4 glow-effect">
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{item.title}</h3>
              <p className="text-xl text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Eligibility</h3>
          <p className="text-xl text-gray-300 text-center">
            Open to all <span className="text-cyan-400 font-semibold">SR University students</span>
          </p>
        </div>
      </div>
    </section>
  );
}
