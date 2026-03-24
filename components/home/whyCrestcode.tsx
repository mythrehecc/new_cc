'use client';
import React from 'react';
import { Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import {
  Eye,
  Users,
  DollarSign,
  Target,
  UserPlus,
  ShieldAlert,
} from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

const { Title, Paragraph } = Typography;

const ICON_MAP = {
  Eye: <Eye size={28} />,
  Users: <Users size={28} />,
  DollarSign: <DollarSign size={28} />,
  Target: <Target size={28} />,
  UserPlus: <UserPlus size={28} />,
  ShieldAlert: <ShieldAlert size={28} />,
} as const;

type IconName = keyof typeof ICON_MAP;

const COLORS = {
  bgDark: '#020617',
  primaryBlue: '#3B82F6',
  textWhite: '#F8FAFC',
  textDim: '#94A3B8',
};

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

function WhyCrestcode() {
  const { config, saveConfigToServer } = useAdmin();
  const WHY_CRESTCODE_DATA = config?.home?.WHY_CRESTCODE_DATA;

  const handleSave = () => saveConfigToServer();

  if (!WHY_CRESTCODE_DATA) return null;

  return (
    <section
      style={{
        padding: 'clamp(30px, 6vw, 60px) clamp(12px, 3vw, 20px)',
        backgroundColor: COLORS.bgDark,
        color: COLORS.textWhite,
        fontFamily: FONT_FAMILY,
      }}>
      <div style={{ maxWidth: 'min(1200px, 95%)', margin: '0 auto' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
          <Title
            level={2}
            style={{
              color: COLORS.textWhite,
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              letterSpacing: '-0.02em',
            }}>
            <EditableText 
              value={WHY_CRESTCODE_DATA.header.mainText} 
              onSave={handleSave} 
              configPath="home.WHY_CRESTCODE_DATA.header.mainText"
            >
              {WHY_CRESTCODE_DATA.header.mainText}
            </EditableText>{' '}
            <span style={{ color: COLORS.primaryBlue }}>
              <EditableText 
                value={WHY_CRESTCODE_DATA.header.brandName} 
                onSave={handleSave} 
                configPath="home.WHY_CRESTCODE_DATA.header.brandName"
              >
                {WHY_CRESTCODE_DATA.header.brandName}
              </EditableText>
            </span>
          </Title>
        </div>

        {/* GRID LAYOUT */}
        <Row gutter={[24, 32]}>
          {WHY_CRESTCODE_DATA.features.map((item: any, index: number) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 24px)' }}>
                  {/* ICON */}
                  <div style={{ color: COLORS.primaryBlue, flexShrink: 0 }}>
                    {ICON_MAP[item.iconName as IconName] || <Eye size={28} />}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <Title
                      level={4}
                      style={{
                        color: COLORS.textWhite,
                        margin: '0 0 clamp(12px, 2vw, 16px) 0',
                        fontSize: 'clamp(18px, 3vw, 22px)',
                        fontWeight: 700,
                      }}>
                      <EditableText 
                        value={item.title} 
                        onSave={handleSave} 
                        configPath={`home.WHY_CRESTCODE_DATA.features.${index}.title`}
                      >
                        {item.title}
                      </EditableText>
                    </Title>
                    <Paragraph
                      style={{
                        color: COLORS.textDim,
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        lineHeight: '1.7',
                        margin: 0,
                      }}>
                      <EditableText 
                        value={item.desc} 
                        onSave={handleSave} 
                        configPath={`home.WHY_CRESTCODE_DATA.features.${index}.desc`}
                      >
                        {item.desc}
                      </EditableText>
                    </Paragraph>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}</style>
    </section>
  );
}

export default WhyCrestcode;