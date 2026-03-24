'use client';

import React from 'react';
import { spacing, typography } from '../../lib';

// --- DATA CONFIGURATION (JSON TYPE) ---
const CONTENT = {
  header: {
    title: "Predictable Engineering at Scale",
    description: "Enterprise-Grade Architecture, Dedicated Build Teams, and Zero-Noise Delivery all working in perfect sync."
  },
  image: {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/2f8ba7c14946dfc46ecb08d83af54a4b1958f096?width=3840",
    alt: "Engineering Process"
  },
  styling: {
    sectionBg: "bg-gray-100",
    sectionPadding: "w-full py-10 md:py-12",
    imgClass: "w-full max-w-4xl mx-auto rounded-lg object-contain"
  }
};

export default function predictable_engineering() {
  return (
    <section className={`${CONTENT.styling.sectionPadding} ${CONTENT.styling.sectionBg}`}>
      <div className={`${spacing.containerSmall} text-center mb-8`}>
        <h2 className={`${typography.h1} mb-3`}>
          {CONTENT.header.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {CONTENT.header.description}
        </p>
      </div>
      
      <div className={spacing.container}>
        <img 
          src={CONTENT.image.src} 
          alt={CONTENT.image.alt} 
          className={CONTENT.styling.imgClass}
        />
      </div>
    </section>
  );
}