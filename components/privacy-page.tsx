"use client";
import React, { useState, useEffect } from 'react';
import {
  Shield,
  Lock,
  Users,
  FileText,
  Mail,
  Clock,
  Eye,
  Download,
  AlertCircle,
} from "lucide-react";

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: "intro", title: "Introduction", icon: Shield },
    { id: "collection", title: "Information We Collect", icon: Eye },
    { id: "usage", title: "How We Use Your Information", icon: FileText },
    { id: "security", title: "Data Storage & Security", icon: Lock },
    { id: "sharing", title: "Sharing of Information", icon: Users },
    { id: "rights", title: "Your Rights", icon: Download },
    { id: "retention", title: "Data Retention", icon: Clock },
    { id: "children", title: "Children's Privacy", icon: AlertCircle },
    { id: "changes", title: "Policy Changes", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <div
        style={{
          display: 'flex',
          minHeight: '100vh'
        }}
      >
        {/* Desktop Sidebar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            padding: '2rem 1.5rem',
            backgroundColor: '#f9fafb',
            borderRight: '1px solid #e5e7eb',
            overflowY: 'auto',
            minWidth: '280px',
            flexShrink: 0,
          }}
          className="hidden lg:block"
        >
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.35rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              Privacy Policy
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#6b7280',
            }}>
              Last updated: Sep 18, 2025
            </p>
          </div>

          <nav>
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    marginBottom: '0.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#3b82f6' : '#4b5563',
                    backgroundColor: isActive ? '#eff6ff' : 'transparent',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon size={18} style={{ color: isActive ? '#3b82f6' : '#6b7280' }} />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <main style={{
          flex: 1,
          maxWidth: '100%',
          padding: '2rem 1rem',
        }}>
          <div style={{
            maxWidth: '4xl',
            margin: '0 auto',
            width: '100%'
          }}>
            {/* Header */}
            <section id="intro" style={{ marginBottom: '3rem' }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f3f4f6',
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '1',
                }}>
                  <Shield size={24} style={{ color: 'white' }} />
                </div>

                <h1 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem',
                }}>
                  Dockly Privacy Policy
                </h1>

                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#6b7280',
                  marginBottom: '1rem',
                }}>
                  Last updated: <strong>Sep 18, 2025</strong>
                </p>

                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                  color: '#4b5563',
                  lineHeight: 1.6,
                  maxWidth: '42rem',
                  margin: '0 auto'
                }}>
                  Dockly values your trust and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use Dockly's services.
                </p>
              </div>
            </section>

            {/* Section 1: Information We Collect */}
            <section id="collection" style={{ marginBottom: '2rem' }}>
              <div style={{
                padding: 'clamp(1rem, 3vw, 1.4rem)',
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f3f4f6',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '1',
                    flexShrink: 0,
                  }}>
                    <Eye size={20} style={{ color: 'white' }} />
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 'bold',
                    color: '#111827',
                    margin: 0,
                    flex: 1,
                    minWidth: '200px'
                  }}>
                    1. Information We Collect
                  </h2>
                </div>

                <p style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#4b5563',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  Dockly is designed to help you organize your digital life while keeping your data private and secure. We may collect:
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  {[
                    {
                      title: "Account Information",
                      description: "Name, email address, and login credentials when you sign up."
                    },
                    {
                      title: "Usage Information",
                      description: "How you interact with Dockly (features used, time spent)."
                    },
                    {
                      title: "Optional Data You Add",
                      description: "Notes, reminders, bookmarks, files, or other content you choose to store in Dockly."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        padding: 'clamp(0.75rem, 2vw, 1rem)',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.5rem',
                        marginBottom: '0.75rem',
                        border: '1px solid #f3f4f6'
                      }}
                    >
                      <strong style={{
                        color: '#111827',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        display: 'block',
                        marginBottom: '0.25rem'
                      }}>
                        {item.title}:
                      </strong>
                      <span style={{
                        color: '#4b5563',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                      }}>
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    backgroundColor: '#ecfdf5',
                    borderRadius: '0.5rem',
                    border: '1px solid #a7f3d0',
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: '#047857',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    We do <strong>not</strong> sell your personal information or data.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section id="usage" style={{ marginBottom: '2rem' }}>
              <div style={{
                padding: 'clamp(1rem, 3vw, 1.4rem)',
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f3f4f6',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: '#8b5cf6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '1',
                    flexShrink: 0,
                  }}>
                    <FileText size={20} style={{ color: 'white' }} />
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 'bold',
                    color: '#111827',
                    margin: 0,
                    flex: 1,
                    minWidth: '200px'
                  }}>
                    2. How We Use Your Information
                  </h2>
                </div>

                <p style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#4b5563',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  We use your information to:
                </p>

                <div>
                  {[
                    "Provide and improve the Dockly Service.",
                    "Personalize your experience.",
                    "Communicate with you (e.g., product updates, security alerts, customer support).",
                    "Ensure security, prevent fraud, and comply with legal obligations."
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#8b5cf6',
                        marginTop: '0.5rem',
                        flexShrink: 0,
                        aspectRatio: '1',
                      }} />
                      <span style={{
                        color: '#4b5563',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        lineHeight: 1.6
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Continue with remaining sections using same responsive pattern... */}
            {[
              {
                id: 'security', title: '3. Data Storage & Security', icon: Lock, color: '#ef4444',
                items: [
                  "All data is encrypted in transit (TLS) and at rest.",
                  "Sensitive information (e.g., passwords in the Vault) is stored using industry-standard encryption and never shared with Dockly staff.",
                  "We regularly review our security practices to protect against unauthorized access."
                ]
              },
              {
                id: 'sharing', title: '4. Sharing of Information', icon: Users, color: '#06b6d4',
                content: "We do not sell or rent your personal information. We may share your information only in these limited circumstances:",
                items: [
                  { title: "With your consent", desc: "(e.g., integrations with third-party apps)." },
                  { title: "For legal reasons", desc: "(if required by law, regulation, or valid legal process)." },
                  { title: "Service providers", desc: "that help us operate Dockly (e.g., cloud hosting providers), under strict confidentiality and security obligations." }
                ]
              }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <section key={section.id} id={section.id} style={{ marginBottom: '2rem' }}>
                  <div style={{
                    padding: 'clamp(1rem, 3vw, 1.4rem)',
                    backgroundColor: 'white',
                    borderRadius: '1.2rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #f3f4f6',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: section.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '1',
                        flexShrink: 0,
                      }}>
                        <Icon size={20} style={{ color: 'white' }} />
                      </div>
                      <h2 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                        fontWeight: 'bold',
                        color: '#111827',
                        margin: 0,
                        flex: 1,
                        minWidth: '200px'
                      }}>
                        {section.title}
                      </h2>
                    </div>

                    {section.content && (
                      <p style={{
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        color: '#4b5563',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem'
                      }}>
                        {section.content}
                      </p>
                    )}

                    <div>
                      {section.items?.map((item, index) => (
                        <div key={index} style={{
                          ...(typeof item === 'string'
                            ? {
                              display: 'flex',
                              gap: '0.75rem',
                              padding: '0.5rem 0',
                              marginBottom: '0.5rem',
                            }
                            : {
                              padding: 'clamp(0.75rem, 2vw, 1rem)',
                              backgroundColor: section.id === 'sharing' ? '#f0fdfa' : '#f9fafb',
                              borderRadius: '0.5rem',
                              marginBottom: '0.75rem',
                              border: `1px solid ${section.id === 'sharing' ? '#a7f3d0' : '#f3f4f6'}`
                            })
                        }}>
                          {typeof item === 'string' ? (
                            <>
                              <div style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: section.color,
                                marginTop: '0.5rem',
                                flexShrink: 0,
                                aspectRatio: '1',
                              }} />
                              <span style={{
                                color: '#4b5563',
                                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                lineHeight: 1.6
                              }}>
                                {item}
                              </span>
                            </>
                          ) : (
                            <>
                              <strong style={{
                                color: '#111827',
                                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                display: 'block',
                                marginBottom: '0.25rem'
                              }}>
                                {item.title}
                              </strong>
                              <span style={{
                                color: '#4b5563',
                                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                              }}>
                                {item.desc}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}

            {/* Rights Section */}
            <section id="rights" style={{ marginBottom: '2rem' }}>
              <div style={{
                padding: 'clamp(1rem, 3vw, 1.4rem)',
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f3f4f6',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '1',
                    flexShrink: 0,
                  }}>
                    <Download size={20} style={{ color: 'white' }} />
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 'bold',
                    color: '#111827',
                    margin: 0,
                    flex: 1,
                    minWidth: '200px'
                  }}>
                    5. Your Rights
                  </h2>
                </div>

                <p style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#4b5563',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  Depending on where you live, you may have the right to:
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  {[
                    "Access, update, or delete your personal data.",
                    "Request a copy of your data in a portable format.",
                    "Restrict or object to certain data processing."
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        marginTop: '0.5rem',
                        flexShrink: 0,
                        aspectRatio: '1',
                      }} />
                      <span style={{
                        color: '#4b5563',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        lineHeight: 1.6
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: '#ecfdf5',
                  borderRadius: '0.5rem',
                  border: '1px solid #a7f3d0',
                }}>
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: '#047857',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    To exercise these rights, contact us at <strong>support@dockly.me</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Remaining short sections */}
            {[
              { id: 'retention', title: '6. Data Retention', icon: Clock, color: '#f59e0b', content: 'We retain your information only as long as necessary to provide the Service, comply with legal obligations, and resolve disputes. You can request deletion of your account and data at any time.' },
              { id: 'children', title: '7. Children\'s Privacy', icon: AlertCircle, color: '#dc2626', content: 'Dockly is not intended for children under 13 (or the minimum age in your country). We do not knowingly collect data from children without parental consent.' },
              { id: 'changes', title: '8. Changes to This Policy', icon: FileText, color: '#7c3aed', content: 'We may update this Privacy Policy from time to time. If changes are material, we will notify you by email or within the app before they take effect.' }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <section key={section.id} id={section.id} style={{ marginBottom: '2rem' }}>
                  <div style={{
                    padding: 'clamp(1rem, 3vw, 1.4rem)',
                    backgroundColor: 'white',
                    borderRadius: '1.2rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #f3f4f6',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: section.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '1',
                        flexShrink: 0,
                      }}>
                        <Icon size={20} style={{ color: 'white' }} />
                      </div>
                      <h2 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                        fontWeight: 'bold',
                        color: '#111827',
                        margin: 0,
                        flex: 1,
                        minWidth: '200px'
                      }}>
                        {section.title}
                      </h2>
                    </div>
                    <p style={{
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#4b5563',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {section.content}
                    </p>
                  </div>
                </section>
              );
            })}

            {/* Contact Section */}
            <section id="contact" style={{ marginBottom: '2rem' }}>
              <div style={{
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                backgroundColor: 'white',
                borderRadius: '1.2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f3f4f6',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '1',
                }}>
                  <Mail size={24} style={{ color: 'white' }} />
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '1rem',
                }}>
                  9. Contact Us
                </h2>

                <p style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#4b5563',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}>
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>

                <div style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  backgroundColor: '#f9fafb',
                  borderRadius: '0.75rem',
                  border: '1px solid #f3f4f6',
                }}>
                  <p style={{
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '0.5rem'
                  }}>
                    Dockly Support Team
                  </p>
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: '#3b82f6',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    Email: support@dockly.me
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .hidden {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:block {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPage;