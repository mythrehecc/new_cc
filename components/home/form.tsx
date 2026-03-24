import React, { useState, useEffect } from 'react';
import { submitContactForm } from '@/services/api';
import { Paperclip, Calendar, Mail, Phone, Building, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

// --- THEME TOKENS ---
const COLORS = {
  bgLeft: '#020617',
  bgRight: '#0B1224',
  primary: '#4F46E5',
  accentRed: '#FF5757',
  textWhite: '#F8FAFC',
  textMuted: '#94A3B8',
  border: 'rgba(255, 255, 255, 0.1)',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [captcha, setCaptcha] = useState({ letters: '', userAnswer: '' });

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Generate random captcha function
  const generateRandomLetters = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Refresh captcha function
  const refreshCaptcha = () => {
    setCaptcha({
      letters: generateRandomLetters(),
      userAnswer: ''
    });
  };

  // Generate random captcha on component mount
  useEffect(() => {
    setCaptcha({
      letters: generateRandomLetters(),
      userAnswer: ''
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify captcha
    if (captcha.userAnswer.toUpperCase() !== captcha.letters) {
      setStatus('error');
      alert('Please enter the captcha correctly.');
      return;
    }
    
    setStatus('loading');
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    if (attachment) {
      data.append('attachment', attachment);
    }

    try {
      await submitContactForm(data);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setAttachment(null);
      setCaptcha({
        letters: generateRandomLetters(),
        userAnswer: ''
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

  const containerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemSlide = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div
      id="contact-form"
      style={{
        minHeight: 'auto', // Removed 100vh for compactness
        backgroundColor: COLORS.bgLeft,
        color: COLORS.textWhite,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: FONT_FAMILY,
        overflow: 'hidden',
        padding: '40px 0', // Reduced section padding
      }}>
      {/* LEFT SIDE: STEPS & INFO (Condensed) */}
      <motion.div
        variants={containerFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          flex: '1 1 40%',
          padding: '40px 4% 40px 6%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '320px',
        }}>
        <motion.h1
          variants={itemSlide}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', // Smaller font size
            fontWeight: 800,
            color: COLORS.primary,
            marginBottom: '30px', // Reduced margin
            letterSpacing: '-0.04em',
          }}>
          Let's start
        </motion.h1>

        <div style={{ position: 'relative', paddingLeft: '35px' }}>
          <div
            style={{
              position: 'absolute',
              left: '16px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: `linear-gradient(to bottom, ${COLORS.primary}, ${COLORS.border})`,
            }}
          />

          {[
            { num: '1', text: 'Vision' },
            { num: '2', text: 'Discovery' },
            { num: '3', text: 'Roadmap' },
            { num: '4', text: 'Launch' },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={itemSlide}
              style={{ marginBottom: '18px', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '-24px',
                  top: '6px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: i === 0 ? COLORS.primary : COLORS.textMuted,
                  border: `3px solid ${COLORS.bgLeft}`,
                  boxShadow: i === 0 ? `0 0 10px ${COLORS.primary}` : 'none',
                  zIndex: 2,
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  margin: 0,
                  color: i === 0 ? COLORS.textWhite : COLORS.textMuted,
                }}>
                <span style={{ opacity: 0.5 }}>{step.num}.</span> {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemSlide} style={{ marginTop: '30px' }}>
          <a
            href="mailto:contact@crestcode.in"
            style={{
              color: COLORS.primary,
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
            <Mail size={16} /> contact@crestcode.in
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: THE FORM (Compact Grid) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{
          flex: '1 1 55%',
          padding: '40px 6% 40px 4%',
          backgroundColor: COLORS.bgRight,
          borderRadius: '16px',
          marginRight: '20px',
        }}>
        <form onSubmit={handleSubmit}>
          {/* Row for Name and Email */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: '30px',
            }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: COLORS.textMuted,
                  marginBottom: '8px',
                  fontWeight: 600,
                }}>
                NAME*
              </label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="John Smith"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${COLORS.border}`,
                  paddingBottom: '8px',
                  color: COLORS.textWhite,
                  outline: 'none',
                  fontSize: '15px',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: COLORS.textMuted,
                  marginBottom: '8px',
                  fontWeight: 600,
                }}>
                EMAIL*
              </label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${COLORS.border}`,
                  paddingBottom: '8px',
                  color: COLORS.textWhite,
                  outline: 'none',
                  fontSize: '15px',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                color: COLORS.textMuted,
                marginBottom: '8px',
                fontWeight: 600,
              }}>
              MESSAGE*
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your idea"
              rows={2}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${COLORS.border}`,
                paddingBottom: '8px',
                color: COLORS.textWhite,
                outline: 'none',
                fontSize: '15px',
                resize: 'none',
              }}
            />
          </div>

          {/* Captcha Section */}
          <div style={{ marginBottom: '25px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                color: COLORS.textMuted,
                marginBottom: '8px',
                fontWeight: 600,
              }}>
              ENTER CAPTCHA*
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ 
                color: COLORS.textWhite, 
                fontSize: '18px', 
                fontWeight: 700,
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '10px 16px',
                borderRadius: '8px',
                letterSpacing: '3px',
                fontFamily: 'monospace'
              }}>
                {captcha.letters}
              </span>
              <motion.button
                type="button"
                onClick={refreshCaptcha}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: COLORS.textMuted,
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                title="Refresh Captcha"
              >
                <RefreshCw size={18} />
              </motion.button>
              <input
                required
                type="text"
                value={captcha.userAnswer}
                onChange={(e) => setCaptcha({ ...captcha, userAnswer: e.target.value })}
                placeholder="Answer"
                style={{
                  width: '80px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${COLORS.border}`,
                  paddingBottom: '8px',
                  color: COLORS.textWhite,
                  outline: 'none',
                  fontSize: '15px',
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
            }}>
            <div>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                style={{
                  background: 'none',
                  border: 'none',
                  color: COLORS.textWhite,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}>
                <Paperclip size={14} /> {attachment ? attachment.name : 'Attach'}
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                backgroundColor: COLORS.primary,
                color: 'white',
                padding: '10px 40px',
                fontSize: '16px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}>
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Retry' : 'Send'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
