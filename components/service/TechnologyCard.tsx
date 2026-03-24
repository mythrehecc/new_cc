'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- DATA CONFIGURATION (JSON TYPE) ---
const TECH_CARD_CONFIG = {
  styles: {
    container: "text-center animate-slideUp hover:transform hover:scale-105 transition-transform duration-300",
    iconWrapper: "mb-3 flex justify-center",
    iconSize: "w-10 h-10 sm:w-12 sm:h-12",
    iconColors: "text-gray-900 hover:text-gray-700 transition-colors duration-300",
    title: "text-lg sm:text-xl font-bold text-gray-900 mb-2",
    description: "text-gray-700 leading-relaxed text-xs sm:text-sm"
  }
};

interface TechnologyCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  delay: number;
}

export default function TechnologyCard({ name, icon: Icon, description, delay }: TechnologyCardProps) {
  return (
    <div
      className={TECH_CARD_CONFIG.styles.container}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={TECH_CARD_CONFIG.styles.iconWrapper}>
        <Icon 
          className={`${TECH_CARD_CONFIG.styles.iconSize} ${TECH_CARD_CONFIG.styles.iconColors}`} 
          strokeWidth={1.5} 
        />
      </div>

      <h3 className={TECH_CARD_CONFIG.styles.title}>
        {name}
      </h3>

      <p className={TECH_CARD_CONFIG.styles.description}>
        {description}
      </p>
    </div>
  );
}