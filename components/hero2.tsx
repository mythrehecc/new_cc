import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Percent,
  Shield,
  Gift,
  Settings,
  RotateCcw,
  CheckCircle,
  Sparkles,
  Heart,
} from 'lucide-react';
import { PRIMARY_COLOR, useIsMobile } from '@/app/common';
import { message } from 'antd';
import { useAddToWishlistMutation } from '@/store/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOTPModalOpen, setOTPData } from '@/store/authSlice';
import { useAdmin } from './admin/context';
import { RootState } from '@/store';
import OTPModal from './otpModal';

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

  return (
    <span className={`inline-block ${className}`} style={{ minWidth: '120px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          style={{
            color: currentWord?.color,
            fontWeight: '800',
            fontSize: 'inherit',
            fontFamily: "'Urbanist', sans-serif",
            display: 'inline-block',
          }}>
          {currentWord?.word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Birthday Celebration Popup Component
const COLORS = [
  '#6366F1', // Dockly primary
  '#4F46E5',
  '#22C55E',
  '#F59E0B',
  '#EF4444',
  '#A855F7',
];

type Props = {
  isVisible: boolean;
};

export const ConfettiBurst = ({ isVisible }: Props) => {
  const pieces = React.useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const velocity = Math.random() * 400 + 200;

        return {
          id: i,
          color: COLORS[i % COLORS.length],
          size: Math.random() * 6 + 6,
          x: Math.cos(angle) * velocity,
          y: Math.sin(angle) * velocity,
          rotation: Math.random() * 720,
          duration: Math.random() * 1 + 1.8,
        };
      }),
    []
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 9999,
          }}>
          {pieces.map((p) => (
            <motion.div
              key={p.id}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
              initial={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                x: p.x,
                y: p.y + 200, // gravity pull
                rotate: p.rotation,
                opacity: 0,
                scale: 0.9,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const HeroSection2 = forwardRef<WishlistFormRef>((props, ref) => {
  const dispatch = useDispatch();
  const { config, saveConfigToServer } = useAdmin();
  const { otpData, isOTPModalOpen } = useSelector(
    (state: RootState) => state.auth
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hasCompletedOneCycle, setHasCompletedOneCycle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [addToWishlist, { isLoading: isSubmitting }] =
    useAddToWishlistMutation();

  const cycleWords = [
    {
      word: 'Family',
      image: '/family.png',
      color: '#dc2626',
    },
    {
      word: 'Finances',
      image: '/finance.png',
      color: '#059669',
    },
    {
      word: 'Home',
      image: '/home.png',
      color: '#7c3aed',
    },
    {
      word: 'Health',
      image: '/health.png',
      color: '#ea580c',
    },
    {
      word: 'Life',
      image: '/planner1.png',
      color: '#1e40af',
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
      const nextIndex = (currentWordIndex + 1) % cycleWords.length;

      if (currentWordIndex === cycleWords.length - 1) {
        setIsAutoPlay(false);
        setHasCompletedOneCycle(true);
        return;
      }

      handleWordChange(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isImageHovered, currentWordIndex, cycleWords.length]);

  const handleWordChange = (index: number) => {
    setCurrentWordIndex(index);

    if (index < cycleWords.length - 1 && hasCompletedOneCycle) {
      setHasCompletedOneCycle(false);
      setIsAutoPlay(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      message.error('Please enter a valid email address');
      return;
    }

    try {
      const result = await addToWishlist({
        email: email,
        first_name: 'Dockly Explorer',
        isNewRequest: true,
        userId: 0,
      }).unwrap();

      if (result.status !== 1) {
        message.error(result.message);
        return;
      }

      // Store OTP data in Redux store
      if (result.payload) {
        dispatch(
          setOTPData({
            userId: result.payload.userId,
            otp: result.payload.otp,
            email: result.payload.email,
          })
        );
        dispatch(setIsOTPModalOpen(true));
      }

      message.success(result.message);
    } catch (error: any) {
      console.log('🚀 ~ handleSubmit ~ error:', error);
      message.error(
        error?.data?.message || 'An error occurred. Please try again.'
      );
    }
  };

  const handleVerify = async (otp: string) => {
    if (!otpData) return false;

    try {
      const { useVerifyOTPMutation } = await import('@/store/apiSlice');
      const [verifyOTP] = useVerifyOTPMutation();

      const result = await verifyOTP({
        userId: otpData.userId,
        email: otpData.email,
        otp: otp,
        storedOtp: otpData.otp,
      }).unwrap();

      if (result.status === 1) {
        message.success('🎉 Email verified successfully!');
        setIsSubmitted(true);
        setShowConfetti(true);
        setEmail('');

        // Clear OTP data and close modal
        dispatch(setOTPData(null));
        dispatch(setIsOTPModalOpen(false));

        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);

        return true;
      } else {
        message.error('❌ Email verification failed. Please try again.');
        return false;
      }
    } catch (error: any) {
      message.error(
        error?.data?.message || 'Verification failed. Please try again.'
      );
      return false;
    }
  };

  const handleResend = async (): Promise<void> => {
    if (!otpData) return;

    try {
      const result = await addToWishlist({
        email: otpData.email,
        isNewRequest: false,
        userId: otpData.userId,
        first_name: 'Dockly Explorer',
      }).unwrap();

      if (result.status === 1 && result.payload) {
        dispatch(
          setOTPData({
            userId: result.payload.userId,
            otp: result.payload.otp,
            email: result.payload.email,
          })
        );
        message.success('New OTP sent successfully!');
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      throw error;
    }
  };

  const iconMap = {
    Percent,
    Shield,
    RotateCcw,
    Gift,
    Settings,
  };

  const isMobile = useIsMobile();

  return (
    <>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          // background:
          //   'linear-gradient(135deg, #dbeafe 0%, #e9d5ff 50%, #cffafe 100%)',
          background:
            'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)',
          // background: '#FFFFFF',
          marginTop: isMobile ? '-2rem' : '-5rem',
          paddingTop: isMobile ? '-2rem' : '7rem',
          paddingBottom: isMobile ? '0' : '8rem',
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

          /* Enhanced Responsive Styles */

          /* Extra Large Screens */
          @media (min-width: 1440px) {
            .hero-container {
              max-width: 85rem !important;
            }
            .hero-title {
              font-size: 4rem !important;
            }
            .hero-subtitle {
              font-size: 1.25rem !important;
            }
            .hero-image-container {
              margin-right: -220px !important;
            }
          }

          /* Large Screens */
          @media (max-width: 1280px) {
            .hero-container {
              max-width: 70rem !important;
              padding: 0 2rem !important;
            }
            .hero-image-container {
              margin-right: -120px !important;
              width: 1000px !important;
              height: 500px !important;
            }
            .hero-content {
              margin-top: 40px !important;
            }
          }

          /* Medium Large Screens */
          @media (max-width: 1024px) {
            .hero-container {
              max-width: 60rem !important;
              padding: 0 1.5rem !important;
              margin-bottom: 0 !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            .hero-title {
              font-size: 3rem !important;
              text-align: center !important;
            }
            .hero-subtitle {
              font-size: 1.1rem !important;
              text-align: center !important;
              max-width: 600px !important;
              margin: 0 auto 2rem auto !important;
            }
            .hero-content {
              margin-top: 20px !important;
              text-align: center !important;
            }
            .hero-image-container {
              margin-right: 0 !important;
              margin-left: 0 !important;
              justify-content: center !important;
              width: 800px !important;
              height: 400px !important;
              max-width: 100% !important;
              transform: scale(0.9) !important;
              margin-top: 2rem !important;
            }
            .hero-form {
              justify-content: center !important;
              max-width: 500px !important;
              margin: 0 auto 2rem auto !important;
            }
          }

          /* Tablet Screens */
          @media (max-width: 768px) {
            .hero-container {
              padding: 0 1.5rem !important;
              max-width: none !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .hero-title {
              font-size: 2.5rem !important;
              line-height: 1.1 !important;
              margin-bottom: 1rem !important;
              text-align: center !important;
            }
            .hero-subtitle {
              font-size: 1rem !important;
              margin-bottom: 1.5rem !important;
              text-align: center !important;
              padding: 0 1rem !important;
            }
            .hero-content {
              margin-top: 0 !important;
              text-align: center !important;
            }
            .hero-image-container {
              height: 300px !important;
              margin-right: 0 !important;
              margin-left: 0 !important;
              width: 100% !important;
              max-width: 600px !important;
              margin: 0 auto !important;
              transform: scale(0.85) !important;
              justify-content: center !important;
            }
            .hero-image {
              width: 100% !important;
              height: 100% !important;
              margin-top: 0 !important;
              margin-left: 0 !important;
              transform: none !important;
              border-radius: 20px !important;
            }
            .hero-form {
              flex-direction: column !important;
              gap: 0.75rem !important;
              max-width: 400px !important;
              margin: 0 auto !important;
            }
            .hero-form-input {
              padding: 0.9rem 1.2rem !important;
              font-size: 1rem !important;
              border-radius: 0.75rem !important;
            }
            .hero-form-button {
              padding: 15px 20px !important;
              font-size: 1rem !important;
              border-radius: 0.75rem !important;
              width: 100% !important;
            }
            .floating-orb {
              display: none !important;
            }
          }

          /* Small Mobile Screens */
          @media (max-width: 480px) {
            .hero-container {
              padding: 0 1rem !important;
            }
            .hero-title {
              font-size: 2rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1rem !important;
            }
            .hero-subtitle {
              font-size: 0.9rem !important;
              line-height: 1.5 !important;
              margin-bottom: 1.5rem !important;
              padding: 0 0.5rem !important;
            }
            .hero-image-container {
              height: 250px !important;
              width: 100% !important;
              transform: scale(0.8) !important;
              margin-top: 1rem !important;
            }
            .hero-form {
              max-width: 100% !important;
              gap: 0.75rem !important;
            }
            .hero-form-input {
              padding: 0.75rem 1rem !important;
              font-size: 0.9rem !important;
              border-radius: 0.75rem !important;
            }
            .hero-form-button {
              padding: 12px 10px !important;
              font-size: 0.9rem !important;
              border-radius: 0.75rem !important;
            }
            .grid-pattern {
              background-size: 20px 20px !important;
            }
            .grid-box {
              display: none !important;
            }
          }

          /* Extra Small Mobile Screens */
          @media (max-width: 360px) {
            .hero-title {
              font-size: 1.8rem !important;
            }
            .hero-subtitle {
              font-size: 0.85rem !important;
            }
            .hero-image-container {
              height: 200px !important;
              transform: scale(0.75) !important;
            }
            .hero-form-input {
              padding: 0.7rem 0.9rem !important;
              font-size: 0.85rem !important;
            }
            .hero-form-button {
              padding: 10px 8px !important;
              font-size: 0.85rem !important;
            }
          }

          /* Landscape Mobile Optimization */
          @media (max-width: 768px) and (orientation: landscape) {
            .hero-grid {
              gap: 1.5rem !important;
            }
            .hero-title {
              font-size: 2.2rem !important;
              margin-bottom: 0.8rem !important;
            }
            .hero-subtitle {
              font-size: 0.95rem !important;
              margin-bottom: 1.2rem !important;
            }
            .hero-image-container {
              height: 220px !important;
              transform: scale(0.7) !important;
            }
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
          className="hero-container"
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem',
            position: 'relative',
            overflow: 'visible',
            marginBottom: '-40px',
          }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              alignItems: 'center',
            }}
            className="hero-grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bounce-in hero-content"
              style={{
                marginTop: '70px',
                // marginLeft: '18px',
              }}>
              <motion.h1
                className="hero-title text-shimmer"
                style={{
                  fontSize: '4rem',
                  fontWeight: '700',
                  color: 'black',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                  fontFamily: "'Urbanist', sans-serif",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                One Connected Platform to Manage Your{' '}
                <FlipText
                  words={cycleWords}
                  currentIndex={currentWordIndex}
                  className="inline-block"
                />
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                style={{
                  fontSize: '1.125rem',
                  color: '#475569',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: '400',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Connect everything. Organize anything. Stay on top of it all.
                From Family and Finances to Home, Health, and everything in
                between - Dockly brings it all together in one connected
                platform.
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
                className="hero-form sm:flex-row"
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
                    className={`hero-form-input ${
                      isGlowing ? 'input-glowing' : ''
                    }`}
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
                        email.includes('@') && email.length > 5
                          ? [1, 1.3, 1]
                          : 1,
                    }}
                    transition={{
                      scale: {
                        duration: 0.6,
                        repeat:
                          email.includes('@') && email.length > 5
                            ? Infinity
                            : 0,
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
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="hero-form-button"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
                      color: '#1e40af',
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
                          'linear-gradient(135deg, rgba(30, 64, 175, 0.2) 0%, transparent 100%)',
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
                            'linear-gradient(90deg, transparent, rgba(30, 64, 175, 0.4), transparent)',
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
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* RIGHT SIDE - Enhanced Image */}

            {/* RIGHT SIDE — image */}
            <div
              className="hero-image-container"
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginRight: isMobile ? 0 : '-180px',
                marginTop: isMobile ? '0' : '40px',
              }}>
              <motion.div
                initial={{ opacity: 0, x: 100, y: 60 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut', delay: 0.25 }}
                style={{
                  width: isMobile ? '100%' : '1300px', // BIGGER container
                  maxWidth: isMobile ? '100%' : '120%',
                  height: isMobile ? '100%' : '600px', // IMPORTANT
                  position: 'relative',
                  transform: 'scale(1.05)', // subtle boost
                }}>
                <div
                  className="hero-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    background: '#ddd6fe',
                    boxShadow:
                      '0 50px 100px rgba(0,0,0,0.14), 0 20px 40px rgba(0,0,0,0.1)',
                  }}>
                  <img
                    src="hero-image.png"
                    alt="Dockly product preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // THIS is why it fills
                      display: 'block',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <OTPModal
          isOpen={isOTPModalOpen}
          onClose={() => dispatch(setIsOTPModalOpen(false))}
          setShowConfetti={setShowConfetti}
          setIsSubmitted={setIsSubmitted}
          email={otpData?.email || ''}
          onVerify={handleVerify}
          onResend={handleResend}
          setEmail={setEmail}
        />
      </section>

      {/* Birthday Celebration Popup */}
      <ConfettiBurst isVisible={showConfetti} />
    </>
  );
});

export default HeroSection2;
