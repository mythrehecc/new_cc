'use client';

import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- INDUSTRIAL STAND-OUT THEME TOKENS ---
const COLORS = {
  bgGradient: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function SoftwareProductHero() {
  const { config, saveConfigToServer } = useAdmin();
  const HERO_CONTENT = config?.sd_services?.HERO_CONTENT;
  
  const handleSave = () => saveConfigToServer();

  if (!HERO_CONTENT) return null;

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
      
      {/* ARCHITECTURAL PATTERN OVERLAY */}
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
            {/* HEADING SYNCED WITH CLAMP VALUES */}
            <motion.h1 style={{ 
                fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', 
                fontWeight: 800, 
                color: COLORS.textBlack, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em', 
                marginBottom: 'clamp(20px, 4vw, 32px)' 
            }}>
              <span style={{ color: COLORS.primary }}>
                <EditableText
                  value={HERO_CONTENT.heading.highlight}
                  onSave={handleSave}
                  configPath="sd_services.HERO_CONTENT.heading.highlight"
                >
                  {HERO_CONTENT.heading.highlight}
                </EditableText>
              </span>
              {' '}
              <EditableText
                value={HERO_CONTENT.heading.main}
                onSave={handleSave}
                configPath="sd_services.HERO_CONTENT.heading.main"
              >
                {HERO_CONTENT.heading.main}
              </EditableText>
              {' '}
              <span style={{ fontWeight: 300, color: COLORS.textMuted }}>
                <EditableText
                  value={HERO_CONTENT.heading.muted}
                  onSave={handleSave}
                  configPath="sd_services.HERO_CONTENT.heading.muted"
                >
                  {HERO_CONTENT.heading.muted}
                </EditableText>
              </span>
            </motion.h1>

            {/* DESCRIPTION SYNCED */}
            <motion.p style={{ 
                fontSize: 'clamp(18px, 4vw, 22px)', 
                color: COLORS.textMuted, 
                lineHeight: 1.6, 
                maxWidth: 'min(600px, 90%)', 
                fontWeight: 500, 
                textAlign: 'center',
                margin: '0 auto clamp(30px, 5vw, 48px)' 
            }}>
              <EditableText
                value={HERO_CONTENT.description}
                onSave={handleSave}
                configPath="sd_services.HERO_CONTENT.description"
                multiline={true}
              >
                {HERO_CONTENT.description}
              </EditableText>
            </motion.p>

            {/* CTAS CENTERED */}
            <motion.div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: 'clamp(12px, 3vw, 16px)', 
                marginBottom: 'clamp(30px, 5vw, 48px)' 
            }}>
              {HERO_CONTENT.ctas.filter((cta: any) => cta.variant === 'primary').map((cta: any, i: number) => (
                <button
                  key={i}
                  onClick={() => {
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  style={{
                    backgroundColor: cta.variant === 'primary' ? COLORS.textBlack : COLORS.white,
                    color: cta.variant === 'primary' ? '#FFF' : COLORS.textBlack,
                    border: cta.variant === 'primary' ? 'none' : `1px solid ${COLORS.border}`,
                    height: 'clamp(48px, 8vw, 56px)',
                    padding: '0 clamp(20px, 4vw, 32px)',
                    borderRadius: '12px',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: cta.variant === 'primary' ? '0 20px 40px -12px rgba(2, 6, 23, 0.3)' : 'none',
                    transition: '0.3s all',
                  }}>
                  <EditableText
                    value={cta.label}
                    onSave={handleSave}
                    configPath={`sd_services.HERO_CONTENT.ctas.${i}.label`}
                  >
                    {cta.label}
                  </EditableText>
                </button>
              ))}
            </motion.div>

            {/* SOCIAL PROOF / RATING CENTERED */}
            <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFB800" stroke="none" />)}
              </div>
              <span style={{ fontWeight: 700, color: COLORS.textBlack }}>
                <EditableText
                  value={HERO_CONTENT.socialProof.rating}
                  onSave={handleSave}
                  configPath="sd_services.HERO_CONTENT.socialProof.rating"
                >
                  {HERO_CONTENT.socialProof.rating}
                </EditableText>
              </span>
              <span style={{ width: '1px', height: '20px', background: COLORS.border }} />
              <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                <EditableText
                  value={HERO_CONTENT.socialProof.tagline}
                  onSave={handleSave}
                  configPath="sd_services.HERO_CONTENT.socialProof.tagline"
                >
                  {HERO_CONTENT.socialProof.tagline}
                </EditableText>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}