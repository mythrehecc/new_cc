'use client';

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { Quote, Users, Code, Smartphone, Brain } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const { Text, Paragraph } = Typography;

function LeadershipInsight() {
  const { config, saveConfigToServer } = useAdmin();
  const LEADERSHIP_DATA = config?.home?.LEADERSHIP_DATA;

  const handleSave = () => saveConfigToServer();

  if (!LEADERSHIP_DATA) return null;

  // --- UNIFIED INDUSTRIAL DESIGN TOKENS ---
  const COLORS = {
    bgBase: '#F3F5F9', // Standard Industrial Slate-Blue
    textBlack: '#020617', // Ink Black
    textMuted: '#64748B', // Architectural Slate
    primary: '#4F46E5', // Industrial Indigo
    border: '#E2E8F0', // Crisp Edge
    white: '#FFFFFF',
  };

  const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

  return (
    <section
      style={{
        padding: 'clamp(20px, 4vw, 30px) clamp(10px, 2.5vw, 16px)', // Standard Section Padding
        backgroundColor: COLORS.bgBase,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: FONT_PRIMARY,
      }}>
      {/* 1. ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* 2. GLASS-MORPHIC BENTO CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: 'min(900px, 95%)',
          width: '100%',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(24px)',
          borderRadius: 'clamp(16px, 3vw, 24px)',
          padding: 'clamp(20px, 4vw, 40px)',
          border: `1px solid ${COLORS.white}`,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.05)',
        }}>
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ margin: '0 clamp(-8px, -1.5vw, -16px)' }}>
          {/* Testimonial Content */}
          <Col xs={24} md={24} lg={24}>
            {/* Service Icon */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}>
                <Users
                  size={28}
                  color={COLORS.primary}
                  strokeWidth={2}
                />
              </div>
            </div>
            <div style={{ position: 'relative', paddingLeft: 'clamp(10px, 2vw, 20px)' }}>
              {/* Refined Industrial Quote Mark */}
              <div
                style={{
                  fontSize: 'clamp(60px, 10vw, 110px)',
                  color: COLORS.primary,
                  lineHeight: 1,
                  fontFamily: 'serif',
                  opacity: 0.1,
                  position: 'absolute',
                  top: 'clamp(-20px, -4vw, -50px)',
                  left: 'clamp(-10px, -2vw, -20px)',
                  userSelect: 'none',
                  fontWeight: 900,
                }}>
                “
              </div>

              <Paragraph
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  fontWeight: 600,
                  lineHeight: 1.7,
                  color: COLORS.textBlack,
                  fontFamily: FONT_PRIMARY,
                  margin: 0,
                  letterSpacing: '-0.01em',
                  fontStyle: 'normal',
                }}>
                <EditableText
                  value={LEADERSHIP_DATA.quote.part1}
                  onSave={handleSave}
                  configPath="home.LEADERSHIP_DATA.quote.part1"
                >
                  {LEADERSHIP_DATA.quote.part1}
                </EditableText>

                <span style={{ color: COLORS.primary }}>
                  <EditableText
                    value={LEADERSHIP_DATA.quote.highlight}
                    onSave={handleSave}
                    configPath="home.LEADERSHIP_DATA.quote.highlight"
                  >
                    {LEADERSHIP_DATA.quote.highlight}
                  </EditableText>
                </span>

                <EditableText
                  value={LEADERSHIP_DATA.quote.part2}
                  onSave={handleSave}
                  configPath="home.LEADERSHIP_DATA.quote.part2"
                >
                  {LEADERSHIP_DATA.quote.part2}
                </EditableText>

                <span style={{ fontWeight: 800 }}>
                  <EditableText
                    value={LEADERSHIP_DATA.quote.boldSegment}
                    onSave={handleSave}
                    configPath="home.LEADERSHIP_DATA.quote.boldSegment"
                  >
                    {LEADERSHIP_DATA.quote.boldSegment}
                  </EditableText>
                </span>

                <EditableText
                  value={LEADERSHIP_DATA.quote.part3}
                  onSave={handleSave}
                  configPath="home.LEADERSHIP_DATA.quote.part3"
                >
                  {LEADERSHIP_DATA.quote.part3}
                </EditableText>
              </Paragraph>

              {/* Engineering Detail Line */}
              <div
                style={{
                  width: 'clamp(60px, 10vw, 80px)',
                  height: 'clamp(3px, 1vw, 4px)',
                  backgroundColor: COLORS.primary,
                  marginTop: 'clamp(24px, 5vw, 48px)',
                  borderRadius: '2px',
                }}
              />
            </div>
            
            {/* Author info moved below quote */}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <div style={{ marginBottom: '4px' }}>
                <Text
                  style={{
                    fontSize: 'clamp(18px, 3.5vw, 24px)',
                    fontWeight: 800,
                    color: COLORS.textBlack,
                    fontFamily: FONT_PRIMARY,
                    display: 'block',
                    letterSpacing: '-0.02em',
                  }}>
                  <EditableText
                    value={LEADERSHIP_DATA.author.name}
                    onSave={handleSave}
                    configPath="home.LEADERSHIP_DATA.author.name"
                  >
                    {LEADERSHIP_DATA.author.name}
                  </EditableText>
                </Text>
              </div>
              <Text
                style={{
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  fontWeight: 700,
                  color: COLORS.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}>
                <EditableText
                  value={LEADERSHIP_DATA.author.role}
                  onSave={handleSave}
                  configPath="home.LEADERSHIP_DATA.author.role"
                >
                  {LEADERSHIP_DATA.author.role}
                </EditableText>
              </Text>
            </div>
          </Col>
        </Row>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
      `}</style>
    </section>
  );
}

export default LeadershipInsight;