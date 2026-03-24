// page.tsx
'use client';
import { useState, useEffect } from 'react';
import { usePageTitle } from './common';
import Hero from '@/components/home/hero';
import TestimonialSection from '@/components/home/testimonials';
import WhyCrestcode from '@/components/home/whyCrestcode';
import FAQ from '@/components/home/faq';
import HomeService from '@/components/home/home-service';
import ContactForm from '@/components/home/form';

export default function HomePage() {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleShowServices = () => setShowServices(true);
    window.addEventListener('showServices', handleShowServices);
    return () => window.removeEventListener('showServices', handleShowServices);
  }, []);

  usePageTitle('Crestcode - high-performance technical consultancy');

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <Hero />
      <HomeService />
      <TestimonialSection />
      <WhyCrestcode />
    </div>
  );
}
