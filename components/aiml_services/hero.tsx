'use client';

import React from 'react';
import { Star } from 'lucide-react';
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

export default function AIMLHero() {
  const { config, saveConfigToServer } = useAdmin();
  const HERO_CONTENT = config?.aiml?.HERO_CONTENT;

  const handleSave = () => saveConfigToServer();
  
  if (!HERO_CONTENT) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const handleScrollToContact = () => {
    const contactForm = document.getElementById(HERO_CONTENT.cta.targetId);
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
      
      {/* BACKGROUND PATTERN SYNCED */}
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
            
            {/* HEADLINE - SINGLE LINE FLOW */}
            <motion.h1
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
                fontWeight: 800,
                color: COLORS.textBlack,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 'clamp(20px, 4vw, 32px)',
              }}>
              <span style={{ color: COLORS.primary }}>
                <EditableText
                  value={HERO_CONTENT.headline.highlight}
                  onSave={handleSave}
                  configPath="aiml.HERO_CONTENT.headline.highlight"
                >
                  {HERO_CONTENT.headline.highlight}
                </EditableText>
              </span> 
              <EditableText
                value={HERO_CONTENT.headline.main}
                onSave={handleSave}
                configPath="aiml.HERO_CONTENT.headline.main"
              >
                {HERO_CONTENT.headline.main}
              </EditableText> 
              <span style={{ fontWeight: 300, color: COLORS.textMuted }}>
                <EditableText
                  value={HERO_CONTENT.headline.muted}
                  onSave={handleSave}
                  configPath="aiml.HERO_CONTENT.headline.muted"
                >
                  {HERO_CONTENT.headline.muted}
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
                margin: '0 auto clamp(30px, 5vw, 48px)',
              }}>
              <EditableText
                value={HERO_CONTENT.description}
                onSave={handleSave}
                configPath="aiml.HERO_CONTENT.description"
                multiline={true}
              >
                {HERO_CONTENT.description}
              </EditableText>
            </motion.p>

            {/* CTA CENTERED */}
            <motion.div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: 'clamp(30px, 5vw, 48px)' 
            }}>
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
                onClick={handleScrollToContact}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.textBlack)}>
                <EditableText
                  value={HERO_CONTENT.cta.text}
                  onSave={handleSave}
                  configPath="aiml.HERO_CONTENT.cta.text"
                >
                  {HERO_CONTENT.cta.text}
                </EditableText>
              </button>
            </motion.div>

            {/* RATING CENTERED */}
            <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" stroke="none" />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: COLORS.textBlack }}>
                <EditableText
                  value={HERO_CONTENT.rating.score}
                  onSave={handleSave}
                  configPath="aiml.HERO_CONTENT.rating.score"
                >
                  {HERO_CONTENT.rating.score}
                </EditableText>
              </span>
              <div style={{ width: '1px', height: '20px', background: COLORS.border }} />
              <span style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                <EditableText
                  value={HERO_CONTENT.rating.expertise}
                  onSave={handleSave}
                  configPath="aiml.HERO_CONTENT.rating.expertise"
                >
                  {HERO_CONTENT.rating.expertise}
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