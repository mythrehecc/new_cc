'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function MobileHero() {
  const { config, saveConfigToServer } = useAdmin();
  const HERO_DATA = config?.mobile?.HERO_DATA;
  
  const handleSave = () => saveConfigToServer();

  if (!HERO_DATA) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      style={{
        minHeight: 'clamp(50vh, 70vh, 85vh)',
        background: HERO_DATA.design.bgGradient,
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
            backgroundImage: `radial-gradient(${HERO_DATA.design.primary}15 1px, transparent 1px)`,
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
            
            {/* HEADLINE - NOW IN SAME LINE FLOW */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
                fontWeight: 800,
                color: HERO_DATA.design.textBlack,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 'clamp(20px, 4vw, 32px)',
              }}>
              <span style={{ color: HERO_DATA.design.primary }}>
                <EditableText
                  value={HERO_DATA.content.titleAccent}
                  onSave={handleSave}
                  configPath="mobile.HERO_DATA.content.titleAccent"
                >
                  {HERO_DATA.content.titleAccent}
                </EditableText>
              </span>
              {' '}
              <EditableText
                value={HERO_DATA.content.titleMain}
                onSave={handleSave}
                configPath="mobile.HERO_DATA.content.titleMain"
              >
                {HERO_DATA.content.titleMain}
              </EditableText>
              {' '}
              <span style={{ fontWeight: 300, color: HERO_DATA.design.textMuted }}>
                <EditableText
                  value={HERO_DATA.content.titleMuted}
                  onSave={handleSave}
                  configPath="mobile.HERO_DATA.content.titleMuted"
                >
                  {HERO_DATA.content.titleMuted}
                </EditableText>
              </span>
            </motion.h1>

            {/* SUBTITLE SYNCED */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(18px, 4vw, 22px)',
                color: HERO_DATA.design.textMuted,
                lineHeight: 1.6,
                maxWidth: 'min(600px, 90%)',
                fontWeight: 500,
                textAlign: 'center',
                margin: '0 auto clamp(30px, 5vw, 48px)',
              }}>
              <EditableText
                value={HERO_DATA.content.description}
                onSave={handleSave}
                configPath="mobile.HERO_DATA.content.description"
                multiline={true}
              >
                {HERO_DATA.content.description}
              </EditableText>
            </motion.p>

            {/* CTAs CENTERED */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'clamp(12px, 3vw, 16px)',
                marginBottom: 'clamp(30px, 5vw, 48px)',
              }}>
              <button
                style={{
                  backgroundColor: HERO_DATA.design.textBlack,
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
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <EditableText
                  value={HERO_DATA.content.ctaLabel}
                  onSave={handleSave}
                  configPath="mobile.HERO_DATA.content.ctaLabel"
                >
                  {HERO_DATA.content.ctaLabel}
                </EditableText>
              </button>
            </motion.div>

            {/* RATING CENTERED */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(HERO_DATA.rating.starCount)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" stroke="none" />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: HERO_DATA.design.textBlack }}>
                <EditableText
                  value={HERO_DATA.rating.score}
                  onSave={handleSave}
                  configPath="mobile.HERO_DATA.rating.score"
                >
                  {HERO_DATA.rating.score}
                </EditableText>
                {' '}
                <EditableText
                  value={HERO_DATA.rating.label}
                  onSave={handleSave}
                  configPath="mobile.HERO_DATA.rating.label"
                >
                  {HERO_DATA.rating.label}
                </EditableText>
              </span>
              <span
                style={{
                  width: '1px',
                  height: '20px',
                  background: HERO_DATA.design.border,
                }}
              />
              <span style={{ color: HERO_DATA.design.textMuted, fontSize: '14px' }}>
                <EditableText
                  value={HERO_DATA.rating.subLabel}
                  onSave={handleSave}
                  configPath="mobile.HERO_DATA.rating.subLabel"
                >
                  {HERO_DATA.rating.subLabel}
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