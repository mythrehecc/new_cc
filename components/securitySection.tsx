import React from 'react';
import { Lock, ShieldX, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdmin } from './admin/context';
import EditableText from './admin/editableText';
import { useRouter } from 'next/navigation';

export default function SecuritySection() {
  const { config, saveConfigToServer } = useAdmin();
  const securityConfig = (config as any)?.security || { features: [], title: '', subtitle: '' };
  const securityFeatures = securityConfig.features;
  const iconMap = {
    Lock,
    ShieldX,
    Key,
  };
  const router = useRouter();
  return (
    <section
      id="security"
      style={{
        fontFamily: "'Urbanist', sans-serif",
        paddingTop: '5rem',
        paddingBottom: '3rem',
        // background:
        //   'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        background: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Urbanist', sans-serif !important;
        }
      `}</style>

      {/* Grid lines background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.7,
        }}
      />

      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          marginTop: '-0.5rem',
        }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          {/* <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              lineHeight: '1.1',
              fontFamily: "'Urbanist', sans-serif",
              background: 'linear-gradient(135deg, #fff, #e2e8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <EditableText
              value={config.security.title}
              onSave={() => {
                saveConfigToServer();
              }}
              configPath="security.title">
              {config.security.title}
            </EditableText>
          </motion.h2> */}
          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              lineHeight: '1.1',
              fontFamily: "'Urbanist', sans-serif",
              color: 'white',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Security is our{' '}
            </span>

            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Top Priority
            </span>
          </motion.h2>
          <motion.p
            style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              maxWidth: '42rem',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '400',
              marginTop: '5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <EditableText
              value={securityConfig.subtitle}
              onSave={() => {
                saveConfigToServer();
              }}
              configPath="security.subtitle"
              multiline>
              {securityConfig.subtitle}
            </EditableText>
          </motion.p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
            marginTop: '1rem',
          }}
          className="md:grid-cols-3">
          {securityFeatures.map((feature: { icon: string; title: string; description: string }, index: number) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const gradients = [
              'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              'linear-gradient(135deg, #f59e0b, #d97706)',
              'linear-gradient(135deg, #ef4444, #dc2626)',
            ];

            return (
              <motion.div
                key={feature.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.2rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}>
                <motion.div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: gradients[index],
                    borderRadius: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                  <IconComponent
                    style={{
                      color: 'white',
                      width: '1.5rem',
                      height: '1.5rem',
                    }}
                  />
                </motion.div>

                <motion.h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '0.5rem',
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: "'Urbanist', sans-serif",
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}>
                  <EditableText
                    value={feature.title}
                    onSave={() => {
                      saveConfigToServer();
                    }}
                    configPath={`security.features.${index}.title`}>
                    {feature.title}
                  </EditableText>
                </motion.h3>

                <motion.div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}>
                  {/* ✅ DESCRIPTION ROW */}
                  <motion.p
                    style={{
                      color: '#cbd5e1',
                      lineHeight: '1.6',
                      fontSize: '1rem',
                      fontWeight: '400',
                      fontFamily: "'Urbanist', sans-serif",
                      marginBottom: '0.5rem',
                    }}>
                    <EditableText
                      value={feature.description}
                      onSave={() => {
                        saveConfigToServer();
                      }}
                      configPath={`security.features.${index}.description`}
                      multiline>
                      {feature.description}
                    </EditableText>
                  </motion.p>

                  {/* ✅ LEARN MORE — SEPARATE ROW */}
                  <motion.div
                    onClick={() => router.push('/security')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#38bdf8',
                      textDecoration: 'underline',
                      width: 'fit-content',
                      fontFamily: "'Urbanist', sans-serif",
                    }}
                    whileTap={{ scale: 0.95 }}>
                    Learn more →
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '1.5rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}>
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 1.2rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '1.5rem',
              color: '#10b981',
              fontSize: '0.875rem',
              fontWeight: '600',
              fontFamily: "'Urbanist', sans-serif",
            }}>
            <Lock size={14} />
            <EditableText
              value="Bank-level security guarantee"
              onSave={() => {
                saveConfigToServer();
              }}
              configPath="security.guarantee">
              <span>Bank-level security guarantee</span>
            </EditableText>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
