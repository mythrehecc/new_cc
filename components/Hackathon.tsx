'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Lightbulb, 
  Cpu,
  Medal,
  Award
} from "lucide-react";
import { useAdmin } from './admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const iconMap = {
  Trophy: Trophy,
  Users: Users,
  Lightbulb: Lightbulb,
  Cpu: Cpu,
  Medal: Medal,
  Award: Award
};

const getIcon = (iconName: string, size: number = 24) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent size={size} /> : null;
};

// --- INDUSTRIAL DESIGN TOKENS ---
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

export default function HackathonResults() {
  const { config, saveConfigToServer } = useAdmin();
  const HACKATHON_DATA = config?.hackathon?.HACKATHON_DATA;

  const handleSave = () => saveConfigToServer();
  
  if (!HACKATHON_DATA) return null;

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. INDUSTRIAL HERO SECTION */}
      <section style={{ 
        padding: '120px 24px 80px', 
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
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
             <span style={{ 
                background: COLORS.white, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', 
                fontWeight: 700, color: COLORS.primary, border: `1px solid ${COLORS.border}`, textTransform: 'uppercase', letterSpacing: '0.05em'
             }}>
                <EditableText
                  value={HACKATHON_DATA.hero.tag}
                  onSave={handleSave}
                  configPath="hackathon.HACKATHON_DATA.hero.tag"
                >
                  {HACKATHON_DATA.hero.tag}
                </EditableText>
             </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.05em', margin: '24px 0' 
          }}>
            <EditableText value={HACKATHON_DATA.hero.title.main} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.hero.title.main">
                {HACKATHON_DATA.hero.title.main}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
                <EditableText value={HACKATHON_DATA.hero.title.highlight} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.hero.title.highlight">
                    {HACKATHON_DATA.hero.title.highlight}
                </EditableText>
            </span>
            {' '}
            <EditableText value={HACKATHON_DATA.hero.title.year} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.hero.title.year">
                {HACKATHON_DATA.hero.title.year}
            </EditableText>
          </motion.h1>
          
          <p style={{ fontSize: '18px', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, marginBottom: '32px' }}>
            <EditableText value={HACKATHON_DATA.hero.description} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.hero.description" multiline={true}>
                {HACKATHON_DATA.hero.description}
            </EditableText>
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1250px', margin: '0 auto', padding: '0 24px 100px' }}>
        
        {/* 2. RESULTS & STATISTICS DASHBOARD */}
        <section style={{ marginBottom: '80px', marginTop: '-40px', position: 'relative', zIndex: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            {/* Registration Stats Card */}
            <div style={{ background: COLORS.white, padding: '32px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', color: COLORS.textMuted, marginBottom: '24px', letterSpacing: '0.1em' }}>Engagement Matrix</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {HACKATHON_DATA.stats.matrix.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: i < 2 ? `1px solid ${COLORS.bgBase}` : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ color: stat.color }}>{getIcon(stat.icon)}</div>
                      <span style={{ fontWeight: 600, fontSize: '15px' }}>
                        <EditableText value={stat.label} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.stats.matrix.${i}.label`}>
                            {stat.label}
                        </EditableText>
                      </span>
                    </div>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: stat.color }}>
                        <EditableText value={stat.value} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.stats.matrix.${i}.value`}>
                            {stat.value}
                        </EditableText>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Status Card */}
            <div style={{ background: COLORS.white, padding: '32px', borderRadius: '24px', color: COLORS.textBlack, boxShadow: '0 30px 60px -20px rgba(79,70,229,0.3)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', color: COLORS.textMuted, marginBottom: '24px', letterSpacing: '0.1em' }}>Outcome Summary</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: COLORS.bgBase, padding: '16px', borderRadius: '12px', borderLeft: '4px solid #F59E0B' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800 }}>
                        <EditableText value={HACKATHON_DATA.stats.summary.totalResponses} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.stats.summary.totalResponses">
                            {HACKATHON_DATA.stats.summary.totalResponses}
                        </EditableText>
                    </div>
                    <div style={{ fontSize: '13px', color: COLORS.textMuted }}>Responses Submitted</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: COLORS.bgBase, padding: '16px', borderRadius: '12px' }}>
                        <div style={{ fontSize: '20px', fontWeight: 800 }}>
                            <EditableText value={HACKATHON_DATA.stats.summary.incomplete} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.stats.summary.incomplete">
                                {HACKATHON_DATA.stats.summary.incomplete}
                            </EditableText>
                        </div>
                        <div style={{ fontSize: '11px', color: COLORS.textMuted }}>Incomplete</div>
                    </div>
                    <div style={{ background: COLORS.bgBase, padding: '16px', borderRadius: '12px' }}>
                        <div style={{ fontSize: '20px', fontWeight: 800 }}>
                            <EditableText value={HACKATHON_DATA.stats.summary.inDiscussion} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.stats.summary.inDiscussion">
                                {HACKATHON_DATA.stats.summary.inDiscussion}
                            </EditableText>
                        </div>
                        <div style={{ fontSize: '11px', color: COLORS.textMuted }}>In Discussion</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. REWARDS SECTION */}
        <section style={{ marginBottom: '80px' }}>
           <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>Recognition & Prizes</h2>
              <div style={{ width: '60px', height: '4px', background: COLORS.primary, margin: '0 auto', borderRadius: '2px' }} />
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
             {HACKATHON_DATA.rewards.map((p, i) => (
               <div key={i} style={{ 
                 background: p.highlighted ? COLORS.white : 'rgba(255,255,255,0.5)',
                 padding: '48px 32px', borderRadius: '24px', textAlign: 'center',
                 border: p.highlighted ? `2px solid ${COLORS.primary}` : `1px solid ${COLORS.border}`,
                 boxShadow: p.highlighted ? '0 20px 40px -10px rgba(79,70,229,0.15)' : 'none'
               }}>
                 <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{getIcon(p.icon)}</div>
                 <h3 style={{ fontWeight: 800, fontSize: '20px', marginBottom: '8px' }}>
                    <EditableText value={p.title} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.rewards.${i}.title`}>
                        {p.title}
                    </EditableText>
                 </h3>
                 <div style={{ fontSize: '28px', fontWeight: 800, color: COLORS.textBlack }}>
                    <EditableText value={p.prize} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.rewards.${i}.prize`}>
                        {p.prize}
                    </EditableText>
                 </div>
                 <p style={{ color: COLORS.textMuted, fontWeight: 600, marginTop: '8px' }}>
                    <EditableText value={p.sub} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.rewards.${i}.sub`}>
                        {p.sub}
                    </EditableText>
                 </p>
               </div>
             ))}
           </div>
        </section>

        {/* 4. TOP IDEATORS (Bento List) */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', marginBottom: '80px' }}>
          <div style={{ background: COLORS.white, padding: '40px', borderRadius: '32px', border: `1px solid ${COLORS.border}` }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px' }}>Top Ideators</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {HACKATHON_DATA.topIdeators.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '16px', background: COLORS.bgBase, borderRadius: '16px' }}>
                    <div style={{ width: '40px', height: '40px', background: COLORS.textBlack, color: COLORS.white, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{item.rank}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '16px' }}>
                        <EditableText value={item.name} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.topIdeators.${i}.name`}>
                            {item.name}
                        </EditableText>
                      </div>
                      <div style={{ fontSize: '13px', color: COLORS.textMuted, fontWeight: 500 }}>
                        <EditableText value={item.project} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.topIdeators.${i}.project`}>
                            {item.project}
                        </EditableText>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          
          <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', minHeight: '400px' }}>
              <img src={HACKATHON_DATA.images.bentoBanner} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <h3 style={{ color: COLORS.white, fontSize: '38px', fontWeight: 800, lineHeight: 1.1, textAlign: 'center' }}>
                    <EditableText value={HACKATHON_DATA.images.bentoText} onSave={handleSave} configPath="hackathon.HACKATHON_DATA.images.bentoText" multiline={true}>
                        {HACKATHON_DATA.images.bentoText}
                    </EditableText>
                </h3>
              </div>
          </div>
        </section>

        {/* 5. EVALUATION CRITERIA */}
        <section style={{ background: COLORS.white, padding: '60px', borderRadius: '32px', border: `1px solid ${COLORS.border}` }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '40px', textAlign: 'center' }}>Scoring Architecture</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                {HACKATHON_DATA.scoring.map((c, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '14px' }}>
                            <EditableText value={c.label} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.scoring.${i}.label`}>
                                {c.label}
                            </EditableText>
                        </span>
                        <span style={{ fontWeight: 800, color: COLORS.primary }}>
                            <EditableText value={c.val.toString()} onSave={handleSave} configPath={`hackathon.HACKATHON_DATA.scoring.${i}.val`}>
                                {c.val}
                            </EditableText>
                            %
                        </span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: COLORS.bgBase, borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${c.val}%` }} transition={{ duration: 1 }} style={{ height: '100%', background: COLORS.primary }} />
                    </div>
                  </div>
                ))}
            </div>
        </section>

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}