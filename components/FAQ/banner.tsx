'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SendOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  // Using the exact Indigo-to-Sky Blue gradient for high-end IT feel
  bgGradient: 'linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)',
  white: '#FFFFFF',
  textInk: '#020617',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function Banner() {
  const router = useRouter();
  
  const handleContactClick = () => {
    console.log('FAQ banner button clicked - navigating to contact page');
    router.push('/#contact'); // Navigate to contact section on home page
  };

  return (
    <section
      style={{
        position: 'relative',
        padding: '64px 16px', // Original py-16 px-4
        background: COLORS.bgGradient,
        overflow: 'hidden',
        fontFamily: FONT_PRIMARY,
      }}>
      {/* 1. LAYERED BACKGROUND EFFECTS (Maintained opacity logic) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '384px', // Original w-96
            height: '384px', // Original h-96
            background: '#4A9EFF',
            borderRadius: '50%',
            filter: 'blur(64px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '384px',
            height: '384px',
            background: '#FF5757',
            borderRadius: '50%',
            filter: 'blur(64px)',
          }}
        />
      </div>

      {/* 2. CONTAINER - Maintained max-w-7xl logic */}
      <div
        style={{
          maxWidth: '80rem', // max-w-7xl
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px', // gap-8
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="flex-lg-row" // Mimicking lg:flex-row
        >
          {/* TEXT CONTENT - Updated to Elite Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 3rem)', // text-3xl to text-5xl
                fontWeight: 800, // Elite weight
                color: COLORS.white,
                lineHeight: 1.2,
                letterSpacing: '-0.04em',
                margin: 0,
                textAlign: 'left',
              }}>
              Initiate a no-obligation discussion with our experts to explore how we can address your unique challenges.
            </h3>
          </motion.div>

          {/* ACTION BUTTON - Same size as original, updated styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <button
              style={{
                width: '100%',
                minWidth: '220px',
                backgroundColor: COLORS.white,
                color: COLORS.textInk,
                padding: '20px 48px', // py-5 px-12
                borderRadius: '4px', // Original rounded-sm
                fontSize: '18px', // text-lg
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 15px 30px -5px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 10px 25px -5px rgba(0, 0, 0, 0.2)';
              }}>
              Get in touch <SendOutlined />
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');
        
        @media (min-width: 1024px) {
          .flex-lg-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
}