'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Briefcase, 
  UserCheck, 
  Lightbulb, 
  Users2, 
  Target, 
  Mail,
  Play,
  CheckCircle2,
  Cpu,
  ArrowRight
} from "lucide-react";
import { useAdmin } from './admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const iconMap = {
  Terminal: Terminal,
  Briefcase: Briefcase,
  UserCheck: UserCheck,
  Lightbulb: Lightbulb,
  Users2: Users2,
  Target: Target,
  Mail: Mail,
  Play: Play,
  CheckCircle2: CheckCircle2,
  Cpu: Cpu,
  ArrowRight: ArrowRight
};

const getIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

const COLORS = {
  heroBg: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  textBlack: '#020617',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function InternshipPage() {
  const { config, saveConfigToServer } = useAdmin();
  const CONTENT = config?.internship?.CONTENT;

  const handleSave = () => saveConfigToServer();
  
  if (!CONTENT) return null;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: 'clamp(80px, 12vw, 120px) clamp(16px, 4vw, 24px) clamp(40px, 8vw, 80px)', background: COLORS.heroBg, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div style={{ maxWidth: 'min(850px, 95%)', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <EditableText value={CONTENT.hero.badge} onSave={handleSave} configPath="internship.CONTENT.hero.badge">
                    {CONTENT.hero.badge}
                </EditableText>
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.03em', margin: 'clamp(16px, 3vw, 24px) 0' }}>
            <EditableText value={CONTENT.hero.title} onSave={handleSave} configPath="internship.CONTENT.hero.title">
                {CONTENT.hero.title.includes("student to software") ? (
                  <>
                    {CONTENT.hero.title.split("student to software")[0]}
                    <span style={{ color: COLORS.primary }}>student to software</span>
                    {CONTENT.hero.title.split("student to software")[1]}
                  </>
                ) : (
                  CONTENT.hero.title
                )}
            </EditableText>
          </motion.h1>
          
          <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, marginBottom: 'clamp(20px, 4vw, 32px)' }}>
            <EditableText value={CONTENT.hero.description} onSave={handleSave} configPath="internship.CONTENT.hero.description" multiline={true}>
                {CONTENT.hero.description}
            </EditableText>
          </p>
          
          <motion.button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            style={{ background: COLORS.primary, color: COLORS.white, border: 'none', padding: 'clamp(10px, 2.5vw, 14px) clamp(16px, 3vw, 32px)', borderRadius: '12px', fontSize: 'clamp(14px, 2.5vw, 16px)', fontWeight: 600, cursor: 'pointer', fontFamily: FONT_PRIMARY, transition: 'all 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: 'clamp(6px, 1.5vw, 8px)' }}
            whileHover={{ backgroundColor: '#4338CA', y: -2, boxShadow: '0 8px 25px rgba(79, 70, 229, 0.3)' }}
            whileTap={{ scale: 0.95 }}>
            <Mail size={18} />
            <EditableText value={CONTENT.hero.cta} onSave={handleSave} configPath="internship.CONTENT.hero.cta">
                {CONTENT.hero.cta}
            </EditableText>
          </motion.button>
        </div>
      </section>

      <main style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px) clamp(40px, 8vw, 80px)' }}>
        
        {/* 2. PROGRAM OVERVIEW */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 'clamp(40px, 8vw, 80px)', marginTop: 'clamp(-20px, -4vw, -40px)', position: 'relative', zIndex: 20 }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', padding: 'clamp(30px, 6vw, 60px)', borderRadius: 'clamp(16px, 3vw, 24px)', border: `1px solid ${COLORS.white}`, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)', minHeight: 'clamp(250px, 40vw, 320px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 24px)', fontWeight: 800, marginBottom: 'clamp(12px, 2vw, 16px)' }}>
                <EditableText value={CONTENT.overview.title} onSave={handleSave} configPath="internship.CONTENT.overview.title">
                    {CONTENT.overview.title}
                </EditableText>
            </h2>
            <p style={{ color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.7, marginBottom: 'clamp(16px, 3vw, 24px)' }}>
                <EditableText value={CONTENT.overview.description} onSave={handleSave} configPath="internship.CONTENT.overview.description" multiline={true}>
                    {CONTENT.overview.description}
                </EditableText>
            </p>
            <div style={{ width: 'clamp(30px, 5vw, 40px)', height: 'clamp(3px, 1vw, 4px)', background: COLORS.primary, borderRadius: '2px' }} />
          </div>

          <div style={{ position: 'relative', borderRadius: 'clamp(16px, 3vw, 24px)', overflow: 'hidden', background: COLORS.textBlack, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'clamp(250px, 40vw, 320px)' }}>
            <div style={{ textAlign: 'center', zIndex: 2 }}>
                <div style={{ width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)', background: COLORS.white, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto clamp(12px, 2vw, 16px)', cursor: 'pointer' }}>
                    <Play fill={COLORS.primary} color={COLORS.primary} size={24} style={{ marginLeft: '4px' }} />
                </div>
                <div style={{ color: COLORS.white, fontWeight: 700, fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
                    <EditableText value={CONTENT.overview.videoLabel} onSave={handleSave} configPath="internship.CONTENT.overview.videoLabel">
                        {CONTENT.overview.videoLabel}
                    </EditableText>
                </div>
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCE GRID */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 800, textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 48px)' }}>
            <EditableText value={CONTENT.experience.title} onSave={handleSave} configPath="internship.CONTENT.experience.title">
                {CONTENT.experience.title}
            </EditableText>
          </h2>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: 'clamp(10px, 1.5vw, 14px)' }}
          >
            {CONTENT.experience.items.map((item, i) => (
              <motion.div key={i} variants={cardVariants} style={{ background: COLORS.white, padding: 'clamp(14px, 2.5vw, 20px)', borderRadius: 'clamp(10px, 2vw, 14px)', border: `1px solid ${COLORS.border}` }}>
                <div style={{ color: COLORS.primary, marginBottom: '12px' }}>{getIcon(item.icon, 18)}</div>
                <h3 style={{ fontSize: 'clamp(13px, 2.2vw, 15px)', fontWeight: 800, marginBottom: 'clamp(4px, 1vw, 8px)' }}>
                    <EditableText value={item.title} onSave={handleSave} configPath={`internship.CONTENT.experience.items.${i}.title`}>
                        {item.title}
                    </EditableText>
                </h3>
                <p style={{ fontSize: 'clamp(11px, 1.8vw, 12px)', color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>
                    <EditableText value={item.text} onSave={handleSave} configPath={`internship.CONTENT.experience.items.${i}.text`} multiline={true}>
                        {item.text}
                    </EditableText>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. PIPELINE */}
        <section style={{ background: COLORS.white, padding: 'clamp(30px, 6vw, 60px) clamp(20px, 4vw, 40px)', borderRadius: 'clamp(20px, 4vw, 32px)', border: `1px solid ${COLORS.border}`, marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 24px)', fontWeight: 800, textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 48px)' }}>
            <EditableText value={CONTENT.pipeline.title} onSave={handleSave} configPath="internship.CONTENT.pipeline.title">
                {CONTENT.pipeline.title}
            </EditableText>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 40px)' }}>
            {CONTENT.pipeline.steps.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '65px' }}>
                <div style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 900, color: `${COLORS.primary}20`, position: 'absolute', top: '-5px', left: '0' }}>{item.step}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ fontWeight: 800, fontSize: 'clamp(16px, 3vw, 18px)', color: COLORS.primary, marginBottom: 'clamp(6px, 1.5vw, 8px)' }}>
                    <EditableText value={item.label} onSave={handleSave} configPath={`internship.CONTENT.pipeline.steps.${i}.label`}>
                        {item.label}
                    </EditableText>
                  </h4>
                  <p style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>
                    <EditableText value={item.text} onSave={handleSave} configPath={`internship.CONTENT.pipeline.steps.${i}.text`} multiline={true}>
                        {item.text}
                    </EditableText>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ELIGIBILITY & VALUES */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          <div style={{ background: 'rgba(79, 70, 229, 0.05)', padding: 'clamp(24px, 5vw, 40px)', borderRadius: 'clamp(16px, 3vw, 24px)', border: `1px solid ${COLORS.primary}15` }}>
            <h3 style={{ fontSize: 'clamp(18px, 3.5vw, 20px)', fontWeight: 800, marginBottom: 'clamp(16px, 3vw, 24px)' }}>
                <EditableText value={CONTENT.eligibility.title} onSave={handleSave} configPath="internship.CONTENT.eligibility.title">
                    {CONTENT.eligibility.title}
                </EditableText>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {CONTENT.eligibility.criteria.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px' }}>
                  <CheckCircle2 size={20} color={COLORS.primary} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 'clamp(13px, 2.5vw, 15px)' }}>
                        <EditableText value={item.label} onSave={handleSave} configPath={`internship.CONTENT.eligibility.criteria.${i}.label`}>
                            {item.label}
                        </EditableText>
                    </div>
                    <p style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: COLORS.textMuted }}>
                        <EditableText value={item.text} onSave={handleSave} configPath={`internship.CONTENT.eligibility.criteria.${i}.text`} multiline={true}>
                            {item.text}
                        </EditableText>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 'clamp(18px, 3.5vw, 20px)', fontWeight: 800, marginBottom: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
              <EditableText value="Is Crestcode Right for You?" onSave={handleSave} configPath="internship.CONTENT.values.heading">
                Internship Values
              </EditableText>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(12px, 2vw, 16px)', maxWidth: '400px', margin: '0 auto' }}>
              {CONTENT.values.map((v, i) => (
                <div key={i} style={{ background: COLORS.white, padding: 'clamp(16px, 3vw, 20px)', borderRadius: 'clamp(12px, 2.5vw, 16px)', border: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.5vw, 10px)' }}>
                  <div style={{ color: COLORS.primary }}>{getIcon(v.icon, 16)}</div>
                  <span style={{ fontWeight: 700, fontSize: 'clamp(12px, 2.5vw, 13px)' }}>
                    <EditableText value={v.title} onSave={handleSave} configPath={`internship.CONTENT.values.${i}.title`}>
                        {v.title}
                    </EditableText>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}