'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock, Target, Zap, Shield, Users } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const ICON_MAP = {
  Target: <Target size={24} />,
  Zap: <Zap size={24} />,
  Shield: <Shield size={24} />,
  Users: <Users size={24} />,
  Check: <Check size={16} />,
  Clock: <Clock size={16} />,
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

function SoftwareProductProcess() {
  const { config, saveConfigToServer } = useAdmin();
  const PROCESS_DATA = config?.sd_services?.PROCESS_DATA;
  
  const handleSave = () => saveConfigToServer();

  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set());

  const togglePhase = (phaseNumber: number) => {
    setExpandedPhases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(phaseNumber)) {
        newSet.delete(phaseNumber);
      } else {
        newSet.add(phaseNumber);
      }
      return newSet;
    });
  };

  useEffect(() => {
    if (!PROCESS_DATA) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections((prev) => new Set(Array.from(prev).concat(id)));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.software-step').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [PROCESS_DATA]);

  if (!PROCESS_DATA) return null;

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* 1. ENGINEERING GRID OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* CENTERED HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}>
            <EditableText
              value={PROCESS_DATA.header.title}
              onSave={handleSave}
              configPath="sd_services.PROCESS_DATA.header.title"
            >
              {PROCESS_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={PROCESS_DATA.header.highlight}
                onSave={handleSave}
                configPath="sd_services.PROCESS_DATA.header.highlight"
              >
                {PROCESS_DATA.header.highlight}
              </EditableText>
            </span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            <EditableText
              value={PROCESS_DATA.header.description}
              onSave={handleSave}
              configPath="sd_services.PROCESS_DATA.header.description"
              multiline={true}
            >
              {PROCESS_DATA.header.description}
            </EditableText>
          </p>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase: any, index: number) => (
            <div
              key={index}
              data-section={phase.number}
              className="software-step"
              style={{
                position: 'relative',
                paddingBottom: index === PROCESS_DATA.phases.length - 1 ? 0 : '60px',
                opacity: visibleSections.has(phase.number) ? 1 : 0,
                transform: visibleSections.has(phase.number) ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${index * 100}ms`,
              }}>
              
              {/* Vertical Connector Line */}
              {index < PROCESS_DATA.phases.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '40px',
                    top: '80px',
                    bottom: 0,
                    width: '2px',
                    background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
                    opacity: visibleSections.has(phase.number + 1) ? 1 : 0.2,
                    transition: 'opacity 1s ease',
                  }}
                />
              )}

              <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                {/* CIRCULAR NUMBER BADGE */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: visibleSections.has(phase.number) ? COLORS.primary : COLORS.white,
                    border: `2px solid ${COLORS.primary}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: visibleSections.has(phase.number) ? `0 10px 20px -5px ${COLORS.primary}66` : 'none',
                    transition: 'all 0.6s ease',
                    zIndex: 2,
                    color: visibleSections.has(phase.number) ? COLORS.white : COLORS.primary,
                  }}>
                  <span style={{ fontSize: '20px', fontWeight: 800 }}>{phase.number}</span>
                </div>

                {/* CONTENT AREA */}
                <div style={{ flex: 1 }}>
                  <div 
                    style={{ marginBottom: '12px', cursor: 'pointer' }}
                    onClick={() => togglePhase(phase.number)}
                  >
                    <h2
                      style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                        fontWeight: 800,
                        color: COLORS.textBlack,
                        letterSpacing: '-0.04em',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                      <EditableText
                        value={phase.title}
                        onSave={handleSave}
                        configPath={`sd_services.PROCESS_DATA.phases.${index}.title`}
                      >
                        {phase.title}
                      </EditableText>
                      <motion.div
                        animate={{ 
                          rotate: expandedPhases.has(phase.number) ? 180 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          color: COLORS.primary,
                          fontSize: '16px',
                          display: 'inline-flex',
                        }}
                      >
                        ▼
                      </motion.div>
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.primary, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <Clock size={16} /> 
                      <EditableText
                        value={phase.duration}
                        onSave={handleSave}
                        configPath={`sd_services.PROCESS_DATA.phases.${index}.duration`}
                      >
                        {phase.duration}
                      </EditableText>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedPhases.has(phase.number) && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                          gap: '4px', 
                          padding: 0, 
                          listStyle: 'none',
                          overflow: 'hidden'
                        }}>
                        {phase.items.map((item: string, i: number) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '16px',
                              background: 'rgba(255,255,255,0.6)',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              border: `1px solid ${COLORS.border}`,
                            }}>
                            <Check size={16} color={COLORS.primary} strokeWidth={3} />
                            <span style={{ fontSize: '12px', color: COLORS.textMuted, fontWeight: 500 }}>
                              <EditableText
                                value={item}
                                onSave={handleSave}
                                configPath={`sd_services.PROCESS_DATA.phases.${index}.items.${i}`}
                              >
                                {item}
                              </EditableText>
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        @media (max-width: 768px) {
          .software-step { padding-bottom: 60px !important; }
          .software-step > div { gap: 20px !important; }
          .software-step div[style*="width: 80px"] { width: 60px !important; height: 60px !important; }
          .software-step span[style*="fontSize: 28px"] { fontSize: 20px !important; }
          .software-step div[style*="left: 40px"] { left: 30px !important; }
        }
      `}</style>
    </section>
  );
}

export default SoftwareProductProcess;