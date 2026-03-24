'use client';

import React from 'react';
import {
  MessageSquare,
  Building2,
  Network,
  Monitor,
  GraduationCap,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    MessageSquare,
    Building2,
    Network,
    Monitor,
    GraduationCap,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default MessageSquare`);
    return MessageSquare;
  }
  
  return icon;
};

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#FFFFFF',
  primary: '#2563EB', // Precision Blue
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  cardBg: '#F8FAFC', // Slate 50 for cards
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

function AIServices() {
  const { config, saveConfigToServer } = useAdmin();
  const SERVICES_DATA = config?.aiml?.SERVICES_DATA;

  const handleSave = () => saveConfigToServer();
  
  if (!SERVICES_DATA) return null;
  
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '16px 24px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <h1
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 2rem)',
            fontWeight: 800,
            color: COLORS.textBlack,
            letterSpacing: '-0.06em',
            marginBottom: '32px',
            textAlign: 'center',
          }}>
          <EditableText
            value={SERVICES_DATA.header.mainText}
            onSave={handleSave}
            configPath="aiml.SERVICES_DATA.header.mainText"
          >
            {SERVICES_DATA.header.mainText}
          </EditableText>
          {' '}
          <span style={{ color: COLORS.primary }}>
            <EditableText
              value={SERVICES_DATA.header.highlightText}
              onSave={handleSave}
              configPath="aiml.SERVICES_DATA.header.highlightText"
            >
              {SERVICES_DATA.header.highlightText}
            </EditableText>
          </span>
        </h1>

        {/* SERVICES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}>
          {SERVICES_DATA.services.map((service: any, index: number) => (
            <ServiceItem 
              key={index} 
              index={index} 
              service={service} 
              onSave={handleSave}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT ---
interface ServiceItemProps {
  index: number;
  onSave: () => void;
  service: {
    icon: string;
    title: string;
    description: string;
  }
}

function ServiceItem({ service, index, onSave }: ServiceItemProps) {
  const Icon = getIconComponent(service.icon);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: COLORS.cardBg,
        borderRadius: '12px',
        padding: '32px 24px',
        transition: 'all 0.3s ease-out',
        border: '1px solid transparent',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${COLORS.primary}33`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
    >
      <div style={{ marginBottom: '24px' }}>
        <Icon
          size={48}
          strokeWidth={1.5}
          style={{
            color: COLORS.primary,
          }}
        />
      </div>

      <h2
        style={{
          fontSize: 'clamp(0.9375rem, 3.5vw, 1.125rem)',
          fontWeight: 700,
          color: COLORS.textBlack,
          marginBottom: '16px',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
        }}>
        <EditableText
          value={service.title}
          onSave={onSave}
          configPath={`aiml.SERVICES_DATA.services.${index}.title`}
        >
          {service.title}
        </EditableText>
      </h2>

      <p
        style={{
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          color: COLORS.textMuted,
          lineHeight: 1.7,
          margin: 0,
          fontWeight: 450,
        }}>
        <EditableText
          value={service.description}
          onSave={onSave}
          configPath={`aiml.SERVICES_DATA.services.${index}.description`}
          multiline={true}
        >
          {service.description}
        </EditableText>
      </p>
    </div>
  );
}

export default AIServices;