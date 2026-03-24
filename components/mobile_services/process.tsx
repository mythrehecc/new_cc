'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

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

export default function MobileProcess() {
  const { config, saveConfigToServer } = useAdmin();
  const PROCESS_DATA = config?.mobile?.PROCESS_DATA;
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set());

  const handleSave = () => saveConfigToServer();

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections((prev) => new Set([...Array.from(prev), id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.mobile-process-step').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [PROCESS_DATA]);

  if (!PROCESS_DATA || typeof PROCESS_DATA !== 'object' || !('header' in PROCESS_DATA)) return null;

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      
      {/* ENGINEERING GRID OVERLAY */}
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

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        
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
              value={PROCESS_DATA.header.title}
              onSave={handleSave}
              configPath="mobile.PROCESS_DATA.header.title"
            >
              {PROCESS_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={PROCESS_DATA.header.accent}
                onSave={handleSave}
                configPath="mobile.PROCESS_DATA.header.accent"
              >
                {PROCESS_DATA.header.accent}
              </EditableText>
            </span>
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
              value={PROCESS_DATA.header.description}
              onSave={handleSave}
              configPath="mobile.PROCESS_DATA.header.description"
              multiline={true}
            >
              {PROCESS_DATA.header.description}
            </EditableText>
          </p>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase: any, index: number) => {
            const isVisible = visibleSections.has(phase.number);
            
            return (
              <div
                key={phase.number}
                data-section={phase.number}
                className="mobile-process-step"
                style={{
                  position: 'relative',
                  paddingBottom: index === PROCESS_DATA.phases.length - 1 ? 0 : '50px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 100}ms`,
                }}>
                
                {/* Vertical Connector Line */}
                {index < PROCESS_DATA.phases.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '35px',
                      top: '70px',
                      bottom: 0,
                      width: '2px',
                      background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
                      opacity: visibleSections.has(phase.number + 1) ? 1 : 0.2,
                      transition: 'opacity 1s ease',
                    }}
                  />
                )}

                <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                  {/* CIRCULAR NUMBER BADGE */}
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: isVisible ? COLORS.primary : COLORS.white,
                      border: `2px solid ${COLORS.primary}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isVisible ? `0 10px 20px -5px ${COLORS.primary}66` : 'none',
                      transition: 'all 0.6s ease',
                      zIndex: 2,
                      color: isVisible ? COLORS.white : COLORS.primary,
                    }}>
                    <span style={{ fontSize: '24px', fontWeight: 800 }}>
                      {phase.number}
                    </span>
                  </div>

                  {/* CONTENT AREA */}
                  <div style={{ flex: 1 }}>
                    <div 
                      style={{ marginBottom: '28px', cursor: 'pointer' }}
                      onClick={() => togglePhase(phase.number)}
                    >
                      <h2
                        style={{
                          fontSize: '24px',
                          fontWeight: 800,
                          color: COLORS.textBlack,
                          marginBottom: '10px',
                          letterSpacing: '-0.02em',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}>
                        <EditableText
                          value={phase.title}
                          onSave={handleSave}
                          configPath={`mobile.PROCESS_DATA.phases.${index}.title`}
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
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: COLORS.primary,
                          fontSize: '14px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                        <Clock size={14} />
                        <EditableText
                          value={phase.duration}
                          onSave={handleSave}
                          configPath={`mobile.PROCESS_DATA.phases.${index}.duration`}
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
                          gap: '8px',
                          padding: 0,
                          margin: 0,
                          listStyle: 'none',
                          overflow: 'hidden',
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
                              gap: '12px',
                              background: 'rgba(255,255,255,0.6)',
                              padding: '10px 14px',
                              borderRadius: '12px',
                              border: `1px solid ${COLORS.border}`,
                            }}>
                            <Check size={14} color={COLORS.primary} strokeWidth={3} />
                            <span
                              style={{
                                fontSize: '14px',
                                color: COLORS.textMuted,
                                fontWeight: 500,
                              }}>
                              <EditableText
                                value={item}
                                onSave={handleSave}
                                configPath={`mobile.PROCESS_DATA.phases.${index}.items.${i}`}
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
          );
        })}
    </div>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      
      @media (max-width: 768px) {
        .mobile-process-step { padding-bottom: 60px !important; }
        div[style*="gap: 40px"] { gap: 20px !important; }
        div[style*="width: 80px"] { width: 60px !important; height: 60px !important; }
        span[style*="fontSize: 28px"] { fontSize: 20px !important; }
        div[style*="left: 40px"] { left: 30px !important; }
      }
    `}</style>
  </section>
  );
}