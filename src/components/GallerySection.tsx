import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { BotanicalHeaderMotif, FineDivider } from './Ornaments';
import { GalleryPhoto } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      alt: 'Xuân Ý & Hoàng Hiếu trong trang phục cưới cổ điển',
      caption: 'Kỷ niệm tại dinh thự cổ điển — Nơi tình yêu bắt đầu',
      span: 'md:col-span-8 md:row-span-2',
      aspect: 'aspect-[4/3] md:aspect-[16/11]',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
      alt: 'Hoa cưới tông Royal Burgundy và Champagne',
      caption: 'Bó hoa cầm tay sắc hoa hồng Burgundy & cẩm chướng rượu vang',
      span: 'md:col-span-4 md:row-span-1',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
      alt: 'Khoảnh khắc dịu dàng bên khăn voan',
      caption: 'Nét thục nữ, dịu dàng trong tà váy lụa trắng',
      span: 'md:col-span-4 md:row-span-1',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      alt: 'Cặp đôi cùng sánh bước',
      caption: 'Những bước chân đầu tiên trên hành trình trăm năm',
      span: 'md:col-span-12 md:row-span-1',
      aspect: 'aspect-[21/9]',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=85',
      alt: 'Ánh mắt và nụ cười hạnh phúc',
      caption: 'Khoảnh khắc trao lời hẹn ước',
      span: 'md:col-span-6 md:row-span-1',
      aspect: 'aspect-[3/2]',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85',
      alt: 'Bàn tiệc champagne và ánh nến lung linh',
      caption: 'Không gian ấm cúng mang phong vị quý tộc châu Âu',
      span: 'md:col-span-6 md:row-span-1',
      aspect: 'aspect-[3/2]',
    },
  ];

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FFF9F0] overflow-hidden border-t border-[#C9A45C]/25"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <BotanicalHeaderMotif color="#C9A45C" />
          <p className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light mb-2">
            A Glimpse Of Us
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#6F1020] font-normal tracking-[0.16em] uppercase">
            Khoảnh Khắc Pre-Wedding
          </h2>
          <FineDivider className="mt-4" />
          <p className="font-serif-luxury italic text-sm text-[#241417]/70 mt-2">
            Những góc ảnh dịu dàng, lãng mạn ghi lại chặng đường tình yêu
          </p>
        </div>

        {/* Editorial Asymmetrical Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative cursor-pointer overflow-hidden bg-[#F5EBDD] p-2.5 sm:p-3 border border-[#C9A45C]/40 shadow-sm hover:shadow-lg transition-all duration-500 ${photo.span}`}
            >
              {/* Inner 1px Champagne Gold Frame */}
              <div className="relative w-full h-full overflow-hidden border border-[#C9A45C]/30">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 ${photo.aspect}`}
                  loading="lazy"
                />

                {/* Subtle Luxury Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0B16]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div className="text-[#FFF9F0]">
                    <p className="font-serif-luxury italic text-sm sm:text-base tracking-wide">
                      {photo.caption}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase mt-1">
                      <Maximize2 size={11} /> Phóng to ảnh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-[#241417]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh cưới chi tiết"
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 z-10 text-[#FFF9F0] hover:text-[#C9A45C] p-2 focus:outline-none transition-colors"
            aria-label="Đóng xem ảnh"
          >
            <X size={26} />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 text-[#C9A45C] hover:text-[#FFF9F0] p-3 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={34} />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <div className="p-2 sm:p-3 bg-[#FFF9F0] border border-[#C9A45C] shadow-2xl">
              <img
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 text-center text-[#FFF9F0] max-w-xl">
              <p className="font-serif-luxury text-base sm:text-lg italic tracking-wide text-[#E5CA8E]">
                {photos[selectedPhotoIndex].caption}
              </p>
              <p className="text-[11px] tracking-[0.25em] text-[#FFF9F0]/60 uppercase mt-1 font-light">
                {selectedPhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 text-[#C9A45C] hover:text-[#FFF9F0] p-3 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </section>
  );
};
