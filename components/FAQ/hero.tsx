
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LifeBuoy, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import EditableText from '@/components/admin/editableText';
import { useAdmin } from '@/components/admin/context';
import EditableFaqArray from '@/components/admin/faqedit';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  // Shared Hero Gradient
  heroBg: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  bgBase: '#F3F5F9',        // Standard Industrial Slate-Blue
  primary: '#4F46E5',       // Precision Indigo
  textBlack: '#020617',     // Ink Black
  textMuted: '#64748B',     // Architectural Slate
  white: '#FFFFFF',
  border: '#E2E8F0',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function FaqPage() {
  const { config, saveConfigToServer } = useAdmin();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqConfig = (config as any)?.faqs || {};
  const faqs = faqConfig?.items || [];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. UNIFIED INDUSTRIAL HERO */}
      <section style={{ 
        padding: '120px 24px 80px', 
        background: COLORS.heroBg, 
        position: 'relative', 
        overflow: 'hidden', 
        textAlign: 'center',
        marginTop: '-4.8rem' 
      }}>
        {/* Architectural Grid Overlay */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(${COLORS.textMuted}11 1px, transparent 1px), linear-gradient(90deg, ${COLORS.textMuted}11 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
          }} />
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ 
                background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', 
                fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em'
             }}>
                Support Center
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0', lineHeight: 1
          }}>
            <EditableText value={faqConfig?.title} onSave={() => saveConfigToServer()} configPath="faqs.title">
              {faqConfig?.title || "How can we help?"}
            </EditableText>
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6 }}>
            <EditableText value={faqConfig?.subtitle} onSave={() => saveConfigToServer()} configPath="faqs.subtitle" multiline>
              {faqConfig?.subtitle || "Find answers to technical queries, project logistics, and partnership details."}
            </EditableText>
          </p>
        </div>
      </section>

      {/* 2. COMPACT DASHBOARD CONTENT */}
      <main style={{ maxWidth: '1200px', margin: '-40px auto 100px', padding: '0 24px', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
          
          {/* LEFT: FAQ LIST (Bento Style) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <EditableFaqArray items={faqs} onSave={() => saveConfigToServer()} configPath="faqs.items">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map((faq: any, index: number) => (
                  <div key={index} style={{ 
                    background: COLORS.white, 
                    borderRadius: '16px', 
                    border: `1px solid ${expandedFaq === index ? COLORS.primary : COLORS.border}`,
                    transition: '0.3s all ease',
                    boxShadow: expandedFaq === index ? `0 10px 25px -10px ${COLORS.primary}33` : '0 4px 6px -1px rgba(0,0,0,0.02)'
                  }}>
                    <button 
                      onClick={() => toggleFaq(index)}
                      style={{ 
                        width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', 
                        alignItems: 'center', cursor: 'pointer', border: 'none', background: 'none', textAlign: 'left' 
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: '16px', color: COLORS.textBlack, paddingRight: '15px' }}>
                        {faq.question}
                      </span>
                      <ChevronDown size={18} style={{ 
                        color: expandedFaq === index ? COLORS.primary : COLORS.textMuted,
                        transform: expandedFaq === index ? 'rotate(180deg)' : 'none', 
                        transition: '0.3s' 
                      }} />
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                          <p style={{ padding: '0 24px 20px', fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.7, margin: 0 }}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </EditableFaqArray>
          </motion.div>

          {/* RIGHT: INDUSTRIAL SIDEBAR */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ position: 'sticky', top: '100px' }}>
            <div style={{ 
              background: COLORS.textBlack, padding: '40px', borderRadius: '32px', color: COLORS.white,
              boxShadow: '0 30px 60px -20px rgba(79,70,229,0.3)', position: 'relative', overflow: 'hidden'
            }}>
              {/* Subtle architectural dot grid */}
              <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: `radial-gradient(${COLORS.white} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <LifeBuoy size={28} color={COLORS.primary} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>Still have questions?</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
                  Our technical support team is ready to discuss your architecture and project requirements.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button 
                    onClick={() => window.location.href = 'mailto:contact.dockly@gmail.com'}
                    style={{ 
                      background: COLORS.primary, color: COLORS.white, border: 'none', padding: '16px', 
                      borderRadius: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', 
                      alignItems: 'center', justifyContent: 'center', gap: '10px', transition: '0.3s'
                    }}
                  >
                    <Mail size={18} /> Email Support
                  </button>
                  <button 
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', color: COLORS.white, border: '1px solid rgba(255,255,255,0.1)', 
                      padding: '16px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                    }}
                  >
                    <MessageSquare size={18} /> Live Chat
                  </button>
                </div>
              </div>
            </div>

            {/* TRUST BADGE */}
            <div style={{ marginTop: '24px', padding: '24px', borderRadius: '20px', border: `1px solid ${COLORS.border}`, background: 'rgba(255,255,255,0.5)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
               <ShieldCheck size={18} color={COLORS.primary} />
               <span style={{ fontSize: '12px', fontWeight: 700, color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Enterprise-Grade Security
               </span>
            </div>
          </motion.div>

        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}
