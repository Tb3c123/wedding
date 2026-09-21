import React from 'react';
import { BotanicalHeaderMotif, FineDivider } from './Ornaments';
import { DressColor } from '../types';

export const DressCodeSection: React.FC = () => {
  const palette: DressColor[] = [
    {
      name: 'Royal Burgundy',
      hex: '#6F1020',
      textColor: '#FFF9F0',
      description: 'Đỏ Burgundy Quý Phái',
    },
    {
      name: 'Deep Wine Red',
      hex: '#4A0B16',
      textColor: '#FFF9F0',
      description: 'Đỏ Rượu Vang Đậm',
    },
    {
      name: 'Champagne Gold',
      hex: '#C9A45C',
      textColor: '#241417',
      description: 'Vàng Champagne Tinh Tế',
    },
    {
      name: 'Soft Ivory',
      hex: '#FFF9F0',
      textColor: '#241417',
      description: 'Trắng Ngà Kem Dịu',
    },
    {
      name: 'Classic Black',
      hex: '#1A1A1A',
      textColor: '#FFF9F0',
      description: 'Đen Cổ Điển Trang Trọng',
    },
  ];

  return (
    <section
      id="dress-code"
      className="relative py-24 sm:py-32 px-6 bg-[#F5EBDD] bg-cream-texture overflow-hidden border-t border-[#C9A45C]/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <BotanicalHeaderMotif color="#6F1020" />
          <p className="text-xs tracking-[0.35em] text-[#6F1020] uppercase font-medium mb-2">
            Attire &amp; Palette
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#6F1020] font-normal tracking-[0.16em] uppercase">
            Dress Code
          </h2>
          <FineDivider className="mt-4" color="#6F1020" />
        </div>

        {/* Fashion Editorial Concept */}
        <div className="max-w-xl mx-auto mb-12">
          <span className="inline-block px-5 py-1.5 border border-[#C9A45C] bg-[#FFF9F0]/80 text-[#6F1020] text-xs tracking-[0.3em] uppercase font-medium mb-5">
            Formal • Black-Tie Optional
          </span>
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#241417] leading-relaxed">
            “Hãy cùng chúng tôi tạo nên một buổi tiệc thật thanh lịch và trang trọng.”
          </p>
          <p className="text-xs tracking-[0.2em] text-[#241417]/60 uppercase mt-3">
            We would love to see you in elegant, formal attire
          </p>
        </div>

        {/* Minimalist Fashion Silhouettes Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-14">
          
          {/* Ladies Guide */}
          <div className="bg-[#FFF9F0] border border-[#C9A45C]/40 p-6 flex flex-col items-center">
            {/* Minimalist Evening Gown SVG Silhouette */}
            <svg
              className="w-12 h-16 text-[#6F1020] mb-3"
              viewBox="0 0 40 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              {/* Neckline and straps */}
              <path d="M 15 8 C 17 12, 20 13, 25 8" />
              <path d="M 15 8 L 13 18" />
              <path d="M 25 8 L 27 18" />
              {/* Bodice */}
              <path d="M 13 18 C 16 23, 24 23, 27 18" />
              <path d="M 14 24 L 26 24" strokeWidth="0.8" />
              {/* Flowing Skirt */}
              <path d="M 14 24 C 11 40, 7 54, 5 56 C 14 58, 26 58, 35 56 C 33 54, 29 40, 26 24" />
            </svg>
            <h4 className="font-serif-luxury text-lg text-[#6F1020] tracking-wide uppercase">
              Quý Cô • Ladies
            </h4>
            <p className="text-xs text-[#241417]/75 mt-1 font-light leading-relaxed">
              Đầm dạ hội dáng dài, cocktail dress trang nhã hoặc áo dài lụa truyền thống
            </p>
          </div>

          {/* Gentlemen Guide */}
          <div className="bg-[#FFF9F0] border border-[#C9A45C]/40 p-6 flex flex-col items-center">
            {/* Minimalist Tuxedo SVG Silhouette */}
            <svg
              className="w-12 h-16 text-[#6F1020] mb-3"
              viewBox="0 0 40 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              {/* Shoulders & Lapels */}
              <path d="M 8 12 L 20 6 L 32 12" />
              <path d="M 8 12 L 13 28 L 20 38 L 27 28 L 32 12" />
              {/* Bowtie */}
              <path d="M 17 11 L 23 15 L 23 11 L 17 15 Z" fill="#6F1020" stroke="none" />
              {/* Torso & Trousers line */}
              <path d="M 13 28 L 13 40 L 27 40 L 27 28" />
              <path d="M 13 40 L 12 56" />
              <path d="M 27 40 L 28 56" />
              <path d="M 20 40 L 20 56" strokeDasharray="2 2" strokeWidth="0.8" />
            </svg>
            <h4 className="font-serif-luxury text-lg text-[#6F1020] tracking-wide uppercase">
              Quý Ông • Gentlemen
            </h4>
            <p className="text-xs text-[#241417]/75 mt-1 font-light leading-relaxed">
              Âu phục / Suit tối màu, Tuxedo lịch lãm hoặc sơ mi phối cà vạt / nơ
            </p>
          </div>

        </div>

        {/* Color Palette Swatches */}
        <div className="mt-8">
          <p className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium mb-6">
            Bảng Màu Gợi Ý • Suggested Color Palette
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
            {palette.map((color, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Swatch Circle / Card */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#C9A45C]/60 shadow-md group-hover:scale-105 transition-transform duration-300 relative flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  {/* Subtle inner highlight */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20" />
                </div>

                {/* Color Name */}
                <span className="font-serif-luxury text-sm text-[#241417] mt-2 font-medium">
                  {color.name}
                </span>
                <span className="text-[10px] text-[#241417]/60 tracking-wider">
                  {color.description}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
