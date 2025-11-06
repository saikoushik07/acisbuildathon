import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsBuildathon from './components/WhatIsBuildathon';
import About from './components/About';
import EventDetails from './components/EventDetails';
import WhyParticipate from './components/WhyParticipate';
import TechScope from './components/TechScope';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Organizers from './components/Organizers';
import Contact from './components/Contact';
import Register from './components/Register';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WhatIsBuildathon />
      <About />
      <EventDetails />
      <WhyParticipate />
      <TechScope />
      <Prizes />
      <Sponsors />
      <Organizers />
      <Contact />
      <Register />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
