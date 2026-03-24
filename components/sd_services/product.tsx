'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Check, Target } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const ICON_MAP = {
  Settings: <Settings size={32} />,
  Users: <Users size={32} />,
  Check: <Check size={16} />,
  Target: <Target size={32} />,
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

export default function ServiceModels() {
  const { config, saveConfigToServer } = useAdmin();
  const SERVICE_DATA = config?.sd_services?.SERVICE_DATA;
  
  const handleSave = () => saveConfigToServer();

  if (!SERVICE_DATA) return null;

  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* ARCHITECTURAL BACKGROUND GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1250px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        
        {/* CENTERED HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            maxWidth: '900px',
            margin: '0 auto 60px auto',
          }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '20px',
              lineHeight: 1.1,
              textTransform: 'lowercase',
            }}>
            <EditableText
              value={SERVICE_DATA.header.title}
              onSave={handleSave}
              configPath="sd_services.SERVICE_DATA.header.title"
            >
              {SERVICE_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={SERVICE_DATA.header.highlight}
                onSave={handleSave}
                configPath="sd_services.SERVICE_DATA.header.highlight"
              >
                {SERVICE_DATA.header.highlight}
              </EditableText>
            </span>
            {' '}
            <EditableText
              value={SERVICE_DATA.header.suffix}
              onSave={handleSave}
              configPath="sd_services.SERVICE_DATA.header.suffix"
            >
              {SERVICE_DATA.header.suffix}
            </EditableText>
          </motion.h1>
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: COLORS.primary,
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* SERVICE MODELS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
          
          {SERVICE_DATA.models.map((model: any, index: number) => {
            const iconName = model.iconName as IconName;
            const IconComponent = ICON_MAP[iconName];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: model.animationX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: COLORS.white,
                  padding: '38px',
                  borderRadius: '24px',
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                }}>
                <div
                  style={{
                    color: COLORS.primary,
                    marginBottom: '32px',
                    background: `${COLORS.primary}08`,
                    padding: '16px',
                    borderRadius: '14px',
                    width: 'fit-content',
                    border: `1px solid ${COLORS.primary}15`,
                  }}>
                  {IconComponent && React.cloneElement(IconComponent, { size: 32, strokeWidth: 1.5 })}
                </div>

                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    marginBottom: '20px',
                    letterSpacing: '-0.02em',
                  }}>
                  <EditableText
                    value={model.title}
                    onSave={handleSave}
                    configPath={`sd_services.SERVICE_DATA.models.${index}.title`}
                  >
                    {model.title}
                  </EditableText>
                </h2>

                <p
                  style={{
                    fontSize: '16px',
                    color: COLORS.textMuted,
                    lineHeight: '1.7',
                    marginBottom: '32px',
                    fontWeight: 500,
                    flexGrow: 1,
                  }}>
                  <EditableText
                    value={model.description}
                    onSave={handleSave}
                    configPath={`sd_services.SERVICE_DATA.models.${index}.description`}
                    multiline={true}
                  >
                    {model.description}
                  </EditableText>
                </p>

                <ul
                  style={{
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                  {model.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                      <Check size={16} color={COLORS.primary} strokeWidth={3} />
                      <span
                        style={{
                          fontSize: '14px',
                          color: COLORS.textBlack,
                          fontWeight: 500,
                        }}>
                        <EditableText
                          value={feature}
                          onSave={handleSave}
                          configPath={`sd_services.SERVICE_DATA.models.${index}.features.${i}`}
                        >
                          {feature}
                        </EditableText>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}