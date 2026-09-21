import React, { useState, useEffect } from 'react';

// ╔══════════════════════════════════════════════════════════╗
// ║  ĐỂ MỞ LẠI THIỆP CƯỚI: Đổi COMING_SOON = false         ║
// ║  TO RESTORE WEDDING SITE: Set COMING_SOON = false       ║
// ╚══════════════════════════════════════════════════════════╝
const COMING_SOON = true;

function ComingSoonPage() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const weddingDate = new Date('2027-05-02T10:00:00');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((diff / (1000 * 60)) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4A0B16 0%, #6F1020 50%, #241417 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(201,164,92,0.07) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-60">
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #C9A45C)' }} />
        <span style={{ color: '#C9A45C', fontSize: 18 }}>✦</span>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #C9A45C)' }} />
      </div>
      <div className="relative z-10 text-center px-6 max-w-xl w-full">
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', color: '#C9A45C', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.9 }}>
          Thiệp cưới đang được hoàn thiện
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 8vw, 5rem)', fontWeight: 300, color: '#FFF9F0', lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '0.02em' }}>
          Xuân Ý
        </h1>
        <div style={{ color: '#C9A45C', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'Georgia, serif' }}>&amp;</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 8vw, 5rem)', fontWeight: 300, color: '#FFF9F0', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '0.02em' }}>
          Hoàng Hiếu
        </h1>
        <div className="flex items-center justify-center gap-3 mb-8" style={{ opacity: 0.6 }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(to right, transparent, #C9A45C)' }} />
          <span style={{ color: '#C9A45C', fontSize: 14 }}>✦</span>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(to left, transparent, #C9A45C)' }} />
        </div>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', color: '#C9A45C', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          02 · 05 · 2027
        </p>
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[{ val: pad(days), label: 'Ngày' }, { val: pad(hours), label: 'Giờ' }, { val: pad(minutes), label: 'Phút' }, { val: pad(seconds), label: 'Giây' }].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div style={{ background: 'rgba(255,249,240,0.07)', border: '1px solid rgba(201,164,92,0.3)', borderRadius: 4, padding: '0.75rem 0.5rem', minWidth: 64, backdropFilter: 'blur(4px)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 300, color: '#FFF9F0', lineHeight: 1, display: 'block' }}>{val}</span>
              </div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#C9A45C', textTransform: 'uppercase', marginTop: '0.5rem', opacity: 0.8 }}>{label}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,249,240,0.65)', lineHeight: 1.8 }}>
          Thiệp mời chính thức sẽ sớm được gửi đến quý vị.
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-60">
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #C9A45C)' }} />
        <span style={{ color: '#C9A45C', fontSize: 18 }}>✦</span>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #C9A45C)' }} />
      </div>
    </div>
  );
}

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { SaveTheDateSection } from './components/SaveTheDateSection';
import { EventSection } from './components/EventSection';
import { GallerySection } from './components/GallerySection';
import { DressCodeSection } from './components/DressCodeSection';
import { DetailsSection } from './components/DetailsSection';
import { MessageSection } from './components/MessageSection';
import { ThankYouSection, Footer } from './components/ThankYouSection';
import { MusicPlayer } from './components/MusicPlayer';
import { EnvelopeModal } from './components/EnvelopeModal';

export default function App() {
  if (COMING_SOON) return <ComingSoonPage />;

  const [isOpened, setIsOpened] = useState(false);
  const [showEnvelopeModal, setShowEnvelopeModal] = useState(false);
  const [musicTrigger, setMusicTrigger] = useState(false);

  const handleOpenInvitationClick = () => {
    // Show the tactile envelope unfold effect
    setShowEnvelopeModal(true);
  };

  const handleEnvelopeUnfolded = () => {
    setShowEnvelopeModal(false);
    setIsOpened(true);
    setMusicTrigger(true);

    // Smoothly scroll to the Couple section
    setTimeout(() => {
      const coupleElement = document.getElementById('couple');
      if (coupleElement) {
        const navOffset = 70;
        const targetPosition = coupleElement.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }, 200);
  };

  // Allow clicking "MỞ THIỆP" on Hero directly to also open invitation and trigger music
  const handleDirectOpen = () => {
    setShowEnvelopeModal(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FFF9F0] text-[#241417] font-sans selection:bg-[#6F1020] selection:text-[#FFF9F0]">
      {/* Sticky Aristocratic Navbar */}
      <Navbar visible={isOpened} />

      {/* Main Single-Landing Page Flow */}
      <main>
        {/* 1. HERO SECTION */}
        <HeroSection
          isOpened={isOpened}
          onOpenInvitation={handleDirectOpen}
        />

        {/* 2. THE COUPLE */}
        <CoupleSection />

        {/* 3. SAVE THE DATE (02 MAY 2027) */}
        <SaveTheDateSection />

        {/* 4. EVENT DETAILS (Lễ cưới & Tiệc cưới + Map) */}
        <EventSection />

        {/* 5. PRE-WEDDING GALLERY (Editorial Asymmetrical Collage + Lightbox) */}
        <GallerySection />

        {/* 6. DRESS CODE (Fashion editorial with swatches) */}
        <DressCodeSection />

        {/* 7. WEDDING DETAILS (Attire, Times, Parking, Notes) */}
        <DetailsSection />

        {/* 8. WEDDING MESSAGE */}
        <MessageSection />

        {/* 9. THANK YOU */}
        <ThankYouSection />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Floating Music Player */}
      <MusicPlayer autoPlayTrigger={musicTrigger} />

      {/* Interactive Envelope Unfold Transition Modal */}
      <EnvelopeModal
        isOpen={showEnvelopeModal}
        onComplete={handleEnvelopeUnfolded}
      />
    </div>
  );
}
