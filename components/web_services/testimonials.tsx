'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Smartphone } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  textBlack: '#020617',
  textMuted: '#64748B',
  primary: '#4F46E5',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function LeadershipTestimonial() {
  const { config, saveConfigToServer } = useAdmin();
  const LEADERSHIP_DATA = config?.web?.LEADERSHIP_DATA;

  const handleSave = () => saveConfigToServer();
  
  if (!LEADERSHIP_DATA) return null;

  return (
    <section style={{
      padding: '30px 20px',
      backgroundColor: COLORS.bgBase,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: FONT_PRIMARY,
    }}>
      
      {/* 1. ARCHITECTURAL BACKGROUND GRID */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* 2. GLASS-MORPHIC CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '900px',
          width: '100%',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderRadius: '32px',
          padding: '40px 25px',
          border: `1px solid ${COLORS.white}`,
          boxShadow: '0 20px 50px -15px rgba(0,0,0,0.04)',
        }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '50px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          
          {/* QUOTE SECTION */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            {/* Service Icon */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}>
                <Globe
                  size={28}
                  color={COLORS.primary}
                  strokeWidth={2}
                />
              </div>
            </div>
            <div style={{
                fontSize: 'clamp(0.875rem, 2vw, 1.25rem)',
                color: COLORS.primary,
                lineHeight: 1,
                fontFamily: 'serif',
                opacity: 0.1,
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                userSelect: 'none',
                fontWeight: 900,
              }}>
              “
            </div>

            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.375rem)',
              fontWeight: 600,
              lineHeight: 1.6,
              color: COLORS.textBlack,
              margin: 0,
              letterSpacing: '-0.01em',
              position: 'relative',
              zIndex: 2
            }}>
              <EditableText
                value={LEADERSHIP_DATA.quote.main}
                onSave={handleSave}
                configPath="web.LEADERSHIP_DATA.quote.main"
                multiline={true}
              >
                {LEADERSHIP_DATA.quote.main}
              </EditableText>
              {' '}
              <span style={{ color: COLORS.primary }}>
                <EditableText
                  value={LEADERSHIP_DATA.quote.highlight1}
                  onSave={handleSave}
                  configPath="web.LEADERSHIP_DATA.quote.highlight1"
                >
                  {LEADERSHIP_DATA.quote.highlight1}
                </EditableText>
              </span>
              {' '}
              <EditableText
                value={LEADERSHIP_DATA.quote.mid}
                onSave={handleSave}
                configPath="web.LEADERSHIP_DATA.quote.mid"
                multiline={true}
              >
                {LEADERSHIP_DATA.quote.mid}
              </EditableText>
              {' '}
              <span style={{ 
                background: `linear-gradient(120deg, ${COLORS.primary}15 0%, ${COLORS.primary}15 100%)`,
                padding: '0 4px',
                fontWeight: 800 
              }}>
                <EditableText
                  value={LEADERSHIP_DATA.quote.highlight2}
                  onSave={handleSave}
                  configPath="web.LEADERSHIP_DATA.quote.highlight2"
                >
                  {LEADERSHIP_DATA.quote.highlight2}
                </EditableText>
              </span>
              {' '}
              <EditableText
                value={LEADERSHIP_DATA.quote.end}
                onSave={handleSave}
                configPath="web.LEADERSHIP_DATA.quote.end"
                multiline={true}
              >
                {LEADERSHIP_DATA.quote.end}
              </EditableText>
            </p>

            <div style={{
                width: '80px',
                height: '4px',
                backgroundColor: COLORS.primary,
                marginTop: '30px',
                borderRadius: '2px',
              }}
            />
            
            {/* Author info moved below quote */}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <h3 style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontWeight: 800,
                color: COLORS.textBlack,
                marginBottom: '4px',
                letterSpacing: '-0.02em',
              }}>
                <EditableText
                  value={LEADERSHIP_DATA.author.name}
                  onSave={handleSave}
                  configPath="web.LEADERSHIP_DATA.author.name"
                >
                  {LEADERSHIP_DATA.author.name}
                </EditableText>
              </h3>
              <span style={{
                fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                fontWeight: 700,
                color: COLORS.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}>
                <EditableText
                  value={LEADERSHIP_DATA.author.role}
                  onSave={handleSave}
                  configPath="web.LEADERSHIP_DATA.author.role"
                >
                  {LEADERSHIP_DATA.author.role}
                </EditableText>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
      `}</style>
    </section>
  );
}