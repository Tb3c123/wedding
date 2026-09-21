import React from 'react';
import { Clock, Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { BotanicalHeaderMotif, FineDivider } from './Ornaments';
import { EventDetail } from '../types';

export const EventSection: React.FC = () => {
  const events: EventDetail[] = [
    {
      type: 'CEREMONY',
      title: 'LỄ THÀNH HÔN',
      time: '08:00 AM',
      date: 'Chủ Nhật, 02 Tháng 05, 2027',
      venueName: 'Tư Gia & Thánh Đường',
      address: '124 Pasteur, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
      note: 'Nghi thức gia tiên và hôn phối trang trọng cùng hai bên gia đình.',
      mapUrl: 'https://maps.google.com/?q=124+Pasteur+Ben+Nghe+District+1+Ho+Chi+Minh+City',
    },
    {
      type: 'RECEPTION',
      title: 'TIỆC CƯỚI THÂN MẬT',
      time: '05:00 PM — 09:30 PM',
      date: 'Chủ Nhật, 02 Tháng 05, 2027',
      venueName: 'Grand Ballroom — GEM Center',
      address: 'Số 8 Nguyễn Bỉnh Khiêm, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh',
      note: 'Đón khách & tiệc trà: 17:00 • Khai tiệc & chúc rượu: 18:30',
      mapUrl: 'https://maps.google.com/?q=GEM+Center+8+Nguyen+Binh+Khiem+Da+Kao+District+1+Ho+Chi+Minh+City',
    },
  ];

  return (
    <section
      id="event"
      className="relative py-24 sm:py-32 px-6 bg-paper-texture overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <BotanicalHeaderMotif color="#C9A45C" />
          <p className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light mb-2">
            The Wedding Day
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#6F1020] font-normal tracking-[0.16em] uppercase">
            Chương Trình Hôn Lễ
          </h2>
          <FineDivider className="mt-4" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="relative bg-[#FFF9F0] border border-[#C9A45C]/50 p-8 sm:p-10 transition-all duration-500 hover:shadow-xl hover:border-[#C9A45C] flex flex-col justify-between"
            >
              {/* Corner 1px Gold accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C9A45C]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C9A45C]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C9A45C]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C9A45C]" />

              <div>
                {/* Event Tag */}
                <div className="flex items-center justify-between mb-4 border-b border-[#C9A45C]/20 pb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A45C] font-semibold">
                    {evt.type}
                  </span>
                  <Sparkles size={12} className="text-[#C9A45C]/70" />
                </div>

                {/* Event Title */}
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#6F1020] font-normal tracking-wide mb-6 uppercase">
                  {evt.title}
                </h3>

                {/* Details List with Small Gold Line Icons */}
                <div className="space-y-4 text-xs sm:text-sm text-[#241417]/85 font-light">
                  
                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#C9A45C]">
                      <Clock size={15} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase font-medium">
                        Thời gian • Time
                      </span>
                      <span className="font-serif-luxury text-lg text-[#6F1020] font-medium">
                        {evt.time}
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#C9A45C]">
                      <Calendar size={15} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase font-medium">
                        Ngày • Date
                      </span>
                      <span className="text-[#241417] font-normal">
                        {evt.date}
                      </span>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#C9A45C]">
                      <MapPin size={15} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase font-medium">
                        Địa điểm • Venue
                      </span>
                      <span className="font-serif-luxury text-lg text-[#241417] font-medium block">
                        {evt.venueName}
                      </span>
                      <span className="text-[#241417]/70 text-xs block mt-0.5 leading-relaxed">
                        {evt.address}
                      </span>
                    </div>
                  </div>

                  {/* Note */}
                  {evt.note && (
                    <div className="pt-2 text-[#6F1020]/80 italic font-serif-luxury text-xs sm:text-sm border-t border-[#C9A45C]/15">
                      {evt.note}
                    </div>
                  )}

                </div>
              </div>

              {/* View Map Button (Burgundy background, Gold text, Border champagne gold, rectangular/subtle rounded) */}
              <div className="mt-8 pt-4 border-t border-[#C9A45C]/20">
                <a
                  href={evt.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#6F1020] text-[#C9A45C] hover:text-[#FFF9F0] border border-[#C9A45C] hover:bg-[#8E1B2D] transition-all duration-300 text-xs tracking-[0.25em] uppercase font-medium rounded-[2px] focus:outline-none"
                >
                  <span>Chỉ đường • VIEW MAP</span>
                  <ExternalLink size={12} className="text-[#C9A45C]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
