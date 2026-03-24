'use client';

import Hero from '@/components/web_services/hero';
import Ideality from '@/components/web_services/ideality';
import Features from '@/components/web_services/features';
import Process from '@/components/web_services/process';
import Testimonials from '@/components/web_services/testimonials';
import OurServices from '@/components/web_services/ourservices';
import Banner from '@/components/service/banner';

export default function WebServicesPage() {
  return (
    <>
      <Hero />
      <Ideality />
      <OurServices />
      <Features />
      <Banner
        title="Transform Your Web Presence."
        description="Get expert guidance to improve your website, streamline your strategy, and plan your next move - all at no cost."
      />
      <Testimonials />
      <Process />
    </>
  );
}
