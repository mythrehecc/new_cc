"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  LayoutGrid, 
  Award, 
  Code2, 
  Rocket, 
  Users2, 
  Calendar,
  Zap,
  ArrowRight
} from "lucide-react";
import { useAdmin } from './admin/context';
import EditableText from '@/components/admin/editableText';
import HackathonFAQ from '@/components/FAQ/HackathonFAQ';

// --- ICON MAPPING ---
const iconMap = {
  GraduationCap: GraduationCap,
  LayoutGrid: LayoutGrid,
  Award: Award,
  Code2: Code2,
  Rocket: Rocket,
  Users2: Users2,
  Calendar: Calendar,
  Zap: Zap,
  ArrowRight: ArrowRight
};

const getIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

const COLORS = {
  heroBg: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  bgBase: '#F8FAFC',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function HackathonPage() {
  const { config, saveConfigToServer } = useAdmin();
  const HACKATHON_CONTENT = config?.main_hackathon?.CONTENT;

  const handleSave = () => saveConfigToServer();
  
  if (!HACKATHON_CONTENT) return null;

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        padding: '100px 24px 60px', 
        background: COLORS.heroBg, 
        position: 'relative', 
        overflow: 'hidden', 
        textAlign: 'center' 
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.4, 
          backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} />
        
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ 
                background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', 
                fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em'
             }}>
                <EditableText value={HACKATHON_CONTENT.hero.badge} onSave={handleSave} configPath="main_hackathon.CONTENT.hero.badge">
                    {HACKATHON_CONTENT.hero.badge}
                </EditableText>
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0' 
          }}>
            <EditableText value={HACKATHON_CONTENT.hero.title} onSave={handleSave} configPath="main_hackathon.CONTENT.hero.title">
                {HACKATHON_CONTENT.hero.title}
            </EditableText>
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.5, marginBottom: '32px' }}>
            <EditableText value={HACKATHON_CONTENT.hero.description} onSave={handleSave} configPath="main_hackathon.CONTENT.hero.description" multiline={true}>
                {HACKATHON_CONTENT.hero.description}
            </EditableText>
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button 
              onClick={() => window.location.href = '/hackathon-results'}
              style={{ background: COLORS.textBlack, color: COLORS.white, padding: '14px 28px', borderRadius: '8px', fontWeight: 700, border: 'none', cursor: 'pointer' }}
            >
                <EditableText value={HACKATHON_CONTENT.hero.resultsBtn.text} onSave={handleSave} configPath="main_hackathon.CONTENT.hero.resultsBtn.text">
                   {HACKATHON_CONTENT.hero.resultsBtn.text}
                </EditableText>
            </button>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        
        {/* 2. UPCOMING EVENT BANNER */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: `1px solid ${COLORS.white}`, 
            borderRadius: '24px', padding: '40px', marginTop: '-40px', position: 'relative', zIndex: 20, 
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px'
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.primary, marginBottom: '16px' }}>
            <Calendar size={18} />
            <span style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <EditableText value={HACKATHON_CONTENT.upcomingEvent.badge} onSave={handleSave} configPath="main_hackathon.CONTENT.upcomingEvent.badge">
                {HACKATHON_CONTENT.upcomingEvent.badge}
              </EditableText>
            </span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>
            <EditableText value={HACKATHON_CONTENT.upcomingEvent.title} onSave={handleSave} configPath="main_hackathon.CONTENT.upcomingEvent.title">
                {HACKATHON_CONTENT.upcomingEvent.title}
            </EditableText>
          </h2>
          <p style={{ color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto', fontWeight: 500 }}>
            <EditableText value={HACKATHON_CONTENT.upcomingEvent.description} onSave={handleSave} configPath="main_hackathon.CONTENT.upcomingEvent.description" multiline={true}>
                {HACKATHON_CONTENT.upcomingEvent.description}
            </EditableText>
          </p>

          {/* TIMELINE SECTION */}
          <div style={{ marginTop: '40px', width: '100%', maxWidth: '500px' }}>
            <div style={{ position: 'relative' }}>
              {HACKATHON_CONTENT.timeline?.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '7px',
                    top: '8px',
                    height: index === (HACKATHON_CONTENT.timeline?.length || 0) - 1 ? '0' : 'calc(100% + 20px)',
                    width: '2px',
                    backgroundColor: COLORS.border
                  }}></div>
                  <div style={{ 
                    width: '16px', 
                    height: '16px', 
                    borderRadius: '50%', 
                    backgroundColor: COLORS.white, 
                    border: `3px solid ${COLORS.primary}`, 
                    zIndex: 1, 
                    marginRight: '20px',
                    marginTop: '4px'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontWeight: 700, fontSize: '15px', color: COLORS.textBlack }}>
                      <EditableText value={item.event} onSave={handleSave} configPath={`main_hackathon.CONTENT.timeline.${index}.event`}>
                        {item.event}
                      </EditableText>
                    </h4>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: COLORS.textMuted }}>
                      <EditableText value={item.date} onSave={handleSave} configPath={`main_hackathon.CONTENT.timeline.${index}.date`}>
                        {item.date}
                      </EditableText>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.section>

        {/* 3. FEATURES GRID */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {HACKATHON_CONTENT.features.map((item: any, i: number) => (
            <div key={i} style={{ background: COLORS.white, padding: '24px', borderRadius: '16px', border: `1px solid ${COLORS.border}`, display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ color: COLORS.primary, background: `${COLORS.primary}10`, padding: '10px', borderRadius: '10px' }}>{getIcon(item.icon, 20)}</div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>
                    <EditableText value={item.title} onSave={handleSave} configPath={`main_hackathon.CONTENT.features.${i}.title`}>
                        {item.title}
                    </EditableText>
                </h3>
                <p style={{ fontSize: '13px', color: COLORS.textMuted, margin: 0 }}>
                    <EditableText value={item.desc} onSave={handleSave} configPath={`main_hackathon.CONTENT.features.${i}.desc`}>
                        {item.desc}
                    </EditableText>
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 4. PROGRAM ARCHITECTURE */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px', textAlign: 'center' }}>
            <EditableText value={HACKATHON_CONTENT.architecture.title} onSave={handleSave} configPath="main_hackathon.CONTENT.architecture.title">
                {HACKATHON_CONTENT.architecture.title}
            </EditableText>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {HACKATHON_CONTENT.architecture.cards.map((box: any, i: number) => (
              <motion.div key={i} whileHover={{ y: -5 }} style={{ background: COLORS.white, padding: '24px', borderRadius: '16px', border: `1px solid ${COLORS.border}`, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: COLORS.primary, flexShrink: 0 }}>{getIcon(box.icon, 20)}</div>
                <div>
                  <h4 style={{ margin: '0 0 8px', fontWeight: 800, fontSize: '16px' }}>
                    <EditableText value={box.title} onSave={handleSave} configPath={`main_hackathon.CONTENT.architecture.cards.${i}.title`}>
                        {box.title}
                    </EditableText>
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.5 }}>
                    <EditableText value={box.text} onSave={handleSave} configPath={`main_hackathon.CONTENT.architecture.cards.${i}.text`} multiline={true}>
                        {box.text}
                    </EditableText>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <HackathonFAQ />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}