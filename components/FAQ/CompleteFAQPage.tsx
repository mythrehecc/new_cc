'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './hero';
import Banner from './banner';
import GeneralFAQ from './GeneralFAQ';
import WebServicesFAQ from './WebServicesFAQ';
import MobileServicesFAQ from './MobileServicesFAQ';
import AIServicesFAQ from './AIServicesFAQ';
import SoftwareDevelopmentFAQ from './SoftwareDevelopmentFAQ';
import HackathonFAQ from './HackathonFAQ';

export default function CompleteFAQPage() {
  const [activeSection, setActiveSection] = useState('general');

  // Navigation sections
  const sections = [
    { id: 'general', name: 'General', icon: '🏢' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱' },
    { id: 'ai', name: 'AI & ML Services', icon: '🤖' },
    { id: 'software', name: 'Software Development', icon: '💻' },
    { id: 'hackathon', name: 'Hackathon', icon: '🏆' },
  ];

  // Handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        .sticky-nav {
          position: sticky;
          top: 80px;
          z-index: 40;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #e2e8f0;
        }
        
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4F46E5, #0EA5E9);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-item.active::after {
          width: 100%;
        }
        
        .section-divider {
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          height: 1px;
          margin: 4rem 0;
        }
        
        @media (max-width: 768px) {
          .sticky-nav {
            top: 70px;
          }
          
          .nav-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .nav-container::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <Hero />

      {/* Sticky Navigation */}
      <div className="sticky-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nav-container flex items-center gap-2 py-4 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`nav-item flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'text-blue-600 bg-blue-50 active'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="text-sm sm:text-base">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* General FAQ Section */}
        <section id="general" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <GeneralFAQ />
          </motion.div>
        </section>

        <div className="section-divider"></div>

        {/* Web Development FAQ Section */}
        <section id="web" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <WebServicesFAQ />
          </motion.div>
        </section>

        <div className="section-divider"></div>

        {/* Mobile Development FAQ Section */}
        <section id="mobile" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <MobileServicesFAQ />
          </motion.div>
        </section>

        <div className="section-divider"></div>

        {/* AI & ML FAQ Section */}
        <section id="ai" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <AIServicesFAQ />
          </motion.div>
        </section>

        <div className="section-divider"></div>

        {/* Banner CTA Section */}
        <Banner />

        <div className="section-divider"></div>

        {/* Software Development FAQ Section */}
        <section id="software" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <SoftwareDevelopmentFAQ />
          </motion.div>
        </section>

        <div className="section-divider"></div>

        {/* Hackathon FAQ Section */}
        <section id="hackathon" className="mb-16 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}>
            <HackathonFAQ />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
