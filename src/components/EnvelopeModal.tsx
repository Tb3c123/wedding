import React, { useState } from 'react';
import { WaxSealEmblem } from './Ornaments';

interface EnvelopeModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ isOpen, onComplete }) => {
  const [unfolding, setUnfolding] = useState(false);

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    setUnfolding(true);
    // Smooth delay simulating envelope flap opening and transition
    setTimeout(() => {
      onComplete();
      setUnfolding(false);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#241417]/80 backdrop-blur-md transition-opacity duration-700 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Mở phong thư thiệp cưới"
    >
      {/* Subtle Champagne Gold Glow Aura */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#C9A45C]/20 blur-3xl pointer-events-none" />

      {/* Bespoke European Envelope Card */}
      <div
        className={`relative w-full max-w-md sm:max-w-lg bg-[#FFF9F0] border border-[#C9A45C] shadow-2xl p-8 sm:p-12 text-center transition-all duration-1000 ease-out transform ${
          unfolding ? 'scale-105 opacity-0 -translate-y-8' : 'scale-100 opacity-100'
        }`}
      >
        {/* Fine Double Gold Inset Border */}
        <div className="absolute inset-3 border border-[#C9A45C]/50 pointer-events-none" />
        <div className="absolute inset-4 border border-[#C9A45C]/20 pointer-events-none" />

        {/* Envelope Header */}
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A45C] font-light mb-3">
          Wedding Invitation
        </p>

        <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#6F1020] tracking-[0.15em] uppercase font-light mb-2">
          Xuân Ý &amp; Hoàng Hiếu
        </h3>

        <p className="text-xs tracking-[0.3em] text-[#241417]/70 uppercase mb-8">
          02 • 05 • 2027
        </p>

        {/* Interactive Wax Seal Stamped on Center */}
        <div className="my-6 flex justify-center">
          <div className="relative group cursor-pointer" onClick={handleOpenEnvelope}>
            <WaxSealEmblem
              size={96}
              interactive
            />
            {/* Pulsing gentle hint */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-[0.2em] text-[#6F1020] uppercase font-medium">
              Nhấn để mở thiệp
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4">
          <p className="font-serif-luxury italic text-base sm:text-lg text-[#6F1020]/90">
            “Hân hạnh được đón tiếp bạn trong ngày trọng đại”
          </p>
        </div>
      </div>
    </div>
  );
};
