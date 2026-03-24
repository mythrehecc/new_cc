'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart2, ShieldCheck, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Rocket,
    BarChart2,
    ShieldCheck,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Rocket`);
    return Rocket;
  }
  
  return icon;
};

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

export default function WhyCrestcode() {
  const { config, saveConfigToServer } = useAdmin();
  const WHY_DATA = config?.web?.WHY_DATA;

  const handleSave = () => saveConfigToServer();
  
  if (!WHY_DATA) return null;

  return (
    <section
      style={{
        padding: '32px 20px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ARCHITECTURAL BACKGROUND GRID */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '12px',
            }}>
            <EditableText
              value={WHY_DATA.header.title}
              onSave={handleSave}
              configPath="web.WHY_DATA.header.title"
            >
              {WHY_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={WHY_DATA.header.highlight}
                onSave={handleSave}
                configPath="web.WHY_DATA.header.highlight"
              >
                {WHY_DATA.header.highlight}
              </EditableText>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '17px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            <EditableText
              value={WHY_DATA.header.description}
              onSave={handleSave}
              configPath="web.WHY_DATA.header.description"
              multiline={true}
            >
              {WHY_DATA.header.description}
            </EditableText>
          </motion.p>
        </div>

        {/* STATS GRID */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
          }}>
          {WHY_DATA.stats.map((item: any, index: number) => (
            <StatCard 
              key={index} 
              item={item} 
              index={index} 
              onSave={handleSave}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT: INDIVIDUAL STAT CARD ---
function StatCard({ item, index, onSave }: { item: any; index: number; onSave: () => void }) {
  const Icon = getIconComponent(item.icon);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        backgroundColor: COLORS.white,
        padding: '20px 16px',
        borderRadius: '20px',
        border: `1px solid ${COLORS.border}`,
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      
      {/* ICON CIRCLE */}
      <div style={{
          color: COLORS.primary,
          marginBottom: '12px',
          background: `${COLORS.primary}08`,
          padding: '10px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon size={20} />
      </div>

      <div style={{
          fontSize: 'clamp(1rem, 3vw, 1.75rem)',
          fontWeight: 800,
          color: COLORS.textBlack,
          marginBottom: '24px',
          letterSpacing: '-0.04em',
        }}>
        <EditableText
          value={item.value}
          onSave={onSave}
          configPath={`web.WHY_DATA.stats.${index}.value`}
        >
          {item.value}
        </EditableText>
      </div>

      <div style={{
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          fontWeight: 700,
          color: COLORS.primary,
          marginBottom: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
        <EditableText
          value={item.label}
          onSave={onSave}
          configPath={`web.WHY_DATA.stats.${index}.label`}
        >
          {item.label}
        </EditableText>
      </div>

      <p style={{
          fontSize: '15px',
          color: COLORS.textMuted,
          lineHeight: '1.6',
          margin: 0,
          fontWeight: 500,
        }}>
        <EditableText
          value={item.description}
          onSave={onSave}
          configPath={`web.WHY_DATA.stats.${index}.description`}
          multiline={true}
        >
          {item.description}
        </EditableText>
      </p>
    </motion.div>
  );
}