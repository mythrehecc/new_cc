'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const CtaSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const monthlyPrice = 14;
  const annualPrice = 120;
  const annualMonthlyEquivalent = 8.25;
  const savings = Math.round(
    ((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) * 100
  );
  const scrollToHero = () => {
    document
      .getElementById('hero-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section
      id="pricing"
      style={{
        fontFamily: "'Urbanist', sans-serif",
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '3rem',
        paddingBottom: '1.5rem',
      }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Urbanist', sans-serif !important;
        }
      `}</style>

      <div
        style={{
          maxWidth: '100rem',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          zIndex: 2,
          marginTop: '-0.5rem',
        }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
          {/* Beta Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              color: '#6366f1',
              padding: '0.5rem 1.5rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '2rem',
              gap: '0.5rem',
              border: '1px solid rgba(99, 102, 241, 0.2)',
            }}>
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            Join the Beta
          </motion.div> */}

          <motion.h2
            style={{
              fontSize: '2.7rem',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '1rem',
              lineHeight: '1.1',
              fontFamily: "'Urbanist', sans-serif",
            }}>
            One membership, endless opportunities
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '0.8rem',
              }}>
              to optimize your life
            </span>
          </motion.h2>

          <motion.p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              maxWidth: '42rem',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '400',
              marginTop: '5px',
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Join families who are taking back control with Dockly's
            revolutionary household management platform. */}
            One system to manage everything. Built to last. More clarity, less
            cost, greater peace of mind.
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#6366f1',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Urbanist', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
              Start Free Trial →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: 'transparent',
                color: '#6366f1',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '2px solid #6366f1',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Urbanist', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
              Watch Demo
            </motion.button>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#f1f5f9',
                borderRadius: '0.75rem',
                padding: '0.25rem',
                gap: '0.25rem',
              }}>
              <button
                onClick={() => setIsAnnual(true)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isAnnual ? '#6366f1' : 'transparent',
                  color: isAnnual ? 'white' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minWidth: '120px',
                  justifyContent: 'center',
                }}>
                Annual
                <span
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: isAnnual
                      ? 'rgba(255,255,255,0.2)'
                      : '#10b981',
                    color: isAnnual ? 'white' : 'white',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                  }}>
                  {/* {savings}% off */}
                  29% off
                </span>
              </button>

              <button
                onClick={() => setIsAnnual(false)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: !isAnnual ? '#2563eb' : 'transparent',
                  color: !isAnnual ? 'white' : '#64748b',
                  minWidth: '120px',
                }}>
                Monthly
              </button>
            </div>
          </motion.div>

          {/* Pricing Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              marginBottom: '1rem',
            }}>
            <div style={{ marginBottom: '0rem' }}>
              <span
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 2rem)',
                  fontWeight: '700',
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                }}>
                {isAnnual
                  ? 'Get it all for $10'
                  : `$${monthlyPrice.toFixed(2)}`}
              </span>
              {/* <span
                style={{
                  fontSize: '1.125rem',
                  color: '#64748b',
                  fontWeight: '500',
                  marginLeft: '0.5rem',
                }}>
                /month
              </span> */}
            </div>

            {isAnnual && (
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginTop: '0.5rem',
                }}>
                Billed annually at ${annualPrice} • Save $
                {/* {Math.round(monthlyPrice * 12 - annualPrice)} per year */}
                48 per year
              </div>
            )}
            <motion.button
              onClick={scrollToHero}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: '1.25rem',
                backgroundColor: '#6366f1',
                color: 'white',
                padding: '0.75rem 2.25rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Urbanist', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
              }}>
              {/* Get Early Access */}
              Join Waitlist
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '1rem',
              // marginTop: '-0.5rem',
            }}>
            {[
              'Full platform access',
              'All features included',
              'Cancel anytime',
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#475569',
                }}>
                <Check size={16} color="#10b981" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              color: '#64748b',
              flexWrap: 'wrap',
            }}>
            <span>
              Your Membership gives you full access to the Dockly platform, with
              monthly and annual plans, and can be cancelled any time.
            </span>
          </motion.div> */}
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: 'none',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              marginBottom: '-2rem',
              position: 'relative',
            }}>
            <Image
              src="/cta.png"
              alt="Dockly Dashboard"
              width={1800}
              height={800}
              style={{
                width: '1700px',
                height: 'auto',
                display: 'block',
              }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
