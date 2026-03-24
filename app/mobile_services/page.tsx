'use client';

import Hero from '@/components/mobile_services/hero';
import Features from '@/components/mobile_services/features';
import Ourservices from '@/components/mobile_services/ourservices';
import Testimonials from '@/components/mobile_services/testimonials';
import Process from '@/components/mobile_services/process';
import Native_vs_hybrid from '@/components/mobile_services/native_vs_hybrid';
import Banner from '@/components/service/banner';

export default function MobileServicesPage() {
  return (
    <>
      <Hero />
      <Ourservices />
      <Native_vs_hybrid />
      <Features />
      <Testimonials />
      <Banner
        title="
Build Your Custom Mobile App."
        description="We turn ideas into high-performance iOS, Android, and cross-platform apps users love."
      />
      <Process />
    </>
  );
}
