import React from 'react';
import { FineDivider } from './Ornaments';

export const MessageSection: React.FC = () => {
  return (
    <section
      id="message"
      className="relative py-28 sm:py-36 px-6 bg-[#FFF9F0] overflow-hidden border-t border-[#C9A45C]/20"
    >
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Subtle Ornamental Sparkle */}
        <div className="text-[#C9A45C] text-sm tracking-[0.4em] font-serif mb-6">
          ✦ ✦ ✦
        </div>

        {/* Short Wedding Message */}
        <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#6F1020] font-light leading-relaxed tracking-wide mb-8">
          “Một ngày đặc biệt sẽ trở nên trọn vẹn hơn khi có những người thân yêu cùng hiện diện.
          Chúng tôi rất vui và trân trọng khi được đón tiếp bạn trong ngày trọng đại này.”
        </p>

        <FineDivider className="my-8" />

        {/* Closing Quote */}
        <p className="font-serif-luxury italic text-base sm:text-lg text-[#C9A45C] tracking-wider">
          “And so, together, they begin.”
        </p>

        <div className="w-12 h-[1px] bg-[#C9A45C]/40 mx-auto mt-6" />

      </div>
    </section>
  );
};
