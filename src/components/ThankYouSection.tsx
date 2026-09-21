import React from 'react';
import { BotanicalCorner, WaxSealEmblem, FineDivider } from './Ornaments';

export const ThankYouSection: React.FC = () => {
  return (
    <section
      id="thank-you"
      className="relative py-28 sm:py-36 px-6 bg-burgundy-texture text-[#FFF9F0] overflow-hidden"
    >
      {/* 1px Champagne Gold Double Border Frame */}
      <div className="absolute inset-4 sm:inset-8 border border-[#C9A45C]/35 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-9 border border-[#C9A45C]/15 pointer-events-none" />

      {/* Gold Botanical Corners */}
      <BotanicalCorner className="absolute top-5 left-5 sm:top-9 sm:left-9 text-[#C9A45C]" color="#C9A45C" />
      <BotanicalCorner className="absolute top-5 right-5 sm:top-9 sm:right-9 text-[#C9A45C]" color="#C9A45C" flipX />
      <BotanicalCorner className="absolute bottom-5 left-5 sm:bottom-9 sm:left-9 text-[#C9A45C]" color="#C9A45C" flipY />
      <BotanicalCorner className="absolute bottom-5 right-5 sm:bottom-9 sm:right-9 text-[#C9A45C]" color="#C9A45C" flipX flipY />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        
        {/* Monogram Seal */}
        <div className="flex justify-center mb-8">
          <WaxSealEmblem size={76} />
        </div>

        {/* Big Aristocratic Title */}
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FFF9F0] font-light tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
          Thank You
        </h2>

        {/* Subtitle in Vietnamese */}
        <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#E5CA8E] leading-relaxed max-w-lg mx-auto mb-8 font-light">
          “Cảm ơn bạn đã dành thời gian đến chung vui và trở thành một phần trong ngày đặc biệt của chúng tôi.”
        </p>

        <FineDivider className="my-8" color="#C9A45C" />

        {/* Couple Signature */}
        <div className="space-y-2 mt-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A45C] font-light">
            With love,
          </p>
          <p className="font-serif-luxury text-3xl sm:text-4xl tracking-[0.16em] uppercase text-[#FFF9F0] font-normal">
            Xuân Ý &amp; Hoàng Hiếu
          </p>
          <p className="text-xs sm:text-sm tracking-[0.35em] text-[#C9A45C] pt-2 font-light">
            02 • 05 • 2027
          </p>
        </div>

      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#241417] text-[#FFF9F0]/80 py-8 px-6 text-center border-t border-[#C9A45C]/25">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-2">
        <p className="font-serif-luxury text-base tracking-[0.25em] text-[#C9A45C] uppercase">
          Xuân Ý &amp; Hoàng Hiếu
        </p>
        <p className="text-[11px] tracking-[0.3em] text-[#FFF9F0]/60 uppercase font-light">
          02.05.2027 • Grand Ballroom, GEM Center, Sài Gòn
        </p>
        <p className="text-[10px] tracking-[0.2em] text-[#FFF9F0]/40 uppercase pt-2">
          Thank You For Celebrating With Us
        </p>
      </div>
    </footer>
  );
};
