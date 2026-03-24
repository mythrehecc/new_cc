import React from 'react';
import {
  Shield,
  Bookmark,
  Users,
  Heart,
  ChevronRight,
  FolderLock,
  FileText,
  Landmark,
  Wallet,
  ChevronDown,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/app/common';

const DocklyHero = () => {
  const isMobile = useIsMobile();
  const apps = [
    {
      icon: FolderLock,
      name: 'Digital Family Vault',
      description: 'such as Trustworthy, Dropbox',
      color: 'bg-purple-500',
      borderColor: 'border-l-purple-500',
    },
    {
      icon: Shield,
      name: 'Accounts and Password Manager',
      description: 'such as LastPass, OnePassword',
      color: 'bg-green-500',
      borderColor: 'border-l-green-500',
    },
    {
      icon: Bookmark,
      name: 'Bookmark Manager & Extension',
      description: 'such as Pocket, Chrome Bookmarks',
      color: 'bg-yellow-500',
      borderColor: 'border-l-yellow-500',
    },
    {
      icon: FileText,
      name: 'Essential Document Management',
      description: 'such as DocuSign, Evernote',
      color: 'bg-blue-500',
      borderColor: 'border-l-blue-500',
    },
    {
      icon: Landmark,
      name: 'Family Legacy & Estate Planning',
      description: 'such as Trust & Will, Everplans',
      color: 'bg-red-500',
      borderColor: 'border-l-red-500',
    },
    {
      icon: Users,
      name: 'Family Planning & Management',
      description: 'such as Cozi, FamilyWall',
      color: 'bg-purple-600',
      borderColor: 'border-l-purple-600',
    },
    {
      icon: Wallet,
      name: 'Finance Management',
      description: 'such as Monarch, YNAB',
      color: 'bg-cyan-500',
      borderColor: 'border-l-cyan-500',
    },
    {
      icon: Heart,
      name: 'Health & Wellness Management',
      description: 'such as Apple Health, MyChart',
      color: 'bg-pink-500',
      borderColor: 'border-l-pink-500',
    },
  ];

  const scrollToHero = () => {
    document
      .getElementById('hero-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="whyDockly"
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{ marginBottom: isMobile ? 0 : '-100px' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
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
                color: 'black',
              }}>
              Consolidate.{' '}
            </span>

            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Simplify.
            </span>
            <span
              style={{
                color: 'black',
              }}>
              Save{' '}
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
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            With Dockly - you'll have one place to connect, organize, and manage
            your life. More clarity, less cost, greater peace of mind.
          </motion.p>
        </motion.div>

        <div
          className="grid lg:grid-cols-12 gap-12 items-center"
          style={{ marginTop: '-0px' }}>
          {/* Left Column - App Grid */}
          <div className="lg:col-span-7" style={{ marginTop: '-0px' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stop juggling multiple fragmented apps and messy spreadsheets.
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4" style={{ marginTop: 0 }}>
              {apps.map((app, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-5 shadow-sm border-l-4 ${app.borderColor} hover:shadow-md transition-shadow duration-200`}>
                  <div className="flex items-start space-x-3">
                    <div
                      className={`${app.color} p-2 rounded-lg flex-shrink-0`}>
                      <app.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        {app.name}
                      </h3>
                      <p className="text-xs text-gray-500">{app.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Arrow */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="relative w-26 h-20 flex items-center justify-center ">
              <div className="flex items-center space-x-[-28px]">
                {isMobile ? (
                  <>
                    <ChevronDown
                      className="w-10 h-10 text-gray-700"
                      strokeWidth={2}
                    />
                  </>
                ) : (
                  <>
                    {' '}
                    <ChevronRight
                      className="w-10 h-10 text-gray-700"
                      strokeWidth={2}
                    />
                    <ChevronRight
                      className="w-10 h-10 text-gray-700"
                      strokeWidth={2}
                    />
                    <ChevronRight
                      className="w-10 h-10 text-gray-700"
                      strokeWidth={2}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Right Column - CTA */}
          <div className="lg:col-span-4">
            {/* A Simpler Solution Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                A Simpler Solution.
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 sticky top-8">
              <div className="text-center mb-8">
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    // cursor: 'pointer',
                    zIndex: 10,
                    justifyContent: 'center',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 0,
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80%"
                      height="80%"
                      viewBox="0 0 128 128"
                      aria-hidden="true">
                      <g fill="#6366F1">
                        <rect x="34" y="28" width="60" height="16" rx="8" />
                        <rect x="26" y="56" width="76" height="16" rx="8" />
                        <rect x="18" y="84" width="92" height="16" rx="8" />
                      </g>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      letterSpacing: '-0.02em',
                      fontFamily: 'Urbanist, sans-serif',
                      color: '#1f2937',
                      transition: 'color 0.3s ease',
                    }}>
                    dockly
                  </span>
                </motion.div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Join Dockly if you:
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Want one trusted system, not 10 apps</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Are managing real complexity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Value privacy, clarity, and long-term thinking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Are willing to invest in bringing structure and proactive
                      planning to your life
                    </span>
                  </li>
                </ul>
              </div>

              <button
                onClick={scrollToHero}
                className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                {/* Get Started with Dockly */}
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocklyHero;
