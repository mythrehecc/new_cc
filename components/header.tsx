import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  Users,
  Globe,
  Boxes,
  Briefcase,
  Bug,
  HelpCircle,
  MessageSquareQuote,
  Palette,
  Server,
  Smartphone,
  Workflow,
  Brain,
  FileText,
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useContactForm } from './ContactFormContext';

const COLORS = {
  bgBase: '#FFFFFF',
  bgSecondary: '#FFFFFF',
  bgCard: 'rgba(255, 255, 255, 0.7)',
  primary: '#4F46E5',
  secondary: '#0EA5E9',
  accent: '#10B981',
  textMain: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

const FONT_FAMILY = "'Plus Jakarta Sans', -apple-system, sans-serif";

// Enhanced Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { openModal } = useContactForm();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'services') {
      // Navigate to services page
      router.push('/services');
    } else if (isHomePage) {
      // Normal scroll on home
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Hash navigation from other pages
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menus = [
    { key: 'home', label: 'Home', icon: <FileText size={16} /> },
    {
      key: 'services',
      label: 'Services',
      subMenu: [
        {
          key: 'custom-software-development',
          label: 'Custom Software Development',
          icon: <Boxes size={16} />,
        },
        {
          key: 'ai-ml',
          label: 'AI & ML',
          icon: <Brain size={16} />,
        },
        {
          key: 'web-development',
          label: 'Web Development',
          icon: <Globe size={16} />,
        },
        {
          key: 'mobile-app-development',
          label: 'Mobile App Development',
          icon: <Smartphone size={16} />,
        },
      ],
    },
    { key: 'product', label: 'Products', icon: <FileText size={16} /> },
    {
      key: 'company',
      label: 'Company',
      subMenu: [
        {
          key: 'about',
          label: 'About',
          icon: <Users size={16} />,
        },
        {
          key: 'careers',
          label: 'Careers',
          icon: <Briefcase size={16} />,
        },
        {
          key: 'blogs',
          label: 'Blogs',
          icon: <FileText size={16} />,
        },
        {
          key: 'hackathon',
          label: 'Hackathon',
          icon: <Bug size={16} />,
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        
        .nav-glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary});
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::before {
          width: 80%;
        }
      `}</style>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="nav-glass"
        style={{
          backgroundColor: isScrolled
            ? COLORS.bgBase
            : COLORS.bgBase,
          borderBottom: isScrolled ? `1px solid ${COLORS.border}` : 'none',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
        {/* Floating Orb Background */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '20%',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${COLORS.primary}15, transparent)`,
            filter: 'blur(60px)',
            zIndex: -1,
          }}
        />

        <div
          style={{ maxWidth: 'min(1400px, 100%)', margin: '0 auto', padding: '0 clamp(12px, 3vw, 24px)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: isMobile ? '50px' : '70px',
            }}>
            {/* Enhanced Logo */}
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 100,
              }}
              onClick={() => router.push('/')}
              whileTap={{ scale: 0.98 }}>
              <div
                style={{
                  width: isMobile ? '30px' : '40px',
                  height: isMobile ? '30px' : '40px',
                  marginRight: isMobile ? '10px' : '14px',
                  // background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  borderRadius: '14px',
                  display: 'grid',
                  placeItems: 'center',
                  // boxShadow: `0 8px 32px ${COLORS.primary}30`,
                  position: 'relative',
                }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 2,
                    // background: 'white',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                  }}>
                  <img
                    src="/Headerlogo.png"
                    alt="Crestcode"
                    style={{
                      width: isMobile ? '24px' : '32px',
                      height: isMobile ? '24px' : '32px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: isMobile ? '16px' : '20px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: COLORS.textMain,
                  }}>
                  Crestcode 
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '8px' : '10px',
                    fontWeight: 700,
                    color: COLORS.primary,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}>
                  Technologies
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                {menus.map((menu) => (
                  <div
                    key={menu.key}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown(menu.key)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <motion.button
                      className="nav-link"
                      style={{
                        color: COLORS.textMain,
                        background: 'transparent',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: FONT_FAMILY,
                        transition: 'all 0.3s ease',
                      }}
                      whileHover={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        y: -1,
                      }}
                      onClick={() =>
                        menu.key === 'home'
                          ? router.push('/')
                          : menu.key === 'services'
                          ? scrollToSection('services')
                          : menu.key === 'product'
                          ? router.push('/products')
                          : menu.key === 'company'
                          ? scrollToSection('company')
                          : null
                      }>
                      {menu.label}
                      {menu.subMenu && (
                        <motion.div
                          animate={{
                            rotate: activeDropdown === menu.key ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}>
                          <ChevronDown size={16} style={{ opacity: 0.7 }} />
                        </motion.div>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {menu.subMenu && activeDropdown === menu.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '280px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '20px',
                            padding: '16px',
                            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
                            border: `1px solid ${COLORS.border}`,
                            marginTop: '8px',
                          }}>
                          {menu.subMenu.map((sub) => (
                            <motion.button
                              key={sub.key}
                              onClick={() => {
                                if (sub.key === 'about') {
                                  router.push('/team');
                                } else if (sub.key === 'custom-software-development') {
                                  router.push('/sd_services');
                                } else if (sub.key === 'ai-ml') {
                                  router.push('/aiml_services');
                                } else if (sub.key === 'web-development') {
                                  router.push('/web_services');
                                } else if (sub.key === 'mobile-app-development') {
                                  router.push('/mobile_services');
                                } else if (sub.key === 'careers') {
                                  router.push('/careers');
                                } else if (sub.key === 'blogs') {
                                  router.push('/blogs');
                                } else if (sub.key === 'hackathon') {
                                  router.push('/hackathon');
                                } else {
                                  router.push('/services');
                                }
                              }}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '14px 16px',
                                background: 'none',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: COLORS.textMuted,
                                transition: 'all 0.2s ease',
                              }}
                              whileHover={{
                                backgroundColor: 'rgba(79, 70, 229, 0.08)',
                                color: COLORS.primary,
                                x: 4,
                              }}>
                              {sub.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                }}
                whileTap={{ scale: 0.95 }}>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  {isMenuOpen ? (
                    <X size={24} color={COLORS.textMain} />
                  ) : (
                    <Menu size={24} color={COLORS.textMain} />
                  )}
                </motion.div>
              </motion.button>
            )}  {/* Enhanced CTA Button */}
            <motion.button
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                color: 'white',
                border: 'none',
                padding: isMobile ? '8px 16px' : '12px 24px',
                borderRadius: '50px',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: FONT_FAMILY,
                boxShadow: `0 12px 24px -8px ${COLORS.primary}40`,
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 16px 32px -8px ${COLORS.primary}50`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}>
              {/* Button shine effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{ left: ['100%', '-100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />

              <span style={{ position: 'relative', zIndex: 1 }}>
                Contact us
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80vw',
              maxWidth: '320px',
              height: '100vh',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.1)',
            }}>
            <div style={{ padding: '20px', height: '100%', overflowY: 'auto' }}>
              {/* Close Button */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                whileTap={{ scale: 0.95 }}>
                <X size={20} color={COLORS.textMain} />
              </motion.button>

              {/* Mobile Menu Items */}
              <div style={{ marginTop: '40px' }}>
                {menus.map((menu) => (
                  <div key={menu.key} style={{ marginBottom: '24px' }}>
                    <motion.button
                      onClick={() => {
                        if (menu.key === 'home') {
                          router.push('/');
                        } else if (menu.key === 'services') {
                          scrollToSection('services');
                        } else if (menu.key === 'product') {
                          router.push('/products');
                        } else if (menu.key === 'company') {
                          scrollToSection('company');
                        }
                        setIsMenuOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: COLORS.textMain,
                        fontFamily: FONT_FAMILY,
                        marginBottom: menu.subMenu ? '12px' : '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}>
                      {menu.label}
                      {menu.subMenu && <ChevronDown size={16} />}
                    </motion.button>

                    {/* Mobile SubMenu */}
                    {menu.subMenu && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{
                          paddingLeft: '16px',
                          borderLeft: `2px solid ${COLORS.border}`,
                        }}>
                        {menu.subMenu.map((sub) => (
                          <motion.button
                            key={sub.key}
                            onClick={() => {
                              if (sub.key === 'about') {
                                router.push('/team');
                              } else if (sub.key === 'custom-software-development') {
                                router.push('/sd_services');
                              } else if (sub.key === 'ai-ml') {
                                router.push('/aiml_services');
                              } else if (sub.key === 'web-development') {
                                router.push('/web_services');
                              } else if (sub.key === 'mobile-app-development') {
                                router.push('/mobile_services');
                              } else if (sub.key === 'careers') {
                                router.push('/careers');
                              } else if (sub.key === 'blogs') {
                                router.push('/blogs');
                              } else if (sub.key === 'hackathon') {
                                router.push('/hackathon');
                              } else {
                                router.push('/services');
                              }
                              setIsMenuOpen(false);
                            }}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '500',
                              color: COLORS.textMuted,
                              fontFamily: FONT_FAMILY,
                              padding: '8px 0',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                            }}
                            whileHover={{ 
                              color: COLORS.primary,
                              x: 4,
                            }}
                            whileTap={{ scale: 0.98 }}>
                            {sub.icon && sub.icon}
                            {sub.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
