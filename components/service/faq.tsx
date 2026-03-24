'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- THEME TOKENS ---
const COLORS = {
  bgBase: '#F3F5F9', // Industrial Slate-Blue
  primary: '#4F46E5', // Industrial Indigo
  textBlack: '#020617', // Ink Black
  textMuted: '#64748B', // Architectural Slate
  border: '#E2E8F0', // Crisp Edge
  white: '#FFFFFF',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

const ServicesFAQ = () => {
  const { config, saveConfigToServer } = useAdmin();
  const FAQ_DATA = config?.service?.FAQ_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!FAQ_DATA) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: '32px 24px',
        backgroundColor: COLORS.bgBase,
        fontFamily: FONT_PRIMARY,
        position: 'relative',
      }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.04em',
              marginBottom: '16px',
            }}>
            <EditableText
              value={FAQ_DATA.header.main}
              onSave={handleSave}
              configPath="service.FAQ_DATA.header.main"
            >
              {FAQ_DATA.header.main}
            </EditableText>{' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={FAQ_DATA.header.highlight}
                onSave={handleSave}
                configPath="service.FAQ_DATA.header.highlight"
              >
                {FAQ_DATA.header.highlight}
              </EditableText>
            </span>
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: COLORS.textMuted,
              lineHeight: '1.6',
              maxWidth: '650px',
              margin: '0 auto',
            }}>
            <EditableText
              value={FAQ_DATA.header.sub}
              onSave={handleSave}
              configPath="service.FAQ_DATA.header.sub"
            >
              {FAQ_DATA.header.sub}
            </EditableText>
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQ_DATA.questions.map((faq: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: COLORS.white,
                border: `1px solid ${
                  openIndex === index ? COLORS.primary : COLORS.border
                }`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow:
                  openIndex === index
                    ? '0 10px 30px -10px rgba(79, 70, 229, 0.1)'
                    : 'none',
              }}>
              <div
                style={{
                  width: '100%',
                  padding: '28px 32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: COLORS.textBlack,
                    margin: 0,
                    fontFamily: FONT_PRIMARY,
                    paddingRight: '20px',
                    flex: 1,
                  }}>
                  <EditableText
                    value={faq.question}
                    onSave={handleSave}
                    configPath={`service.FAQ_DATA.questions.${index}.question`}
                  >
                    {faq.question}
                  </EditableText>
                </h3>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                    color:
                      openIndex === index ? COLORS.primary : COLORS.textMuted,
                  }}
                  transition={{ duration: 0.3 }}>
                  <Plus size={24} />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <div
                      style={{
                        padding: '0 32px 32px 32px',
                        color: COLORS.textMuted,
                        fontSize: '16px',
                        lineHeight: '1.7',
                        fontWeight: 450,
                      }}>
                      <div
                        style={{
                          height: '1px',
                          backgroundColor: COLORS.border,
                          marginBottom: '24px',
                        }}
                      />
                      <EditableText
                        value={faq.answer}
                        onSave={handleSave}
                        configPath={`service.FAQ_DATA.questions.${index}.answer`}
                        multiline={true} // Helpful for multi-line FAQ answers
                      >
                        {faq.answer}
                      </EditableText>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default ServicesFAQ;