import React from 'react';
import { FineDivider, BotanicalHeaderMotif } from './Ornaments';

export const CoupleSection: React.FC = () => {
  return (
    <section
      id="couple"
      className="relative py-24 sm:py-32 px-6 bg-paper-texture overflow-hidden border-t border-[#C9A45C]/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <BotanicalHeaderMotif color="#C9A45C" />
          <p className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light mb-2">
            The Couple
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#6F1020] font-normal tracking-[0.18em] uppercase">
            Cô Dâu &amp; Chú Rể
          </h2>
          <FineDivider className="mt-4" />
        </div>

        {/* Balanced Two Columns Separated by a Slender Gold Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center max-w-3xl mx-auto">
          
          {/* BRIDE COLUMN (Xuân Ý) */}
          <div className="px-6 md:px-10 text-center flex flex-col items-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A45C] font-light mb-3">
              The Bride
            </span>
            <h3 className="font-serif-luxury text-4xl sm:text-5xl text-[#6F1020] font-normal tracking-[0.16em] uppercase mb-4">
              Xuân Ý
            </h3>
            <p className="text-xs tracking-[0.25em] text-[#8E1B2D] uppercase font-medium mb-6">
              Cô Dâu
            </p>
            
            <div className="space-y-1 text-xs sm:text-sm text-[#241417]/80 leading-relaxed font-light">
              <p className="tracking-wide">Ái nữ của</p>
              <p className="font-serif-luxury text-base sm:text-lg text-[#241417] font-normal tracking-wider">
                Ông Lê Văn Thành
              </p>
              <p className="font-serif-luxury text-base sm:text-lg text-[#241417] font-normal tracking-wider">
                &amp; Bà Nguyễn Thị Ngọc Mai
              </p>
            </div>
          </div>

          {/* Slender Gold Vertical Line Divider (Desktop) & Horizontal (Mobile) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-[1px] bg-gradient-to-b from-transparent via-[#C9A45C] to-transparent" />
          <div className="md:hidden flex items-center justify-center my-2">
            <div className="w-16 h-[1px] bg-[#C9A45C]/50" />
            <span className="text-xs text-[#C9A45C] px-3 font-serif">✦</span>
            <div className="w-16 h-[1px] bg-[#C9A45C]/50" />
          </div>

          {/* GROOM COLUMN (Hoàng Hiếu) */}
          <div className="px-6 md:px-10 text-center flex flex-col items-center">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A45C] font-light mb-3">
              The Groom
            </span>
            <h3 className="font-serif-luxury text-4xl sm:text-5xl text-[#6F1020] font-normal tracking-[0.16em] uppercase mb-4">
              Hoàng Hiếu
            </h3>
            <p className="text-xs tracking-[0.25em] text-[#8E1B2D] uppercase font-medium mb-6">
              Chú Rể
            </p>

            <div className="space-y-1 text-xs sm:text-sm text-[#241417]/80 leading-relaxed font-light">
              <p className="tracking-wide">Quý nam của</p>
              <p className="font-serif-luxury text-base sm:text-lg text-[#241417] font-normal tracking-wider">
                Ông Trần Hoàng Nam
              </p>
              <p className="font-serif-luxury text-base sm:text-lg text-[#241417] font-normal tracking-wider">
                &amp; Bà Đỗ Phương Thảo
              </p>
            </div>
          </div>

        </div>

        {/* Closing Subtitle Quote */}
        <div className="mt-16 sm:mt-24 max-w-md mx-auto">
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#6F1020] font-light tracking-wide leading-relaxed">
            “Two hearts, one beautiful beginning.”
          </p>
          <div className="w-10 h-[1px] bg-[#C9A45C]/60 mx-auto mt-4" />
        </div>

      </div>
    </section>
  );
};
