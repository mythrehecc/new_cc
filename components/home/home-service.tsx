'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const ICON_MAP = {
  ArrowRightOutlined: <ArrowRightOutlined />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function Services() {
  const { config, saveConfigToServer } = useAdmin();
  const SERVICES_CONTENT = config?.home?.services;

  const [activeService, setActiveService] = useState(0);

  const handleSave = () => saveConfigToServer();

  if (!SERVICES_CONTENT) return null;

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: 'clamp(30px, 6vw, 60px) clamp(12px, 3vw, 20px)',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 'min(1200px, 95%)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'clamp(25px, 5vw, 50px)' }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: 'clamp(12px, 2vw, 18px)',
            }}
          >
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={SERVICES_CONTENT.header.highlight}
                onSave={handleSave}
                configPath="home.services.header.highlight"
              >
                {SERVICES_CONTENT.header.highlight}
              </EditableText>
            </span>
          </h1>

          <p
            style={{
              color: COLORS.textMuted,
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              lineHeight: '1.7',
              maxWidth: 'min(900px, 90%)',
              margin: '0 auto',
            }}
          >
            <EditableText
              value={SERVICES_CONTENT.header.description}
              onSave={handleSave}
              configPath="home.services.header.description"
            >
              {SERVICES_CONTENT.header.description}
            </EditableText>
          </p>
        </motion.div>

        {/* INTERACTIVE CONTENT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(30px, 5vw, 50px)',
            alignItems: 'center',
          }}
        >
          {/* LEFT: BUTTON LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {SERVICES_CONTENT.items.map((service: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: 'clamp(14px, 3vw, 20px) clamp(16px, 3vw, 28px)',
                  background:
                    activeService === index
                      ? 'rgba(79, 70, 229, 0.1)'
                      : 'transparent',
                  border: 'none',
                  borderLeft: `4px solid ${activeService === index ? COLORS.primary : 'transparent'
                    }`,
                  cursor: 'pointer',
                  transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: FONT_FAMILY,
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(16px, 3vw, 18px)',
                    fontWeight: 700,
                    color:
                      activeService === index
                        ? COLORS.textWhite
                        : COLORS.textMuted,
                  }}
                >
                  {/* Note: We use a read-only display here or small editable text depending on UX preference */}
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: CONTENT DISPLAY */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${COLORS.border}`,
              borderRadius: 'clamp(16px, 3vw, 24px)',
              padding: 'clamp(20px, 4vw, 40px)',
              minHeight: 'clamp(250px, 35vw, 350px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <h2
                  style={{
                    fontSize: 'clamp(22px, 4vw, 28px)',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    marginBottom: 'clamp(12px, 2vw, 20px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <EditableText
                    value={SERVICES_CONTENT.items[activeService].title}
                    onSave={handleSave}
                    configPath={`home.services.items.${activeService}.title`}
                  >
                    {SERVICES_CONTENT.items[activeService].title}
                  </EditableText>
                </h2>
                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: '1.8',
                    marginBottom: 'clamp(20px, 4vw, 35px)',
                  }}
                >
                  <EditableText
                    value={SERVICES_CONTENT.items[activeService].description}
                    onSave={handleSave}
                    configPath={`home.services.items.${activeService}.description`}
                  >
                    {SERVICES_CONTENT.items[activeService].description}
                  </EditableText>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default Services;