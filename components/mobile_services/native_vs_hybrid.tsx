'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Smartphone, Layers, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    "Smartphone": Smartphone,
    "Layers": Layers,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Smartphone`);
    return Smartphone;
  }
  
  return icon;
};

// --- INDUSTRIAL THEME TOKENS ---
const COLORS = {
  bgDark: '#020617',
  primary: '#4F46E5',
  textWhite: '#F8FAFC',
  textMuted: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

type TabType = 'native' | 'hybrid';

export default function NativeVsHybrid() {
  const { config, saveConfigToServer } = useAdmin();
  const APP_DATA = config?.mobile?.APP_DATA;
  
  const [activeTab, setActiveTab] = useState<TabType>('native');
  const handleSave = () => saveConfigToServer();
  
  if (!APP_DATA) return null;
  
  const currentContent = APP_DATA.tabs[activeTab];

  return (
    <section
      style={{
        backgroundColor: COLORS.bgDark,
        padding: '60px 20px',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
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
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: COLORS.textWhite,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
            <EditableText
              value={APP_DATA.header.title}
              onSave={handleSave}
              configPath="mobile.APP_DATA.header.title"
            >
              {APP_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={APP_DATA.header.accent}
                onSave={handleSave}
                configPath="mobile.APP_DATA.header.accent"
              >
                {APP_DATA.header.accent}
              </EditableText>
            </span>
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            <EditableText
              value={APP_DATA.header.description}
              onSave={handleSave}
              configPath="mobile.APP_DATA.header.description"
              multiline={true}
            >
              {APP_DATA.header.description}
            </EditableText>
          </p>
        </motion.div>

        {/* COMPARISON INTERFACE GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}>
          
          {/* LEFT: ARCHITECTURAL SELECTORS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(Object.keys(APP_DATA.tabs) as TabType[]).map((type: TabType) => (
              <div
                key={type}
                onClick={() => setActiveTab(type)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '20px 24px',
                  background: activeTab === type ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
                  borderLeft: `4px solid ${activeTab === type ? COLORS.primary : 'transparent'}`,
                  cursor: 'pointer',
                  transition: '0.3s all cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                <div style={{ color: activeTab === type ? COLORS.primary : COLORS.textMuted }}>
                  {React.createElement(getIconComponent(APP_DATA.tabs[type].icon), { size: 20 })}
                </div>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: activeTab === type ? COLORS.textWhite : COLORS.textMuted,
                  }}>
                  <EditableText
                    value={APP_DATA.tabs[type].label}
                    onSave={handleSave}
                    configPath={`mobile.APP_DATA.tabs.${type}.label`}
                  >
                    {APP_DATA.tabs[type].label}
                  </EditableText>
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: SPECIFICATION CARD */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '24px',
              padding: '32px',
              minHeight: '320px',
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
                
                <p
                  style={{
                    fontSize: '14px',
                    color: COLORS.textMuted,
                    lineHeight: '1.8',
                    marginBottom: '18px',
                    fontWeight: 500,
                  }}>
                  <EditableText
                    value={currentContent.description}
                    onSave={handleSave}
                    configPath={`mobile.APP_DATA.tabs.${activeTab}.description`}
                    multiline={true}
                  >
                    {currentContent.description}
                  </EditableText>
                </p>

                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: COLORS.textWhite,
                    marginBottom: '40px',
                    letterSpacing: '-0.02em',
                  }}>
                  <EditableText
                    value={currentContent.title}
                    onSave={handleSave}
                    configPath={`mobile.APP_DATA.tabs.${activeTab}.title`}
                  >
                    {currentContent.title}
                  </EditableText>
                </h3>

                <ul
                  style={{
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                  {currentContent.points.map((point: string, i: number) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                      <div
                        style={{
                          marginTop: '4px',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: `${COLORS.primary}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: `1px solid ${COLORS.primary}40`,
                        }}>
                        <Check size={12} color={COLORS.primary} strokeWidth={3} />
                      </div>
                      <span
                        style={{
                          fontSize: '15px',
                          color: COLORS.textWhite,
                          fontWeight: 500,
                          lineHeight: 1.5,
                        }}>
                        <EditableText
                          value={point}
                          onSave={handleSave}
                          configPath={`mobile.APP_DATA.tabs.${activeTab}.points.${i}`}
                        >
                          {point}
                        </EditableText>
                      </span>
                    </li>
                  ))}
                </ul>
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