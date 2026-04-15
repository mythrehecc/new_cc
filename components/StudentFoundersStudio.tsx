"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useAdmin } from './admin/context';
import { submitCareerForm } from '@/services/api';
import EditableText from '@/components/admin/editableText';
import { 
  CheckCircle2, 
  Rocket, 
  Cloud, 
  Zap,
  Users,
  Quote,
  Layout,
  MonitorSmartphone,
  Code2,
  Banknote,
  Network,
  FileText,
  Menu,
  X,
  Brain,
  Smartphone,
  Boxes,
  Briefcase,
  Bug,
  Globe,
  TerminalSquare,
  CreditCard,
  Gauge,
  Compass,
  PenTool
} from "lucide-react";

// EXACT COLOR PALETTE FROM THE DESIGN
const COLORS = {
  bgBase: '#FFFFFF',
  bgLight: '#F8FAFC',
  bgDark: '#050B14',
  primaryBlue: '#0052FF',
  textBlack: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  darkBorder: 'rgba(255,255,255,0.1)',
  successGreen: '#10B981',
  accentCyan: '#00A3FF',
  lightBlueText: '#E2E8F0',
  bgGrey: '#F1F5F9'
};

const FONT_FAMILY = "'Inter', sans-serif";

// ==========================================
// 1. HEADER COMPONENT
// ==========================================
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 864);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header style={{ backgroundColor: COLORS.bgDark, padding: '20px 24px', color: '#FFF', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `1px solid ${COLORS.darkBorder}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
          
          <div style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '0.05em', cursor: 'pointer' }} onClick={() => router.push('/')}>
            VENTURE_STUDIO
          </div>

          {!isMobile && (
            <nav style={{ display: 'flex', gap: '40px', fontSize: '14px', fontWeight: 600, color: '#94A3B8' }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFF'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'} onClick={() => router.push('/')}>Home</span>
              <span style={{ cursor: 'pointer', color: '#FFF', borderBottom: `2px solid ${COLORS.primaryBlue}`, paddingBottom: '4px' }}>Studio</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFF'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'} onClick={() => handleScroll('company')}>Company</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFF'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'} onClick={() => handleScroll('model')}>Our Model</span>
            </nav>
          )}

          {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => handleScroll('apply')} style={{ backgroundColor: COLORS.primaryBlue, color: '#FFF', padding: '10px 28px', borderRadius: '100px', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Join Program
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'transparent', border: 'none', color: '#FFF' }}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </header>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ position: 'fixed', top: '80px', left: 0, right: 0, backgroundColor: COLORS.bgDark, padding: '24px', zIndex: 999, borderBottom: `1px solid ${COLORS.darkBorder}` }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px', fontWeight: 600, color: '#FFF' }}>
              <span onClick={() => { router.push('/'); setIsMenuOpen(false); }}>Home</span>
              <span onClick={() => { setIsMenuOpen(false); }}>Studio</span>
              <span onClick={() => { handleScroll('company'); setIsMenuOpen(false); }}>Company</span>
              <span onClick={() => { handleScroll('model'); setIsMenuOpen(false); }}>Our Model</span>
              <button onClick={() => { handleScroll('apply'); setIsMenuOpen(false); }} style={{ backgroundColor: COLORS.primaryBlue, color: '#FFF', padding: '14px', borderRadius: '12px', fontWeight: 700, border: 'none', marginTop: '10px' }}>Join Program</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================
export default function StudentFoundersStudio() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<string>("03");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 864);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { config, saveConfigToServer } = useAdmin();
  const PAGE_DATA = config?.founders?.PAGE_DATA; 
  
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSave = () => saveConfigToServer();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      setResumeFile(null);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus({ type: 'error', msg: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.bgLight, fontFamily: FONT_FAMILY, color: COLORS.textBlack, overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .bento-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease; }
        .bento-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
        .spark-bg-wrapper { position: absolute; inset: 0; opacity: 0.8; z-index: 0; pointer-events: none; }
        .perspective-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px; background-position: center;
          mask-image: radial-gradient(circle at center, black 0%, transparent 60%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 60%);
        }
        .radiating-lines {
          position: absolute; inset: 0;
          background: repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 8deg, rgba(0,0,0,0.02) 8deg 9deg, transparent 9deg 18deg);
          mask-image: radial-gradient(circle at center, black 0%, transparent 60%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 60%);
        }
      `}</style>

      {/* Render Header */}
      <Header />

      {/* --- 1. HERO SECTION (LIGHT BACKGROUND) --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: isMobile ? '120px 24px 60px' : '160px 24px 100px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#EFF6FF', color: COLORS.primaryBlue, padding: '8px 20px', borderRadius: '100px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '32px' }}>
            <EditableText value={PAGE_DATA?.hero?.badge || "STUDENT FOUNDER STUDIO"} onSave={handleSave} configPath="founders.PAGE_DATA.hero.badge">
              {PAGE_DATA?.hero?.badge || "STUDENT FOUNDER STUDIO"}
            </EditableText>
          </div>
          
          <h1 style={{ fontSize: isMobile ? '48px' : '72px', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '24px', color: COLORS.textBlack }}>
            Don't wait for placements. <span style={{ color: COLORS.primaryBlue }}>Start your company</span> while you're still in college.
          </h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '48px', maxWidth: '600px', fontWeight: 500 }}>
            The ultimate high-velocity environment for student builders to transition from academic theory to architectural execution.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => handleScroll('apply')} style={{ background: COLORS.primaryBlue, color: '#FFF', padding: '16px 40px', borderRadius: '100px', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 10px 20px rgba(0, 82, 255, 0.2)' }} className="bento-card">
              Apply to Studio
            </button>
            <button onClick={() => handleScroll('process')} style={{ background: '#FFF', color: COLORS.primaryBlue, padding: '16px 40px', borderRadius: '100px', fontWeight: 800, border: `1px solid ${COLORS.border}`, cursor: 'pointer', fontSize: '16px' }} className="bento-card">
              View Process
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. NOT AN INCUBATOR (2x2 SQUARE BENTO SECTION) --- */}
      <section id="company" style={{ padding: '100px 24px', backgroundColor: COLORS.bgBase }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: COLORS.textBlack, marginBottom: '24px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Not an Incubator.<br />A Startup Building Environment.
            </h2>
            <p style={{ fontSize: '16px', color: COLORS.textMuted, lineHeight: 1.7, marginBottom: '40px' }}>
              We don't just give you advice and leave you to figure it out. We build alongside you, provide the technical infrastructure, and bring you to market with an unfair advantage.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ marginTop: '2px', backgroundColor: '#EFF6FF', padding: '12px', borderRadius: '12px' }}>
                  <MonitorSmartphone size={24} color={COLORS.primaryBlue} />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>In-Office Execution</h4>
                  <p style={{ fontSize: '14px', color: COLORS.textMuted }}>Real work happens in person. No Zoom fatigue, just pure velocity.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ marginTop: '2px', backgroundColor: '#EFF6FF', padding: '12px', borderRadius: '12px' }}>
                  <Layout size={24} color={COLORS.primaryBlue} />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>Infrastructure Provided</h4>
                  <p style={{ fontSize: '14px', color: COLORS.textMuted }}>Cloud credits, design tools, and workstations—all ready from day one.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Staggered Bento Grid Layout */}
          <div style={{ display: isMobile ? 'flex' : 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: isMobile ? '0' : '40px' }}>
              <div className="bento-card" style={{ backgroundColor: COLORS.bgBase, padding: '40px 32px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '260px' }}>
                <Gauge size={28} color={COLORS.primaryBlue} style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: COLORS.textBlack }}>High Velocity</h4>
              </div>
              <div className="bento-card" style={{ backgroundColor: '#000', padding: '40px 32px', borderRadius: '24px', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '260px' }}>
                <Compass size={28} color="#FFF" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 800 }}>Structural Integrity</h4>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="bento-card" style={{ backgroundColor: COLORS.primaryBlue, padding: '40px 32px', borderRadius: '24px', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '260px' }}>
                <Zap size={28} color="#FFF" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 800 }}>Instant Action</h4>
              </div>
              <div className="bento-card" style={{ backgroundColor: COLORS.bgBase, padding: '40px 32px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '260px' }}>
                <Users size={28} color={COLORS.primaryBlue} style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: COLORS.textBlack }}>Peer Elite</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WE LOOK FOR BUILDERS --- */}
      <section style={{ padding: '120px 24px', backgroundColor: COLORS.bgBase, textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>We Don't Look for Ideas. We Look for Builders.</h2>
          <p style={{ color: COLORS.textMuted, marginBottom: '80px', fontSize: '16px' }}>Ideas are cheap. Execution is the only currency in our Studio. We select students who have already started tinkering.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '32px', textAlign: 'left' }}>
            {[
              { num: "01", title: "The Hacker", desc: "You code fast, break things, and rebuild them better. You can turn an idea into an MVP over a weekend." },
              { num: "02", title: "The Hustler", desc: "You know how to sell, distribute, and get people to care. You can get 100 users before the product is built." },
              { num: "03", title: "The Visionary", desc: "You see market gaps clearly. You design exceptional experiences and define the product roadmap." }
            ].map((item, i) => (
              <div key={i} className="bento-card" style={{ backgroundColor: COLORS.bgLight, padding: '40px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, borderBottom: `4px solid ${COLORS.primaryBlue}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '64px', fontWeight: 900, color: COLORS.lightBlueText, opacity: 0.6, position: 'absolute', top: '20px', right: '20px', lineHeight: 1 }}>{item.num}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px', position: 'relative', zIndex: 2 }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.6, position: 'relative', zIndex: 2 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. MINIMUM ENTRY CRITERIA (DARK SECTION) --- */}
      <section style={{ backgroundColor: '#000', padding: '100px 24px', color: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>Minimum Entry Criteria</h2>
            <p style={{ color: '#94A3B8', marginBottom: '40px', fontSize: '16px', lineHeight: 1.6 }}>We are highly selective. We are looking for the top 1% of student builders who are ready to commit.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                "Currently enrolled in an undergraduate or graduate program.",
                "Demonstrable skill in code, design, or deep-domain research.",
                "Available to spend at least 15 hours/week in the Studio.",
                "Absolute obsession with solving a specific, validated problem."
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px 24px', borderRadius: '16px', border: `1px solid ${COLORS.darkBorder}` }}>
                  <CheckCircle2 size={24} color={COLORS.successGreen} />
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 163, 255, 0.25) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
             <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(255,255,255,0.05)', padding: '60px', borderRadius: '50%', border: `1px solid ${COLORS.darkBorder}`, backdropFilter: 'blur(10px)', textAlign: 'center', width: '280px', height: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
               <div style={{ fontSize: '80px', fontWeight: 900, color: COLORS.accentCyan, lineHeight: 1, marginBottom: '8px' }}>12</div>
               <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase' }}>MAX FOUNDERS PER COHORT</div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 5. REAL SUPPORT TO BUILD --- */}
      <section style={{ padding: '100px 24px', backgroundColor: COLORS.bgBase, textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>Real Support to Build, Not Just Advice</h2>
          <p style={{ color: COLORS.textMuted, marginBottom: '60px', fontSize: '16px' }}>We provide the tangible resources you need to build and scale your product.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { icon: <PenTool size={28}/>, title: "Design Support", desc: "We help you move from wireframes to premium UI that attracts users and investors." },
              { icon: <Code2 size={28}/>, title: "Eng Audits", desc: "Senior engineers review your stack to ensure your MVP can actually scale when needed." },
              { icon: <Banknote size={28}/>, title: "Pre-Seed Prep", desc: "We refine your narrative and connect you to our network of angel investors." },
              { icon: <Network size={28}/>, title: "Network Access", desc: "Direct line to founders who have raised to Series B and beyond." }
            ].map((item, i) => (
              <div key={i} className="bento-card" style={{ backgroundColor: COLORS.bgLight, padding: '32px 24px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, textAlign: 'left' }}>
                <div style={{ color: COLORS.primaryBlue, marginBottom: '20px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. 6-STEP JOURNEY WITH INTERACTIVE HOVER STATES --- */}
      <section id="process" style={{ padding: '0 24px 100px', backgroundColor: COLORS.bgBase, textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '60px', letterSpacing: '-0.02em' }}>From Idea to Startup: The 6-Step Journey</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
            {[
              { num: "01", title: "Stress Validation", desc: "We test your idea apart to find the single core value proposition that survives." },
              { num: "02", title: "Rapid Prototyping", desc: "Building the 'minimum' version, testing with real users within 14 days." },
              { num: "03", title: "Architectural Blueprint", desc: "Defining the tech-stack and product roadmap for the next 6 months." }
            ].map((step, i) => {
              const isDark = hoveredStep === step.num;
              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredStep(step.num)}
                  className="bento-card"
                  style={{ 
                    backgroundColor: isDark ? '#000' : COLORS.bgBase, 
                    color: isDark ? '#FFF' : COLORS.textBlack, 
                    padding: '40px', 
                    borderRadius: '24px', 
                    border: `1px solid ${isDark ? COLORS.darkBorder : COLORS.border}`, 
                    textAlign: 'left'
                  }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: isDark ? COLORS.successGreen : COLORS.primaryBlue, letterSpacing: '0.1em', marginBottom: '16px', transition: 'color 0.3s ease' }}>STEP {step.num}</div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{step.title}</h4>
                  <p style={{ fontSize: '14px', color: isDark ? '#94A3B8' : COLORS.textMuted, lineHeight: 1.6, transition: 'color 0.3s ease' }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1.8fr', gap: '24px' }}>
            {[
              { num: "04", title: "User Acquisition Engine", desc: "Designing the first growth loops to get your first 100 paying customers or engaged users." },
              { num: "05 & 06", title: "Refinement & Funding Readiness", desc: "Polishing the product and preparing the pitch for our internal investment committee and external angels." }
            ].map((step, i) => {
              const isDark = hoveredStep === step.num;
              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredStep(step.num)}
                  className="bento-card"
                  style={{ 
                    backgroundColor: isDark ? '#000' : COLORS.bgBase, 
                    color: isDark ? '#FFF' : COLORS.textBlack, 
                    padding: '40px', 
                    borderRadius: '24px', 
                    border: `1px solid ${isDark ? COLORS.darkBorder : COLORS.border}`, 
                    textAlign: 'left', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start'
                  }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: isDark ? COLORS.successGreen : COLORS.primaryBlue, letterSpacing: '0.1em', marginBottom: '16px', transition: 'color 0.3s ease' }}>STEP {step.num}</div>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: isDark ? '#94A3B8' : COLORS.textMuted, lineHeight: 1.6, transition: 'color 0.3s ease' }}>{step.desc}</p>
                  </div>
                  {i === 1 && <div style={{ flexShrink: 0, marginLeft: '16px' }}><Rocket size={24} color={isDark ? COLORS.successGreen : COLORS.primaryBlue} style={{ transition: 'color 0.3s ease' }} /></div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 7. WHAT WE EXPECT (Grey Box) --- */}
      <section id="model" style={{ padding: '0 24px 100px', backgroundColor: COLORS.bgBase }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: COLORS.bgGrey, borderRadius: '32px', padding: isMobile ? '40px 24px' : '80px', position: 'relative', overflow: 'hidden' }}>
          <Quote size={200} color="#E2E8F0" style={{ position: 'absolute', top: '-20px', right: '20px', opacity: 0.5, pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '48px', letterSpacing: '-0.02em', color: COLORS.textBlack }}>What We Expect From You</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Absolute Ownership</h4>
                <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.6 }}>We aren't your bosses. We are your partners. You drive the car, we help you navigate and fix the engine.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Relentless Consistency</h4>
                <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.6 }}>Starting a company is a marathon of sprints. We expect consistent progress week over week.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Ego-Free Feedback</h4>
                <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.6 }}>We will be blunt. We don't have time for sugar-coating. You must be able to iterate based on data and harsh truths.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. START BEFORE YOU GRADUATE (SPARK / GRID BACKGROUND) --- */}
      <section style={{ padding: '120px 24px', backgroundColor: COLORS.bgLight, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        
        {/* Exact Spark / Perspective Grid Background */}
        <div className="spark-bg-wrapper">
          <div className="perspective-grid"></div>
          <div className="radiating-lines"></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(248,250,252,0.9) 0%, transparent 60%)', zIndex: 1 }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '36px' : '48px', fontWeight: 900, color: COLORS.textBlack, marginBottom: '24px', letterSpacing: '-0.03em' }}>Start Before You Graduate</h2>
          <p style={{ fontSize: '18px', color: COLORS.textMuted, marginBottom: '80px', lineHeight: 1.6 }}>
            The lowest risk time in your life is right now. You have the energy, the freedom, and now—the Studio.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '40px' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: COLORS.textBlack, marginBottom: '8px' }}>94%</div>
              <div style={{ fontSize: '13px', color: COLORS.textMuted, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>STUDENT SUCCESS RATE</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: COLORS.textBlack, marginBottom: '8px' }}>15+</div>
              <div style={{ fontSize: '13px', color: COLORS.textMuted, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>VENTURES LAUNCHED</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: COLORS.textBlack, marginBottom: '8px' }}>$2.4M</div>
              <div style={{ fontSize: '13px', color: COLORS.textMuted, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>RAISED BY ALUMNI</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. READY TO BUILD CTA --- */}
      <section id="apply" style={{ padding: '80px 24px', backgroundColor: COLORS.bgLight }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(180deg, #001E60 0%, #0052FF 100%)', borderRadius: '32px', padding: isMobile ? '60px 24px' : '80px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,82,255,0.3)' }}>
          <h2 style={{ fontSize: isMobile ? '36px' : '48px', fontWeight: 900, color: '#FFF', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Ready to Build Your Startup?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '48px', maxWidth: '600px', marginInline: 'auto', lineHeight: 1.6 }}>
            The application takes less than 5 minutes. Take the leap and start your journey today.
          </p>
          <button style={{ backgroundColor: '#FFF', color: COLORS.primaryBlue, padding: '18px 48px', borderRadius: '100px', fontWeight: 800, border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} className="bento-card">
            Start Application
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ backgroundColor: COLORS.bgDark, padding: '40px 24px', color: '#94A3B8', fontSize: '13px', borderTop: `1px solid ${COLORS.darkBorder}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '16px', color: '#FFF' }}>
             <div style={{ width: '20px', height: '20px', backgroundColor: COLORS.primaryBlue, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#FFF', borderRadius: '2px' }}></div>
             </div>
             Crestcode
          </div>
          <div style={{ display: 'flex', gap: '24px', fontWeight: 500 }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFF'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>Terms of Service</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFF'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFF'} onMouseOut={(e) => e.currentTarget.style.color = '#94A3B8'}>Contact Us</span>
          </div>
          <div>© 2024 Crestcode. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}