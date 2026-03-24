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
    <div className={`relative inline-flex items-center ${className}`}>
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

const HeroSection1 = forwardRef<WishlistFormRef>((props, ref) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { config, saveConfigToServer } = useAdmin();
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        // background: '#6366F1',
        // background: '#6366F1',
        background:
          'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #F5F7FF 100%)',
        // background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        marginTop: '-5rem',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        fontFamily: "'Urbanist', sans-serif",
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
          background: #6366f1;
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
          background-size: 40px 40px;
        }

        .grid-box {
          position: absolute;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .grid-box.accent-indigo {
          background: rgba(99, 102, 241, 0.12);
          border-color: rgba(99, 102, 241, 0.45);
        }

        .grid-box.accent-purple {
          background: rgba(168, 85, 247, 0.12);
          border-color: rgba(168, 85, 247, 0.45);
        }

        @keyframes accentBlink {
          0%,
          100% {
            opacity: 0.55;
            box-shadow: none;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 22px var(--glow-color);
          }
        }

        .grid-box.blink {
          animation: accentBlink 3.5s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
        }

        .input-glowing {
          animation: inputBlink 0.8s ease-in-out 5,
            pulseGlow 2s ease-in-out infinite;
        }

        .text-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s ease-in-out infinite;
        }

        .bounce-in {
          animation: bounceIn 0.8s ease-out;
        }

        * {
          font-family: 'Urbanist', sans-serif !important;
        }
      `}</style>

      {/* Enhanced Background with Bigger Animated Grid Boxes */}
      <div className="grid-layer">
        {/* Background grid */}
        <div className="grid-pattern" />

        {/* Animated grid boxes */}
        {Array.from({ length: 24 }).map((_, i) => {
          const size = Math.random() * 60 + 40; // 40–100px
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 4;

          const isAccent = Math.random() > 0.65; // ~35%
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
                      ? 'rgba(99,102,241,0.35)'
                      : 'rgba(168,85,247,0.35)',
                } as React.CSSProperties
              }
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
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
            top: '20%',
            right: '15%',
            width: '200px',
            height: '200px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.15), transparent)',
          }}
        />

        <div
          className="floating-orb"
          style={{
            bottom: '30%',
            left: '10%',
            width: '150px',
            height: '150px',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          overflow: 'visible',
          //--_-------------------------------------------------changesssssssssssss
          marginBottom: '-40px',
        }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bounce-in"
            style={{
              //   marginBottom: '55px',
              marginTop: '70px',
              marginLeft: '-55px',
            }}>
            <motion.h1
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                fontFamily: "'Urbanist', sans-serif",
              }}
              className="md:text-6xl text-shimmer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* {config.hero.title}{' '} */}
              The Future of{' '}
              <h1
                style={{
                  marginBottom: '0',
                  fontFamily: "'Urbanist', sans-serif",
                }}>
                <FlipText
                  words={cycleWords}
                  currentIndex={currentWordIndex}
                  className="inline-block"
                />
              </h1>
              <motion.div
                style={{
                  marginTop: '-0.5rem',
                  fontFamily: "'Urbanist', sans-serif",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                {' '}
                has Arrived!
              </motion.div>
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: '400',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              {heroConfig.subtitle}
            </motion.p>

            {/* Enhanced Form */}
            <motion.form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                flexDirection: 'column',
                position: 'relative',
              }}
              className="sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <motion.div
                style={{ flex: 1, position: 'relative' }}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}>
                <motion.input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={isGlowing ? 'input-glowing' : ''}
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    borderRadius: '1rem',
                    border: isGlowing
                      ? '3px solid #3b82f6'
                      : '2px solid rgba(255, 255, 255, 0.3)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isGlowing
                      ? '0 0 0 4px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(0, 0, 0, 0.12)'
                      : '0 4px 12px rgba(0, 0, 0, 0.08)',
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: '500',
                    caretColor: '#3b82f6',
                    transform: isGlowing ? 'scale(1.02)' : 'scale(1)',
                  }}
                  whileFocus={{
                    borderColor: '#3b82f6',
                    boxShadow:
                      '0 0 0 4px rgba(59, 130, 246, 0.15), 0 12px 24px rgba(0, 0, 0, 0.12)',
                    caretColor: '#3b82f6',
                  }}
                />

                <motion.div
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                  }}
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
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                    color: '#6366F1',
                    padding: '17px 15px',
                    borderRadius: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    fontFamily: "'Urbanist', sans-serif",
                    border: 'none',
                    cursor: isSubmitted ? 'default' : 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, transparent 100%)',
                      transform: 'translateX(-100%)',
                    }}
                    animate={
                      isHovered
                        ? { transform: 'translateX(100%)' }
                        : { transform: 'translateX(-100%)' }
                    }
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />

                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      zIndex: 1,
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
                      <motion.div
                        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}>
                        <p style={{ marginLeft: '5px', margin: 0 }}>
                          Add to Waitlist
                        </p>
                      </motion.div>
                    )}
                  </motion.div>

                  {!isSubmitted && (
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background:
                          'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)',
                        transform: 'skewX(-25deg)',
                      }}
                      animate={{ left: ['100%', '200%'] }}
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
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem',
                fontSize: '0.9rem',
                marginTop: '-1rem',
                color: 'rgba(255, 255, 255, 0.75)',
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
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.35rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.045)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '1.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.25s ease',
                    }}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.9 + index * 0.08,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                      y: -1,
                    }}>
                    <IconComponent
                      style={{
                        color: feature.color,
                        marginRight: '0.4rem',
                        width: '0.85rem',
                        height: '0.85rem',
                        flexShrink: 0,
                      }}
                    />

                    <span
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 500,
                        lineHeight: 1,
                        whiteSpace: 'nowrap',
                      }}>
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Enhanced Image */}
          <div
            style={{
              position: 'relative',
              height: '90vh',

              /* 🔥 critical: perspective must be on parent */
              perspective: '1200px',

              /* allow the tilt to visually escape */
              overflow: 'visible',

              zIndex: 5,
              marginRight: '-90%',
              marginLeft: '20px',
              marginBottom: '-140px',
            }}>
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                // marginTop: '-20px', //-----
                marginTop: '70px',
                marginLeft: '-10px',
                position: 'relative',
                borderRadius: '24px 0 0 0',
                overflow: 'hidden',
                background: 'transparent',

                /* 🔥 THIS is what makes the tilt visible */
                transformOrigin: 'left center',
                transform: 'rotateZ(14deg) rotateY(20deg)',
                /* performance + rendering fixes */
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, x: 120, y: 80 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}>
              <Image
                src="hero_2.png"
                // src="hero_full.png"
                alt="Hero Image"
                // fill
                width={920}
                height={1100}
                priority
                style={{
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </div>

          {/* <div
            style={{
              position: 'relative',
              height: '80vh',
              overflow: 'hidden',
              zIndex: 5,
              marginRight: '-30%',
            }}>
            <div
              style={{
                width: '760px',
                height: '620px',
                marginTop: '40px',
                marginBottom: '-100px',
                marginRight: '-1500px', // 🔥 breaks outside container
                position: 'relative',
                zIndex: 2,
                borderRadius: '16px',
                overflow: 'hidden',
                transform: 'perspective(1000px) rotateZ(-6deg) rotateY(-6deg)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
                background: '#ffffff',
              }}>
              <Image
                src="/hero.jpeg"
                alt="Hero Image"
                fill
                priority
                style={{
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '160px',
                  background:
                    'linear-gradient(to bottom, rgba(99,102,241,0) 0%, #6366F1 90%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
});

export default HeroSection1;
