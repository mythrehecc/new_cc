import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlipTextProps {
  words: Array<{ word: string; image: string; color: string }>;
  currentIndex?: number;
  className?: string;
}

export default function FlipText({
  words,
  currentIndex: externalIndex,
  className = '',
}: FlipTextProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [hasRotated, setHasRotated] = useState(false);

  // Use external index if provided, otherwise use internal rotation logic
  const currentIndex =
    externalIndex !== undefined ? externalIndex : internalIndex;
  const currentWord = words[currentIndex];

  // One-time rotation through all words
  useEffect(() => {
    if (externalIndex !== undefined || hasRotated) return;

    let rotationIndex = 0;
    const rotationInterval = setInterval(() => {
      rotationIndex++;

      if (rotationIndex >= words.length) {
        // Completed one full rotation, stop at index 0
        setInternalIndex(0);
        setHasRotated(true);
        clearInterval(rotationInterval);
      } else {
        setInternalIndex(rotationIndex);
      }
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(rotationInterval);
  }, [words.length, externalIndex, hasRotated]);

  // Split by words first, then by characters, preserving spaces
  const wordParts = currentWord?.word.split(' ') || [];

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Flip Text Container */}
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
            {/* Render each word with proper spacing */}
            {wordParts.map((word, wordIndex) => (
              <React.Fragment key={`word-${currentIndex}-${wordIndex}`}>
                {/* Render each character in the word */}
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
                          fontWeight: '700',
                          fontSize: 'inherit',
                          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          display: 'block',
                          //   WebkitTextStroke: '1px black',
                        }}>
                        {letter}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Add space between words (except for the last word) */}
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
