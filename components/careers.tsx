'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useAdmin } from './admin/context';
import { submitCareerForm } from '@/services/api';
import EditableText from '@/components/admin/editableText';
import { 
  Briefcase, Zap, TrendingUp, Clock, UploadCloud, 
  ShieldCheck, Phone, Building, Mail, Calendar, ArrowRight, FileText
} from "lucide-react";

const iconMap = {
  Zap, TrendingUp, Clock, Building, Phone, Mail, Calendar, ShieldCheck, UploadCloud, Briefcase, ArrowRight
};

const renderIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

const COLORS = {
  heroBg: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  bgBase: '#F8FAFC',
  primary: '#4F46E5',
  primaryHover: '#4338CA',
  textBlack: '#0F172A',
  textMuted: '#475569',
  white: '#FFFFFF',
  border: '#E2E8F0',
};

// Updated font sizes for a more professional "SaaS" feel
const TYPOGRAPHY = {
  h1: 'clamp(2.5rem, 6vw, 4rem)',
  h2: 'clamp(1.75rem, 4vw, 2.25rem)',
  h3: '1.25rem',
  body: '1.125rem',
  small: '0.875rem'
};

export default function CareersPage() {
  const { config, saveConfigToServer } = useAdmin();
  const PAGE_DATA = config?.careers?.PAGE_DATA;
  
  const [fileName, setFileName] = useState("No file chosen");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!PAGE_DATA) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    if (!resumeFile) {
      setStatus({ type: 'error', msg: 'Please select a resume file.' });
      setIsSubmitting(false);
      return;
    }
    formData.append('resume', resumeFile);

    try {
      await submitCareerForm(formData);
      setStatus({ type: 'success', msg: "Application submitted successfully!" });
      setFileName("No file chosen");
      setResumeFile(null);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus({ type: 'error', msg: "Submission failed. Please try again." });
      console.error("Career form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '100vh', color: COLORS.textBlack }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '140px 24px 100px', background: COLORS.heroBg, textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ background: COLORS.white, padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, letterSpacing: '0.05em' }}>
                <EditableText value={PAGE_DATA.hero.badge} onSave={handleSave} configPath="careers.PAGE_DATA.hero.badge">
                  {PAGE_DATA.hero.badge}
                </EditableText>
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            style={{ fontSize: TYPOGRAPHY.h1, fontWeight: 800, margin: '24px 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            <EditableText value={PAGE_DATA.hero.titleMain} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleMain">{PAGE_DATA.hero.titleMain}</EditableText>
            <span style={{ color: COLORS.primary }}>
               <EditableText value={PAGE_DATA.hero.titleAccent} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleAccent">{PAGE_DATA.hero.titleAccent}</EditableText>
            </span>
            <EditableText value={PAGE_DATA.hero.titleEnd} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleEnd">{PAGE_DATA.hero.titleEnd}</EditableText>
          </motion.h1>
          
          <p style={{ fontSize: TYPOGRAPHY.body, color: COLORS.textMuted, maxWidth: '650px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            <EditableText value={PAGE_DATA.hero.description} onSave={handleSave} configPath="careers.PAGE_DATA.hero.description" multiline={true}>
              {PAGE_DATA.hero.description}
            </EditableText>
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '-60px auto 0', padding: '0 24px 100px', position: 'relative', zIndex: 20 }}>
        
        {/* 2. CTA BANNER */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', padding: '32px', borderRadius: '24px', border: `1px solid ${COLORS.white}`, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, marginBottom: '10px' }}>
                <EditableText value={PAGE_DATA.vacancies.title} onSave={handleSave} configPath="careers.PAGE_DATA.vacancies.title">{PAGE_DATA.vacancies.title}</EditableText>
              </h2>
              <p style={{ color: COLORS.textMuted, fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}>
                <EditableText value={PAGE_DATA.vacancies.description} onSave={handleSave} configPath="careers.PAGE_DATA.vacancies.description">{PAGE_DATA.vacancies.description}</EditableText>
              </p>
            </div>
            <button
              onClick={() => window.location.href = '/vacancies'}
              style={{ background: COLORS.primary, color: COLORS.white, padding: '14px 28px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s ease' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = COLORS.primaryHover}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}
            >
              View Open Roles
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* 3. ADVANTAGES */}
        <section style={{ marginBottom: '70px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, textAlign: 'center', marginBottom: '40px' }}>
            <EditableText value={PAGE_DATA.advantages.title} onSave={handleSave} configPath="careers.PAGE_DATA.advantages.title">{PAGE_DATA.advantages.title}</EditableText>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {PAGE_DATA.advantages.items.map((item, i) => (
              <motion.div whileHover={{ y: -5 }} key={i} style={{ background: COLORS.white, padding: '28px', borderRadius: '20px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
                <div style={{ width: '40px', height: '40px', background: '#EEF2FF', color: COLORS.primary, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  {renderIcon(item.icon, 20)}
                </div>
                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 800, marginBottom: '10px' }}>
                  <EditableText value={item.title} onSave={handleSave} configPath={`careers.PAGE_DATA.advantages.items.${i}.title`}>{item.title}</EditableText>
                </h3>
                <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', color: COLORS.textMuted, lineHeight: 1.6 }}>
                  <EditableText value={item.text} onSave={handleSave} configPath={`careers.PAGE_DATA.advantages.items.${i}.text`} multiline={true}>{item.text}</EditableText>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. APPLICATION FORM */}
        <section id="apply" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', background: COLORS.white, borderRadius: '30px', border: `1px solid ${COLORS.border}`, padding: '50px 40px', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.08)' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, marginBottom: '16px' }}>
              <EditableText value={PAGE_DATA.formSection.title} onSave={handleSave} configPath="careers.PAGE_DATA.formSection.title">{PAGE_DATA.formSection.title}</EditableText>
            </h2>
            <p style={{ color: COLORS.textMuted, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', lineHeight: 1.7 }}>
              <EditableText value={PAGE_DATA.formSection.description} onSave={handleSave} configPath="careers.PAGE_DATA.formSection.description" multiline={true}>{PAGE_DATA.formSection.description}</EditableText>
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)', fontWeight: 700 }}>Name</label>
                <input name="name" type="text" placeholder="John Doe" required style={{ padding: '12px', borderRadius: '10px', border: `1px solid ${COLORS.border}`, background: '#F8FAFC', outlineColor: COLORS.primary }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)', fontWeight: 700 }}>Email</label>
                <input name="email" type="email" placeholder="john@example.com" required style={{ padding: '12px', borderRadius: '10px', border: `1px solid ${COLORS.border}`, background: '#F8FAFC', outlineColor: COLORS.primary }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)', fontWeight: 700 }}>Resume / CV</label>
                <div style={{ border: `2px dashed ${COLORS.border}`, padding: '24px', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}>
                   <input 
                    type="file" 
                    name="resume"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFileName(file?.name || "No file chosen");
                      setResumeFile(file || null);
                    }}
                    style={{ opacity: 0, position: 'absolute', inset: 0, cursor: 'pointer' }} 
                   />
                   <UploadCloud size={28} style={{ color: COLORS.textMuted, marginBottom: '6px' }} />
                   <p style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)', color: COLORS.textMuted }}>{fileName}</p>
                </div>
            </div>

            <button type="submit" disabled={isSubmitting} style={{ background: COLORS.primary, color: COLORS.white, padding: '14px', borderRadius: '10px', fontWeight: 700, border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '15px', marginTop: '8px' }}>
              {isSubmitting ? 'Processing...' : PAGE_DATA.formSection.labels.submit}
            </button>
            
            {status && (
              <p style={{ color: status.type === 'success' ? '#10B981' : '#EF4444', fontWeight: 600, textAlign: 'center' }}>{status.msg}</p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}