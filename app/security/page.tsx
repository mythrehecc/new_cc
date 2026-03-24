'use client';
import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Zap,
  Search,
  Grid3x3 as Grid3X3,
  CheckCircle,
  ChevronDown,
  Fingerprint,
  Smartphone,
  Globe,
  Eye,
  Server,
  Key,
  AlertTriangle,
  Sparkles,
  Files,
} from 'lucide-react';

function SecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const PRIMARY_COLOR = '#6366F1';

  const featureCards = [
    {
      icon: <Eye className="w-5 h-5 text-white" />,
      title: 'We Never See Your Stuff',
      description:
        "Your information is locked before it even leaves your device. We can't see your passwords, health data, or personal notes - ever.",
      gradient: 'from-purple-600 via-indigo-600 to-purple-700',
      stats: 'Zero Knowledge',
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: 'Military-Grade Security',
      description:
        'We use the same encryption technology that governments and banks trust. Your data is protected by the strongest security available.',
      gradient: 'from-blue-600 via-cyan-600 to-blue-700',
      stats: 'AES-256',
    },
    {
      icon: <Files className="w-5 h-5 text-white" />,
      title: 'Health Data Protected',
      description:
        'We follow strict healthcare privacy rules (HIPAA). Your medical information gets extra protection and stays completely confidential.',
      gradient: 'from-emerald-600 via-teal-600 to-emerald-700',
      stats: 'HIPAA Compliant',
    },
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'You Create Content',
      description:
        'Write notes, save passwords, track health info - whatever you need to organize',
      icon: <Sparkles className="w-4 h-4 text-white" />,
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      number: '02',
      title: 'We Lock It Down',
      description:
        'Your device instantly scrambles everything into unreadable code before sending',
      icon: <Lock className="w-4 h-4 text-white" />,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      number: '03',
      title: 'Safe Storage',
      description:
        "We store your scrambled data in secure cloud servers, but we can't read it",
      icon: <Server className="w-4 h-4 text-white" />,
      gradient: 'from-cyan-500 to-teal-600',
    },
    {
      number: '04',
      title: 'Only You Unlock',
      description:
        'When you log in, your device unscrambles the data so only you can see it',
      icon: <Key className="w-4 h-4 text-white" />,
      gradient: 'from-emerald-500 to-green-600',
    },
  ];

  const authMethods = [
    {
      icon: (
        <Fingerprint className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
      ),
      title: 'Passkeys (Recommended)',
      description:
        "Use your fingerprint or face to log in. Your phone's secure chip keeps your login info safe and makes signing in super easy.",
      color: 'bg-indigo-50 border-indigo-200',
      iconBg: 'bg-indigo-100',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: 'Email + PIN',
      description:
        "Pick a PIN that's easy to remember. We combine it with your device's unique ID so no one else can guess it.",
      color: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-100',
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: 'Google Sign-In',
      description:
        "Log in with your Google account. We only use it to verify who you are - Google can't see your Dockly data.",
      color: 'bg-emerald-50 border-emerald-200',
      iconBg: 'bg-emerald-100',
    },
  ];

  const techFeatures = [
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: 'AES-256 Encryption',
      description:
        'The gold standard used by banks, governments, and militaries. Would take billions of years to crack.',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: 'Super Fast Performance',
      description:
        'Lightning fast despite all the security. We encrypt and decrypt your data in milliseconds.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: <Search className="w-5 h-5 text-white" />,
      title: 'Secure Search',
      description:
        'Search through all your encrypted data instantly with our special encrypted index.',
      gradient: 'from-emerald-600 to-teal-600',
    },
    // {
    //   icon: <Grid3X3 className="w-5 h-5 text-white" />,
    //   title: 'Chunked Storage',
    //   description:
    //     'Large files are broken into small encrypted pieces for faster uploads and extra security.',
    //   gradient: 'from-pink-600 to-rose-600',
    // },
  ];

  const faqItems = [
    {
      question: 'Can Dockly employees see my data?',
      answer:
        "Nope! Everything is encrypted on your device before it reaches our servers. Even if an employee tried to look at your data, they'd only see random gibberish. We designed it this way on purpose to protect your privacy.",
    },
    {
      question: 'What if I lose my phone or forget my password?',
      answer:
        "Don't panic! If you set up multiple login methods (like a passkey AND a PIN), you can use the other one to get back in. You can also set up trusted guardians who can help you recover your account.",
    },
    {
      question: 'What happens if police or the government request my data?',
      answer:
        "If we receive a legal order, we can provide the encrypted files we have stored. But those files are useless without your encryption key, which we don't have. We literally cannot decrypt your data.",
    },
    {
      question: "Is my data backed up? What if Dockly's servers crash?",
      answer:
        'Yes! We automatically back up your encrypted data to multiple locations. If one server has a problem, your data is safe on the others. All backups are encrypted just like the originals.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Urbanist', sans-serif !important;
        }
        
        @media (max-width: 1024px) {
          .security-section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
          .card-title {
            font-size: 1.25rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .section-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .section-title {
            font-size: 1.75rem !important;
          }
          .card-title {
            font-size: 1.125rem !important;
          }
          .card-description {
            font-size: 0.875rem !important;
          }
        }
      `}</style>

      <div
        style={{
          fontFamily: "'Urbanist', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-4.8rem',
        }}>
        {/* Hero Section */}
        <section
          style={{
            background:
              'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)',
            paddingTop: '50px',
            paddingBottom: '1rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            position: 'relative',
          }}>
          {/* Background Effects */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '384px',
                height: '384px',
                background:
                  'linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), transparent)',
                borderRadius: '50%',
                filter: 'blur(3rem)',
                animation: 'pulse 2s infinite',
              }}
            />
          </div>

          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              textAlign: 'center',
              position: 'relative',
              paddingTop: '3rem',
              paddingBottom: '2rem',
            }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                marginBottom: '1rem',
              }}>
              <Shield
                style={{
                  width: '12px',
                  height: '12px',
                  color: 'black',
                  marginRight: '0.5rem',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'black',
                }}>
                Military-Grade Security
              </span>
            </div>

            {/* Heading */}
            <h1
              className="section-title"
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'black',
                marginBottom: '1rem',
                lineHeight: '1.1',
              }}>
              Your Data is{' '}
              <span
                style={{
                  background: PRIMARY_COLOR,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                Safe With Us
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '1rem',
                color: '#6b7280',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '400',
                marginBottom: '1.5rem',
              }}>
              Think of Dockly as a super-secure vault for your digital life. We
              use military-grade encryption to keep your personal information,
              health records, and passwords completely private.
            </p>
          </div>
        </section>

        {/* Feature Cards */}
        <section
          className="security-section"
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            background: '#ffffff',
          }}>
          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              paddingTop: '3rem',
              paddingBottom: '2rem',
            }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}>
              {featureCards.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    background: '#ffffff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid #f3f4f6',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow =
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                  }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: `linear-gradient(135deg, ${
                        feature.gradient.split(' ')[1]
                      }, ${feature.gradient.split(' ')[3]})`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}>
                    {feature.icon}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}>
                    <h3
                      className="card-title"
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#111827',
                        lineHeight: '1.1',
                      }}>
                      {feature.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#059669',
                        background: '#d1fae5',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                      }}>
                      {feature.stats}
                    </span>
                  </div>

                  <p
                    className="card-description"
                    style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                    }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          className="security-section"
          style={{
            paddingTop: '0.5rem',
            paddingBottom: '2rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            background:
              'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
          }}>
          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              paddingTop: '3rem',
              paddingBottom: '2rem',
            }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2
                className="section-title"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                How It{' '}
                <span
                  style={{
                    background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  Works
                </span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  maxWidth: '32rem',
                  margin: '0 auto',
                  lineHeight: '1.7',
                  fontWeight: '400',
                }}>
                Think of your data like a treasure chest that only you have the
                key to open
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}>
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    background: '#ffffff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid #f3f4f6',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: `linear-gradient(135deg, ${
                          step.gradient.split(' ')[1]
                        }, ${step.gradient.split(' ')[3]})`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {step.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#d1d5db',
                      }}>
                      {step.number}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '0.5rem',
                      lineHeight: '1.1',
                    }}>
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: '#6b7280',
                      fontSize: '0.75rem',
                      lineHeight: '1.6',
                    }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background:
                  'linear-gradient(to right, #f3e8ff, #e0e7ff, #f3e8ff)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #c4b5fd',
              }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                  <Key
                    style={{ width: '20px', height: '20px', color: 'white' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '0.5rem',
                      lineHeight: '1.1',
                    }}>
                    Your Secret Key
                  </h3>
                  <p
                    style={{
                      color: '#374151',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                    }}>
                    When you create your account, your device generates a unique
                    secret key. This key never leaves your device, so even
                    Dockly employees can't access your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Methods */}
        <section
          className="security-section"
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            background: '#ffffff',
          }}>
          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              paddingTop: '1.5rem',
              paddingBottom: '2rem',
            }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2
                className="section-title"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                Multiple Ways to{' '}
                <span
                  style={{
                    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  Sign In
                </span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  maxWidth: '32rem',
                  margin: '0 auto',
                  lineHeight: '1.7',
                  fontWeight: '400',
                }}>
                Choose the login method that works best for you - they're all
                super secure
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
              {authMethods.map((method, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    background: method.color.includes('indigo')
                      ? '#eef2ff'
                      : method.color.includes('blue')
                      ? '#eff6ff'
                      : '#ecfdf5',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    border: `1px solid ${
                      method.color.includes('indigo')
                        ? '#c7d2fe'
                        : method.color.includes('blue')
                        ? '#bfdbfe'
                        : '#bbf7d0'
                    }`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: method.iconBg.includes('indigo')
                        ? '#e0e7ff'
                        : method.iconBg.includes('blue')
                        ? '#dbeafe'
                        : '#d1fae5',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}>
                    {method.icon}
                  </div>
                  <h3
                    className="card-title"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '0.5rem',
                      lineHeight: '1.1',
                    }}>
                    {method.title}
                  </h3>
                  <p
                    className="card-description"
                    style={{
                      color: '#374151',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                    }}>
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background:
                  'linear-gradient(to right, #fef3c7, #fed7aa, #fef3c7)',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #fcd34d',
              }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                  <AlertTriangle
                    style={{ width: '20px', height: '20px', color: 'white' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '0.5rem',
                      lineHeight: '1.1',
                    }}>
                    Emergency Access
                  </h3>
                  <p
                    style={{
                      color: '#374151',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                    }}>
                    Set up trusted guardians who can access your account in
                    emergencies. You give encrypted pieces of your access key to
                    people you trust, and they can only use it after you approve
                    or in a verified emergency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section
          className="security-section"
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            background:
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            position: 'relative',
          }}>
          {/* Background grid pattern */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              paddingTop: '1rem',
              paddingBottom: '2rem',
              position: 'relative',
            }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2
                className="section-title"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                The{' '}
                <span
                  style={{
                    background: '#6366F1',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  Technology
                </span>{' '}
                Behind It
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '32rem',
                  margin: '0 auto',
                  lineHeight: '1.7',
                  fontWeight: '400',
                }}>
                Advanced security features that keep your data protected
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}>
              {techFeatures.map((tech, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: `linear-gradient(135deg, ${
                          tech.gradient.split(' ')[1]
                        }, ${tech.gradient.split(' ')[3]})`,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3
                        className="card-title"
                        style={{
                          fontSize: '1.125rem',
                          fontWeight: '700',
                          color: '#ffffff',
                          marginBottom: '0.5rem',
                          lineHeight: '1.1',
                        }}>
                        {tech.title}
                      </h3>
                      <p
                        className="card-description"
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '0.875rem',
                          lineHeight: '1.6',
                        }}>
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Privacy */}
        <section
          className="security-section"
          style={{
            // paddingTop: '0.5rem',
            // paddingBottom: '0.5rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            background:
              'linear-gradient(135deg, #fef2f2 0%, #fce7e7 50%, #fecaca 100%)',
          }}>
          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              paddingTop: '3rem',
              paddingBottom: '2rem',
            }}>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid #fca5a5',
              }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h2
                  className="section-title"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '1rem',
                    lineHeight: '1.1',
                  }}>
                  Healthcare Privacy{' '}
                  <span
                    style={{
                      background: 'linear-gradient(to right, #dc2626, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                    (HIPAA)
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#374151',
                    lineHeight: '1.7',
                    fontWeight: '400',
                  }}>
                  Your health information gets extra protection. We follow
                  strict federal laws called HIPAA that require special security
                  for medical records:
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem',
                }}>
                {[
                  'Every time someone accesses health data, we create a permanent record',
                  'Our cloud providers sign special agreements promising to protect your medical info',
                  'We have a security team ready to respond if anything suspicious happens',
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: '#fef2f2',
                      borderRadius: '8px',
                      border: '1px solid #fecaca',
                    }}>
                    <CheckCircle
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#dc2626',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    />
                    <p
                      style={{
                        color: '#374151',
                        fontSize: '0.75rem',
                        lineHeight: '1.6',
                      }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="security-section"
          style={{
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            background: '#ffffff',
          }}>
          <div
            className="section-container"
            style={{
              maxWidth: '64rem',
              margin: '0 auto',
              padding: '0 1rem',
              paddingTop: '3rem',
              paddingBottom: '2rem',
            }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2
                className="section-title"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                Common{' '}
                <span
                  style={{
                    background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  Questions
                </span>
              </h2>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow:
                      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: '8px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#111827',
                        lineHeight: '1.1',
                      }}>
                      {item.question}
                    </h3>
                    <ChevronDown
                      style={{
                        width: '16px',
                        height: '16px',
                        color: '#6b7280',
                        transform:
                          openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>
                  {openFaq === index && (
                    <div style={{ padding: '0 1rem 0.75rem 1rem' }}>
                      <p
                        style={{
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          lineHeight: '1.6',
                        }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SecurityPage;
