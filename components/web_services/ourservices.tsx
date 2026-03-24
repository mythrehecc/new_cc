'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Ruler, Monitor, Settings, Users, Check, Search, Lightbulb, PenTool, Terminal, ShieldCheck, Rocket, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    FileText, Ruler, Monitor, Settings, Users, Search, Lightbulb, PenTool, Terminal, ShieldCheck, Rocket,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default FileText`);
    return FileText;
  }
  
  return icon;
};

// --- DESIGN TOKENS ---
const COLORS = {
  bgDeep: '#020617',
  primary: '#4F46E5',
  textWhite: '#F8FAFC',
  textDim: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.08)',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function OurServices() {
  const { config, saveConfigToServer } = useAdmin();
  const SERVICES_DATA = config?.web?.SERVICES_DATA;

  const handleSave = () => saveConfigToServer();
  
  const [activeTab, setActiveTab] = useState(SERVICES_DATA?.list?.[0]?.id || '');
  
  if (!SERVICES_DATA) return null;

  const activeIndex = SERVICES_DATA.list.findIndex(s => s.id === activeTab);
  const current = SERVICES_DATA.list[activeIndex] || SERVICES_DATA.list[0];

  return (
    <section style={{
      backgroundColor: COLORS.bgDeep,
      color: COLORS.textWhite,
      fontFamily: FONT_PRIMARY,
      padding: '60px 20px',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textDim}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            fontWeight: 800,
            color: COLORS.textWhite,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
          }}>
            <EditableText
              value={SERVICES_DATA.header.title}
              onSave={handleSave}
              configPath="web.SERVICES_DATA.header.title"
            >
              {SERVICES_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={SERVICES_DATA.header.accent}
                onSave={handleSave}
                configPath="web.SERVICES_DATA.header.accent"
              >
                {SERVICES_DATA.header.accent}
              </EditableText>
            </span>
          </h1>
        </div>

        {/* TAB NAVIGATION */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${SERVICES_DATA.list.length}, 1fr)`,
          gap: '8px',
          marginBottom: '24px',
          borderBottom: `1px solid ${COLORS.border}`,
          paddingBottom: '12px',
        }}>
          {SERVICES_DATA.list.map((service: any, index: number) => (
            <TabButton 
              key={service.id} 
              index={index}
              service={{
                ...service,
                iconComponent: getIconComponent(service.icon)
              }} 
              isActive={activeTab === service.id} 
              onClick={() => setActiveTab(service.id)}
              onSave={handleSave}
            />
          ))}
        </div>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <ServiceDetails 
              service={{
                ...current,
                iconComponent: getIconComponent(current.icon)
              }} 
              index={activeIndex}
              onSave={handleSave}
            />
            <ServiceImage service={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function TabButton({ service, index, isActive, onClick, onSave }: any) {
  const Icon = service.iconComponent;
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        opacity: isActive ? 1 : 0.4,
        position: 'relative',
        transition: '0.3s opacity',
      }}>
      <div style={{ color: isActive ? COLORS.primary : COLORS.textWhite }}>
        <Icon size={32} />
      </div>
      <span style={{
        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
        fontWeight: 700,
        color: isActive ? COLORS.textWhite : COLORS.textDim,
        textAlign: 'center',
      }}>
        <EditableText
          value={service.title}
          onSave={onSave}
          configPath={`web.SERVICES_DATA.list.${index}.title`}
        >
          {service.title}
        </EditableText>
      </span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          style={{
            position: 'absolute',
            bottom: '-25px',
            width: '100%',
            height: '2px',
            backgroundColor: COLORS.primary,
            boxShadow: `0 0 15px ${COLORS.primary}`,
          }}
        />
      )}
    </button>
  );
}

function ServiceDetails({ service, index, onSave }: any) {
  return (
    <div>
      <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '16px' }}>
        <EditableText
          value={service.title}
          onSave={onSave}
          configPath={`web.SERVICES_DATA.list.${index}.title`}
        >
          {service.title}
        </EditableText>
      </h2>
      <p style={{
        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
        color: COLORS.textDim,
        lineHeight: '1.7',
        marginBottom: '24px',
        fontWeight: 500,
      }}>
        <EditableText
          value={service.description}
          onSave={onSave}
          configPath={`web.SERVICES_DATA.list.${index}.description`}
          multiline={true}
        >
          {service.description}
        </EditableText>
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {service.points.map((point: string, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
            <Check size={18} color={COLORS.primary} strokeWidth={3} />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>
              <EditableText
                value={point}
                onSave={onSave}
                configPath={`web.SERVICES_DATA.list.${index}.points.${i}`}
              >
                {point}
              </EditableText>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceImage({ service }: { service: any }) {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={service.image}
        alt={service.title}
        style={{
          width: '100%',
          height: '380px',
          objectFit: 'cover',
          borderRadius: '24px',
          border: `1px solid ${COLORS.border}`,
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        borderRight: `4px solid ${COLORS.primary}`,
        borderBottom: `4px solid ${COLORS.primary}`,
        borderRadius: '0 0 24px 0',
        opacity: 0.5
      }} />
    </div>
  );
}