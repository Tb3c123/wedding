import React from 'react';
import { BotanicalCorner, WaxSealEmblem } from './Ornaments';

interface HeroSectionProps {
  isOpened: boolean;
  onOpenInvitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isOpened, onOpenInvitation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-24 bg-paper-texture overflow-hidden"
    >
      {/* Outer 1px Champagne Gold Border Frame with Corner Indents */}
      <div className="absolute inset-3 sm:inset-6 md:inset-10 border border-[#C9A45C]/40 pointer-events-none z-10" />
      <div className="absolute inset-4 sm:inset-7 md:inset-11 border border-[#C9A45C]/20 pointer-events-none z-10" />

      {/* Botanical Corner Ornaments in Champagne Gold */}
      <BotanicalCorner className="absolute top-4 left-4 sm:top-7 sm:left-7 md:top-11 md:left-11 text-[#C9A45C]" color="#C9A45C" />
      <BotanicalCorner className="absolute top-4 right-4 sm:top-7 sm:right-7 md:top-11 md:right-11 text-[#C9A45C]" color="#C9A45C" flipX />
      <BotanicalCorner className="absolute bottom-4 left-4 sm:bottom-7 sm:left-7 md:bottom-11 md:left-11 text-[#C9A45C]" color="#C9A45C" flipY />
      <BotanicalCorner className="absolute bottom-4 right-4 sm:bottom-7 sm:right-7 md:bottom-11 md:right-11 text-[#C9A45C]" color="#C9A45C" flipX flipY />

      {/* Hero Card Container */}
      <div className="relative z-20 max-w-2xl mx-auto text-center px-6 py-10 sm:py-16 flex flex-col items-center">
        
        {/* Wax Seal / Royal Monogram Crest */}
        <div className="mb-8 relative transition-transform duration-700 ease-out hover:scale-105">
          <WaxSealEmblem
            size={90}
            interactive={!isOpened}
            onClick={onOpenInvitation}
          />
          {/* Subtle champagne halo */}
          <div className="absolute inset-0 -z-10 rounded-full bg-[#C9A45C]/20 blur-xl opacity-60 pointer-events-none" />
        </div>

        {/* Eyebrow Label */}
        <p className="text-xs sm:text-sm tracking-[0.35em] text-[#C9A45C] uppercase font-light mb-4 sm:mb-6">
          The Wedding Of
        </p>

        {/* Bride & Groom Large Editorial Names */}
        <div className="my-2 sm:my-4 space-y-1">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-light tracking-[0.14em] text-[#6F1020] uppercase leading-tight">
            Xuân Ý
          </h1>
          <div className="flex items-center justify-center my-3 sm:my-4">
            <span className="h-[1px] w-12 sm:w-20 bg-[#C9A45C]/60" />
            <span className="font-serif-luxury italic text-2xl sm:text-3xl text-[#C9A45C] px-4 font-normal">
              &amp;
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-[#C9A45C]/60" />
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-light tracking-[0.14em] text-[#6F1020] uppercase leading-tight">
            Hoàng Hiếu
          </h1>
        </div>

        {/* Date Display */}
        <div className="mt-6 sm:mt-8 mb-6 sm:mb-8 flex items-center justify-center gap-3">
          <span className="text-sm sm:text-base tracking-[0.3em] font-light text-[#241417]/85 uppercase">
            02
          </span>
          <span className="text-[#C9A45C] text-xs">•</span>
          <span className="text-sm sm:text-base tracking-[0.3em] font-light text-[#241417]/85 uppercase">
            05
          </span>
          <span className="text-[#C9A45C] text-xs">•</span>
          <span className="text-sm sm:text-base tracking-[0.3em] font-light text-[#241417]/85 uppercase">
            2027
          </span>
        </div>

        {/* Elegant Invitation Quote */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10 text-center">
          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#6F1020]/90 leading-relaxed">
            “Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc của chúng tôi.”
          </p>
          <p className="text-[11px] sm:text-xs tracking-[0.2em] text-[#241417]/60 uppercase mt-2">
            Together with their families, they invite you to celebrate their wedding
          </p>
        </div>

        {/* "MỞ THIỆP" / "ENTER INVITATION" Button */}
        <div className="relative group">
          <button
            id="open-invitation-btn"
            onClick={onOpenInvitation}
            className="relative px-8 sm:px-10 py-3.5 sm:py-4 bg-[#6F1020] text-[#FFF9F0] border border-[#C9A45C] hover:border-[#E5CA8E] hover:bg-[#8E1B2D] transition-all duration-500 shadow-md hover:shadow-xl rounded-none text-xs sm:text-sm tracking-[0.25em] uppercase font-medium focus:outline-none focus:ring-1 focus:ring-[#C9A45C]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>{isOpened ? 'XEM THIỆP MỜI' : 'MỞ THIỆP'}</span>
              <span className="text-[#C9A45C] font-serif text-sm">✦</span>
              <span className="text-[10px] tracking-[0.2em] text-[#C9A45C] hidden sm:inline">
                ENTER INVITATION
              </span>
            </span>
          </button>
          
          {/* Subtle champagne gold underline accent */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#C9A45C]/40 group-hover:w-24 transition-all duration-300" />
        </div>

      </div>
    </section>
  );
};
