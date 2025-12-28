import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { ServiceDetail } from './components/ServiceDetail';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

// SEO metadata for each page
const pageMetadata: Record<Page, { title: string; description: string }> = {
  'home': {
    title: 'Cyberminars Digital - Digital Marketing, Web Development & Cybersecurity Services',
    description: 'Expert digital marketing, web development, cybersecurity, and IT solutions for growing businesses. 200+ projects delivered across 4 countries since 2020.'
  },
  'services': {
    title: 'Our Services - Digital Marketing, Web Development & IT Solutions | Cyberminars Digital',
    description: 'Comprehensive digital services: web development, digital marketing, cybersecurity, cloud infrastructure, and business consulting. Custom solutions for your business growth.'
  },
  'about': {
    title: 'About Us - Leading Digital Agency Since 2020 | Cyberminars Digital',
    description: 'Learn about Cyberminars Digital - a full-service digital agency providing web development, marketing, and IT solutions across India, UAE, UK & USA since 2020.'
  },
  'case-studies': {
    title: 'Case Studies & Portfolio - Client Success Stories | Cyberminars Digital',
    description: 'Explore our portfolio of successful digital transformation projects. Real results for e-commerce, fintech, manufacturing, and education clients.'
  },
  'contact': {
    title: 'Contact Us - Get a Free Strategy Call | Cyberminars Digital',
    description: 'Contact Cyberminars Digital for web development, digital marketing, cybersecurity, or IT consulting. Get a free strategy call. Email: digital@cyberminars.com'
  },
  'service-detail': {
    title: 'Service Details | Cyberminars Digital',
    description: 'Learn more about our specialized digital services and how we can help your business grow.'
  }
};

// Route mapping
const routeToPage: Record<string, Page> = {
  '/': 'home',
  '/services': 'services',
  '/about': 'about',
  '/case-studies': 'case-studies',
  '/contact': 'contact'
};

const pageToRoute: Record<Page, string> = {
  'home': '/',
  'services': '/services',
  'about': '/about',
  'case-studies': '/case-studies',
  'contact': '/contact',
  'service-detail': '/services'
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  
  // Update meta tags
  const updateMetaTags = (page: Page) => {
    const metadata = pageMetadata[page];
    document.title = metadata.title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);

    // Update or create Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', metadata.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', metadata.description);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = window.location.origin + pageToRoute[page];
    canonical.setAttribute('href', currentUrl);
  };

  // Get page from URL
  const getPageFromUrl = (): Page => {
    const path = window.location.pathname;
    return routeToPage[path] || 'home';
  };

  // Initialize page from URL on mount
  useEffect(() => {
    const initialPage = getPageFromUrl();
    setCurrentPage(initialPage);
    updateMetaTags(initialPage);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
      updateMetaTags(page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page, service?: string) => {
    setCurrentPage(page);
    if (service) setSelectedService(service);
    
    // Update URL and meta tags
    const route = pageToRoute[page];
    window.history.pushState({}, '', route);
    updateMetaTags(page);
    
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17]">
      <Navigation currentPage={currentPage} onNavigate={navigateTo} />
      
      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
      {currentPage === 'services' && <Services onNavigate={navigateTo} />}
      {currentPage === 'service-detail' && <ServiceDetail service={selectedService} onNavigate={navigateTo} />}
      {currentPage === 'about' && <About onNavigate={navigateTo} />}
      {currentPage === 'case-studies' && <CaseStudies onNavigate={navigateTo} />}
      {currentPage === 'contact' && <Contact />}
      
      <Footer onNavigate={navigateTo} />
      <WhatsAppWidget />
      <Toaster />
    </div>
  );
}