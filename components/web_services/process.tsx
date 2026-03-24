'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Clock,
  Search,
  Lightbulb,
  PenTool,
  Terminal,
  ShieldCheck,
  Rocket,
  type LucideIcon
} from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const getIconComponent = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Check,
    Clock,
    Search,
    Lightbulb,
    PenTool,
    Terminal,
    ShieldCheck,
    Rocket,
  };
  
  const icon = iconMap[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found, using default Search`);
    return Search;
  }
  
  return icon;
};

// --- DESIGN TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function WebProcess() {
  const { config, saveConfigToServer } = useAdmin();
  const PROCESS_DATA = config?.web?.PROCESS_DATA;

  const handleSave = () => saveConfigToServer();
  
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute('data-step'));
            setVisibleSteps((prev) => prev.includes(stepId) ? prev : [...prev, stepId]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.process-step-trigger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!PROCESS_DATA) return null;

  return (
    <section style={{
      padding: '80px 20px',
      backgroundColor: COLORS.bgBase,
      fontFamily: FONT_PRIMARY,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BACKGROUND BLUEPRINT GRID */}
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
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: COLORS.textBlack,
            letterSpacing: '-0.04em',
            marginBottom: '20px',
          }}>
            <EditableText
              value={PROCESS_DATA.header.title}
              onSave={handleSave}
              configPath="web.PROCESS_DATA.header.title"
            >
              {PROCESS_DATA.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={PROCESS_DATA.header.accent}
                onSave={handleSave}
                configPath="web.PROCESS_DATA.header.accent"
              >
                {PROCESS_DATA.header.accent}
              </EditableText>
            </span>
          </h1>
          <p style={{
            fontSize: '16px',
            color: COLORS.textMuted,
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto',
            fontWeight: 500,
          }}>
            <EditableText
              value={PROCESS_DATA.header.description}
              onSave={handleSave}
              configPath="web.PROCESS_DATA.header.description"
              multiline={true}
            >
              {PROCESS_DATA.header.description}
            </EditableText>
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ position: 'relative' }}>
          {PROCESS_DATA.phases.map((phase: any, index: number) => (
            <ProcessStep 
              key={phase.number} 
              index={index}
              phase={{
                ...phase,
                iconComponent: getIconComponent(phase.icon)
              }} 
              isLast={index === PROCESS_DATA.phases.length - 1}
              isVisible={visibleSteps.includes(phase.number)}
              onSave={handleSave}
              isExpanded={expandedPhases.has(phase.number)}
              onToggle={() => togglePhase(phase.number)}
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

// --- SUB-COMPONENT: STEP ITEM ---

function ProcessStep({ phase, index, isLast, isVisible, onSave, isExpanded, onToggle }: any) {
  const Icon = phase.iconComponent;
  return (
    <div
      data-step={phase.number}
      className="process-step-trigger"
      style={{
        position: 'relative',
        paddingBottom: isLast ? 0 : '60px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        gap: '30px',
      }}>
      
      {/* CONNECTOR LINE */}
      {!isLast && (
        <div style={{
            position: 'absolute',
            left: '35px',
            top: '70px',
            bottom: 0,
            width: '2px',
            background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
            opacity: 0.3,
          }}
        />
      )}

      {/* ICON BADGE */}
      <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: isVisible ? COLORS.primary : COLORS.white,
          border: `2px solid ${COLORS.primary}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: isVisible ? COLORS.white : COLORS.primary,
          boxShadow: isVisible ? `0 10px 30px ${COLORS.primary}33` : 'none',
          transition: 'all 0.6s ease',
          zIndex: 2,
        }}>
        <Icon size={20} />
      </div>

      {/* CONTENT CARD */}
      <div style={{ flex: 1 }}>
        <div 
          style={{ marginBottom: '16px', cursor: 'pointer' }}
          onClick={onToggle}
        >
          <h2 style={{ 
            fontSize: '22px', 
            fontWeight: 800, 
            color: COLORS.textBlack, 
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <EditableText
              value={phase.title}
              onSave={onSave}
              configPath={`web.PROCESS_DATA.phases.${index}.title`}
            >
              {phase.title}
            </EditableText>
            <motion.div
              animate={{ 
                rotate: isExpanded ? 180 : 0 
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
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
            <Clock size={12} /> 
            <EditableText
              value={phase.duration}
              onSave={onSave}
              configPath={`web.PROCESS_DATA.phases.${index}.duration`}
            >
              {phase.duration}
            </EditableText>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '6px',
                overflow: 'hidden',
              }}>
              {phase.items.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: COLORS.white,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${COLORS.border}`,
                  }}>
                  <Check size={12} color={COLORS.primary} strokeWidth={3} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: COLORS.textBlack }}>
                    <EditableText
                      value={item}
                      onSave={onSave}
                      configPath={`web.PROCESS_DATA.phases.${index}.items.${i}`}
                    >
                      {item}
                    </EditableText>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}