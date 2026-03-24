'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CodeOutlined,
  GlobalOutlined,
  MobileOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const ICON_MAP = {
  CodeOutlined: <CodeOutlined />,
  GlobalOutlined: <GlobalOutlined />,
  MobileOutlined: <MobileOutlined />,
  BarChartOutlined: <BarChartOutlined />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- INDUSTRIAL THEME TOKENS ---
const COLORS = {
  bgDark: '#020617', // Deep Space Slate
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#F8FAFC', // Off-white
  textMuted: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

export default function TailoredServices() {
  const { config, saveConfigToServer } = useAdmin();
  const MVP_DATA = config?.service?.mvp;
  
  const handleSave = () => saveConfigToServer();

  // Find initial active tab or fallback
  const [activeTab, setActiveTab] = useState(MVP_DATA?.tabs[0]?.id);
  
  if (!MVP_DATA) return null;

  const activeIndex = MVP_DATA.tabs.findIndex((tab: any) => tab.id === activeTab);
  const activeContent = MVP_DATA.tabs[activeIndex]?.content;

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '32px 24px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ARCHITECTURAL BACKGROUND GLOW */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              color: COLORS.textWhite,
              letterSpacing: '-0.04em',
              marginBottom: '20px',
            }}>
            <EditableText
              value={MVP_DATA.header.main}
              onSave={handleSave}
              configPath="service.mvp.header.main"
            >
              {MVP_DATA.header.main}
            </EditableText>{' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={MVP_DATA.header.highlight}
                onSave={handleSave}
                configPath="service.mvp.header.highlight"
              >
                {MVP_DATA.header.highlight}
              </EditableText>
            </span>
          </h2>
          <p
            style={{
              color: COLORS.textMuted,
              fontSize: '15px',
              lineHeight: '1.7',
              maxWidth: '850px',
              margin: '0 auto',
            }}>
            <EditableText
              value={MVP_DATA.header.description}
              onSave={handleSave}
              configPath="service.mvp.header.description"
            >
              {MVP_DATA.header.description}
            </EditableText>
          </p>
        </motion.div>

        {/* INTERACTIVE CONTENT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}>
          
          {/* LEFT: VERTICAL TABS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {MVP_DATA.tabs.map((tab: any, index: number) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '18px 24px',
                  background:
                    activeTab === tab.id
                      ? 'rgba(79, 70, 229, 0.1)'
                      : 'transparent',
                  border: 'none',
                  borderLeft: `4px solid ${
                    activeTab === tab.id ? COLORS.primary : 'transparent'
                  }`,
                  cursor: 'pointer',
                  transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: FONT_FAMILY,
                }}>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color:
                      activeTab === tab.id
                        ? COLORS.textWhite
                        : COLORS.textMuted,
                  }}>
                  <EditableText
                    value={tab.label}
                    onSave={handleSave}
                    configPath={`service.mvp.tabs.${index}.label`}
                  >
                    {tab.label}
                  </EditableText>
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: FROSTED GLASS CONTENT AREA */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '24px',
              padding: '40px',
              minHeight: '360px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}>
                <h3
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    marginBottom: '20px',
                    letterSpacing: '-0.02em',
                  }}>
                  <EditableText
                    value={activeContent?.title}
                    onSave={handleSave}
                    configPath={`service.mvp.tabs.${activeIndex}.content.title`}
                  >
                    {activeContent?.title}
                  </EditableText>
                </h3>

                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: '15px',
                    lineHeight: '1.8',
                    marginBottom: '32px',
                  }}>
                  <EditableText
                    value={activeContent?.description}
                    onSave={handleSave}
                    configPath={`service.mvp.tabs.${activeIndex}.content.description`}
                    multiline={true}
                  >
                    {activeContent?.description}
                  </EditableText>
                </p>

                {/* Industrial Execution Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    background: `${COLORS.primary}20`,
                    borderRadius: '8px',
                    border: `1px solid ${COLORS.primary}40`,
                  }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: COLORS.primary,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: COLORS.textWhite,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}>
                    <EditableText
                      value={activeContent?.footerBadge}
                      onSave={handleSave}
                      configPath={`service.mvp.tabs.${activeIndex}.content.footerBadge`}
                    >
                      {activeContent?.footerBadge}
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