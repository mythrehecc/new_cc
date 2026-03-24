'use client';
import Hero from '@/components/service/hero';
import OurServices from '@/components/service/ourservices';
import AdvancedServices from '@/components/service/advanced_services';
import Process from '@/components/service/process';
import MVP from '@/components/service/mvp';
import Testimonial from '@/components/service/Testimonial';
import Banner from '@/components/service/banner';
import TechnologiesSection from '@/components/service/technology';
export default function ServicesPage() {
  return (
    <>
      <Hero />
      <OurServices />
      <MVP />
      <Testimonial />
      <AdvancedServices />
      <Banner
        title="Get a free quote for your project development."
        description="Consult with our expert team today to unlock AI-powered growth and custom solutions built for real business impact."
      />
      <Process />
      <TechnologiesSection />
    </>
  );
}
