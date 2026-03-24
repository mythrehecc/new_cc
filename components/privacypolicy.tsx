'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Users, 
  CheckCircle2,
  Baby, 
  FileText, 
  ChevronRight, 
  Eye, 
  Server, 
  UserCheck, 
  AlertCircle,
  User,
  Clock,
  Mail
} from "lucide-react";
import { useAdmin } from './admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const iconMap = {
  ShieldCheck: ShieldCheck,
  Database: Database,
  Lock: Lock,
  Users: Users,
  CheckCircle2: CheckCircle2,
  Baby: Baby,
  FileText: FileText,
  ChevronRight: ChevronRight,
  Eye: Eye,
  Server: Server,
  UserCheck: UserCheck,
  AlertCircle: AlertCircle,
  User: User,
  Clock: Clock,
  Mail: Mail
};

const getIcon = (iconName: string, size: number = 24): React.ReactElement | null => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? React.createElement(IconComponent, { size }) : null;
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

export default function PrivacyPolicy() {
  const { config, saveConfigToServer } = useAdmin();
  const PRIVACY_DATA = config?.privacypolicy?.PRIVACY_DATA;
  console.log("🚀 ~ PrivacyPolicy ~ PRIVACY_DATA:", PRIVACY_DATA)

  const handleSave = () => saveConfigToServer();
  
  // Use default config if not loaded yet to prevent flicker
  const privacyData = PRIVACY_DATA || {
    hero: {
      badge: "Privacy Policy",
      title: "CrestCode Privacy ",
      titleAccent: "Policy",
      lastUpdated: "January 12, 2026",
      description: "CrestCode is designed to help you organize your digital life while keeping your data private and secure."
    },
    sections: [],
    contact: null
  };

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '120px 24px 80px', background: COLORS.heroBg, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
          }} />
        </div>
        
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <EditableText value={privacyData.hero.badge} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.hero.badge">
                    {privacyData.hero.badge}
                </EditableText>
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1.1 }}>
            <EditableText value={privacyData.hero.title} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.hero.title">
                {privacyData.hero.title}
            </EditableText>
            <span style={{ color: COLORS.primary }}>
               <EditableText value={privacyData.hero.titleAccent} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.hero.titleAccent">
                {privacyData.hero.titleAccent}
               </EditableText>
            </span>
          </motion.h1>
          
          <div style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6 }}>
            Last updated: <EditableText value={privacyData.hero.lastUpdated} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.hero.lastUpdated">
                {privacyData.hero.lastUpdated}
            </EditableText>. <br/>
            <EditableText value={privacyData.hero.description} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.hero.description" multiline={true}>
                {privacyData.hero.description}
            </EditableText>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '1000px', margin: '-40px auto 100px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Privacy Policy Sections */}
          {privacyData.sections?.map((section, idx) => (
            <section key={section.id} style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>
                  {getIcon(section.icon, 20)}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>
                  <EditableText value={section.title} onSave={handleSave} configPath={`privacypolicy.PRIVACY_DATA.sections.${idx}.title`}>
                    {section.title}
                  </EditableText>
                </h3>
              </div>
              
              <p style={{ color: COLORS.textMuted, fontWeight: 500, marginBottom: '24px' }}>
                <EditableText value={section.intro || ''} onSave={handleSave} configPath={`privacypolicy.PRIVACY_DATA.sections.${idx}.intro`} multiline={true}>
                  {section.intro}
                </EditableText>
              </p>

              {/* Items */}
              {section.items && (
                <div style={{ display: 'grid', gap: '20px' }}>
                  {section.items?.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', gap: '16px', padding: '20px', background: COLORS.bgBase, borderRadius: '16px' }}>
                      <div style={{ color: COLORS.primary }}>{getIcon(item.icon, 20)}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '15px' }}>
                          <EditableText value={item.label} onSave={handleSave} configPath={`privacypolicy.PRIVACY_DATA.sections.${idx}.items.${itemIdx}.label`}>
                            {item.label}
                          </EditableText>
                        </div>
                        <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>
                          <EditableText value={item.text} onSave={handleSave} configPath={`privacypolicy.PRIVACY_DATA.sections.${idx}.items.${itemIdx}.text`} multiline={true}>
                            {item.text}
                          </EditableText>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullets */}
              {section.bullets && (
                <div style={{ display: 'grid', gap: '16px' }}>
                  {section.bullets?.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} style={{ display: 'flex', gap: '12px', padding: '16px', background: COLORS.bgBase, borderRadius: '12px' }}>
                      <div style={{ color: COLORS.primary, marginTop: '2px' }}>
                        <ChevronRight size={16} />
                      </div>
                      <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0, lineHeight: 1.6 }}>
                        <EditableText value={bullet} onSave={handleSave} configPath={`privacypolicy.PRIVACY_DATA.sections.${idx}.bullets.${bulletIdx}`} multiline={true}>
                          {bullet}
                        </EditableText>
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact info for sections with contact */}
              {section.contact && (
                <div style={{ marginTop: '16px', padding: '16px', background: `${COLORS.primary}10`, borderRadius: '12px', border: `1px solid ${COLORS.primary}20` }}>
                  <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0, fontWeight: 600 }}>
                    <EditableText value={section.contact} onSave={handleSave} configPath={`privacypolicy.PRIVACY_DATA.sections.${idx}.contact`} multiline={true}>
                      {section.contact}
                    </EditableText>
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Contact Section */}
          {privacyData.contact && (
            <section style={{ background: COLORS.white, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>
                  <Mail size={20} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>
                  <EditableText value={privacyData.contact.title} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.contact.title">
                    {privacyData.contact.title}
                  </EditableText>
                </h3>
              </div>
              
              <p style={{ color: COLORS.textMuted, fontWeight: 500, marginBottom: '24px' }}>
                <EditableText value={privacyData.contact.intro || ''} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.contact.intro" multiline={true}>
                  {privacyData.contact.intro}
                </EditableText>
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', background: COLORS.bgBase, borderRadius: '16px' }}>
                <div style={{ color: COLORS.primary }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '15px' }}>
                    <EditableText value={privacyData.contact.supportLabel} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.contact.supportLabel">
                      {privacyData.contact.supportLabel}
                    </EditableText>
                  </div>
                  <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>
                    <EditableText value={privacyData.contact.email} onSave={handleSave} configPath="privacypolicy.PRIVACY_DATA.contact.email">
                      {privacyData.contact.email}
                    </EditableText>
                  </p>
                </div>
              </div>
            </section>
          )}

        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}