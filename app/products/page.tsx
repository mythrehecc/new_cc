'use client';

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Lock } from 'lucide-react';

// --- THEME CONSTANTS ---
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

function ProductsPage() {
  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        padding: 'clamp(60px, 10vw, 100px) 24px 60px', 
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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              color: COLORS.textBlack, 
              letterSpacing: '-0.04em', 
              margin: '0 0 16px',
              lineHeight: 1.1
            }}
          >
            Our <span style={{ color: COLORS.primary }}>Products</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(18px, 4vw, 20px)', 
              color: COLORS.textMuted, 
              fontWeight: 500, 
              lineHeight: 1.6, 
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Free products designed to help entrepreneurs and businesses validate ideas, estimate costs, and make informed decisions.
          </motion.p>
        </div>
      </section>

      {/* 2. PRODUCTS GRID - INCREASED MIDDLE GAP */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 100px' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 'clamp(24px, 4vw, 48px)',
          rowGap: 'clamp(24px, 4vw, 48px)' 
        }}>
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }} 
            style={{ 
              background: COLORS.white, 
              padding: 'clamp(24px, 5vw, 40px)', 
              borderRadius: 'clamp(16px, 3vw, 24px)', 
              border: `1px solid ${COLORS.border}`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div style={{ marginBottom: '24px', background: `${COLORS.primary}15`, width: 'fit-content', padding: '12px', borderRadius: '12px', color: COLORS.primary }}>
              <Shield size={26} strokeWidth={1.5} />
            </div>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 20px)', fontWeight: 800, marginBottom: '12px', color: COLORS.textBlack }}>MVP Estimator</h2>
            <p style={{ color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '24px', fontSize: 'clamp(14px, 3vw, 15px)' }}>
              Our comprehensive MVP calculator helps you understand the true cost and timeline for bringing your product to life.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Feature pricing', 'Timeline estimation', 'Tech stack recommendation'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: COLORS.textMuted, fontWeight: 600 }}>
                  <span style={{ color: COLORS.primary, fontSize: '18px' }}>•</span> {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }} 
            style={{ 
              background: COLORS.white, 
              padding: 'clamp(24px, 5vw, 40px)', 
              borderRadius: 'clamp(16px, 3vw, 24px)', 
              border: `1px solid ${COLORS.border}`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div style={{ marginBottom: '24px', background: `${COLORS.primary}15`, width: 'fit-content', padding: '12px', borderRadius: '12px', color: COLORS.primary }}>
              <Lightbulb size={26} strokeWidth={1.5} />
            </div>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 20px)', fontWeight: 800, marginBottom: '12px', color: COLORS.textBlack }}>Validate Your Idea</h2>
            <p style={{ color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '24px', fontSize: 'clamp(14px, 3vw, 15px)' }}>
              Before investing time and money, validate your business idea with our intelligent questionnaire and market analysis.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Go to market strategy', 'Competitive landscape', 'Backward plan'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: COLORS.textMuted, fontWeight: 600 }}>
                  <span style={{ color: COLORS.primary, fontSize: '18px' }}>•</span> {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }} 
            style={{ 
              background: COLORS.white, 
              padding: 'clamp(24px, 5vw, 40px)', 
              borderRadius: 'clamp(16px, 3vw, 24px)', 
              border: `1px solid ${COLORS.border}`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div style={{ marginBottom: '24px', background: `${COLORS.primary}15`, width: 'fit-content', padding: '12px', borderRadius: '12px', color: COLORS.primary }}>
              <Shield size={26} strokeWidth={1.5} />
            </div>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 20px)', fontWeight: 800, marginBottom: '12px', color: COLORS.textBlack }}>HIPAA Compliance</h2>
            <p style={{ color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '24px', fontSize: 'clamp(14px, 3vw, 15px)' }}>
              Built to support compliant workflows, ensuring secure handling, storage, and transmission of protected health information.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Secure PHI handling', 'Industry best practices', 'Regulatory compliance'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: COLORS.textMuted, fontWeight: 600 }}>
                  <span style={{ color: COLORS.primary, fontSize: '18px' }}>•</span> {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }} 
            style={{ 
              background: COLORS.white, 
              padding: 'clamp(24px, 5vw, 40px)', 
              borderRadius: 'clamp(16px, 3vw, 24px)', 
              border: `1px solid ${COLORS.border}`,
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div style={{ marginBottom: '24px', background: `${COLORS.primary}15`, width: 'fit-content', padding: '12px', borderRadius: '12px', color: COLORS.primary }}>
              <Lock size={26} strokeWidth={1.5} />
            </div>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 20px)', fontWeight: 800, marginBottom: '12px', color: COLORS.textBlack }}>Data Encryption</h2>
            <p style={{ color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '24px', fontSize: 'clamp(14px, 3vw, 15px)' }}>
              All sensitive data is protected using industry-standard encryption both in transit and at rest for multi-layer security.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['End-to-end encryption', 'Data at rest protection', 'Multi-layer security'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: COLORS.textMuted, fontWeight: 600 }}>
                  <span style={{ color: COLORS.primary, fontSize: '18px' }}>•</span> {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        /* Mobile styles */
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: clamp(16px, 4vw, 24px) !important;
          }
          
          div[style*="padding: clamp(24px, 5vw, 40px)"] {
            padding: clamp(20px, 5vw, 32px) !important;
          }
          
          div[style*="maxWidth: '1100px'"] {
            padding: 0 clamp(16px, 4vw, 24px) clamp(60px, 10vw, 80px) !important;
          }
          
          section[style*="padding: clamp(60px, 10vw, 100px)"] {
            padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px) !important;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: clamp(24px, 3vw, 36px) !important;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 1025px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductsPage;