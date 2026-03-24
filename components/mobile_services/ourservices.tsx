'use client';

import React from 'react';
import { Apple, Smartphone, type LucideIcon } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): React.ReactNode => {
  if (iconName === 'cross-platform') {
    return <img src="/cross-platform.png" alt="Cross-platform" style={{ width: '40px', height: '40px' }} />;
  }
  
  if (iconName === 'pwa') {
    return <img src="/pwa.png" alt="PWA" style={{ width: '40px', height: '40px' }} />;
  }
  
  const iconMap: Record<string, LucideIcon> = {
    Apple,
    Smartphone,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Apple`);
    return React.createElement(Apple, { size: 40, strokeWidth: 1.5 });
  }
  
  return React.createElement(icon, { size: 40, strokeWidth: 1.5 });
};

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgBase: '#FFFFFF',
  primary: '#2563EB',
  textBlack: '#020617',
  textMuted: '#64748B',
  cardBg: '#F8FAFC',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function MobileServices() {
  const { config, saveConfigToServer } = useAdmin();
  const SERVICES_DATA = config?.mobile?.SERVICES_DATA;
  
  const handleSave = () => saveConfigToServer();

  if (!SERVICES_DATA || typeof SERVICES_DATA !== 'object' || !('header' in SERVICES_DATA)) return null;

  return (
    <section
      style={{
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        padding: '80px 20px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}>
            <EditableText
              value={SERVICES_DATA.header.title}
              onSave={handleSave}
              configPath="mobile.SERVICES_DATA.header.title"
            >
              {SERVICES_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={SERVICES_DATA.header.accent}
                onSave={handleSave}
                configPath="mobile.SERVICES_DATA.header.accent"
              >
                {SERVICES_DATA.header.accent}
              </EditableText>
            </span>
            {' '}
            <EditableText
              value={SERVICES_DATA.header.suffix}
              onSave={handleSave}
              configPath="mobile.SERVICES_DATA.header.suffix"
            >
              {SERVICES_DATA.header.suffix}
            </EditableText>
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
              value={SERVICES_DATA.header.description}
              onSave={handleSave}
              configPath="mobile.SERVICES_DATA.header.description"
              multiline={true}
            >
              {SERVICES_DATA.header.description}
            </EditableText>
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px',
          }}>
          {SERVICES_DATA.items.map((service: any, index: number) => (
            <div
              key={service.id || index}
              className="service-card-industrial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: COLORS.cardBg,
                borderRadius: '24px',
                padding: '36px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.03)',
              }}>
              <div
                style={{
                  marginBottom: '24px',
                  color: COLORS.primary,
                  transition: 'transform 0.3s ease',
                }}
                className="icon-wrapper">
                {getIconComponent(service.icon)}
              </div>

              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.textBlack,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}>
                <EditableText
                  value={service.title}
                  onSave={handleSave}
                  configPath={`mobile.SERVICES_DATA.items.${index}.title`}
                >
                  {service.title}
                </EditableText>
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: COLORS.textMuted,
                  lineHeight: '1.7',
                  margin: 0,
                  fontWeight: 500,
                }}>
                <EditableText
                  value={service.description}
                  onSave={handleSave}
                  configPath={`mobile.SERVICES_DATA.items.${index}.description`}
                  multiline={true}
                >
                  {service.description}
                </EditableText>
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .service-card-industrial:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.08);
          background-color: #FFFFFF !important;
          border-color: ${COLORS.primary}20 !important;
        }

        .service-card-industrial:hover .icon-wrapper {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}