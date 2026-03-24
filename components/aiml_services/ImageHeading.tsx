'use client';

import React from 'react';

interface ImageHeadingProps {
  imageUrl: string;
  headingText: string;
}

// --- INDUSTRIAL DESIGN TOKENS ---
const COLORS = {
  primary: '#4F46E5', // Industrial Indigo
  textBlack: '#020617', // Ink Black
};

const FONT_PRIMARY = "'Plus Jakarta Sans', sans-serif";

export default function ImageHeading({
  imageUrl,
  headingText,
}: ImageHeadingProps) {
  // Logic to split text and highlight the last word
  const words = headingText.trim().split(' ');
  const lastWord = words.pop();
  const remainingText = words.join(' ');

  return (
    <div
      className="relative w-full py-12 sm:py-16 lg:py-20"
      style={{ fontFamily: FONT_PRIMARY }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: COLORS.textBlack,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
              lineHeight: 1.2,
            }}>
            {remainingText}{' '}
            <span style={{ color: COLORS.primary }}>{lastWord}</span>
          </h2>

          <img
            src={imageUrl}
            alt={headingText}
            className="w-full max-w-4xl mx-auto h-auto"
            style={{
              display: 'block',
              // Optional: Matches the bento-style rounded corners if needed
              borderRadius: '12px',
            }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap');
      `}</style>
    </div>
  );
}
