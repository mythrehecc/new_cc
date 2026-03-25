'use client';

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Shield, Zap, Layers, TrendingUp, 
  PenTool, BarChart, ShieldPlus, Lock, ShieldAlert, 
  Target, UserCheck, Maximize, Search, ClipboardCheck, 
  Layout, Code, Rocket, Gauge, SearchCode, UserPlus, 
  Cloud, Stethoscope, Briefcase, Network, Bot
} from 'lucide-react';
import { useContactForm } from '../../components/ContactFormContext';

// Exact colors from the provided HTML file
const COLORS = {
  primary: '#0b50da',
  bgLight: '#f5f6f8',
  bgWhite: '#ffffff',
  textBlack: '#0f172a',
  textMuted: '#64748b',
  cardBorder: '#e2e8f0',
  darkSection: '#101622',
  lightBlueBg: 'rgba(11, 80, 218, 0.1)',
};

const FONT_FAMILY = "'Inter', sans-serif";

export default function ProductEngineeringPage() {
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useContactForm();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.bgLight, fontFamily: FONT_FAMILY, color: COLORS.textBlack, overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        
        .animate-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .hover-card { transition: all 0.3s ease; border: 1px solid transparent; }
        .hover-card:hover { border-color: rgba(11, 80, 218, 0.3); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); transform: translateY(-4px); }
        .hover-card:hover .icon-box { background-color: ${COLORS.primary}; color: white; }
        
        .btn-primary { transition: all 0.2s; }
        .btn-primary:hover { box-shadow: 0 10px 15px -3px rgba(11, 80, 218, 0.3); transform: translateY(-2px); }
        
        .btn-secondary { transition: all 0.2s; }
        .btn-secondary:hover { background-color: #f8fafc; transform: translateY(-2px); }
      `}</style>

      {/* --- 1. HERO SECTION (Light Grey Bg, Generous Top Spacing) --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: isMobile ? '120px 24px 60px' : '160px 24px 80px', position: 'relative' }}>
        {/* Decorative Blurs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', backgroundColor: 'rgba(11, 80, 218, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', backgroundColor: 'rgba(11, 80, 218, 0.08)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: COLORS.lightBlueBg, border: `1px solid rgba(11, 80, 218, 0.2)`, color: COLORS.primary, padding: '6px 16px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, width: 'fit-content' }}>
              <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                <span className="animate-ping" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: COLORS.primary, opacity: 0.7 }}></span>
                <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLORS.primary }}></span>
              </span>
              Engineering Excellence
            </div>
            
            <h1 style={{ fontSize: isMobile ? '42px' : '64px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', color: COLORS.textBlack, margin: 0 }}>
              Build Digital Products That <span style={{ color: COLORS.primary }}>Scale With Confidence</span>
            </h1>
            
            <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.6, maxWidth: '550px', margin: 0 }}>
              Delivering strategic product engineering, from MVP planning to secure, HIPAA-compliant enterprise platforms.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <button onClick={() => document.getElementById('product-solutions')?.scrollIntoView({behavior:'smooth'})} className="btn-primary" style={{ backgroundColor: COLORS.primary, color: COLORS.bgWhite, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                Explore Product Solutions
              </button>
              <button onClick={openModal} className="btn-secondary" style={{ backgroundColor: COLORS.bgWhite, color: COLORS.textBlack, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: `1px solid ${COLORS.cardBorder}`, cursor: 'pointer', fontSize: '16px' }}>
                Book a Product Consultation
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
              {[
                { icon: <CheckCircle2 size={20} color={COLORS.primary}/>, text: "Product-first approach" },
                { icon: <Shield size={20} color={COLORS.primary}/>, text: "Security-led engineering" },
                { icon: <Zap size={20} color={COLORS.primary}/>, text: "Faster time-to-market" },
                { icon: <Layers size={20} color={COLORS.primary}/>, text: "Scalable architecture" }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: COLORS.textMuted }}>
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. CORE PRODUCT SOLUTIONS (Alternating Bg: White, Reduced Spacing) --- */}
      <section id="product-solutions" style={{ backgroundColor: COLORS.bgWhite, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: isMobile ? 'center' : 'left', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>Our Core Product Solutions</h2>
            <div style={{ height: '6px', width: '96px', backgroundColor: COLORS.primary, borderRadius: '100px', margin: isMobile ? '0 auto' : '0' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
            {[
              { icon: <PenTool size={32} />, title: "MVP Estimator", desc: "Smart planning tool to define scope, budget, and roadmap. Build exactly what your users need without the bloat.", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=600" },
              { icon: <BarChart size={32} />, title: "Validate Your Idea", desc: "Assess market viability and product-market fit using data-driven analysis and rapid prototyping techniques.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
              { icon: <ShieldPlus size={32} />, title: "HIPAA Compliance", desc: "Secure architecture for healthcare digital products. Ready-to-audit infrastructure that prioritizes patient data safety.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
              { icon: <Lock size={32} />, title: "Data Encryption", desc: "Security-first product protection with enterprise-grade encryption at rest and in transit. Advanced threat protection built in.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600" },
            ].map((card, i) => (
              <div key={i} className="hover-card" style={{ backgroundColor: COLORS.bgLight, padding: '32px', borderRadius: '24px' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <div className="icon-box" style={{ flexShrink: 0, width: '64px', height: '64px', borderRadius: '16px', backgroundColor: COLORS.lightBlueBg, color: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>{card.title}</h3>
                    <p style={{ color: COLORS.textMuted, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                  </div>
                </div>
                <div style={{ overflow: 'hidden', borderRadius: '12px', height: '220px', backgroundColor: '#e2e8f0' }}>
                  <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE CRESTCODE (Alternating Bg: Light) --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ order: isMobile ? 2 : 1 }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: `1px solid ${COLORS.cardBorder}`, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Blueprint" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          <div style={{ order: isMobile ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>Why Businesses Choose Crestcode for Product Delivery</h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {[
                { icon: <Zap />, title: "Faster MVP launch", desc: "Rapid development without technical debt." },
                { icon: <ShieldAlert />, title: "Reduced product risk", desc: "Identify hurdles before they become major costs." },
                { icon: <Target />, title: "Better product-market alignment", desc: "User-centric engineering focused on outcomes." },
                { icon: <UserCheck />, title: "Compliance-ready systems", desc: "Regulatory standards met from the first line of code." },
                { icon: <Shield />, title: "Secure-by-design architecture", desc: "Hardened protection built into every layer." },
                { icon: <Maximize />, title: "Scalable foundations", desc: "Future-proof tech stack designed to grow." }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', padding: '16px', borderRadius: '16px', border: '1px solid transparent', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = COLORS.bgWhite; e.currentTarget.style.borderColor = COLORS.cardBorder; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}>
                  <div style={{ color: COLORS.primary, marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. DELIVERY FRAMEWORK (Blue Background) --- */}
      <section style={{ backgroundColor: COLORS.primary, padding: '100px 24px', color: COLORS.bgWhite }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>From Idea to Launch: Our Delivery Framework</h2>
            <p style={{ fontSize: '18px', opacity: 0.8, margin: 0 }}>A systematic approach to building excellence.</p>
          </div>
          
          <div style={{ position: 'relative' }}>
            {/* Connecting Line */}
            {!isMobile && <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', transform: 'translateY(-50%)' }}></div>}
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', gap: '32px', position: 'relative', zIndex: 10 }}>
              {[
                { num: "1", title: "Discover", desc: "Deep dive into market gaps and user needs.", icon: <Search size={32} opacity={0.4}/> },
                { num: "2", title: "Validate", desc: "Hypothesis testing and rapid prototyping.", icon: <ClipboardCheck size={32} opacity={0.4}/> },
                { num: "3", title: "Scope & Prioritize", desc: "Defining the core value and roadmap.", icon: <Layout size={32} opacity={0.4}/> },
                { num: "4", title: "Build & Secure", desc: "High-fidelity engineering and hardening.", icon: <Code size={32} opacity={0.4}/> },
                { num: "5", title: "Launch & Scale", desc: "Continuous deployment and optimization.", icon: <Rocket size={32} opacity={0.4}/> }
              ].map((step, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: COLORS.bgWhite, color: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, marginBottom: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{step.title}</h4>
                  <p style={{ fontSize: '14px', opacity: 0.8, lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    {step.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. SECURITY & COMPLIANCE (Alternating Bg: White) --- */}
      <section style={{ backgroundColor: COLORS.bgWhite, padding: '80px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>Security and Compliance Are Not Add-ons — They’re Built In</h2>
            <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.6, margin: 0 }}>
              At Crestcode, we treat security as a primary functional requirement. Our architecture follows the principle of least privilege and zero-trust security from day one.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                "HIPAA-compliant storage and processing",
                "Encryption at rest and in transit (AES-256)",
                "RBAC & granular permission systems",
                "Secure-by-design API endpoints",
                "Audit-ready development logs"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: 500, color: COLORS.textBlack }}>
                  <CheckCircle2 size={24} color={COLORS.primary} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Security Gateway UI Card */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-16px', backgroundColor: 'rgba(11, 80, 218, 0.05)', borderRadius: '32px', filter: 'blur(20px)' }}></div>
            <div style={{ position: 'relative', backgroundColor: COLORS.bgWhite, padding: '32px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', border: `1px solid ${COLORS.cardBorder}` }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                  <div style={{ fontWeight: 800 }}>Security Gateway</div>
                  <Lock size={20} color="#22C55E" />
                </div>
                <div style={{ height: '48px', backgroundColor: COLORS.bgLight, borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: '14px', color: COLORS.textMuted }}>Username: admin_root</div>
                <div style={{ height: '48px', backgroundColor: COLORS.bgLight, borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: '14px', color: COLORS.textMuted }}>Password: •••••••••••••••</div>
                <button style={{ height: '56px', backgroundColor: COLORS.primary, borderRadius: '12px', color: COLORS.bgWhite, fontWeight: 800, fontSize: '16px', border: 'none', cursor: 'pointer' }}>Verify MFA Token</button>
                <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600" alt="Code UI" style={{ borderRadius: '12px', opacity: 0.4, height: '120px', objectFit: 'cover', marginTop: '16px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. BUILT FOR OUTCOMES (Alternating Bg: Light) --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Built for Outcomes, Not Just Output</h2>
            <p style={{ color: COLORS.textMuted, fontSize: '18px', margin: 0 }}>We measure success by your product's performance in the real world.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: <Gauge size={24}/>, title: "Faster time to market", desc: "Accelerated cycles without compromises." },
              { icon: <SearchCode size={24}/>, title: "Lower uncertainty", desc: "Validated engineering roadmap." },
              { icon: <UserPlus size={24}/>, title: "Better user adoption", desc: "UX engineered for high retention." },
              { icon: <TrendingUp size={24}/>, title: "Long-term scalability", desc: "Architecture that grows with you." }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: COLORS.bgWhite, padding: '32px', borderRadius: '24px', border: `1px solid ${COLORS.cardBorder}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: COLORS.lightBlueBg, color: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '48px', borderRadius: '24px', overflow: 'hidden', border: `1px solid ${COLORS.cardBorder}` }}>
           
          </div>
        </div>
      </section>

      {/* --- 7. INDUSTRY FIT (Alternating Bg: White) --- */}
      <section style={{ backgroundColor: COLORS.bgWhite, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>Solutions That Adapt Across Modern Digital Businesses</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: <Rocket size={28}/>, title: "Startups" },
              { icon: <Cloud size={28}/>, title: "SaaS Platforms" },
              { icon: <Stethoscope size={28}/>, title: "Health-tech" },
              { icon: <Briefcase size={28}/>, title: "Enterprise Tools" },
              { icon: <Network size={28}/>, title: "Client Portals" },
              { icon: <Bot size={28}/>, title: "Automation Products" }
            ].map((item, i) => (
              <div key={i} className="hover-card" style={{ backgroundColor: COLORS.bgLight, padding: '32px', borderRadius: '24px', border: `1px solid ${COLORS.cardBorder}` }}>
                <div style={{ color: COLORS.primary, marginBottom: '16px', opacity: 0.6 }}>{item.icon}</div>
                <h5 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>{item.title}</h5>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
            <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" alt="Tiles" style={{ borderRadius: '24px', height: '200px', width: '100%', objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="API" style={{ borderRadius: '24px', height: '200px', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* --- 8. CONTACT FORM --- */}
      <section id="product-form" style={{ backgroundColor: COLORS.bgWhite, padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Start Your Product Journey</h2>
            <p style={{ color: COLORS.textMuted, fontSize: '18px', margin: 0 }}>Let's discuss how we can help bring your vision to life.</p>
          </div>
          
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
            <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" alt="Tiles" style={{ borderRadius: '24px', height: '200px', width: '100%', objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="API" style={{ borderRadius: '24px', height: '200px', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </div>
  );
}