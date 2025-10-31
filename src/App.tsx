import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CRM from './pages/CRM';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'crm'>('main');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(section);
    }
  };

  const handleBookRepair = () => {
    scrollToSection('contact');
  };

  const handleCRMClick = () => {
    setCurrentView('crm');
  };

  if (currentView === 'crm') {
    return <CRM />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} onCRMClick={handleCRMClick} />
      <Hero onBookRepair={handleBookRepair} />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
