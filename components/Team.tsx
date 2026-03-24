"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Row, Col, Typography } from 'antd';
import { useAdmin } from '@/components/admin/context';
import EditableText from '@/components/admin/editableText';
import { 
  ChevronDown, 
  Zap, 
  Users, 
  Award, 
  Target, 
  Sparkles, 
  Wallet, 
  ArrowRight,
  Stethoscope,
  GraduationCap,
  Store,
  Factory,
  Briefcase,
  Network,
  Truck,
  HardHat,
  User,
  Lightbulb,
  Eye,
  Heart,
  Coffee,
} from "lucide-react";

const { Title, Paragraph } = Typography;

// --- ICON MAPPING FOR DYNAMIC RENDERING ---
const iconMap = {
  Target: Target,
  Zap: Zap,
  Users: Users,
  Award: Award,
  Sparkles: Sparkles,
  Wallet: Wallet,
  Stethoscope: Stethoscope,
  GraduationCap: GraduationCap,
  Store: Store,
  Factory: Factory,
  Briefcase: Briefcase,
  Network: Network,
  Truck: Truck,
  HardHat: HardHat,
  User: User,
  Lightbulb: Lightbulb,
  Eye: Eye,
  Heart: Heart,
  Coffee: Coffee,
};

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  heroBg: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',
  bgBase: '#F3F5F9',
  primary: '#4F46E5',
  primaryBlue: '#2563EB',
  textBlack: '#020617',
  textMain: '#0F172A',
  textMuted: '#64748B',
  white: '#FFFFFF',
  border: '#E2E8F0',
  sectionBg: '#F8FAFC',
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function AboutPage() {
  const { config, saveConfigToServer } = useAdmin();
  const PAGE_DATA = config?.team?.TEAM_CONTENT;
  const INDUSTRIES_CONTENT = config?.team?.TEAM_CONTENT?.IndustriesSection;

  // Debug: Track when data loads/unloads
  console.log('Config updated:', !!config);
  console.log('PAGE_DATA updated:', !!PAGE_DATA);
  console.log('INDUSTRIES_CONTENT updated:', !!INDUSTRIES_CONTENT);
  console.log('Industries items count:', INDUSTRIES_CONTENT?.items?.length || 0);

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleSave = () => saveConfigToServer();

  if (!PAGE_DATA) {
    console.log('PAGE_DATA is null, returning null');
    return null;
  }

  return (
    <div style={{ backgroundColor: COLORS.bgBase, fontFamily: FONT_PRIMARY, minHeight: '100vh' }}>
      
      {/* 1. HERO SECTION */}
      <section
        style={{
          minHeight: 'clamp(40vh, 50vh, 60vh)',
          background: COLORS.heroBg,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(20px, 5vw, 40px)',
          paddingTop: 'clamp(80px, 15vw, 120px)',
        }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(${COLORS.primary}10 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to bottom, black, transparent)',
            }}
          />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ 
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', 
              fontWeight: 800, 
              color: COLORS.textBlack, 
              lineHeight: 1.1,
              letterSpacing: '-0.04em', 
              marginBottom: 'clamp(16px, 4vw, 24px)' 
            }}>
              <EditableText value={PAGE_DATA.hero.title} onSave={handleSave} configPath="team.TEAM_CONTENT.hero.title">
                {PAGE_DATA.hero.title.split(' ').map((word: string, index: number) => (
                  <span key={index} style={{ color: word.toLowerCase() === 'about' ? '#4F46E5' : 'inherit' }}>
                    {word}{' '}
                  </span>
                ))}
              </EditableText>
            </h1>

            <p style={{ 
              fontSize: 'clamp(17px, 3vw, 20px)', 
              color: COLORS.textMuted, 
              fontWeight: 500, 
              lineHeight: 1.6, 
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <EditableText value={PAGE_DATA.hero.description} onSave={handleSave} configPath="team.TEAM_CONTENT.hero.description" multiline={true}>
                {PAGE_DATA.hero.description}
              </EditableText>
            </p>
          </motion.div>
        </div>
      </section>

      {/* PREDICTABLE ENGINEERING SECTION */}
      <section
        style={{
          padding: '40px 16px',
          backgroundColor: '#F8FAFC',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ 
              fontSize: 'clamp(1.4rem, 3vw, 2rem)', 
              fontWeight: 800, 
              color: COLORS.textBlack, 
              lineHeight: 1.1,
              letterSpacing: '-0.04em', 
              marginBottom: 'clamp(12px, 3vw, 20px)' 
            }}>
              Predictable Engineering at Scale
            </h2>
            <p style={{ 
              fontSize: 'clamp(14px, 2.5vw, 17px)', 
              color: COLORS.textMuted, 
              fontWeight: 500, 
              lineHeight: 1.5, 
              maxWidth: '600px',
              margin: '0 auto 30px'
            }}>
              Enterprise-Grade Architecture, Dedicated Build Teams, and Zero-Noise Delivery all working in perfect sync.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            style={{ 
              width: '100%', 
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <img src="/engineer.png" 
              alt="Engineering Process" 
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px', marginTop: '60px' }}>
        
        {/* CULTURE & ACCORDION */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '50px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>
              <EditableText value={PAGE_DATA.culture.title} onSave={handleSave} configPath="team.TEAM_CONTENT.culture.title">{PAGE_DATA.culture.title}</EditableText>
            </h2>
            <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '24px' }}>
              <EditableText value={PAGE_DATA.culture.description} onSave={handleSave} configPath="team.TEAM_CONTENT.culture.description">{PAGE_DATA.culture.description}</EditableText>
            </p>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${COLORS.border}` }}>
              {PAGE_DATA.culture.accordion.map((item: any, i: number) => (
                <div key={i} style={{ borderBottom: i === PAGE_DATA.culture.accordion.length -1 ? 'none' : `1px solid ${COLORS.border}`, background: COLORS.white }}>
                  <button onClick={() => setOpenAccordion(openAccordion === i ? null : i)} style={{ width: '100%', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', border: 'none', background: 'none' }}>
                    <span style={{ fontWeight: 700, fontSize: '15px', color: COLORS.textBlack }}>
                       <EditableText value={item.title} onSave={handleSave} configPath={`team.TEAM_CONTENT.culture.accordion.${i}.title`}>{item.title}</EditableText>
                    </span>
                    <ChevronDown size={18} style={{ transform: openAccordion === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                  </button>
                  <AnimatePresence>
                    {openAccordion === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                        <p style={{ padding: '0 20px 16px', fontSize: '14px', color: COLORS.textMuted, margin: 0 }}>
                          <EditableText value={item.description} onSave={handleSave} configPath={`team.TEAM_CONTENT.culture.accordion.${i}.description`} multiline={true}>{item.description}</EditableText>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            src={PAGE_DATA.culture.image} 
            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: '400px', objectFit: 'cover' }} 
          />
        </section>

        {/* TEAM MEMBERS */}
        <section style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, margin: 0 }}>
              <EditableText value={PAGE_DATA.members.title} onSave={handleSave} configPath="team.TEAM_CONTENT.members.title">{PAGE_DATA.members.title}</EditableText>
            </h2>
            <Link href={PAGE_DATA.members.ctaHref} style={{ color: COLORS.primary, fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <EditableText value={PAGE_DATA.members.ctaLabel} onSave={handleSave} configPath="team.TEAM_CONTENT.members.ctaLabel">{PAGE_DATA.members.ctaLabel}</EditableText> <ArrowRight size={16}/>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
            {PAGE_DATA.members.individual.map((member: any, i: number) => (
              <motion.div key={i} whileHover={{ y: -5 }} style={{ background: COLORS.white, padding: '24px', borderRadius: '24px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
                <img src={member.image} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: `2px solid ${COLORS.primary}` }} alt={member.name} />
                <h4 style={{ margin: '0 0 4px', fontSize: '17px', fontWeight: 800 }}>
                  <EditableText value={member.name} onSave={handleSave} configPath={`team.TEAM_CONTENT.members.individual.${i}.name`}>{member.name}</EditableText>
                </h4>
                <div style={{ fontSize: '12px', fontWeight: 700, color: COLORS.primary, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  <span style={{ cursor: 'pointer' }}>
                    <EditableText value={member.role} onSave={handleSave} configPath={`team.TEAM_CONTENT.members.individual.${i}.role`}>{member.role}</EditableText>
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, margin: '0 0 8px', lineHeight: 1.5 }}>
                  <EditableText value={member.description} onSave={handleSave} configPath={`team.TEAM_CONTENT.members.individual.${i}.description`}>{member.description}</EditableText>
                </p>
                <p style={{ fontSize: '12px', color: COLORS.textMuted, opacity: 0.7 }}>
                  <EditableText value={member.education} onSave={handleSave} configPath={`team.TEAM_CONTENT.members.individual.${i}.education`}>{member.education}</EditableText>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COPILOT SECTION */}
        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.03em', marginBottom: '16px' }}>
              <EditableText value={PAGE_DATA.copilot.title} onSave={handleSave} configPath="team.TEAM_CONTENT.copilot.title">
                {PAGE_DATA.copilot.title}
              </EditableText>
            </h2>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: COLORS.textMuted, fontWeight: 500, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 30px' }}>
              <EditableText value={PAGE_DATA.copilot.subtitle} onSave={handleSave} configPath="team.TEAM_CONTENT.copilot.subtitle">
                {PAGE_DATA.copilot.subtitle}
              </EditableText>
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
              {PAGE_DATA.copilot.features.map((feature: any, i: number) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Target;
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.1 }}
                    style={{ 
                      padding: '20px 16px', 
                      background: COLORS.white, 
                      borderRadius: '16px', 
                      border: `1px solid ${COLORS.border}`,
                      textAlign: 'center'
                    }}
                  >
                    <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '8px', color: COLORS.textBlack, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <IconComponent size={20} style={{ color: COLORS.primary }} />
                      <EditableText value={feature.title} onSave={handleSave} configPath={`team.TEAM_CONTENT.copilot.features.${i}.title`}>
                        {feature.title}
                      </EditableText>
                    </h3>
                    <p style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>
                      <EditableText value={feature.description} onSave={handleSave} configPath={`team.TEAM_CONTENT.copilot.features.${i}.description`}>
                        {feature.description}
                      </EditableText>
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section style={{ padding: '40px 0', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title level={2} style={{ fontFamily: FONT_PRIMARY, fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: COLORS.textMain, marginBottom: '16px' }}>
              <span style={{ color: COLORS.primaryBlue }}>
                <EditableText value={INDUSTRIES_CONTENT?.header?.highlight || 'Industries'} onSave={handleSave} configPath="team.TEAM_CONTENT.IndustriesSection.header.highlight">
                  {INDUSTRIES_CONTENT?.header?.highlight || 'Industries'}
                </EditableText>
              </span>
              {" "}
              <EditableText value={INDUSTRIES_CONTENT?.header?.normalText || 'we serve'} onSave={handleSave} configPath="team.TEAM_CONTENT.IndustriesSection.header.normalText">
                {INDUSTRIES_CONTENT?.header?.normalText || 'we serve'}
              </EditableText>
            </Title>
          </div>

          <Row gutter={[24, 32]}>
            {(INDUSTRIES_CONTENT?.items || []).map((item: any, index: number) => {
              const IconComp = iconMap[item.iconName as keyof typeof iconMap] || Target;
              return (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ height: '100%' }}>
                    <div style={{ color: COLORS.primaryBlue, marginBottom: '20px', display: 'inline-block' }}>
                      <IconComp size={28} />
                    </div>
                    <Title level={4} style={{ fontFamily: FONT_PRIMARY, fontWeight: 800, fontSize: '20px', color: COLORS.textMain, marginBottom: '12px' }}>
                      <EditableText value={item.title} onSave={handleSave} configPath={`team.TEAM_CONTENT.IndustriesSection.items.${index}.title`}>
                        {item.title}
                      </EditableText>
                    </Title>
                    <Paragraph style={{ fontFamily: FONT_PRIMARY, fontSize: '15px', lineHeight: '1.7', color: COLORS.textMuted, margin: 0 }}>
                      <EditableText value={item.desc} onSave={handleSave} configPath={`team.TEAM_CONTENT.IndustriesSection.items.${index}.desc`}>
                        {item.desc}
                      </EditableText>
                    </Paragraph>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </section>

        {/* CORE VALUES SECTION */}
        <section style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800, color: COLORS.textBlack, letterSpacing: '-0.03em', marginBottom: '40px' }}>
            <EditableText value={PAGE_DATA.values.title} onSave={handleSave} configPath="team.TEAM_CONTENT.values.title">
              {PAGE_DATA.values.title}
            </EditableText>
          </h2>
        </section>

        {/* CORE VALUES - TOP 3 */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          {PAGE_DATA.values.items.slice(0, 3).map((val: any, i: number) => {
            const IconComponent = iconMap[val.icon as keyof typeof iconMap] || Target;
            return (
              <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', border: `1px solid ${COLORS.border}`, borderRadius: '20px' }}>
                <div style={{ color: COLORS.primary, marginBottom: '12px' }}><IconComponent size={24}/></div>
                <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '6px' }}>
                  <EditableText value={val.title} onSave={handleSave} configPath={`team.TEAM_CONTENT.values.items.${i}.title`}>{val.title}</EditableText>
                </div>
                <div style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.5 }}>
                  <EditableText value={val.description} onSave={handleSave} configPath={`team.TEAM_CONTENT.values.items.${i}.description`}>{val.description}</EditableText>
                </div>
              </div>
            );
          })}
        </section>

        {/* CORE VALUES - BOTTOM 3 */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {PAGE_DATA.values.items.slice(3, 6).map((val: any, i: number) => {
            const IconComponent = iconMap[val.icon as keyof typeof iconMap] || Target;
            return (
              <div key={i + 3} style={{ padding: '24px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', border: `1px solid ${COLORS.border}`, borderRadius: '20px' }}>
                <div style={{ color: COLORS.primary, marginBottom: '12px' }}><IconComponent size={24}/></div>
                <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '6px' }}>
                  <EditableText value={val.title} onSave={handleSave} configPath={`team.TEAM_CONTENT.values.items.${i + 3}.title`}>{val.title}</EditableText>
                </div>
                <div style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: 1.5 }}>
                  <EditableText value={val.description} onSave={handleSave} configPath={`team.TEAM_CONTENT.values.items.${i + 3}.description`}>{val.description}</EditableText>
                </div>
              </div>
            );
          })}
        </section>

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}