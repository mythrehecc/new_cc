'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Clock,
  Database,
  Code,
  BrainCircuit,
  Activity,
  Settings,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Database,
    Code,
    BrainCircuit,
    Activity,
    Settings,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Database`);
    return Database;
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

function Process() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set());
  const { config, saveConfigToServer } = useAdmin();
  const PROCESS_DATA = config?.aiml?.PROCESS_DATA;

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

    document.querySelectorAll('.process-step-ai').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  
  if (!PROCESS_DATA) return null;

  return (
    <section
      style={{
        padding: '60px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* ENGINEERING GRID OVERLAY */}
      <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${COLORS.textMuted}22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px auto' }}>
          <h1 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}>
            <EditableText
              value={PROCESS_DATA.title.prefix}
              onSave={handleSave}
              configPath="aiml.PROCESS_DATA.title.prefix"
            >
              {PROCESS_DATA.title.prefix}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={PROCESS_DATA.title.highlight}
                onSave={handleSave}
                configPath="aiml.PROCESS_DATA.title.highlight"
              >
                {PROCESS_DATA.title.highlight}
              </EditableText>
            </span>
          </h1>
          <p style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.9375rem)',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 500,
            }}>
            <EditableText
              value={PROCESS_DATA.subtitle}
              onSave={handleSave}
              configPath="aiml.PROCESS_DATA.subtitle"
              multiline={true}
            >
              {PROCESS_DATA.subtitle}
            </EditableText>
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase: any, index: number) => {
            const isVisible = visibleSections.has(phase.number);
            const Icon = getIconComponent(phase.icon);
            
            return (
              <div
                key={phase.number}
                data-section={phase.number}
                className="process-step-ai"
                style={{
                  position: 'relative',
                  paddingBottom: index === PROCESS_DATA.phases.length - 1 ? 0 : '40px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 100}ms`,
                }}>
                
                {/* Vertical Connector */}
                {index < PROCESS_DATA.phases.length - 1 && (
                  <div style={{
                      position: 'absolute',
                      left: '40px',
                      top: '60px',
                      bottom: 0,
                      width: '2px',
                      background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
                      opacity: visibleSections.has(phase.number + 1) ? 1 : 0.2,
                      transition: 'opacity 1s ease',
                    }}
                  />
                )}

                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  {/* Badge */}
                  <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: isVisible ? COLORS.primary : COLORS.white,
                      border: `2px solid ${COLORS.primary}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isVisible ? `0 10px 25px -5px ${COLORS.primary}44` : 'none',
                      transition: 'all 0.6s ease',
                      zIndex: 2,
                      color: isVisible ? COLORS.white : COLORS.primary,
                    }}>
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div 
                      style={{ marginBottom: '16px', cursor: 'pointer' }}
                      onClick={() => togglePhase(phase.number)}
                    >
                      <h2 style={{ 
                        fontSize: 'clamp(1.125rem, 3.5vw, 1.75rem)', 
                        fontWeight: 800, 
                        color: COLORS.textBlack, 
                        letterSpacing: '-0.02em', 
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        <EditableText
                          value={phase.title}
                          onSave={handleSave}
                          configPath={`aiml.PROCESS_DATA.phases.${index}.title`}
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
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        color: COLORS.primary, 
                        fontSize: 'clamp(0.6875rem, 1.8vw, 0.8125rem)', 
                        fontWeight: 700, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.05em' 
                      }}>
                        <Clock size={14} /> 
                        <EditableText
                          value={phase.duration}
                          onSave={handleSave}
                          configPath={`aiml.PROCESS_DATA.phases.${index}.duration`}
                        >
                          {phase.duration}
                        </EditableText>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedPhases.has(phase.number) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <p style={{ 
                            fontSize: 'clamp(0.6875rem, 1.8vw, 0.8125rem)', 
                            color: COLORS.textMuted, 
                            lineHeight: '1.7', 
                            marginBottom: '16px', 
                            fontWeight: 500 
                          }}>
                            <EditableText
                              value={phase.description}
                              onSave={handleSave}
                              configPath={`aiml.PROCESS_DATA.phases.${index}.description`}
                              multiline={true}
                            >
                              {phase.description}
                            </EditableText>
                          </p>

                          <motion.ul 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{ 
                              display: 'grid', 
                              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                              gap: '24px', 
                              alignItems: 'center', 
                              padding: 0, 
                              listStyle: 'none' 
                            }}
                          >
                            {phase.items.map((item: string, i: number) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '24px',
                                  background: 'rgba(255,255,255,0.7)',
                                  padding: '12px 16px',
                                  borderRadius: '10px',
                                  border: `1px solid ${COLORS.border}`,
                                }}>
                                <Check size={14} color={COLORS.primary} style={{ marginTop: '3px' }} strokeWidth={3} />
                                <span style={{ fontSize: 'clamp(0.6875rem, 1.8vw, 0.8125rem)', color: COLORS.textBlack, fontWeight: 500 }}>
                                  <EditableText
                                    value={item}
                                    onSave={handleSave}
                                    configPath={`aiml.PROCESS_DATA.phases.${index}.items.${i}`}
                                  >
                                    {item}
                                  </EditableText>
                                </span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
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
      `}</style>
    </section>
  );
}

export default Process;