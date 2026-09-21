import React from 'react';
import { Shirt, Bell, Clock, Car, HeartHandshake } from 'lucide-react';
import { BotanicalHeaderMotif, FineDivider } from './Ornaments';

export const DetailsSection: React.FC = () => {
  const details = [
    {
      icon: <Shirt size={18} strokeWidth={1.5} />,
      label: 'WEDDING ATTIRE',
      sublabel: 'Trang phục',
      desc: 'Formal / Elegant (Burgundy, Wine, Champagne, Ivory, Black)',
    },
    {
      icon: <Clock size={18} strokeWidth={1.5} />,
      label: 'CEREMONY & RECEPTION',
      sublabel: 'Thời gian',
      desc: 'Lễ cưới: 08:00 AM • Tiệc cưới đón khách: 05:00 PM (Khai tiệc 06:30 PM)',
    },
    {
      icon: <Car size={18} strokeWidth={1.5} />,
      label: 'PARKING & VALET',
      sublabel: 'Bãi đỗ xe',
      desc: 'Bãi đỗ ô tô và xe máy miễn phí tại tầng hầm B1 & B2 của GEM Center',
    },
    {
      icon: <HeartHandshake size={18} strokeWidth={1.5} />,
      label: 'SPECIAL NOTE',
      sublabel: 'Lưu ý thân ái',
      desc: 'Quý khách vui lòng đến đúng giờ để buổi lễ được diễn ra trọn vẹn và trang trọng nhất',
    },
  ];

  return (
    <section
      id="details"
      className="relative py-20 sm:py-28 px-6 bg-paper-texture overflow-hidden border-t border-[#C9A45C]/20"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <BotanicalHeaderMotif color="#C9A45C" />
          <p className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light mb-2">
            Important Information
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#6F1020] font-normal tracking-[0.16em] uppercase">
            Thông Tin Cần Biết
          </h2>
          <FineDivider className="mt-4" />
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {details.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFF9F0] border border-[#C9A45C]/40 p-6 sm:p-7 flex items-start gap-4 transition-all duration-300 hover:border-[#C9A45C] hover:shadow-md"
            >
              <div className="text-[#C9A45C] bg-[#F5EBDD] p-2.5 border border-[#C9A45C]/30 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] text-[#C9A45C] uppercase font-medium block">
                  {item.label}
                </span>
                <h4 className="font-serif-luxury text-lg text-[#6F1020] font-normal">
                  {item.sublabel}
                </h4>
                <p className="text-xs sm:text-sm text-[#241417]/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
