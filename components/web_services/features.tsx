'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Shield, Cloud, Cog, Globe2, Monitor, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Puzzle,
    Shield,
    Cloud,
    Cog,
    Globe2,
    Monitor,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Puzzle`);
    return Puzzle;
  }
  
  return icon;
};

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function WebFeatures() {
  const { config, saveConfigToServer } = useAdmin();
  const FEATURES_DATA = config?.web?.FEATURES_DATA;

  const handleSave = () => saveConfigToServer();
  
  if (!FEATURES_DATA) return null;

  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        color: COLORS.textBlack,
        fontFamily: FONT_PRIMARY,
        padding: '50px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ARCHITECTURAL GRID OVERLAY */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: COLORS.textBlack,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}>
            <EditableText
              value={FEATURES_DATA.header.title}
              onSave={handleSave}
              configPath="web.FEATURES_DATA.header.title"
            >
              {FEATURES_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={FEATURES_DATA.header.highlight}
                onSave={handleSave}
                configPath="web.FEATURES_DATA.header.highlight"
              >
                {FEATURES_DATA.header.highlight}
              </EditableText>
            </span>
          </motion.h1>
        </div>

        {/* FEATURES GRID */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}>
          {FEATURES_DATA.items.map((feature: any, index: number) => (
            <FeatureItem 
              key={index} 
              feature={feature} 
              index={index} 
              onSave={handleSave}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT: FEATURE ITEM ---
function FeatureItem({ feature, index, onSave }: { feature: any; index: number; onSave: () => void }) {
  const Icon = getIconComponent(feature.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
      
      {/* ICON WRAPPER */}
      <div style={{
          color: COLORS.primary,
          marginBottom: '24px',
          background: `${COLORS.primary}08`,
          padding: '12px',
          borderRadius: '14px',
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${COLORS.primary}15`,
          transition: 'all 0.3s ease',
        }}>
        <Icon size={32} />
      </div>

      {/* TEXT CONTENT */}
      <h2 style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.375rem)',
          fontWeight: 700,
          color: COLORS.textBlack,
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
        <EditableText
          value={feature.title}
          onSave={onSave}
          configPath={`web.FEATURES_DATA.items.${index}.title`}
        >
          {feature.title}
        </EditableText>
      </h2>

      <p style={{
          fontSize: 'clamp(0.75rem, 2vw, 0.9375rem)',
          color: COLORS.textMuted,
          lineHeight: '1.7',
          margin: 0,
          fontWeight: 500,
        }}>
        <EditableText
          value={feature.description}
          onSave={onSave}
          configPath={`web.FEATURES_DATA.items.${index}.description`}
          multiline={true}
        >
          {feature.description}
        </EditableText>
      </p>
    </motion.div>
  );
}