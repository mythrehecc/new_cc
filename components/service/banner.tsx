'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgGradient: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
  white: '#FFFFFF',
  textInk: '#020617',
  glowBlue: '#4A9EFF',
  glowRed: '#FF5757',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

interface CommonBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function Banner({
  title: propsTitle,
  description: propsDescription,
  buttonText: propsButtonText,
}: CommonBannerProps) {
  const { config, saveConfigToServer } = useAdmin();
  const BANNER_DATA = config?.service?.BANNER;

  const handleSave = () => saveConfigToServer();

  if (!BANNER_DATA) return null;

  // Use props if provided, otherwise fallback to config data
  const displayTitle = propsTitle || BANNER_DATA.title;
  const displayDescription = propsDescription || BANNER_DATA.description;
  const displayButtonText = propsButtonText || BANNER_DATA.button.text;

  return (
    <section
      style={{
        position: 'relative',
        padding: '20px 24px',
        background: COLORS.bgGradient,
        overflow: 'hidden',
        fontFamily: FONT_PRIMARY,
      }}>
      
      {/* 1. LAYERED BACKGROUND EFFECTS */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none',
        }}>
        <div
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            filter: 'blur(80px)',
            top: 0,
            left: 0,
            backgroundColor: COLORS.glowBlue,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            filter: 'blur(80px)',
            bottom: 0,
            right: 0,
            backgroundColor: COLORS.glowRed,
          }}
        />
      </div>

      {/* 2. CONTAINER */}
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        <div
          className="banner-flex-layout"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          
          {/* DYNAMIC TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, maxWidth: '800px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: COLORS.white,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                margin: 0,
              }}>
              <EditableText
                value={displayTitle}
                onSave={handleSave}
                configPath="service.BANNER.title"
              >
                {displayTitle}
              </EditableText>
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
                margin: '20px 0 0 0',
              }}>
              <EditableText
                value={displayDescription}
                onSave={handleSave}
                configPath="service.BANNER.description"
              >
                {displayDescription}
              </EditableText>
            </p>
          </motion.div>

          {/* DYNAMIC ACTION BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ alignSelf: 'center' }}>
            <Link href={BANNER_DATA.button.link} scroll={true}>
              <button
                style={{
                  width: '100%',
                  minWidth: '200px',
                  backgroundColor: COLORS.white,
                  color: COLORS.textInk,
                  padding: '12px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.3)';
                }}>
                <EditableText
                  value={displayButtonText}
                  onSave={handleSave}
                  configPath="service.BANNER.button.text"
                >
                  {displayButtonText}
                </EditableText>
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
        
        .banner-flex-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: flex-start;
          justify-content: space-between;
        }

        @media (min-width: 1024px) {
          .banner-flex-layout {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}