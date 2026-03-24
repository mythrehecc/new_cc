'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Code2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- DATA CONFIGURATION ---
const COLORS = {
  bgGradient: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  primary: '#4F46E5',
  accentRed: '#FF5757',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function SoftwareServicesHero() {
  const { config, saveConfigToServer } = useAdmin();
  const HERO_DATA = config?.service?.hero;
  const [isMobile, setIsMobile] = useState(false);

  const handleSave = () => saveConfigToServer();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!HERO_DATA) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section
      style={{
        minHeight: 'clamp(50vh, 70vh, 85vh)',
        background: COLORS.bgGradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        fontFamily: FONT_PRIMARY,
        padding: 'clamp(12px, 3vw, 20px)',
        paddingTop: 'clamp(90px, 20vw, 130px)',
        paddingBottom: 'clamp(25px, 5vw, 45px)',
      }}>
      
      {/* 1. ARCHITECTURAL PATTERN OVERLAY */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(${COLORS.primary}15 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            zIndex: 0,
          }}
        />
      </div>

      <div style={{ maxWidth: 'min(1400px, 95%)', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
          
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {/* HEADING - Aligned to clamp sizes of Company Hero */}
              <motion.h1 style={{
                  fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
                  fontWeight: 800,
                  color: COLORS.textBlack,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: 'clamp(20px, 4vw, 32px)',
                }}>
                <EditableText value={HERO_DATA.heading.highlight} onSave={handleSave} configPath="service.hero.heading.highlight">
                  {HERO_DATA.heading.highlight}
                </EditableText>
                {' '}
                <EditableText value={HERO_DATA.heading.main} onSave={handleSave} configPath="service.hero.heading.main">
                  {HERO_DATA.heading.main.split(' ').map((word: string, index: number) => (
                    <span key={index} style={{ color: word.toLowerCase() === 'development' ? '#4F46E5' : 'inherit' }}>
                      {word}{' '}
                    </span>
                  ))}
                </EditableText>
                {' '}
                <EditableText value={HERO_DATA.heading.suffix} onSave={handleSave} configPath="service.hero.heading.suffix">
                  {HERO_DATA.heading.suffix}
                </EditableText>
              </motion.h1>

              {/* DESCRIPTION - Centered and same size as Company Hero */}
              <motion.p style={{
                  fontSize: 'clamp(18px, 4vw, 22px)',
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  maxWidth: 'min(600px, 90%)',
                  fontWeight: 500,
                  textAlign: 'center',
                  margin: '0 auto clamp(30px, 5vw, 48px)',
                }}>
                <EditableText value={HERO_DATA.description} onSave={handleSave} configPath="service.hero.description">
                  {HERO_DATA.description}
                </EditableText>
              </motion.p>

              {/* CTA BUTTON */}
              <motion.div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
                <button
                  style={{
                    backgroundColor: COLORS.textBlack,
                    color: '#FFF',
                    border: 'none',
                    height: 'clamp(48px, 8vw, 56px)',
                    padding: '0 clamp(20px, 4vw, 32px)',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 20px 40px -12px rgba(2, 6, 23, 0.3)',
                    transition: '0.3s all',
                  }}
                  onClick={() => {
                    const target = document.getElementById(HERO_DATA.cta.targetId);
                    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}>
                  <EditableText value={HERO_DATA.cta.text} onSave={handleSave} configPath="service.hero.cta.text">
                    {HERO_DATA.cta.text}
                  </EditableText>
                </button>
              </motion.div>

              {/* RATING SECTION */}
              <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFB800" stroke="none" />
                  ))}
                </div>
                <span style={{ fontWeight: 700, color: COLORS.textBlack }}>
                  <EditableText value={HERO_DATA.rating.score} onSave={handleSave} configPath="service.hero.rating.score">
                    {HERO_DATA.rating.score}
                  </EditableText>
                </span>
                <div style={{ width: '1px', height: '20px', background: COLORS.border }} />
                <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                  <EditableText value={HERO_DATA.rating.certification} onSave={handleSave} configPath="service.hero.rating.certification">
                    {HERO_DATA.rating.certification}
                  </EditableText>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}