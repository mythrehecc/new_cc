import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Percent, Shield, Gift, Settings, RotateCcw } from 'lucide-react';
import { useAdmin } from './admin/context';

import Image from 'next/image';
export interface WishlistFormRef {
  focusAndGlow: () => void;
}

interface FlipTextProps {
  words: Array<{ word: string; image: string; color: string }>;
  currentIndex?: number;
  className?: string;
}

function FlipText({
  words,
  currentIndex: externalIndex,
  className = '',
}: FlipTextProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [hasRotated, setHasRotated] = useState(false);

  const currentIndex =
    externalIndex !== undefined ? externalIndex : internalIndex;
  const currentWord = words[currentIndex];

  React.useEffect(() => {
    if (externalIndex !== undefined || hasRotated) return;

    let rotationIndex = 0;
    const rotationInterval = setInterval(() => {
      rotationIndex++;

      if (rotationIndex >= words.length) {
        setInternalIndex(0);
        setHasRotated(true);
        clearInterval(rotationInterval);
      } else {
        setInternalIndex(rotationIndex);
      }
    }, 2000);

    return () => clearInterval(rotationInterval);
  }, [words.length, externalIndex, hasRotated]);

  const COMMON_SUFFIX = ' Management';

  const wordParts = `${currentWord?.word}${COMMON_SUFFIX}`.split(' ');

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      // style={{ marginLeft: '-650px' }}
    >
      <div
        className="relative inline-flex"
        style={{ minWidth: '200px', minHeight: '1.2em' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex items-center"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.4 },
            }}
            style={{
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
            }}>
            {wordParts.map((word, wordIndex) => (
              <React.Fragment key={`word-${currentIndex}-${wordIndex}`}>
                <div className="inline-flex" style={{ display: 'inline-flex' }}>
                  {word.split('').map((letter, letterIndex) => (
                    <motion.div
                      key={`${currentIndex}-${wordIndex}-${letterIndex}`}
                      className="relative inline-block"
                      initial={{ y: 30, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: (wordIndex * word.length + letterIndex) * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                      }}>
                      <span
                        style={{
                          color: currentWord?.color,
                          fontWeight: '600',
                          fontSize: 'inherit',
                          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          display: 'block',
                          fontFamily: "'Urbanist', sans-serif",
                        }}>
                        {letter}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {wordIndex < wordParts.length - 1 && (
                  <motion.div
                    key={`space-${currentIndex}-${wordIndex}`}
                    className="relative inline-block"
                    initial={{ y: 30, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: (wordIndex * word.length + word.length) * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      width: '0.5em',
                      display: 'inline-block',
                    }}>
                    <span
                      style={{
                        color: 'transparent',
                        fontWeight: '700',
                        fontSize: 'inherit',
                        display: 'block',
                      }}>
                      &nbsp;
                    </span>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

import { useScroll, useTransform } from 'framer-motion';

const HeroSection = forwardRef<WishlistFormRef>((props, ref) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { config, saveConfigToServer } = useAdmin();
  const [email, setEmail] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hasCompletedOneCycle, setHasCompletedOneCycle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const heroConfig = (config as any)?.hero || {};
  const heroCycleWords = heroConfig?.cycleWords || [];
  const heroFeatures = heroConfig?.features || [];

  useImperativeHandle(ref, () => ({
    focusAndGlow: () => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

        setIsGlowing(true);

        setTimeout(() => {
          inputRef.current?.focus();
          inputRef.current?.setSelectionRange(email.length, email.length);
        }, 800);

        setTimeout(() => {
          setIsGlowing(false);
        }, 4000);
      }
    },
  }));

  React.useEffect(() => {
    if (!isAutoPlay || isImageHovered) return;

    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % heroCycleWords.length;

      if (currentWordIndex === heroCycleWords.length - 1) {
        setIsAutoPlay(false);
        setHasCompletedOneCycle(true);
        return;
      }

      handleWordChange(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [
    isAutoPlay,
    isImageHovered,
    currentWordIndex,
    heroCycleWords.length,
  ]);

  const handleWordChange = (index: number) => {
    setCurrentWordIndex(index);

    if (index < heroCycleWords.length - 1 && hasCompletedOneCycle) {
      setHasCompletedOneCycle(false);
      setIsAutoPlay(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setShowConfetti(true);
      setEmail('');

      setTimeout(() => {
        setIsSubmitted(false);
        setShowConfetti(false);
      }, 2000);
    }, 1000);
  };

  const iconMap = {
    Percent,
    Shield,
    RotateCcw,
    Gift,
    Settings,
  };

  const cycleWords = [
    {
      word: 'Family',
      image: '/family.png',
      color: '#2A1B3D',
    },
    {
      word: 'Finances',
      image: '/finance.png',
      color: '#1E3A5F',
    },
    {
      word: 'Home',
      image: '/home.png',
      color: '#1F3D2B',
    },
    {
      word: 'Health',
      image: '/health.png',
      color: '#5A1212',
    },
    {
      word: 'Life',
      image: '/planner1.png',
      color: '#0F172A',
    },
  ];

  const { scrollYProgress } = useScroll();

  // Scroll animations for decorative images
  const leftTopImageY = useTransform(scrollYProgress, [0, 0.5], [-80, -120]);
  const leftTopImageX = useTransform(scrollYProgress, [0, 0.1], [80, -50]);

  const leftBottomImageY = useTransform(scrollYProgress, [0, 0.1], [0, 380]);
  const leftBottomImageX = useTransform(scrollYProgress, [0, 0.1], [0, 270]);

  const rightBottomImageY = useTransform(scrollYProgress, [0, 0.1], [0, 280]);
  const rightBottomImageX = useTransform(scrollYProgress, [0, 0.1], [0, -200]);

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.1],
    [1, 0.6, 0]
  );
  const imageScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        background: '#6366F1',
        fontFamily: "'Urbanist', sans-serif",
        marginTop: '-80px',
      }}
      id="hero-section">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

        @keyframes gridBlink {
          0%,
          100% {
            background-color: rgba(255, 255, 255, 0.03);
            border-color: rgba(255, 255, 255, 0.08);
          }
          50% {
            background-color: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
        }

        @keyframes floatingAnimation {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }

        @keyframes inputBlink {
          0%,
          50% {
            border-color: #ff4d4f;
            box-shadow: 0 0 0 4px rgba(255, 77, 79, 0.3),
              0 0 25px rgba(255, 77, 79, 0.4), 0 8px 32px rgba(0, 0, 0, 0.12);
            transform: scale(1.02);
          }
          25%,
          75% {
            border-color: #3b82f6;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3),
              0 0 25px rgba(59, 130, 246, 0.4), 0 8px 32px rgba(0, 0, 0, 0.12);
            transform: scale(1.02);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.1),
              0 0 30px rgba(99, 102, 241, 0.3);
          }
        }

        @keyframes textShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3) translateY(50px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(0);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .grid-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.08) 2px,
              transparent 2px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.08) 2px,
              transparent 2px
            );
          background-size: 60px 60px;
        }

        .grid-box {
          position: absolute;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .grid-box.accent-indigo {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.4);
        }

        .grid-box.accent-purple {
          background: rgba(168, 85, 247, 0.15);
          border-color: rgba(168, 85, 247, 0.4);
        }

        @keyframes accentBlink {
          0%,
          100% {
            opacity: 0.6;
            box-shadow: none;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 30px var(--glow-color);
          }
        }

        .grid-box.blink {
          animation: accentBlink 4s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }

        .input-glowing {
          animation: inputBlink 0.8s ease-in-out 5,
            pulseGlow 2s ease-in-out infinite;
        }

        .text-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.9) 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 4s ease-in-out infinite;
        }

        .bounce-in {
          animation: bounceIn 1s ease-out;
        }

        .description-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        * {
          font-family: 'Urbanist', sans-serif !important;
        }

        .floating-side-image {
          animation: floatingAnimation 6s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Background */}
      <div className="grid-layer">
        <div className="grid-pattern" />

        {/* Animated grid boxes */}
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 80 + 50;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 6;

          const isAccent = Math.random() > 0.7;
          const accentType =
            Math.random() > 0.5 ? 'accent-indigo' : 'accent-purple';

          return (
            <motion.div
              key={i}
              className={`grid-box ${isAccent ? `${accentType} blink` : ''}`}
              style={
                {
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  '--delay': `${delay}s`,
                  '--glow-color':
                    accentType === 'accent-indigo'
                      ? 'rgba(99,102,241,0.4)'
                      : 'rgba(168,85,247,0.4)',
                } as React.CSSProperties
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay,
                ease: 'easeOut',
              }}
            />
          );
        })}

        {/* Floating light orbs */}
        <div
          className="floating-orb"
          style={{
            top: '15%',
            right: '20%',
            width: '300px',
            height: '300px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.2), transparent)',
          }}
        />

        <div
          className="floating-orb"
          style={{
            bottom: '20%',
            left: '15%',
            width: '250px',
            height: '250px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.15), transparent)',
          }}
        />

        <div
          className="floating-orb"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.1), transparent)',
          }}
        />
      </div>

      {/* Content Section - Top */}

      <div
        className="flex-1 flex items-center justify-center relative z-10 pt-40 pb-8 px-4 sm:px-6 lg:px-8"
        style={{
          marginBottom: '-200px', // pull section down
          marginLeft: window.innerWidth >= 1024 ? '50px' : '0px', // shift right
        }}>
        {/* Left Side Decorative Images */}

        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div
            style={{
              position: 'relative',
              width: '220px',
              height: '400px',
            }}>
            {/* Image 1 - Top image with scroll animation */}
            <motion.div
              // initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 1, delay: 0.8 }}
              style={{
                position: 'absolute',
                left: '80px',
                y: leftTopImageY,
                x: leftTopImageX,
                opacity: imageOpacity,
                scale: imageScale,
              }}>
              <img
                src="/pp.png"
                alt="Decorative element"
                style={{
                  width: '180px',
                  height: '80px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  filter: 'brightness(1.2) contrast(1.1)',
                }}
              />
            </motion.div>

            {/* Image 2 - Bottom image with scroll animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                position: 'absolute',
                top: '190px',
                left: '-60px',
                y: leftBottomImageY,
                x: leftBottomImageX,
                opacity: imageOpacity,
                scale: imageScale,
              }}>
              <img
                src="/gp.png"
                alt="Decorative element"
                style={{
                  width: '178px',
                  height: '150px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  filter: 'brightness(1.2) contrast(1.1)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side Decorative Images */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div
            style={{
              position: 'relative',
              width: '220px',
              height: '400px',
            }}>
            {/* Image 1 */}

            {/* Image 2 - Bottom image with scroll animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{
                position: 'absolute',
                top: '290px',
                right: '50px',
                y: rightBottomImageY,
                x: rightBottomImageX,
                opacity: imageOpacity,
                scale: imageScale,
              }}>
              <img
                src="/op.png"
                alt="Decorative element"
                style={{
                  width: '130px',
                  height: '165px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  filter: 'brightness(1.2) contrast(1.1)',
                  border: '2px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                }}
              />
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="bounce-in">
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-black text-white leading-tight mb-8 text-shimmer"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              The Future of{' '}
              <div
                className="block"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  textAlign: 'center',
                  marginLeft: '-600px',
                }}>
                <FlipText
                  words={cycleWords}
                  currentIndex={currentWordIndex}
                  className="inline-block"
                />
              </div>
              <motion.div
                className="mt-2"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}>
                has Arrived!
              </motion.div>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-lg text-white/95 font-normal max-w-5xl mx-auto mb-12 description-clamp leading-relaxed"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}>
              {heroConfig.subtitle}
            </motion.p>

            {/* Enhanced Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <motion.div
                className="flex-1 relative"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}>
                <motion.input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`w-full p-4 text-lg rounded-2xl border-2 outline-none transition-all duration-300 font-medium ${
                    isGlowing ? 'input-glowing' : 'border-white/30'
                  }`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isGlowing
                      ? '0 0 0 4px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(0, 0, 0, 0.12)'
                      : '0 4px 12px rgba(0, 0, 0, 0.08)',
                    fontFamily: "'Urbanist', sans-serif",
                    caretColor: '#3b82f6',
                    transform: isGlowing ? 'scale(1.02)' : 'scale(1)',
                  }}
                />

                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300"
                  animate={{
                    backgroundColor:
                      email.includes('@') && email.length > 5
                        ? '#52c41a'
                        : email.length > 0
                        ? '#faad14'
                        : 'transparent',
                    scale:
                      email.includes('@') && email.length > 5 ? [1, 1.3, 1] : 1,
                  }}
                  transition={{
                    scale: {
                      duration: 0.6,
                      repeat:
                        email.includes('@') && email.length > 5 ? Infinity : 0,
                    },
                  }}
                />
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                    color: '#6366F1',
                    fontFamily: "'Urbanist', sans-serif",
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, transparent 100%)',
                      transform: 'translateX(-100%)',
                    }}
                    animate={{ transform: 'translateX(-100%)' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />

                  <motion.div
                    className="flex items-center gap-2 relative z-10"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                    }}>
                    {isSubmitted ? (
                      <>
                        <motion.div
                          transition={{ duration: 0.5, type: 'spring' }}
                        />
                        <span>Added!</span>
                      </>
                    ) : (
                      <span>Add to Waitlist</span>
                    )}
                  </motion.div>

                  {!isSubmitted && (
                    <motion.div
                      className="absolute top-0 left-full w-full h-full"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)',
                        transform: 'skewX(-25deg)',
                      }}
                      animate={{ left: ['-100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  )}
                </Button>
              </motion.div>
            </motion.form>

            {/* Enhanced Features */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 text-base text-white/75"
              style={{
                fontFamily: "'Urbanist', sans-serif",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}>
              {heroFeatures.map((feature: { icon: string; text: string; color: string }, index: number) => {
                const IconComponent =
                  iconMap[feature.icon as keyof typeof iconMap];

                return (
                  <motion.div
                    key={feature.text}
                    className="flex items-center px-3 py-2 rounded-3xl border transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255, 255, 255, 0.045)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.9 + index * 0.08,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                    }}>
                    <IconComponent
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{
                        color: feature.color,
                      }}
                    />

                    <span
                      className="font-medium whitespace-nowrap"
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                      }}>
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Section - Bottom */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: '0',
          overflow: 'hidden',
          paddingTop: '100px',
        }}>
        <motion.div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1400px',
            height: '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}>
          <div
            style={{
              position: 'relative',
              width: '1200px',
              height: '700px',
              borderRadius: '3rem 3rem 0 0',
              overflow: 'hidden',
              borderBottom: 'none',
              marginBottom: '-70px',
            }}>
            <Image
              src="/hero_nb.png"
              alt="Hero Image"
              fill
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'center bottom',
              }}
            />

            {/* Subtle gradient overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100px',
                background:
                  'linear-gradient(to bottom, rgba(102,126,234,0.2) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default HeroSection;
