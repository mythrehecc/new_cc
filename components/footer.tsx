'use client';

import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import {
  Boxes,
  Globe,
  Smartphone,
  Users,
  Workflow,
  HelpCircle,
  MessageSquareQuote,
  Briefcase,
  Brain,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  bgDeep: '#020617', // Matches your deep dark sections
  primary: '#4F46E5', // Industrial Indigo
  textWhite: '#FFFFFF',
  textDim: '#94A3B8', // Muted Slate
  border: 'rgba(255, 255, 255, 0.08)', // Light border for white background
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const services = [
    {
      key: 'custom-software-development',
      label: 'Software Development',
      icon: <Boxes size={18} />,
    },
    { key: 'ai-ml', label: 'AI & Machine Learning', icon: <Brain size={18} /> },
    { key: 'web-development', label: 'Web Systems', icon: <Globe size={18} /> },
    {
      key: 'mobile-app-development',
      label: 'Mobile Engineering',
      icon: <Smartphone size={18} />,

    },
  ];

  const about = [
    { key: 'team', label: 'Our Team', icon: <Users size={18} /> },
    { key: 'careers', label: 'Careers', icon: <Briefcase size={18} /> },
    { key: 'hackathon', label: 'Hackathon', icon: <Workflow size={18} /> },
    { key: 'internship', label: 'Internship', icon: <HelpCircle size={18} /> },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        color: COLORS.textWhite,
        padding: 'clamp(20px, 3vw, 30px) clamp(12px, 2vw, 18px)',
        fontFamily: FONT_PRIMARY,
        // borderTop: `1px solid ${COLORS.border}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* Background Subtle Gradient Flare */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(20px, 3vw, 30px)',
            marginBottom: 'clamp(20px, 4vw, 30px)',
          }}>
          {/* 1. BRAND SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
              }}>
              <img
                src="/Headerlogo.png"
                alt="Logo"
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />
              <div>
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}>
                  Crestcode
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: COLORS.primary,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}>
                  Technologies
                </div>
              </div>
            </div>
            <p
              style={{
                color: COLORS.textDim,
                fontSize: '15px',
                lineHeight: '1.7',
                maxWidth: '300px',
                fontWeight: 500,
              }}>
              High-performance technical consultancy providing full-spectrum
              engineering for the next generation of digital infrastructure.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <a
                href="https://www.linkedin.com/company/crestcode-technologies"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: COLORS.textWhite,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.primary;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* 2. SERVICES LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
                color: COLORS.textWhite,
              }}>
              Capabilities
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              {services.map((service) => (
                <li key={service.key}>
                  <button
                    onClick={() => router.push(`/${service.key}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: COLORS.textDim,
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: '0.3s all',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFF';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.textDim;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                    <span style={{ color: COLORS.primary }}>
                      {service.icon}
                    </span>
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. ABOUT LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '28px',
                color: COLORS.textWhite,
              }}>
              Company
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              {about.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => {
                      if (item.key === 'careers') {
                        router.push('/careers');
                      } else {
                        router.push(`/${item.key}`);
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: COLORS.textDim,
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: '0.3s all',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFF';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.textDim;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                    <span style={{ color: COLORS.primary }}>{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 5. CONTACT INFORMATION */}
        <div
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: 'clamp(16px, 3vw, 20px)',
            paddingBottom: 'clamp(8px, 2vw, 12px)',
          }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'clamp(20px, 3vw, 32px)' 
          }}>
            {/* Contact Info */}
            <div>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: 800, 
                color: COLORS.textWhite, 
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                Contact Information
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: COLORS.textDim }}>
                  <Mail size={14} />
                  <span>contact@crestcode.in</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: COLORS.textDim }}>
                  <Phone size={14} />
                  <span>Mobile: +91 962 966 4974</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: COLORS.textDim }}>
                  <Phone size={14} />
                  <span>Landline: 044 4604 7460</span>
                </div>
              </div>
            </div>

            {/* Our Office */}
            <div>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: 800, 
                color: COLORS.textWhite, 
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                Our Office
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '13px', color: COLORS.textDim }}>
                  <MapPin size={14} />
                  <span>2nd Floor, Plot No:248, Kannan St, Sree Balaji Nagar, Pallikaranai, Chennai - 600 100</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: 800, 
                color: COLORS.textWhite, 
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                Business Hours
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: COLORS.textDim }}>
                <div>Tuesday - Friday: 11:00 AM - 8:00 PM IST</div>
                <div>Saturday: 09:00 AM - 5:00 PM IST</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. COPYRIGHT FOOTER */}
        <div
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: 'clamp(16px, 3vw, 20px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(8px, 1.5vw, 12px)',
          }}>
          <p
            style={{
              fontSize: '14px',
              color: COLORS.textDim,
              fontWeight: 500,
              margin: 0,
            }}>
            © 2025 Crestcode Consultancy. All technical rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button
              onClick={() => router.push('/privacy-policy')}
              style={{
                fontSize: '13px',
                color: COLORS.textDim,
                fontWeight: 700,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
              }}>
              Privacy Policy
            </button>
            <button
              onClick={() => router.push('/terms-of-service')}
              style={{
                fontSize: '13px',
                color: COLORS.textDim,
                fontWeight: 700,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
              }}>
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </footer>
  );
}
