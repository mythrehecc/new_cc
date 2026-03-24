
'use client';

import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRightOutlined,
  ThunderboltFilled,
  CodeOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const ICON_MAP = {
  ArrowRightOutlined: <ArrowRightOutlined />,
  SafetyCertificateOutlined: <SafetyCertificateOutlined />,
  GlobalOutlined: <GlobalOutlined />,
  CodeOutlined: <CodeOutlined />,
  ThunderboltFilled: <ThunderboltFilled />,
} as const;

type IconName = keyof typeof ICON_MAP;

const COLORS = {
  bgBase: '#F8FAFC',
  primary: '#4F46E5',
  secondary: '#0EA5E9',
  textMain: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function MainCompanyHero() {
  const { config, saveConfigToServer } = useAdmin();
  const HERO_CONTENT = config?.home?.hero;

  const handleSave = () => saveConfigToServer();

  if (!HERO_CONTENT) return null;

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
        minHeight: 'clamp(50vh, 70vh, 85vh)',
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(12px, 3vw, 20px)',
        fontFamily: FONT_FAMILY,
        paddingTop: 'clamp(90px, 20vw, 130px)',
        paddingBottom: 'clamp(25px, 5vw, 45px)',
      }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.primary}15 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 'min(1400px, 95%)',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">

            <motion.h1
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
                fontWeight: 800,
                color: COLORS.textMain,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 'clamp(20px, 4vw, 32px)',
              }}>
              <EditableText
                value={HERO_CONTENT.title.line1}
                onSave={handleSave}
                configPath="home.hero.title.line1"
              >
                {HERO_CONTENT.title.line1}
              </EditableText> <span
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                <EditableText
                  value={HERO_CONTENT.title.highlight}
                  onSave={handleSave}
                  configPath="home.hero.title.highlight"
                >
                  {HERO_CONTENT.title.highlight}
                </EditableText>
              </span>
              <br style={{ marginBottom: '20px' }} />
              <EditableText
                value={HERO_CONTENT.title.line2}
                onSave={handleSave}
                configPath="home.hero.title.line2"
              >
                {HERO_CONTENT.title.line2}
              </EditableText>
            </motion.h1>

            <motion.p
              style={{
                fontSize: 'clamp(18px, 4vw, 22px)',
                color: COLORS.textMuted,
                lineHeight: 1.6,
                maxWidth: 'min(600px, 90%)',
                marginBottom: 'clamp(30px, 5vw, 48px)',
                fontWeight: 500,
                textAlign: 'center',
                margin: '0 auto clamp(30px, 5vw, 48px)',
              }}>
              <EditableText
                value={HERO_CONTENT.description}
                onSave={handleSave}
                configPath="home.hero.description"
              >
                {HERO_CONTENT.description}
              </EditableText>
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: 'clamp(12px, 3vw, 16px)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'clamp(30px, 5vw, 48px)' }}>
              {/* Initiate Project Button */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                style={{
                  background: COLORS.primary,
                  color: COLORS.white,
                  border: 'none',
                  padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 32px)',
                  borderRadius: '12px',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: `0 20px 40px -10px ${COLORS.primary}44`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 25px 50px -12px ${COLORS.primary}55`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${COLORS.primary}44`;
                }}
              >
                Initiate Project
                <ArrowRightOutlined style={{ fontSize: '18px' }} />
              </motion.button>
              
              {HERO_CONTENT.buttons.slice(0, 0).map((btn: any, idx: number) => {
                const isValidIcon = btn.iconName && ICON_MAP[btn.iconName as IconName];
                return (
                  <Link key={idx} href={btn.href} scroll={btn.scroll}>
                    <Button
                      type={btn.type}
                      size="large"
                      icon={isValidIcon ? ICON_MAP[btn.iconName as IconName] : null}
                      style={{
                        height: 'clamp(48px, 8vw, 56px)',
                        padding: '0 clamp(20px, 4vw, 32px)',
                        borderRadius: '12px',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: idx === 0 ? 700 : 600,
                        backgroundColor: btn.type === 'primary' ? COLORS.primary : 'transparent',
                        border: btn.type === 'default' ? `1px solid ${COLORS.border}` : 'none',
                        boxShadow: btn.type === 'primary' ? `0 20px 40px -10px ${COLORS.primary}44` : 'none',
                      }}>
                      <EditableText
                        value={btn.label}
                        onSave={handleSave}
                        configPath={`home.hero.buttons.${idx}.label`}
                      >
                        {btn.label}
                      </EditableText>
                    </Button>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default MainCompanyHero;
