import { useState } from 'react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { ServiceDetail } from './components/ServiceDetail';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  const navigateTo = (page: Page, service?: string) => {
    setCurrentPage(page);
    if (service) setSelectedService(service);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17]">
      <Navigation currentPage={currentPage} onNavigate={navigateTo} />
      
      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
      {currentPage === 'services' && <Services onNavigate={navigateTo} />}
      {currentPage === 'service-detail' && <ServiceDetail service={selectedService} onNavigate={navigateTo} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'case-studies' && <CaseStudies />}
      {currentPage === 'contact' && <Contact />}
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
