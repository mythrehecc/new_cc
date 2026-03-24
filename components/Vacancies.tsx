'use client';

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight, X, CheckCircle2, Terminal, Layout, Code2 } from "lucide-react";
import { useAdmin } from './admin/context';
import EditableText from '@/components/admin/editableText';

const iconMap = { Layout, Terminal, Code2 };
const getIcon = (iconName: string, size: number = 20) => {
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

export default function Vacancies() {
  const { config, saveConfigToServer } = useAdmin();
  const VACANCIES_DATA = config?.vacancies?.VACANCIES_DATA;
  
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const handleSave = () => saveConfigToServer();
  if (!VACANCIES_DATA) return null;

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '100vh' }}>
      
      <section style={{ padding: 'clamp(80px, 12vw, 120px) 24px 80px', background: COLORS.heroBg, textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, color: COLORS.textBlack, margin: '24px 0', lineHeight: 1.1 }}>
            <EditableText value={VACANCIES_DATA.hero.title} onSave={handleSave} configPath="vacancies.VACANCIES_DATA.hero.title">{VACANCIES_DATA.hero.title}</EditableText>
            <span style={{ color: COLORS.primary }}>
                <EditableText value={VACANCIES_DATA.hero.titleAccent} onSave={handleSave} configPath="vacancies.VACANCIES_DATA.hero.titleAccent">{VACANCIES_DATA.hero.titleAccent}</EditableText>
            </span>
          </motion.h1>
          <div style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, marginBottom: '32px' }}>
            <EditableText value={VACANCIES_DATA.hero.description} onSave={handleSave} configPath="vacancies.VACANCIES_DATA.hero.description" multiline={true}>{VACANCIES_DATA.hero.description}</EditableText>
          </div>
          <Link href={VACANCIES_DATA.hero.cta.link} style={{ background: COLORS.textBlack, color: COLORS.white, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
            <EditableText value={VACANCIES_DATA.hero.cta.text} onSave={handleSave} configPath="vacancies.VACANCIES_DATA.hero.cta.text">{VACANCIES_DATA.hero.cta.text}</EditableText>
          </Link>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '-40px auto 80px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {VACANCIES_DATA.jobs.map((job: any, idx: number) => (
            <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ background: COLORS.white, padding: '32px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ background: `${COLORS.primary}10`, padding: '12px', borderRadius: '12px', color: COLORS.primary }}>{getIcon(job.icon, 20)}</div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: COLORS.textMuted }}>
                  <EditableText value={job.category} onSave={handleSave} configPath={`vacancies.VACANCIES_DATA.jobs.${idx}.category`}>{job.category}</EditableText>
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: 800, color: COLORS.textBlack, marginBottom: '16px' }}>
                <EditableText value={job.title} onSave={handleSave} configPath={`vacancies.VACANCIES_DATA.jobs.${idx}.title`}>{job.title}</EditableText>
              </h3>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: COLORS.textMuted, fontWeight: 600 }}><Clock size={14} />{job.experience}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: COLORS.textMuted, fontWeight: 600 }}><MapPin size={14} />{job.location}</div>
              </div>
              <button onClick={() => { setSelectedJob(job); setSelectedIdx(idx); }} style={{ marginTop: 'auto', background: 'none', border: 'none', color: COLORS.primary, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: 0 }}>
                Detailed Specifications <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedJob && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, background: 'rgba(2, 6, 23, 0.6)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setSelectedJob(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} style={{ background: COLORS.white, width: '100%', maxWidth: '500px', borderRadius: '20px', overflow: 'hidden', position: 'relative' }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedJob(null)} style={{ position: 'fixed', top: '20px', right: '20px', background: COLORS.primary, color: COLORS.white, border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 1000 }}><X size={16} /></button>
              <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ color: COLORS.primary, fontWeight: 800, fontSize: '12px', textTransform: 'uppercase' }}>{VACANCIES_DATA.modal.badge}</div>
                  <h2 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>{selectedJob.title}</h2>
                </div>
                
                <div style={{ display: 'grid', gap: '12px' }}>
                  {selectedJob.description?.responsibilities && (
                    <div style={{ background: COLORS.bgBase, padding: '12px', borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
                      <h3 style={{ fontSize: '14px', fontWeight: 800, color: COLORS.textBlack, marginBottom: '8px' }}>Responsibilities</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {selectedJob.description.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '6px', fontSize: '12px', color: COLORS.textMuted, lineHeight: 1.4 }}>
                            <CheckCircle2 size={14} style={{ color: COLORS.primary, marginRight: '10px', flexShrink: 0, marginTop: '2px' }} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedJob.description?.requirements && (
                    <div style={{ background: COLORS.bgBase, padding: '12px', borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
                      <h3 style={{ fontSize: '14px', fontWeight: 800, color: COLORS.textBlack, marginBottom: '8px' }}>Requirements</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {selectedJob.description.requirements.map((req: string, idx: number) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '6px', fontSize: '12px', color: COLORS.textMuted, lineHeight: 1.4 }}>
                            <CheckCircle2 size={14} style={{ color: COLORS.primary, marginRight: '10px', flexShrink: 0, marginTop: '2px' }} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  <Link href="/careers#apply" style={{ background: COLORS.primary, color: COLORS.white, padding: '12px 40px', borderRadius: '12px', fontWeight: 800, textDecoration: 'none' }}>{VACANCIES_DATA.modal.ctaText}</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}