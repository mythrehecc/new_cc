'use client';

import { usePathname } from 'next/navigation';
import WebServicesFAQ from './WebServicesFAQ';
import MobileServicesFAQ from './MobileServicesFAQ';
import AIServicesFAQ from './AIServicesFAQ';
import SoftwareDevelopmentFAQ from './SoftwareDevelopmentFAQ';
import ServicesFAQ from '../service/faq';
import HackathonFAQ from './HackathonFAQ';
import FAQ from '../home/faq';

export default function DynamicFAQ() {
  const pathname = usePathname();
  
  // Check for hackathon routes
  if (pathname?.startsWith('/hackathon')) {
    return <HackathonFAQ />;
  }
  
  if (pathname === '/web_services') {
    return <WebServicesFAQ />;
  }
  
  if (pathname === '/mobile_services') {
    return <MobileServicesFAQ />;
  }
  
  if (pathname === '/aiml_services') {
    return <AIServicesFAQ />;
  }
  
  if (pathname === '/sd_services') {
    return <SoftwareDevelopmentFAQ />;
  }
  
  if (pathname === '/services') {
    return <ServicesFAQ />;
  }
  
  // Technical FAQ only on home page
  if (pathname === '/' || pathname === '') {
    return <FAQ />;
  }
  
  // No FAQ on other pages
  return null;
}
