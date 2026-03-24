'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- INDUSTRIAL THEME TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

export default function BusinessScaleTabs() {
  const [activeTab, setActiveTab] = useState('enterprise');
  const { config, saveConfigToServer } = useAdmin();
  const SCALE_DATA = config?.aiml?.SCALE_DATA;

  const handleSave = () => saveConfigToServer();

  if (!SCALE_DATA) return null;

  const activeIndex = SCALE_DATA.tabs.findIndex((tab: any) => tab.id === activeTab);
  const activeContent = SCALE_DATA.tabs[activeIndex];

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '60px 24px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ARCHITECTURAL BACKGROUND GLOW */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
        filter: 'blur(120px)',
        zIndex: 0,
      }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
            fontWeight: 800,
            color: COLORS.textWhite,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
          }}>
            <EditableText
              value={SCALE_DATA.header.prefix}
              onSave={handleSave}
              configPath="aiml.SCALE_DATA.header.prefix"
            >
              {SCALE_DATA.header.prefix}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={SCALE_DATA.header.highlight}
                onSave={handleSave}
                configPath="aiml.SCALE_DATA.header.highlight"
              >
                {SCALE_DATA.header.highlight}
              </EditableText>
            </span>
          </h2>
          <p style={{
            color: COLORS.textMuted,
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            lineHeight: '1.7',
            maxWidth: '850px',
            margin: '0 auto',
            fontWeight: 500,
          }}>
            <EditableText
              value={SCALE_DATA.header.description}
              onSave={handleSave}
              configPath="aiml.SCALE_DATA.header.description"
              multiline={true}
            >
              {SCALE_DATA.header.description}
            </EditableText>
          </p>
        </motion.div>

        {/* INTERACTIVE GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* LEFT: VERTICAL TABS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {SCALE_DATA.tabs.map((tab: any, idx: number) => (
              <ScaleTabButton
                key={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                onSave={handleSave}
                configPath={`aiml.SCALE_DATA.tabs.${idx}.label`}
              />
            ))}
          </div>

          {/* RIGHT: CONTENT AREA */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: `1px solid ${COLORS.border}`,
            borderRadius: '24px',
            padding: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backdropFilter: 'blur(120px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            minHeight: '400px'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  fontWeight: 800,
                  color: COLORS.textWhite,
                  marginBottom: '24px',
                  letterSpacing: '-0.02em',
                }}>
                  <EditableText
                    value={activeContent?.title || ''}
                    onSave={handleSave}
                    configPath={`aiml.SCALE_DATA.tabs.${activeIndex}.title`}
                  >
                    {activeContent?.title}
                  </EditableText>
                </h3>

                <p style={{
                  color: COLORS.textMuted,
                  fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                  lineHeight: '1.8',
                  marginBottom: '32px',
                  fontWeight: 450,
                }}>
                  <EditableText
                    value={activeContent?.description || ''}
                    onSave={handleSave}
                    configPath={`aiml.SCALE_DATA.tabs.${activeIndex}.description`}
                    multiline={true}
                  >
                    {activeContent?.description}
                  </EditableText>
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 16px',
                  background: `${COLORS.primary}20`,
                  borderRadius: '8px',
                  border: `1px solid ${COLORS.primary}40`,
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS.primary }} />
                  <span style={{
                    fontSize: 'clamp(0.625rem, 1.5vw, 0.6875rem)',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>
                    <EditableText
                      value={SCALE_DATA.footerBadge}
                      onSave={handleSave}
                      configPath="aiml.SCALE_DATA.footerBadge"
                    >
                      {SCALE_DATA.footerBadge}
                    </EditableText>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function ScaleTabButton({ 
  label, 
  isActive, 
  onClick, 
  onSave, 
  configPath 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
  onSave: () => void;
  configPath: string;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '24px 32px',
        background: isActive ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
        borderLeft: `4px solid ${isActive ? COLORS.primary : 'transparent'}`,
        cursor: 'pointer',
        transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <span style={{
        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
        fontWeight: 700,
        color: isActive ? COLORS.textWhite : COLORS.textMuted,
      }}>
        <EditableText
          value={label}
          onSave={onSave}
          configPath={configPath}
        >
          {label}
        </EditableText>
      </span>
    </div>
  );
}