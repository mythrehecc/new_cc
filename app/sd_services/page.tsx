'use client';
import Hero from '@/components/sd_services/hero';
import Product from '@/components/sd_services/product';
import Testimonials from '@/components/sd_services/testimonials';
import Banner from '@/components/service/banner';
import Techstack from '@/components/sd_services/Techstack';
import Process from '@/components/sd_services/process';

export default function SdServicesPage() {
  return (
    <>
      <Hero />
      <Product />
      <Testimonials />
      <Techstack />
      <Banner
        title="Build Your Next Big Product."
        description="We take your idea from concept to scalable, real-world software with expert execution."
        buttonText="Get a Free Quote"
      />
      <Process />
    </>
  );
}
