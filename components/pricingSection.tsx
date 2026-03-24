import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  Check,
  Vault,
  KeyRound,
  Users,
  HeartPulse,
  Home,
  Bookmark,
  FileStack,
  Landmark,
  Wallet,
  CheckCircle2,
  Notebook,
  Shield,
  Cloud,
  Smartphone,
  Calendar,
  Bell,
  Lock,
  Star,
  Zap,
  Crown,
  Sparkles,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from './admin/context';
import EditableText from './admin/editableText';
import { WishlistFormRef } from './hero-section';
import { useRouter } from 'next/navigation';

interface PricingSectionProps {
  wishlistFormRef?: WishlistFormRef;
}

function PricingSection({ wishlistFormRef }: PricingSectionProps) {
  const { config, saveConfigToServer, isAdmin } = useAdmin();
  const [selectedPlan, setSelectedPlan] = useState('Yearly');
  const router = useRouter();

  const handleHeaderButtonClick = (planName: string) => {
    localStorage.setItem('plan', planName.toLowerCase());
    router.push('/check-out');
  };

  // Service categories with features
  const serviceCategories = [
    {
      icon: <Vault size={24} />,
      title: 'Digital Vault & Security',
      iconColor: '#FF6B6B',
      features: [
        'Digital Family Vault',
        'Password Management',
        'Secure Document Storage',
        'Two-Factor Authentication',
        'End-to-End Encryption',
        'Backup & Recovery',
      ],
    },
    {
      icon: <Users size={24} />,
      title: 'Family Management',
      iconColor: '#4ECDC4',
      features: [
        'Family Planning & Scheduling',
        'Task & Goal Management',
        'Shared Calendars',
        'Family Communication Hub',
        'Emergency Contacts',
        'Family Tree Builder',
      ],
    },
    {
      icon: <FileStack size={24} />,
      title: 'Document & Finance',
      iconColor: '#45B7D1',
      features: [
        'Essential Document Management',
        'Estate Planning Tools',
        'Finance Management',
        'Tax Document Organization',
        'Legal Document Templates',
        // 'Insurance Tracking',
      ],
    },
    {
      icon: <HeartPulse size={24} />,
      title: 'Health & Lifestyle',
      iconColor: '#96CEB4',
      features: [
        'Health & Wellness Management',
        'Medical Records Storage',
        'Appointment Scheduling',
        'Medication Reminders',
        'Fitness Goal Tracking',
        'Emergency Medical Info',
      ],
    },
  ];

  // Enhanced pricing plans with more details
  const pricingPlans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: '30 days free',
      originalPrice: null,
      popular: false,
      buttonText: 'Start Free Trial',
      buttonStyle: 'outline',
      icon: <Sparkles size={20} />,
      color: '#64748b',
      features: [
        'Full platform access',
        'All core features',
        'Up to 5 family members',
        'Basic support',
        'Mobile app access',
        '1GB storage',
      ],
      limitations: ['Limited storage', 'Basic support only'],
    },
    {
      name: 'Monthly',
      price: '$12.99',
      period: 'per month',
      originalPrice: null,
      popular: false,
      buttonText: 'Get Started',
      buttonStyle: 'primary',
      icon: <Calendar size={20} />,
      color: '#3b82f6',
      features: [
        'Everything in Free Trial',
        'Unlimited family members',
        'Priority support',
        '50GB storage',
        'Advanced security features',
        'Custom templates',
      ],
    },
    {
      name: 'Yearly',
      price: '$99',
      period: 'per year',
      originalPrice: '$155.88',
      popular: true,
      buttonText: 'Get Early Access',
      buttonStyle: 'gradient',
      icon: <Crown size={20} />,
      color: '#f59e0b',
      features: [
        'Everything in Monthly',
        'Save $149 per year',
        '500GB storage',
        '24/7 premium support',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Custom integrations',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        fontFamily: "'Inter', sans-serif",
        paddingTop: '2.5rem',
        paddingBottom: '2rem',
        position: 'relative',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', sans-serif !important;
        }
      `}</style>

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <motion.h2
            style={{
              fontSize: window.innerWidth < 640 ? '2rem' : '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: '#1e293b',
              lineHeight: '1.1',
            }}>
            What's included?
          </motion.h2>

          <motion.p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              maxWidth: '42rem',
              margin: '0 auto',
              lineHeight: '1.5',
            }}>
            Access the full platform for less than the cost of one service per
            month.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns:
              window.innerWidth < 868
                ? '1fr'
                : window.innerWidth < 1124
                ? 'repeat(2, 1fr)'
                : 'repeat(4, 1fr)',
            gap: window.innerWidth < 768 ? '1.5rem' : '1rem',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}>
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              style={{
                background: '#ffffff',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // whileHover={{
              //   transform: 'translateY(-4px)',
              //   boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              // }}
              viewport={{ once: true }}>
              {/* Icon */}
              <motion.div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  background: `${category.iconColor}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  border: `2px solid ${category.iconColor}25`,
                }}
                // whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}>
                {React.cloneElement(category.icon, {
                  color: category.iconColor,
                  strokeWidth: 2,
                })}
              </motion.div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  lineHeight: '1.3',
                }}>
                {category.title}
              </h3>

              {/* Features List */}
              <div>
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.9rem',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + featureIndex * 0.05,
                    }}
                    viewport={{ once: true }}>
                    <motion.div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${category.iconColor}, ${category.iconColor}cc)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      // whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}>
                      <Check size={10} color="white" strokeWidth={3} />
                    </motion.div>

                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: '#64748b',
                        lineHeight: '1.4',
                      }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <motion.h2
            style={{
              fontSize: window.innerWidth < 640 ? '1.75rem' : '2rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: '#1e293b',
              lineHeight: '1.1',
            }}>
            Choose Your Plan
          </motion.h2>

          <motion.p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              maxWidth: '32rem',
              margin: '0 auto 1.5rem auto',
              lineHeight: '1.5',
            }}>
            Simple, transparent pricing. Same great features, choose your
            billing cycle.
          </motion.p>
        </motion.div>

        {/* <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <div
            style={{
              display: 'flex',
              background: '#f8fafc',
              borderRadius: '0.5rem',
              padding: '0.2rem',
              border: '1px solid #e2e8f0',
            }}>
            <button
              onClick={() => setSelectedPlan('Monthly')}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                background:
                  selectedPlan === 'Monthly' ? '#ffffff' : 'transparent',
                color: selectedPlan === 'Monthly' ? '#1e293b' : '#64748b',
                boxShadow:
                  selectedPlan === 'Monthly'
                    ? '0 1px 3px rgba(0, 0, 0, 0.1)'
                    : 'none',
              }}>
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('Yearly')}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                background:
                  selectedPlan === 'Yearly' ? '#ffffff' : 'transparent',
                color: selectedPlan === 'Yearly' ? '#1e293b' : '#64748b',
                boxShadow:
                  selectedPlan === 'Yearly'
                    ? '0 1px 3px rgba(0, 0, 0, 0.1)'
                    : 'none',
                position: 'relative',
              }}>
              Yearly
              <span
                style={{
                  position: 'absolute',
                  top: '-0.4rem',
                  right: '-0.4rem',
                  background: '#10b981',
                  color: 'white',
                  fontSize: '0.65rem',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                }}>
                Save 43%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}>
          <div
            style={{
              maxWidth: '500px',
              width: '100%',
              background: '#ffffff',
              borderRadius: '0.75rem',
              border: '2px solid #e2e8f0',
              padding: '2rem',
              textAlign: 'center',
            }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ marginBottom: '1.5rem' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}>
                    <span
                      style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        lineHeight: '1',
                      }}>
                      {selectedPlan === 'Monthly' ? '$12.99' : '$99'}
                    </span>
                    {selectedPlan === 'Yearly' && (
                      <span
                        style={{
                          fontSize: '1.25rem',
                          color: '#94a3b8',
                          textDecoration: 'line-through',
                          fontWeight: '500',
                        }}>
                        $155.88
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      color: '#64748b',
                      fontSize: '1rem',
                      fontWeight: '500',
                      marginTop: '0.25rem',
                    }}>
                    {selectedPlan === 'Monthly' ? 'per month' : 'per year'}
                  </div>
                  {selectedPlan === 'Yearly' && (
                    <div
                      style={{
                        color: '#10b981',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        marginTop: '0.25rem',
                      }}>
                      Save $56.88 annually
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{ marginBottom: '2rem' }}>
              <Button
                onClick={() => handleHeaderButtonClick(selectedPlan)}
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  background: '#3b82f6',
                  color: 'white',
                  transition: 'background-color 0.2s ease',
                }}>
                Get Started
              </Button>

              <div
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.8rem',
                  color: '#64748b',
                }}>
                30-day free trial • No credit card required
              </div>
            </div>

            <div
              style={{
                textAlign: 'left',
                maxWidth: '350px',
                margin: '0 auto',
              }}>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}>
                Everything included:
              </h4>

              {[
                'Digital Family Vault & Security',
                'Password Management & 2FA',
                'Family Planning & Scheduling',
                'Document & Finance Management',
                'Health & Wellness Tracking',
                'Unlimited Family Members',
                'Priority Customer Support',
                'End-to-End Encryption',
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    marginLeft: '3rem',
                  }}>
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                    <Check size={10} color="white" strokeWidth={3} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: '#374151',
                      lineHeight: '1.4',
                    }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Simple Trust Elements */}
        {/* <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#64748b',
              fontSize: '0.9rem',
            }}>
            <Shield size={20} color="#10b981" />
            <span>30-day money back guarantee</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#64748b',
              fontSize: '0.9rem',
            }}>
            <Lock size={20} color="#10b981" />
            <span>Secure & encrypted</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#64748b',
              fontSize: '0.9rem',
            }}>
            <Calendar size={20} color="#10b981" />
            <span>Cancel anytime</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default PricingSection;
