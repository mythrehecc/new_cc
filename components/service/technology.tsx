'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Server, Component, Gem } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const ICON_MAP = {
  Coffee: <Coffee size={32} />,
  Server: <Server size={32} />,
  Component: <Component size={32} />,
  Gem: <Gem size={32} />,
} as const;

type IconName = keyof typeof ICON_MAP;

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

export default function TechnologiesSection() {
  const { config, saveConfigToServer } = useAdmin();
  const TECH_CONTENT = config?.service?.Technology;
  
  const handleSave = () => saveConfigToServer();

  if (!TECH_CONTENT) return null;

  return (
    <section
      style={{
        padding: '32px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '20px',
            }}>
            <EditableText
              value={TECH_CONTENT.header.titlePrefix}
              onSave={handleSave}
              configPath="service.Technology.header.titlePrefix"
            >
              {TECH_CONTENT.header.titlePrefix}
            </EditableText>
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={TECH_CONTENT.header.titleHighlight}
                onSave={handleSave}
                configPath="service.Technology.header.titleHighlight"
              >
                {TECH_CONTENT.header.titleHighlight}
              </EditableText>
            </span>
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '850px',
              margin: '0 auto',
            }}>
            <EditableText
              value={TECH_CONTENT.header.description}
              onSave={handleSave}
              configPath="service.Technology.header.description"
              multiline={true}
            >
              {TECH_CONTENT.header.description}
            </EditableText>
          </p>
        </motion.div>

        {/* 2-COLUMN TECHNOLOGY BENTO GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '24px',
          }}>
          {TECH_CONTENT.technologies.map((tech: any, index: number) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: COLORS.white,
                padding: '32px',
                borderRadius: '16px',
                border: `1px solid ${COLORS.border}`,
                boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                gap: '12px',
                transition: 'all 0.3s ease',
              }}>
              <div
                style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  backgroundColor: `${COLORS.primary}08`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.primary,
                  border: `1px solid ${COLORS.primary}15`,
                }}>
                {ICON_MAP[tech.icon as IconName] || <div style={{width: 32, height: 32}} />}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                  }}>
                  <EditableText
                    value={tech.name}
                    onSave={handleSave}
                    configPath={`service.Technology.technologies.${index}.name`}
                  >
                    {tech.name}
                  </EditableText>
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: COLORS.textMuted,
                    lineHeight: '1.7',
                    margin: 0,
                    fontWeight: 500,
                  }}>
                  <EditableText
                    value={tech.description}
                    onSave={handleSave}
                    configPath={`service.Technology.technologies.${index}.description`}
                    multiline={true}
                  >
                    {tech.description}
                  </EditableText>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        @media (max-width: 600px) {
          .tech-grid-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}