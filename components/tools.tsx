import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/app/common';

const PRIMARY_COLOR = '#6366f1';
const FILES_HUB_COLOR = '#3b82f6';
const FAMILY_BOARD_COLOR = '#8b5cf6';
const FINANCE_BOARD_COLOR = '#10b981';
const HEALTH_BOARD_COLOR = '#f59e0b';
const HOME_BOARD_COLOR = '#ef4444';
const NOTES_HUB_COLOR = '#06b6d4';

// Modern Tools Section Component
interface TopicData {
  key: string;
  title: string;
  description: string;
  image: string;
  learnMore?: string;
  board?: string;
  color?: string;
}

const topicsData: TopicData[] = [
  {
    key: '1',
    title: 'Connect & Organize Everything That Matters',
    description:
      "Bring everything together with Dockly's Smart Hub – files, bookmarks, notes, events, and more – all organized in Dockly's Hubs and Boards for seamless management.",
    learnMore: 'Learn more',
    board: 'Files Hub',
    color: FILES_HUB_COLOR,
    image: 'dockly_connect.png',
  },
  {
    key: '2',
    title: 'Save & Secure Accounts, Passwords, and Favorites',
    description:
      'Store all your accounts, passwords and access codes. Capture favorites such as recipes, travel ideas, purchases to consider, inspiration, hobbies, and anything else you want to remember. Organized in curated collections.',
    learnMore: 'Learn more',
    board: 'Notes Hub',
    color: NOTES_HUB_COLOR,
    image: 'dockly_bookmarks_hub.png',
  },
  {
    key: '3',
    title: 'Organize Your Family & Guardians',
    description:
      'Manage family details, records, plans, and set up Guardians & Estate planning. Capture and manage what matters for today while preparing for tomorrow.',
    learnMore: 'Learn more',
    board: 'Family Board',
    color: FAMILY_BOARD_COLOR,
    image: 'dockly_family_board.png',
  },
  {
    key: '4',
    title: 'Link & Track Finances',
    description:
      'Track financial accounts, transactions, cash flow, and goals across all your connected accounts. Understand spending, plan smarter, and stay in control.',
    learnMore: 'Learn more',
    board: 'Finance Board',
    color: FINANCE_BOARD_COLOR,
    image: 'dockly_finance_board.png',
  },
  {
    key: '5',
    title: 'Stay on Top of Health and Wellness',
    description:
      'Centralize medical records, appointments, medications, and health tasks for every family member.',
    learnMore: 'Learn more',
    board: 'Health Board',
    color: HEALTH_BOARD_COLOR,
    image: 'dockly_health_board.png',
  },
  {
    key: '6',
    title: 'Manage Home & Property',
    description:
      'Organize home details, maintenance, tasks, warranties, insurance, vehicles, contractors, and more. All in one place.',
    learnMore: 'Learn more',
    board: 'Home Board',
    color: HOME_BOARD_COLOR,
    image: 'dockly_home_board.png',
  },
  {
    key: '7',
    title: 'Stay on Top of Everything',
    description:
      "Dockly's Planner brings together all your events, tasks, activities, and to-do's – so you can plan, track, and get things done.",
    learnMore: 'Learn more',
    board: 'Planner',
    color: PRIMARY_COLOR,
    image: 'dockly_planner_hub.png',
  },
];

function Tools() {
  const isMobile = useIsMobile();
  const [activeKey, setActiveKey] = useState<string>('1');
  const [progress, setProgress] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hasCompletedCycle, setHasCompletedCycle] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const topicIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlaying || userInteracted || hasCompletedCycle) {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (topicIntervalRef.current) clearInterval(topicIntervalRef.current);
      return;
    }

    const totalDuration = 4000; // 4 seconds per topic
    const intervalDuration = 50; // Update every 50ms for smoother animation
    const progressIncrement = 100 / (totalDuration / intervalDuration);

    // Reset progress when starting new topic
    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return Math.min(prev + progressIncrement, 100);
      });
    }, intervalDuration);

    topicIntervalRef.current = setTimeout(() => {
      setActiveKey((prev) => {
        const currentIndex = topicsData.findIndex(
          (topic) => topic.key === prev
        );
        const nextIndex = (currentIndex + 1) % topicsData.length;

        // Check if we've completed one full cycle
        if (currentIndex === topicsData.length - 1) {
          setHasCompletedCycle(true);
          setIsAutoPlaying(false);
          return topicsData[0].key; // Return to first item
        }

        return topicsData[nextIndex].key;
      });
    }, totalDuration);

    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (topicIntervalRef.current) clearTimeout(topicIntervalRef.current);
    };
  }, [activeKey, isAutoPlaying, userInteracted, hasCompletedCycle]);

  const currentTopic =
    topicsData.find((topic) => topic.key === activeKey) || topicsData[0];

  const handleTopicClick = (topicKey: string) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setProgress(100);
    setActiveKey(topicKey);
  };

  return (
    <section
      id="use-cases"
      style={{
        fontFamily: "'Urbanist', sans-serif",
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: isMobile ? '0rem' : '5rem',
        paddingBottom: isMobile ? '0rem' : '6.5rem',
      }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Urbanist', sans-serif !important;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .mobile-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .mobile-image-container {
            width: 100% !important;
            margin-left: 0 !important;
            margin-top: 1rem !important;
            height: 400px !important;
          }

          .mobile-header h2 {
            font-size: 2rem !important;
          }

          .mobile-header p {
            font-size: 0.9rem !important;
            padding: 0 1rem !important;
          }

          .mobile-section {
            padding-top: 3rem !important;
            padding-bottom: 4rem !important;
          }
        }

        /* Tablet Responsive Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .tablet-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .tablet-image-container {
            width: 100% !important;
            max-width: 600px !important;
            margin: 0 auto !important;
            margin-top: 2rem !important;
            height: 450px !important;
          }

          .tablet-header h2 {
            font-size: 2.25rem !important;
          }

          .tablet-header p {
            font-size: 1rem !important;
            padding: 0 2rem !important;
          }

          .tablet-section {
            padding-top: 4rem !important;
            padding-bottom: 5rem !important;
          }
        }

        /* Large Screen Styles */
        @media (min-width: 1025px) {
          .desktop-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
            align-items: start !important;
          }

          .desktop-image-container {
            width: 700px !important;
            height: 500px !important;
            margin-left: 1rem !important;
            margin-top: 20px !important;
          }
        }

        /* Extra Large Screen Styles */
        @media (min-width: 1200px) {
          .xl-container {
            max-width: 90rem !important;
            padding: 0 2rem !important;
          }

          .xl-grid {
            gap: 5rem !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-header h2 {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
            padding: 0 0.5rem !important;
          }

          .mobile-header p {
            font-size: 0.85rem !important;
            padding: 0 0.5rem !important;
          }

          .mobile-image-container {
            height: 300px !important;
            margin: 1rem 0.5rem !important;
            border-radius: 1rem !important;
          }

          .mobile-section {
            padding: 2rem 0.5rem 3rem !important;
          }

          .mobile-topic-item {
            padding: 0.5rem 0 !important;
          }

          .mobile-topic-badge {
            min-width: 1.75rem !important;
            height: 1.75rem !important;
            font-size: 0.8rem !important;
          }

          .mobile-topic-title {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
          }

          .mobile-topic-description {
            font-size: 0.7rem !important;
            line-height: 1.4 !important;
          }
        }

        /* Ultra-wide Screen Support */
        @media (min-width: 1600px) {
          .ultrawide-container {
            max-width: 100rem !important;
          }

          .ultrawide-grid {
            gap: 6rem !important;
          }

          .ultrawide-image-container {
            width: 800px !important;
            height: 600px !important;
          }
        }

        /* Landscape Mobile/Tablet */
        @media (max-width: 1024px) and (orientation: landscape) {
          .landscape-section {
            padding-top: 2rem !important;
            padding-bottom: 3rem !important;
          }

          .landscape-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }

          .landscape-image-container {
            height: 350px !important;
          }
        }
      `}</style>

      {/* Background Elements */}

      <div
        className={`mobile-section tablet-section xl-container ultrawide-container landscape-section`}
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          zIndex: 2,
          marginTop: '-0.5rem',
        }}>
        {/* Header Section */}
        <motion.div
          className="mobile-header tablet-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '1rem',
              lineHeight: '1.1',
              fontFamily: "'Urbanist', sans-serif",
            }}>
            Everything You Need.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              Beautifully Connected.
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            Dockly is a comprehensive life management platform providing a
            clear, connected view of what matters most. So you can stay
            organized, take action, and keep life running smoothly.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div
          className="mobile-grid tablet-grid desktop-grid xl-grid ultrawide-grid landscape-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
            alignItems: 'start',
            marginTop: '3rem',
          }}>
          {/* Topics List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {topicsData.map((topic, index) => (
                <motion.div
                  key={topic.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleTopicClick(topic.key)}
                  className="mobile-topic-item"
                  style={{
                    cursor: 'pointer',
                    padding: '0.75rem 0',
                    borderBottom:
                      index < topicsData.length - 1
                        ? '1px solid rgba(148, 163, 184, 0.2)'
                        : 'none',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ x: 8 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}>
                    {/* Number Badge */}
                    <motion.div
                      className="mobile-topic-badge"
                      style={{
                        minWidth: isMobile ? '2rem' : '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        backgroundColor:
                          activeKey === topic.key
                            ? PRIMARY_COLOR
                            : 'rgba(99, 102, 241, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color:
                          activeKey === topic.key
                            ? 'white'
                            : 'rgba(99, 102, 241, 0.6)',
                        transition: 'all 0.3s ease',
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}>
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>

                    <div style={{ flex: 1 }}>
                      {/* Progress Bar */}
                      {isAutoPlaying && activeKey === topic.key && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          style={{
                            height: '4px',
                            width: '100%',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            marginBottom: '0.5rem',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            transformOrigin: 'left',
                          }}>
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                            transition={{
                              duration: 0.1,
                              ease: 'linear',
                            }}
                            style={{
                              height: '100%',
                              background: `linear-gradient(90deg, ${PRIMARY_COLOR}, #8b5cf6)`,
                              borderRadius: '2px',
                            }}
                          />
                        </motion.div>
                      )}

                      <h3
                        className="mobile-topic-title"
                        style={{
                          fontSize: isMobile ? '0.875rem' : '1rem',
                          fontWeight: '600',
                          color:
                            activeKey === topic.key ? '#0f172a' : '#475569',
                          transition: 'color 0.3s ease',
                          fontFamily: "'Urbanist', sans-serif",
                        }}>
                        {topic.title}
                      </h3>

                      {activeKey === topic.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}>
                          <p
                            className="mobile-topic-description"
                            style={{
                              fontSize: isMobile ? '0.75rem' : '1rem',
                              lineHeight: '1.6',
                              color: '#64748b',
                              fontFamily: "'Urbanist', sans-serif",
                              fontWeight: '400',
                              marginTop: '0.25rem',
                            }}>
                            {topic.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="mobile-image-container tablet-image-container desktop-image-container ultrawide-image-container landscape-image-container"
                style={{
                  width: '775px',
                  height: '550px', // 👈 fixed height
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  marginLeft: isMobile ? '0' : '1rem',
                  marginTop: isMobile ? '0' : '20px',
                  // boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}>
                <img
                  src={currentTopic.image}
                  alt={currentTopic.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    flexGrow: 1,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Video Section - COMMENTED OUT */}
          {/*
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{
                  // width: '100%',
                  width: 690,
                  maxWidth: '960px',
                  height: '520px',
                  borderRadius: '1.5rem',
                  marginLeft: '5rem',
                  marginTop: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
                  background: '#000',
                }}>
                <video
                  // key={currentTopic.video}
                  // src={currentTopic.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.25rem',
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.65), transparent)',
                  }}>
                  <h4
                    style={{
                      color: '#fff',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      margin: 0,
                      fontFamily: "'Urbanist', sans-serif",
                    }}>
                    {currentTopic.board}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
}

export default Tools;
