import React from 'react';

// Elegant Botanical Corner in Champagne Gold & Deep Burgundy
export const BotanicalCorner: React.FC<{
  className?: string;
  color?: string;
  flipX?: boolean;
  flipY?: boolean;
}> = ({ className = '', color = '#C9A45C', flipX = false, flipY = false }) => {
  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim();

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none w-16 h-16 sm:w-24 sm:h-24 opacity-85 transition-opacity duration-300 ${className}`}
      style={{ transform: transform || undefined }}
      aria-hidden="true"
    >
      {/* Corner Outer Guide Lines */}
      <path
        d="M 6 45 L 6 6 L 45 6"
        stroke={color}
        strokeWidth="0.75"
        strokeOpacity="0.4"
      />
      <circle cx="6" cy="6" r="1.5" fill={color} fillOpacity="0.6" />

      {/* Main Rose & Botanical Stem */}
      <path
        d="M 8 36 C 14 32, 22 26, 30 18 C 34 14, 38 9, 44 8"
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      
      {/* Leaves & Fine Foliage */}
      <path
        d="M 18 29 C 16 23, 20 18, 26 19 C 24 23, 21 27, 18 29 Z"
        stroke={color}
        strokeWidth="0.7"
        fill={color}
        fillOpacity="0.12"
      />
      <path
        d="M 28 20 C 31 14, 38 15, 36 21 C 32 23, 29 22, 28 20 Z"
        stroke={color}
        strokeWidth="0.7"
        fill={color}
        fillOpacity="0.15"
      />
      <path
        d="M 12 33 C 8 30, 7 24, 11 23 C 13 26, 13 30, 12 33 Z"
        stroke={color}
        strokeWidth="0.6"
        fill={color}
        fillOpacity="0.1"
      />

      {/* Subtle Flower Bud / Rose Petals */}
      <circle cx="34" cy="15" r="3.5" stroke={color} strokeWidth="0.8" fill="none" />
      <path
        d="M 32 14 C 33 12, 36 12, 37 14 C 37 16, 34 17, 32 14 Z"
        stroke={color}
        strokeWidth="0.6"
        fill={color}
        fillOpacity="0.25"
      />
      <circle cx="21" cy="27" r="1" fill={color} fillOpacity="0.7" />
      <circle cx="41" cy="11" r="0.9" fill={color} fillOpacity="0.7" />
    </svg>
  );
};

// Royal Monogram Wax Seal (Xuân Ý & Hoàng Hiếu - Y & H)
export const WaxSealEmblem: React.FC<{
  className?: string;
  size?: number;
  interactive?: boolean;
  onClick?: () => void;
}> = ({ className = '', size = 84, interactive = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full select-none ${
        interactive ? 'cursor-pointer transform hover:scale-105 transition-all duration-300' : ''
      } ${className}`}
      style={{ width: size, height: size }}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Wax Seal Xuân Ý & Hoàng Hiếu"
    >
      {/* Wax Edge Imperfect Shape */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="waxGrad" cx="42%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#8E1B2D" />
            <stop offset="45%" stopColor="#6F1020" />
            <stop offset="100%" stopColor="#4A0B16" />
          </radialGradient>
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5CA8E" />
            <stop offset="50%" stopColor="#C9A45C" />
            <stop offset="100%" stopColor="#9B7A38" />
          </linearGradient>
        </defs>

        {/* Organic Wax Edge */}
        <path
          d="M 50 3 
             C 63 2, 77 9, 87 19 
             C 96 29, 98 43, 96 56 
             C 93 71, 85 84, 72 92 
             C 58 100, 41 98, 28 92 
             C 14 85, 4 72, 3 56 
             C 2 41, 10 27, 21 16 
             C 31 6, 42 3, 50 3 Z"
          fill="url(#waxGrad)"
        />

        {/* Inner Stamped Rim */}
        <circle
          cx="50"
          cy="50"
          r="36"
          stroke="url(#goldRim)"
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="33"
          stroke="#C9A45C"
          strokeWidth="0.6"
          strokeDasharray="1.5 2.5"
          strokeOpacity="0.7"
        />

        {/* Laurel Wreath */}
        <path
          d="M 28 56 C 26 46, 30 36, 38 31"
          stroke="#C9A45C"
          strokeWidth="0.8"
          strokeOpacity="0.75"
        />
        <path
          d="M 72 56 C 74 46, 70 36, 62 31"
          stroke="#C9A45C"
          strokeWidth="0.8"
          strokeOpacity="0.75"
        />

        {/* Mini Crown at top */}
        <path
          d="M 45 28 L 47 31 L 50 26 L 53 31 L 55 28 L 54 33 L 46 33 Z"
          fill="#C9A45C"
          fillOpacity="0.85"
        />

        {/* Intertwined Monogram: Ý & H */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="#FFF9F0"
          fontSize="17"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontWeight="600"
          letterSpacing="0.05em"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
        >
          Ý & H
        </text>

        <text
          x="50"
          y="68"
          textAnchor="middle"
          fill="#C9A45C"
          fontSize="7"
          fontFamily="'Montserrat', sans-serif"
          letterSpacing="0.15em"
          fontWeight="400"
          opacity="0.9"
        >
          02.05.2027
        </text>
      </svg>
    </div>
  );
};

// Fine Gold Divider with Central Diamond
export const FineDivider: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#C9A45C' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-6 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-[#C9A45C]" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A45C] bg-[#FFF9F0]" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A45C]/60 to-[#C9A45C]" />
    </div>
  );
};

// Royal Botanical Header Motif
export const BotanicalHeaderMotif: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#C9A45C' }) => {
  return (
    <div className={`flex items-center justify-center gap-2 mb-3 ${className}`}>
      <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 8 L 22 8" stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
        <path d="M 22 8 C 25 5, 27 5, 29 8 C 27 11, 25 11, 22 8 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.6" />
        <circle cx="30" cy="8" r="2" fill={color} fillOpacity="0.8" />
        <path d="M 38 8 C 35 5, 33 5, 31 8 C 33 11, 35 11, 38 8 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.6" />
        <path d="M 38 8 L 60 8" stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
      </svg>
    </div>
  );
};
