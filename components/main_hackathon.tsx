"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users2, 
  Zap,
  ArrowRight,
  Trophy,
  Target,
  Lightbulb,
  Shield,
  Eye,
  Heart,
  Mail,
  MessageCircle,
  BookOpen
} from "lucide-react";

// PROJECT THEME COLORS AND FONT
const COLORS = {
  bgBase: '#F8FAFC',
  bgLight: '#F8FAFC',
  primary: 'hsl(221, 83%, 53%)',
  secondary: 'hsl(210, 40%, 96%)',
  textMain: 'hsl(222, 84%, 4.9%)',
  textMuted: 'hsl(215, 16%, 46.9%)',
  border: 'hsl(214, 32%, 91%)',
  cardBorder: 'hsl(214, 32%, 91%)',
  white: '#FFFFFF',
  darkSection: 'hsl(222, 84%, 4.9%)',
  btnLightBlue: 'hsl(210, 40%, 96%)',
  docklyPurple: 'hsl(262, 83%, 58%)',
  docklyCyan: 'hsl(188, 94%, 43%)',
  docklyEmerald: 'hsl(160, 84%, 39%)',
  docklyOrange: 'hsl(25, 95%, 53%)',
  docklyPink: 'hsl(327, 73%, 57%)',
  docklyYellow: 'hsl(48, 96%, 53%)',
  docklyBlue: 'hsl(217, 91%, 60%)',
  winnerBg: 'hsl(222, 84%, 4.9%)',
  lightBlueBg: 'hsl(210, 40%, 96%)',
  mentionsBg: '#F8FAFC',
  grandWinnerYellow: 'hsl(48, 96%, 53%)'
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

export default function HackathonPage() {
  const highlights = [
    { icon: Lightbulb, title: "Innovation", desc: "Participants explored creative ideas and developed working prototypes." },
    { icon: Users2, title: "Collaboration", desc: "Students worked together in teams to solve challenging problems." },
    { icon: GraduationCap, title: "Learning Experience", desc: "The event provided an opportunity to learn new tools, frameworks, and practices." },
    { icon: Target, title: "Real-World Solutions", desc: "Projects focused on practical solutions using modern technology." }
  ];

  const champions = [
    { 
      team: "Team NeuralSync", 
      place: "2nd Place", 
      project: "AI-powered collaboration tool for remote engineering teams",
      color: COLORS.white,
      icon: "🥈",
      topShadow: "rgba(148, 163, 184, 0.3)", 
      rankColor: COLORS.primary
    },
    { 
      team: "Team SkyNet\nZero", 
      place: "GRAND WINNER", 
      project: "Autonomous drone mesh network for wildfire detection and response",
      color: COLORS.winnerBg,
      isWinner: true,
      icon: "🏆",
      topShadow: "rgba(250, 204, 21, 0.5)", 
      rankColor: COLORS.grandWinnerYellow
    },
    { 
      team: "Team EcoLedger", 
      place: "3rd Place", 
      project: "Blockchain solution for tracking supply chain carbon footprints",
      color: COLORS.white,
      icon: "🥉",
      topShadow: "rgba(249, 115, 22, 0.3)", 
      rankColor: COLORS.primary
    }
  ];

  const mentions = [
    { name: "CyberSentinels", icon: Shield, sub: "Cybersecurity" },
    { name: "VisionaryDAO", icon: Eye, sub: "Web3" },
    { name: "QuickHealth AI", icon: Heart, sub: "HealthTech" }
  ];

  const avatars = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4'
  ];

  return (
    <div style={{ background: COLORS.bgBase, fontFamily: FONT_FAMILY, minHeight: '100vh', color: COLORS.textMain, paddingBottom: '40px', paddingTop: '40px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Hackathon" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          />
        </div>
        <div>
          <span style={{ color: COLORS.primary, background: COLORS.lightBlueBg, padding: '6px 14px', borderRadius: '8px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            24-HOUR SPRINT
          </span>
          <h1 style={{ fontSize: '64px', fontWeight: 900, margin: '12px 0', lineHeight: 1, letterSpacing: '-0.03em', color: COLORS.textMain }}>
            Crestcode <br /> Hackathon
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '32px', maxWidth: '450px', fontWeight: 500 }}>
            A 24-hour innovation challenge where students and developers collaborate to build creative technology solutions and working prototypes.
          </p>
          <button style={{ background: COLORS.primary, color: COLORS.white, padding: '14px 28px', borderRadius: '25px', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}>
            Explore the Event
          </button>
        </div>
      </section>

      {/* 2. ABOUT THE HACKATHON */}
      <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '60px', borderTop: `1px solid ${COLORS.border}` }}>
        <h2 style={{ fontSize: '32px', fontWeight: 800, color: COLORS.textMain, lineHeight: 1.2 }}>About the <br /> Hackathon</h2>
        <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.8, fontWeight: 400 }}>
          The Crestcode Hackathon is an innovation-driven event organized to encourage students and developers to collaborate, experiment with new ideas, and build meaningful technology solutions within a limited time. Participants work in teams to design, develop, and present creative solutions to real-world challenges using modern technologies. The hackathon promotes creativity, teamwork, problem solving, and hands-on learning.
        </p>
      </section>

      {/* 3. HIGHLIGHTS GRID */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '8px', letterSpacing: '-0.02em' }}>Hackathon Highlights</h2>
        <p style={{ color: COLORS.textMuted, marginBottom: '60px', fontSize: '18px' }}>Key takeaways from our innovation challenge.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ padding: '32px 24px', textAlign: 'left', background: '#FFF', borderRadius: '12px', border: `1px solid ${COLORS.border}` }}>
              <div style={{ background: COLORS.lightBlueBg, width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: '24px' }}>
                <h.icon size={22} color={COLORS.primary} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>{h.title}</h3>
              <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6, fontWeight: 500 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EVENT PARTICIPATION BENTO */}
      <section style={{ margin: '40px 24px', padding: '80px 60px', background: '#EFF6FF', borderRadius: '32px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px' }}>Event Participation</h2>
            <p style={{ color: COLORS.textMuted, lineHeight: 1.7, marginBottom: '40px', fontSize: '18px', fontWeight: 400 }}>
              The hackathon brought together enthusiastic students and aspiring developers from different colleges who were passionate about building technology solutions. Participants collaborated, shared ideas, and demonstrated their technical and creative abilities while working on innovative projects.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {avatars.map((a, i) => (
                  <img key={i} src={a} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', marginLeft: i === 0 ? 0 : -12 }} alt="user" />
                ))}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: COLORS.textMuted }}>Joined by 200+ Developers</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px' }} alt="collab" />
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px', marginTop: '40px' }} alt="planning" />
          </div>
        </div>
      </section>

      {/* 5. INNOVATION CHAMPIONS */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '12px' }}>Innovation Champions</h2>
        <p style={{ color: COLORS.textMuted, marginBottom: '80px', fontSize: '18px' }}>Celebrating the exceptional projects from our latest edition.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', alignItems: 'flex-end' }}>
          {champions.map((c, i) => (
            <div key={i} style={{ 
              padding: c.isWinner ? '60px 32px' : '48px 32px', 
              background: c.color, 
              color: c.isWinner ? '#FFF' : COLORS.textMain,
              borderRadius: '16px', 
              border: `1px solid ${COLORS.border}`,
              boxShadow: `0 -12px 30px -10px ${c.topShadow}, 0 20px 40px rgba(0,0,0,0.05)`, 
              position: 'relative',
              textAlign: 'center'
            }}>
              <div style={{ 
                  fontSize: '56px', 
                  marginBottom: '20px',
                  filter: c.isWinner ? 'drop-shadow(20px 10px 4px rgba(255,255,255,0.1))' : 'none'
              }}>
                  {c.icon}
              </div>
              {/* CHANGE 2: Wrap "Zero" to next line for Team SkyNet Zero */}
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px', maxWidth: c.isWinner ? '150px' : 'none', margin: '0 auto 8px' }}>{c.team}</h3>
              <div style={{ fontSize: '14px', fontWeight: 800, color: c.rankColor, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                  {c.place}
              </div>
              <p style={{ fontSize: '14px', opacity: c.isWinner ? 0.8 : 1, color: c.isWinner ? '#CBD5E1' : COLORS.textMuted, lineHeight: 1.6, fontWeight: 500 }}>{c.project}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NOTABLE MENTIONS */}
      <section style={{ padding: '40px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 800, textAlign: 'center', color: COLORS.textMain, marginBottom: '40px' }}>Notable Mentions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {mentions.map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FFF', padding: '16px 28px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 6px rgba(0,0,0,0.02)', width: '100%' }}>
              <m.icon size={20} color={COLORS.primary} strokeWidth={2.5} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '15px', fontWeight: 800 }}>{m.name}</div>
                <div style={{ fontSize: '12px', color: COLORS.textMuted, fontWeight: 600 }}>{m.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MORE INNOVATION SECTION */}
      <section style={{ margin: '100px 24px 0', padding: '100px 24px', background: COLORS.primary, borderRadius: '24px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', color: '#FFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* CHANGE 1: Wrap "Soon" to next line */}
          <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.02em' }}>More Innovation Coming <br /> Soon</h2>
          <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '750px', margin: '0 auto 48px', lineHeight: 1.8, fontWeight: 400 }}>
            Crestcode Technologies continues to support the developer community through hackathons and technology events. Stay connected with us for updates about upcoming hackathons, innovation challenges, and opportunities to participate.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button style={{ background: '#FFF', color: COLORS.primary, padding: '16px 36px', borderRadius: '25px', fontWeight: 800, border: 'none', cursor: 'pointer' }}>Stay Updated</button>
            <button style={{ background: 'transparent', color: '#FFF', padding: '16px 36px', borderRadius: '25px', fontWeight: 800, border: '2px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>Join Community</button>
          </div>
        </div>
      </section>

    </div>
  );
}