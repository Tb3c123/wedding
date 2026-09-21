import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';
import { BotanicalCorner, FineDivider } from './Ornaments';

export const SaveTheDateSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Google Calendar URL generator for May 2, 2027
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Lễ Thành Hôn — Xuân Ý & Hoàng Hiếu'
  )}&dates=20270502T080000/20270502T213000&details=${encodeURIComponent(
    'Trân trọng kính mời quý khách đến chung vui trong ngày hạnh phúc của Xuân Ý & Hoàng Hiếu.'
  )}&location=${encodeURIComponent('Grand Ballroom, GEM Center, 8 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, TP. Hồ Chí Minh')}`;

  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Xuan Y & Hoang Hieu Wedding//VI
BEGIN:VEVENT
UID:wedding-xuany-hoanghieu-20270502
DTSTAMP:20270502T000000Z
DTSTART:20270502T080000
DTEND:20270502T213000
SUMMARY:Lễ Thành Hôn — Xuân Ý & Hoàng Hiếu
DESCRIPTION:Trân trọng kính mời quý khách đến chung vui trong ngày cưới của Xuân Ý & Hoàng Hiếu.
LOCATION:Grand Ballroom, GEM Center, 8 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, TP. Hồ Chí Minh
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-xuan-y-hoang-hieu-2027.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="save-the-date"
      className="relative py-24 sm:py-36 px-6 bg-[#F5EBDD] overflow-hidden border-t border-b border-[#C9A45C]/20 bg-cream-texture"
    >
      {/* Decorative Botanical Corners */}
      <BotanicalCorner className="absolute top-6 left-6 text-[#6F1020]" color="#6F1020" />
      <BotanicalCorner className="absolute top-6 right-6 text-[#6F1020]" color="#6F1020" flipX />
      <BotanicalCorner className="absolute bottom-6 left-6 text-[#6F1020]" color="#6F1020" flipY />
      <BotanicalCorner className="absolute bottom-6 right-6 text-[#6F1020]" color="#6F1020" flipX flipY />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.4em] uppercase text-[#6F1020] font-medium mb-3">
          Save The Date
        </p>
        <p className="font-serif-luxury italic text-sm sm:text-base text-[#241417]/75">
          Đánh dấu ngày trọng đại cùng chúng tôi
        </p>

        <FineDivider className="my-6" color="#6F1020" />

        {/* Editorial Luxury Date Block */}
        <div className="my-8 sm:my-12 flex flex-col items-center">
          
          {/* Month & Year Bar */}
          <div className="flex items-center justify-center gap-6 mb-2">
            <span className="h-[1px] w-8 sm:w-16 bg-[#C9A45C]" />
            <span className="text-sm sm:text-base tracking-[0.35em] uppercase font-light text-[#241417]">
              THÁNG NĂM • MAY
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-[#C9A45C]" />
          </div>

          {/* Colossal "02" - The Main Hero Anchor */}
          <div className="relative my-2 sm:my-4 select-none">
            <span className="font-serif-luxury text-8xl sm:text-9xl md:text-[11rem] font-light text-[#6F1020] tracking-tight leading-none drop-shadow-sm">
              02
            </span>
            {/* Fine framing bracket flourishes */}
            <span className="hidden sm:inline-block absolute top-1/2 -left-12 -translate-y-1/2 text-2xl text-[#C9A45C]/60 font-serif">
              ✦
            </span>
            <span className="hidden sm:inline-block absolute top-1/2 -right-12 -translate-y-1/2 text-2xl text-[#C9A45C]/60 font-serif">
              ✦
            </span>
          </div>

          {/* Year & Day of the Week */}
          <div className="space-y-2 mt-2">
            <p className="text-base sm:text-lg tracking-[0.4em] uppercase text-[#241417] font-light">
              2027
            </p>
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8E1B2D] font-medium">
              Chủ Nhật • Sunday
            </p>
          </div>
        </div>

        {/* Add To Calendar Actions */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#6F1020] text-[#6F1020] hover:bg-[#6F1020] hover:text-[#FFF9F0] transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium focus:outline-none"
          >
            <Calendar size={14} className="text-[#C9A45C]" />
            <span>Google Calendar</span>
          </a>

          <button
            onClick={handleDownloadIcs}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6F1020] border border-[#6F1020] text-[#FFF9F0] hover:bg-[#8E1B2D] transition-all duration-300 text-xs tracking-[0.2em] uppercase font-medium focus:outline-none"
          >
            {copied ? <Check size={14} className="text-[#C9A45C]" /> : <Calendar size={14} className="text-[#C9A45C]" />}
            <span>{copied ? 'Đã tải sự kiện' : 'Apple / iCal'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
