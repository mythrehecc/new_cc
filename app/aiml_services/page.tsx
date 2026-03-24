'use client';

import Hero from '@/components/aiml_services/hero';
import Solution from '@/components/aiml_services/solution';
import Testimonials from '@/components/sd_services/testimonials';
import Process from '@/components/aiml_services/process';
import ImageHeading from '@/components/aiml_services/ImageHeading';
import AIServices from '@/components/aiml_services/ourservice';
import Banner from '@/components/service/banner';

export default function AimlServicesPage() {
  return (
    <>
      <Hero />
      <AIServices />
      <Solution />
      <Testimonials />
      <ImageHeading
        imageUrl="/AIStrategy.png"
        headingText="AI  Development Strategy"
      />
      <Banner
        title="AI Built for Business."
        description="We build custom AI systems that streamline operations, boost performance, and drive measurable results."
        buttonText="Start Your AI Journey"
      />
      <Process />
    </>
  );
}
