'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Scale, 
  Code2, 
  Lock, 
  CreditCard, 
  Gavel, 
  Info,
  ChevronRight,
  Mail,
  MapPin,
  Zap
} from "lucide-react";
import { useAdmin } from './admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const iconMap = {
  ShieldAlert: ShieldAlert,
  Scale: Scale,
  Code2: Code2,
  Lock: Lock,
  CreditCard: CreditCard,
  Gavel: Gavel,
  Info: Info,
  ChevronRight: ChevronRight,
  Mail: Mail,
  MapPin: MapPin,
  Zap: Zap
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

export default function TermsOfService() {
  const { config, saveConfigToServer } = useAdmin();
  const TERMS_DATA = config?.termsofservice?.TERMS_DATA;
  
  const handleSave = () => saveConfigToServer();
  
  // Use default config if not loaded yet to prevent flicker
  const termsData = TERMS_DATA || {
    hero: {
      badge: "Legal Infrastructure",
      title: "Terms & ",
      titleAccent: "Conditions.",
      effectiveDate: "January 1, 2025",
      description: "CrestCode Technologies Pvt Ltd ('CrestCode') provides high-performance technical consulting under following governance protocols."
    },
    summary: [],
    sections: [],
    footer: {
      email: "contact@crestcode.in",
      location: "Chennai, India",
      acknowledgment: "By leveraging our technical infrastructure, you acknowledge receipt and acceptance of these Terms."
    }
  };
  
  const { hero, summary, sections, footer } = termsData;
  
  if (!termsData) return null;
  
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
                <EditableText value={hero.badge} onSave={handleSave} configPath="termsofservice.TERMS_DATA.hero.badge">
                    {hero.badge}
                </EditableText>
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1.1 }}>
            <EditableText value={hero.title} onSave={handleSave} configPath="termsofservice.TERMS_DATA.hero.title">
                {hero.title}
            </EditableText>
            <span style={{ color: COLORS.primary }}>
                <EditableText value={hero.titleAccent} onSave={handleSave} configPath="termsofservice.TERMS_DATA.hero.titleAccent">
                    {hero.titleAccent}
                </EditableText>
            </span>
          </motion.h1>
          
          <div style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6 }}>
            Effective Date: <EditableText value={hero.effectiveDate} onSave={handleSave} configPath="termsofservice.TERMS_DATA.hero.effectiveDate">
                {hero.effectiveDate}
            </EditableText>. <br/>
            <EditableText value={hero.description} onSave={handleSave} configPath="termsofservice.TERMS_DATA.hero.description" multiline={true}>
                {hero.description}
            </EditableText>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '1000px', margin: '-40px auto 100px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        
        {/* 2. SUMMARY DASHBOARD */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {summary.map((item: any, i: number) => (
                <div key={i} style={{ background: COLORS.white, padding: '24px', borderRadius: '20px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
                    <div style={{ color: COLORS.primary, marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{getIcon(item.icon, 24)}</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <EditableText value={item.label} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.summary.${i}.label`}>
                            {item.label}
                        </EditableText>
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: COLORS.textBlack, marginTop: '4px' }}>
                        <EditableText value={item.val} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.summary.${i}.val`}>
                            {item.val}
                        </EditableText>
                    </div>
                </div>
            ))}
        </div>

        {/* 3. DOCUMENT SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {Object.entries(sections || {}).map(([key, section]: [string, any]) => {
            // Handle intro section (id: "1")
            if (section.id === "1") {
              return (
                <TermsSection 
                  key={section.id}
                  number={section.id} 
                  title={section.title} 
                  icon={getIcon("Info")}
                  onSave={handleSave}
                  basePath={`termsofservice.TERMS_DATA.sections.${key}`}
                >
                  {section.paragraphs?.map((paragraph: string, pIndex: number) => (
                    <p key={pIndex} style={{ marginBottom: '16px' }}>
                      <EditableText value={paragraph} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.paragraphs.${pIndex}`} multiline={true}>
                        {paragraph}
                      </EditableText>
                    </p>
                  ))}
                </TermsSection>
              );
            }
            
            // Handle IP Protocol section (id: "3")
            if (section.id === "3") {
              return (
                <div key={section.id} style={{ background: COLORS.textBlack, borderRadius: '32px', padding: '48px', color: COLORS.white, position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px', opacity: 0.1 }}>
                      <Scale size={120} />
                   </div>
                   <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{ color: COLORS.primary, fontWeight: 800, fontSize: '14px', marginBottom: '16px', textTransform: 'uppercase' }}>
                        Intellectual Property Rights
                      </div>
                      <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px' }}>
                        <EditableText value={section.title} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.title`}>
                            {section.title}
                        </EditableText>
                      </h2>
                      {section.subsections?.map((subsection: any, subIndex: number) => (
                        <div key={subIndex} style={{ marginBottom: '24px' }}>
                          {subsection.notice && (
                            <div style={{ background: subsection.notice.type === 'blue' ? `${COLORS.primary}20` : 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px', marginBottom: '16px', borderLeft: `4px solid ${COLORS.primary}` }}>
                              <div style={{ color: COLORS.primary, fontWeight: 800, fontSize: '12px', marginBottom: '8px' }}>
                                {subsection.notice.label}
                              </div>
                              <p style={{ margin: 0, fontSize: '14px' }}>
                                {subsection.notice.text}
                              </p>
                            </div>
                          )}
                          <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>
                            <EditableText value={subsection.head} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.head`}>
                                {subsection.head}
                            </EditableText>
                          </h4>
                          {subsection.text && (
                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '12px' }}>
                              <EditableText value={subsection.text} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.text`} multiline={true}>
                                {subsection.text}
                              </EditableText>
                            </p>
                          )}
                          {subsection.list && (
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                              {subsection.list.map((item: string, itemIndex: number) => (
                                <li key={itemIndex} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>
                                  <EditableText value={item} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.list.${itemIndex}`}>
                                      {item}
                                  </EditableText>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                   </div>
                </div>
              );
            }
            
            // Handle Hackathon section (id: "4")
            if (section.id === "4") {
              return (
                <TermsSection 
                  key={section.id}
                  number={section.id} 
                  title={section.title} 
                  icon={getIcon("Zap")}
                  onSave={handleSave}
                  basePath={`termsofservice.TERMS_DATA.sections.${key}`}
                >
                  {section.subsections?.map((subsection: any, subIndex: number) => (
                    <div key={subIndex}>
                      {subsection.notice && (
                        <div style={{ background: subsection.notice.type === 'red' ? '#FEF2F2' : subsection.notice.type === 'yellow' ? '#FEF3C7' : '#F0F9FF', border: `1px solid ${subsection.notice.type === 'red' ? '#FEE2E2' : subsection.notice.type === 'yellow' ? '#FDE68A' : '#DBEAFE'}`, padding: '24px', borderRadius: '16px', marginBottom: '20px' }}>
                          <h4 style={{ color: subsection.notice.type === 'red' ? '#991B1B' : subsection.notice.type === 'yellow' ? '#92400E' : '#1E40AF', fontWeight: 800, fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase' }}>
                            <EditableText value={subsection.notice.label} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.notice.label`}>
                                {subsection.notice.label}
                            </EditableText>
                          </h4>
                          <p style={{ fontSize: '14px', color: subsection.notice.type === 'red' ? '#991B1B' : subsection.notice.type === 'yellow' ? '#92400E' : '#1E40AF', margin: 0, lineHeight: 1.5 }}>
                            <EditableText value={subsection.notice.text} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.notice.text`} multiline={true}>
                                {subsection.notice.text}
                            </EditableText>
                          </p>
                        </div>
                      )}
                      <h4 style={{ fontWeight: 800, marginBottom: '8px', fontSize: '16px' }}>
                        <EditableText value={subsection.head} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.head`}>
                            {subsection.head}
                        </EditableText>
                      </h4>
                      {subsection.text && (
                        <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '12px' }}>
                          <EditableText value={subsection.text} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.text`} multiline={true}>
                            {subsection.text}
                          </EditableText>
                        </p>
                      )}
                      {subsection.list && (
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {subsection.list.map((item: string, itemIndex: number) => (
                            <li key={itemIndex} style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '8px' }}>
                              <EditableText value={item} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.list.${itemIndex}`}>
                                  {item}
                              </EditableText>
                            </li>
                          ))}
                        </ul>
                      )}
                      {subsection.blocks && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '16px' }}>
                          {subsection.blocks.map((block: any, blockIndex: number) => (
                            <div key={blockIndex} style={{ background: 'rgba(79, 70, 229, 0.05)', padding: '16px', borderRadius: '12px', borderLeft: `3px solid ${COLORS.primary}` }}>
                              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px', color: COLORS.primary }}>
                                <EditableText value={block.label} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.blocks.${blockIndex}.label`}>
                                    {block.label}
                                </EditableText>
                              </div>
                              <p style={{ fontSize: '13px', color: COLORS.textMuted, margin: 0, lineHeight: 1.5 }}>
                                <EditableText value={block.text} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.blocks.${blockIndex}.text`} multiline={true}>
                                    {block.text}
                                </EditableText>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </TermsSection>
              );
            }
            
            // Handle all other sections
            return (
              <TermsSection 
                key={section.id}
                number={section.id} 
                title={section.title} 
                icon={getIcon("Info")}
                onSave={handleSave}
                basePath={`termsofservice.TERMS_DATA.sections.${key}`}
              >
                {section.paragraphs?.map((paragraph: string, pIndex: number) => (
                  <p key={pIndex} style={{ marginBottom: '16px' }}>
                    <EditableText value={paragraph} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.paragraphs.${pIndex}`} multiline={true}>
                      {paragraph}
                    </EditableText>
                  </p>
                ))}
                {section.list && (
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {section.list.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '8px' }}>
                        <EditableText value={item} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.list.${itemIndex}`}>
                            {item}
                        </EditableText>
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsections?.map((subsection: any, subIndex: number) => (
                  <div key={subIndex} style={{ marginBottom: '16px' }}>
                    <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px', color: COLORS.textBlack }}>
                      <EditableText value={subsection.head} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.head`}>
                          {subsection.head}
                      </EditableText>
                    </h4>
                    {subsection.text && (
                      <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '12px' }}>
                        <EditableText value={subsection.text} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.text`} multiline={true}>
                            {subsection.text}
                        </EditableText>
                      </p>
                    )}
                    {subsection.list && (
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {subsection.list.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '8px' }}>
                            <EditableText value={item} onSave={handleSave} configPath={`termsofservice.TERMS_DATA.sections.${key}.subsections.${subIndex}.list.${itemIndex}`}>
                                {item}
                            </EditableText>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </TermsSection>
            );
          })}

          {/* Footer Contact */}
          <div style={{ background: COLORS.white, padding: '40px', borderRadius: '32px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700 }}>
                    <Mail size={18} color={COLORS.primary}/> 
                    <EditableText value={footer.email} onSave={handleSave} configPath="termsofservice.TERMS_DATA.footer.email">
                        {footer.email}
                    </EditableText>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700 }}>
                    <MapPin size={18} color={COLORS.primary}/> 
                    <EditableText value={footer.location} onSave={handleSave} configPath="termsofservice.TERMS_DATA.footer.location">
                        {footer.location}
                    </EditableText>
                </div>
             </div>
             <p style={{ color: COLORS.textMuted, fontSize: '14px', marginBottom: '24px' }}>
                <EditableText value={footer.acknowledgment} onSave={handleSave} configPath="termsofservice.TERMS_DATA.footer.acknowledgment" multiline={true}>
                    {footer.acknowledgment}
                </EditableText>
             </p>
          </div>

        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}

function TermsSection({ number, title, children, icon, onSave, basePath }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ background: COLORS.white, padding: '40px', borderRadius: '32px', border: `1px solid ${COLORS.border}` }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ fontSize: '32px', fontWeight: 900, color: `${COLORS.primary}15` }}>{number}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: `${COLORS.primary}10`, padding: '8px', borderRadius: '8px', color: COLORS.primary }}>{icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: COLORS.textBlack, margin: 0 }}>
                <EditableText value={title} onSave={onSave} configPath={`${basePath}.title`}>
                    {title}
                </EditableText>
            </h3>
        </div>
      </div>
      <div style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.7, fontWeight: 500 }}>
        {children}
      </div>
    </motion.div>
  );
}