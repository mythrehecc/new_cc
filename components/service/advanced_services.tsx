'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../admin/context';
import { Cpu, Network, MessageSquare, BarChart3, Database, Brain, Building2, Monitor, GraduationCap } from 'lucide-react';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const ICON_MAP = {
  Cpu: <Cpu />,
  Network: <Network />,
  MessageSquare: <MessageSquare />,
  BarChart3: <BarChart3 />,
  Database: <Database />,
  Brain: <Brain />,
  Building2: <Building2 />,
  Monitor: <Monitor />,
  GraduationCap: <GraduationCap />,
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

export default function AdvancedServices() {
  const { config, saveConfigToServer } = useAdmin();
  const SERVICES_DATA = config?.service?.SERVICES_DATA;
  const [activeServiceId, setActiveServiceId] = useState('ai');

  const handleSave = () => saveConfigToServer();

  useEffect(() => {
    if (SERVICES_DATA?.services?.length > 0) {
      setActiveServiceId(SERVICES_DATA.services[0].id);
    }
  }, [SERVICES_DATA]);

  if (!SERVICES_DATA) return null;

  // Find the active service and its index for the configPath
  const activeIndex = SERVICES_DATA.services.findIndex((s) => s.id === activeServiceId);
  const activeService = SERVICES_DATA.services[activeIndex] || SERVICES_DATA.services[0];

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
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        fontFamily: FONT_PRIMARY,
        padding: '60px 24px',
      }}>
      
      {/* ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.primary}15 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* HEADER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}>
            <motion.h2
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                fontWeight: 800,
                color: COLORS.textBlack,
                letterSpacing: '-0.04em',
                gap: '12px', marginBottom: '20px',
              }}>
              <EditableText
                value={SERVICES_DATA.header.main}
                onSave={handleSave}
                configPath="service.SERVICES_DATA.header.main"
              >
                {SERVICES_DATA.header.main}
              </EditableText>
              <span style={{ color: COLORS.primary }}>
                <EditableText
                  value={SERVICES_DATA.header.highlight}
                  onSave={handleSave}
                  configPath="service.SERVICES_DATA.header.highlight"
                >
                  {SERVICES_DATA.header.highlight}
                </EditableText>
              </span>
            </motion.h2>
            <motion.p
              style={{
                fontSize: '15px',
                color: COLORS.textMuted,
                lineHeight: 1.6,
                maxWidth: '800px',
                margin: '0 auto',
                fontWeight: 500,
              }}>
              <EditableText
                value={SERVICES_DATA.header.sub}
                onSave={handleSave}
                configPath="service.SERVICES_DATA.header.sub"
              >
                {SERVICES_DATA.header.sub}
              </EditableText>
            </motion.p>
          </motion.div>

          {/* INTERACTIVE ICON TABS */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '40px',
            }}>
            {SERVICES_DATA.services.map((service, idx) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveServiceId(service.id)}
                style={{
                  padding: '16px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  minWidth: '140px',
                  background: activeServiceId === service.id ? COLORS.white : 'transparent',
                  border: `1px solid ${activeServiceId === service.id ? COLORS.border : 'transparent'}`,
                  boxShadow: activeServiceId === service.id ? '0 10px 25px -5px rgba(0,0,0,0.05)' : 'none',
                }}>
                <div style={{ 
                  color: activeServiceId === service.id ? COLORS.primary : COLORS.textMuted, 
                  transition: 'color 0.3s' 
                }}>
                  {ICON_MAP[service.iconName as IconName]}
                </div>
                <span style={{ 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  color: activeServiceId === service.id ? COLORS.textBlack : COLORS.textMuted 
                }}>
                  {service.id}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* DYNAMIC CONTENT CARD */}
          <motion.div
            key={activeServiceId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: COLORS.white,
              borderRadius: '12px',
              padding: '16px',
              border: `1px solid ${COLORS.border}`,
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              minHeight: '180px'
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ 
                width: '40px', 
                height: '2px', 
                backgroundColor: COLORS.primary 
              }} />
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 800, 
                color: COLORS.textBlack, 
                margin: 0, 
                letterSpacing: '-0.02em' 
              }}>
                <EditableText
                  value={activeService.title}
                  onSave={handleSave}
                  configPath={`service.SERVICES_DATA.services.${activeIndex}.title`}
                >
                  {activeService.title}
                </EditableText>
              </h3>
            </div>
            <p style={{ 
              fontSize: '14px', 
              color: COLORS.textMuted, 
              lineHeight: 1.7, 
              maxWidth: '900px', 
              margin: 0, 
              fontWeight: 450 
            }}>
              <EditableText
                value={activeService.description}
                onSave={handleSave}
                configPath={`service.SERVICES_DATA.services.${activeIndex}.description`}
              >
                {activeService.description}
              </EditableText>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}