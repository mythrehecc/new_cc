'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAdmin } from './admin/context';
import { submitCareerForm } from '@/services/api';
import EditableText from '@/components/admin/editableText';
import { 
  Briefcase, Clock, UploadCloud, 
  ShieldCheck, GraduationCap, Users, 
  Rocket, BookOpen, Target, Heart, Monitor, Layers, Globe, Mail, Share2
} from "lucide-react";

const COLORS = {
  primary: '#0b50da',        
  primaryHover: '#0a42b5',
  bgLight: '#f5f6f8',        
  white: '#ffffff',
  textBlack: '#0f172a',      
  textMuted: '#64748b',      
  textDarker: '#475569',     
  cardBorder: '#e2e8f0',     
  darkSection: '#101622',    
  lightBlueBg: 'rgba(11, 80, 218, 0.1)', 
};

const FONT_FAMILY = "'Inter', sans-serif";

export default function CareersPage() {
  const { config, saveConfigToServer } = useAdmin();
  const PAGE_DATA = config?.careers?.PAGE_DATA;
  
  const [fileName, setFileName] = useState("No file chosen");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 864);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSave = () => saveConfigToServer();
  if (!PAGE_DATA) return null;

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
      setFileName("No file chosen");
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .hover-scale:hover { transform: scale(1.05); }
      `}</style>

      {/* --- 1. HERO SECTION --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: isMobile ? '80px 24px' : '140px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: COLORS.lightBlueBg, color: COLORS.primary, padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
            <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
              <span className="animate-ping" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: COLORS.primary, opacity: 0.7 }}></span>
              <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLORS.primary }}></span>
            </span>
            <EditableText value={PAGE_DATA.hero.badge} onSave={handleSave} configPath="careers.PAGE_DATA.hero.badge">{PAGE_DATA.hero.badge}</EditableText>
          </div>
          
          <h1 style={{ fontSize: isMobile ? '40px' : '64px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: COLORS.textBlack }}>
            <EditableText value={PAGE_DATA.hero.titleMain} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleMain">{PAGE_DATA.hero.titleMain}</EditableText>
            <br />
            <span style={{ color: COLORS.primary }}>
              <EditableText value={PAGE_DATA.hero.titleAccent} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleAccent">{PAGE_DATA.hero.titleAccent}</EditableText>
            </span>
            <br />
            <EditableText value={PAGE_DATA.hero.titleEnd} onSave={handleSave} configPath="careers.PAGE_DATA.hero.titleEnd">{PAGE_DATA.hero.titleEnd}</EditableText>
          </h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textDarker, lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px' }}>
            <EditableText value={PAGE_DATA.hero.description} onSave={handleSave} configPath="careers.PAGE_DATA.hero.description" multiline>{PAGE_DATA.hero.description}</EditableText>
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => document.getElementById('roles')?.scrollIntoView({behavior:'smooth'})} style={{ backgroundColor: COLORS.primary, color: COLORS.white, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 10px 15px -3px rgba(11, 80, 218, 0.25)', transition: 'all 0.2s' }}>
              View Open Roles
            </button>
            <button style={{ backgroundColor: COLORS.white, color: COLORS.textBlack, padding: '16px 32px', borderRadius: '12px', fontWeight: 700, border: `1px solid ${COLORS.cardBorder}`, cursor: 'pointer', fontSize: '16px', transition: 'all 0.2s' }}>
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* --- 2. WHY JOIN --- */}
      <section style={{ backgroundColor: COLORS.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, marginBottom: '12px' }}>
              <EditableText value={PAGE_DATA.advantages.title} onSave={handleSave} configPath="careers.PAGE_DATA.advantages.title">{PAGE_DATA.advantages.title}</EditableText>
            </h2>
            <p style={{ color: COLORS.textDarker, fontSize: '16px' }}>We provide the environment and resources you need to do the best work of your career.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '250px'}, 1fr))`, gap: '24px' }}>
            {[
              { icon: <Rocket size={28}/>, title: "Real Product Experience", desc: "Work on live products that impact thousands of users daily from day one." },
              { icon: <GraduationCap size={28}/>, title: "Growth & Learning", desc: "Structured mentorship and generous education stipends for your career path." },
              { icon: <Users size={28}/>, title: "Collaborative Culture", desc: "No silos. We work across teams to solve complex problems together." },
              { icon: <Target size={28}/>, title: "Ownership & Impact", desc: "We trust you with autonomy. Your decisions shape the future of our products." },
            ].map((item, i) => (
              <div key={i} className="group hover-scale" style={{ backgroundColor: COLORS.bgLight, padding: '32px', borderRadius: '16px', border: `1px solid ${COLORS.cardBorder}`, transition: 'all 0.3s' }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: COLORS.lightBlueBg, color: COLORS.primary, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                  <EditableText value={PAGE_DATA.advantages.items[i]?.title || item.title} onSave={handleSave} configPath={`careers.PAGE_DATA.advantages.items.${i}.title`}>{PAGE_DATA.advantages.items[i]?.title || item.title}</EditableText>
                </h3>
                <p style={{ fontSize: '14px', color: COLORS.textDarker, lineHeight: 1.6 }}>
                  <EditableText value={PAGE_DATA.advantages.items[i]?.text || item.desc} onSave={handleSave} configPath={`careers.PAGE_DATA.advantages.items.${i}.text`} multiline>{PAGE_DATA.advantages.items[i]?.text || item.desc}</EditableText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. LIFE AT CRESTCODE (Exact Image Grid Layout) --- */}
      <section style={{ backgroundColor: COLORS.bgLight, padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', backgroundColor: COLORS.primary, borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '48px', padding: isMobile ? '40px 24px' : '80px', alignItems: 'center' }}>
            <div style={{ color: COLORS.white }}>
              <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, marginBottom: '32px' }}>Life at Crestcode</h2>
              <div style={{ fontSize: '18px', lineHeight: 1.7, opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p>Our work culture is built on a foundation of <strong>radical trust</strong> and <strong>empowerment</strong>. We don't believe in micromanagement; we believe in hiring exceptional people and giving them the space to excel.</p>
                <p>Whether you're working remotely or from our innovation hubs, you'll find a community that celebrates diversity of thought, celebrates wins together, and supports each other during challenges.</p>
              </div>
            </div>
            
            {/* STAGGERED IMAGES AS IN image_98cdfd.png */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ height: '192px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.1)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')" }}></div>
              <div style={{ height: '192px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.1)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998')", marginTop: '32px' }}></div>
              <div style={{ height: '192px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.1)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72')", marginTop: '-32px' }}></div>
              <div style={{ height: '192px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.1)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. BENEFITS & PERKS --- */}
      <section style={{ backgroundColor: COLORS.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, marginBottom: '12px' }}>Benefits & Perks</h2>
            <p style={{ color: COLORS.textDarker, fontSize: '16px' }}>Taking care of you so you can take care of business.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '100%' : '350px'}, 1fr))`, gap: '40px 32px' }}>
            {[
              { icon: <BookOpen size={24}/>, title: "Continuous Learning", desc: "Monthly budget for books, courses, and conferences to sharpen your skills." },
              { icon: <Briefcase size={24}/>, title: "Flexible Work", desc: "Work from anywhere. We value results over desk time and office hours." },
              { icon: <Target size={24}/>, title: "Exposure to Product", desc: "Directly collaborate with founders and product owners on vision and strategy." },
              { icon: <Heart size={24}/>, title: "Health & Wellness", desc: "Premium health insurance and monthly wellness allowance for gym/mental health." },
              { icon: <Clock size={24}/>, title: "Unlimited PTO", desc: "We trust you to manage your time. Rest is essential for peak performance." },
              { icon: <Monitor size={24}/>, title: "Tech Stipend", desc: "Top-tier hardware and home-office setup budget for all team members." },
            ].map((perk, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', backgroundColor: COLORS.lightBlueBg, color: COLORS.primary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {perk.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{perk.title}</h4>
                  <p style={{ fontSize: '14px', color: COLORS.textDarker, lineHeight: 1.6, margin: 0 }}>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. OPEN POSITIONS --- */}
      <section id="roles" style={{ backgroundColor: COLORS.bgLight, padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: '40px', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, marginBottom: '12px' }}>Open Positions</h2>
              <p style={{ color: COLORS.textDarker, fontSize: '16px' }}>Find the perfect role that matches your expertise.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: "Frontend Developer" },
              { title: "Backend Engineer" },
              { title: "Product Designer" }
            ].map((role, i) => (
              <div key={i} className="group hover-scale" style={{ backgroundColor: COLORS.white, padding: isMobile ? '24px' : '32px', borderRadius: '16px', border: `1px solid ${COLORS.cardBorder}`, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: '24px', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{role.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: COLORS.textMuted }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={16}/> Full-time</span>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('apply')?.scrollIntoView({behavior:'smooth'})}
                  style={{ color: COLORS.primary, backgroundColor: COLORS.lightBlueBg, border: 'none', padding: '12px 24px', borderRadius: '25px', fontWeight: 700, fontSize: '14px', transition: 'all 0.2s', width: isMobile ? '100%' : 'auto' }}
                >
                  View Job Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. APPLICATION FORM --- */}
      <section id="apply" style={{ backgroundColor: COLORS.white, padding: '60px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: COLORS.darkSection, borderRadius: '32px', padding: isMobile ? '40px 24px' : '64px 48px', textAlign: 'center', border: '1px solid #1e293b', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            <EditableText value={PAGE_DATA.formSection.title} onSave={handleSave} configPath="careers.PAGE_DATA.formSection.title">{PAGE_DATA.formSection.title}</EditableText>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            <EditableText value={PAGE_DATA.formSection.description} onSave={handleSave} configPath="careers.PAGE_DATA.formSection.description" multiline>{PAGE_DATA.formSection.description}</EditableText>
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
              <input name="name" type="text" placeholder="Your Name" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white', outline: 'none', fontSize: '14px' }} />
              <input name="email" type="email" placeholder="Email Address" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white', outline: 'none', fontSize: '14px' }} />
            </div>
            
            <div style={{ border: '2px dashed #334155', padding: '24px', borderRadius: '16px', backgroundColor: '#1e293b', cursor: 'pointer', position: 'relative', transition: 'all 0.2s' }}>
              <input 
                type="file" 
                name="resume"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setFileName(file?.name || "No file chosen");
                  setResumeFile(file || null);
                }}
                style={{ opacity: 0, position: 'absolute', inset: 0, cursor: 'pointer' }} 
              />
              <UploadCloud size={28} style={{ color: '#94a3b8', margin: '0 auto 8px' }} />
              <p style={{ fontSize: '14px', color: COLORS.white, fontWeight: 600, margin: 0 }}>{fileName}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px', marginTop: '8px' }}>
              <button type="submit" disabled={isSubmitting} className="hover-scale" style={{ flex: 1, backgroundColor: COLORS.primary, color: COLORS.white, padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 10px 15px -3px rgba(11, 80, 218, 0.3)', transition: 'all 0.2s' }}>
                {isSubmitting ? 'Processing...' : PAGE_DATA.formSection.labels.submit}
              </button>
              <button type="button" className="hover-scale" style={{ flex: 1, backgroundColor: 'transparent', color: COLORS.white, padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', border: '1px solid #334155', cursor: 'pointer', transition: 'all 0.2s' }}>
                Follow our Journey
              </button>
            </div>
            
            {status && (
              <p style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600, color: status.type === 'success' ? '#4ade80' : '#f87171' }}>{status.msg}</p>
            )}
          </form>
        </div>
      </section>

      {/* --- 7. FOOTER --- */}
      <footer style={{ backgroundColor: COLORS.bgLight, padding: '48px 24px', borderTop: `1px solid ${COLORS.cardBorder}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: COLORS.primary, padding: '6px', borderRadius: '6px', color: COLORS.white }}>
              <Layers size={20} />
            </div>
            <span style={{ fontWeight: 700, fontSize: '18px' }}>Crestcode</span>
          </div>
          
          <p style={{ color: COLORS.textMuted, fontSize: '14px', margin: 0, textAlign: 'center' }}>
            © 2024 Crestcode Technologies. All rights reserved. Built with passion for the web.
          </p>
          
          <div style={{ display: 'flex', gap: '24px' }}>
            <Globe size={20} color={COLORS.textMuted} style={{ cursor: 'pointer' }} />
            <Mail size={20} color={COLORS.textMuted} style={{ cursor: 'pointer' }} />
            <Share2 size={20} color={COLORS.textMuted} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </footer>
    </div>
  );
}