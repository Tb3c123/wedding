import React, { useState, useEffect } from 'react';
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
