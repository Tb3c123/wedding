import React, { useState, useEffect, useRef } from 'react';
import { Music, ChevronUp, ChevronDown, Disc } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

// Local direct high-quality original audio file of "Một Đời" (14 Casper ft. Bon Nghiêm & buitruonglinh)
const AUDIO_SRC = "/audio/mot-doi.mp3";

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsFirstInteraction, setNeedsFirstInteraction] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  // Play audio function - always seeks to keep audio playing
  const ensurePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.9;
    try {
      await audio.play();
      setIsPlaying(true);
      isPlayingRef.current = true;
      setNeedsFirstInteraction(false);
    } catch {
      // Modern browsers (Chrome/Safari/iOS) require a user gesture before playing audio with sound
      setNeedsFirstInteraction(true);
      setIsPlaying(false);
      isPlayingRef.current = false;
    }
  };

  // Autoplay immediately upon entering the website
  useEffect(() => {
    // 1. Attempt immediate playback as soon as the DOM mounts
    ensurePlayback();

    // 2. Global event listeners: Any touch, scroll, pointer, or click anywhere on the page
    // immediately starts the audio and ensures it runs continuously
    const triggerAudioOnInteraction = () => {
      if (!isPlayingRef.current) {
        ensurePlayback();
      }
    };

    const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'scroll', 'wheel', 'keydown'];
    events.forEach(event => {
      window.addEventListener(event, triggerAudioOnInteraction, { passive: true });
      document.addEventListener(event, triggerAudioOnInteraction, { passive: true });
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, triggerAudioOnInteraction);
        document.removeEventListener(event, triggerAudioOnInteraction);
      });
    };
  }, []);

  // Also trigger play when opening the wedding invitation envelope
  useEffect(() => {
    if (autoPlayTrigger) {
      ensurePlayback();
    }
  }, [autoPlayTrigger]);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <aside
      aria-label="Nhạc nền đám cưới: Một Đời - 14 Casper ft. Bon Nghiêm"
      className="fixed bottom-4 left-4 z-40 flex flex-col select-none max-w-[calc(100vw-2rem)]"
    >
      {/* Native HTML5 Audio Element - Continuous playback, auto loop */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="auto"
        autoPlay
        loop
        playsInline
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onPlay={() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
          setNeedsFirstInteraction(false);
        }}
        onPause={() => {
          // If paused by external system interrupt, automatically attempt to resume
          ensurePlayback();
        }}
        onEnded={() => {
          // Loop song continuously
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            ensurePlayback();
          }
        }}
      />

      {/* Expanded Lyrics & Details Drawer */}
      {isExpanded && (
        <div className="mb-2 bg-[#4A0B16]/95 border border-[#C9A45C]/60 text-[#FFF9F0] p-4 rounded-xl shadow-2xl backdrop-blur-md w-76 sm:w-84 text-xs transition-all duration-300 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#C9A45C]/30 pb-2 mb-3">
            <div className="flex items-center gap-1.5 text-[#C9A45C]">
              <Music size={14} />
              <span className="font-serif-luxury text-sm tracking-wider uppercase font-semibold">
                Nhạc Nền Đám Cưới
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#C9A45C]/80 hover:text-[#FFF9F0] p-1 focus:outline-none"
              aria-label="Thu nhỏ thông tin bài hát"
            >
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Song Info */}
          <div className="mb-3">
            <h4 className="font-serif-luxury text-base text-[#FFF9F0] font-normal tracking-wide">
              Một Đời
            </h4>
            <p className="text-[11px] text-[#C9A45C] tracking-wider font-light">
              14 Casper & Bon Nghiêm (feat. buitruonglinh)
            </p>
          </div>

          {/* Meaningful Lyrics snippet */}
          <div className="bg-[#6F1020]/60 p-2.5 rounded border border-[#C9A45C]/20 mb-3 italic font-serif-luxury text-xs text-[#FFF9F0]/90 leading-relaxed">
            “Một đời thương em, một đời yêu em<br />
            Đoạn đường tương lai ta sẻ chia khốn khó<br />
            Một đời bên nhau gần nhau mãi không rời...”
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-[10px] text-[#C9A45C]/80 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration || 328)}</span>
            </div>
            <div 
              className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                if (!audioRef.current || !duration) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percent = clickX / rect.width;
                audioRef.current.currentTime = percent * duration;
                ensurePlayback();
              }}
            >
              <div 
                className="h-full bg-gradient-to-r from-[#C9A45C] to-[#E5CA8E] rounded-full transition-all"
                style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Status Bar - No pause/stop button */}
      <div 
        onClick={() => {
          ensurePlayback();
          setIsExpanded(!isExpanded);
        }}
        className="flex items-center bg-[#4A0B16]/95 hover:bg-[#4A0B16] text-[#FFF9F0] border border-[#C9A45C]/70 rounded-full px-3.5 py-2 shadow-xl backdrop-blur-md transition-all duration-300 gap-2.5 cursor-pointer group"
        title="Nhạc đang chạy liên tục • Bấm để xem lời bài hát"
      >
        {/* Animated Vinyl Record / Music Note Icon */}
        <div className="w-6 h-6 rounded-full bg-[#6F1020] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] group-hover:text-[#FFF9F0] group-hover:border-[#E5CA8E] transition-colors">
          <Disc size={14} className={isPlaying ? "animate-spin" : ""} style={{ animationDuration: '4s' }} />
        </div>

        {/* Music Title & Artist */}
        <div className="flex flex-col leading-none pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#FFF9F0] whitespace-nowrap">
              Một Đời
            </span>
            <span className="text-[9px] px-1.5 py-0.2 bg-[#6F1020] text-[#E5CA8E] rounded-full border border-[#C9A45C]/40 uppercase font-semibold tracking-tighter">
              Đang phát
            </span>
          </div>
          <span className="text-[9px] tracking-wide text-[#C9A45C] whitespace-nowrap font-light mt-0.5">
            14 Casper ft. Bon Nghiêm
          </span>
        </div>

        {/* Dynamic Sound Wave Animation Bars */}
        <div className="flex items-end gap-0.5 h-3 px-1 ml-0.5">
          <span
            className={`w-[2px] bg-[#C9A45C] rounded-full transition-all duration-300 ${
              isPlaying ? 'h-3 animate-pulse' : 'h-1.5 opacity-50'
            }`}
          />
          <span
            className={`w-[2px] bg-[#C9A45C] rounded-full transition-all duration-300 ${
              isPlaying ? 'h-2 animate-pulse delay-75' : 'h-1.5 opacity-50'
            }`}
          />
          <span
            className={`w-[2px] bg-[#C9A45C] rounded-full transition-all duration-300 ${
              isPlaying ? 'h-3.5 animate-pulse delay-150' : 'h-1.5 opacity-50'
            }`}
          />
          <span
            className={`w-[2px] bg-[#C9A45C] rounded-full transition-all duration-300 ${
              isPlaying ? 'h-1.5 animate-pulse delay-100' : 'h-1.5 opacity-50'
            }`}
          />
        </div>

        <ChevronUp size={12} className={`text-[#C9A45C]/70 group-hover:text-[#C9A45C] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </div>

      {/* Helper prompt if browser strictly requires first gesture before playing audio */}
      {needsFirstInteraction && !isPlaying && (
        <div 
          onClick={ensurePlayback}
          className="mt-1.5 text-[10px] text-[#FFF9F0] bg-[#6F1020] border border-[#C9A45C] px-3 py-1 rounded-full cursor-pointer hover:bg-[#851326] transition-colors text-center shadow-lg animate-bounce"
        >
          🎵 Chạm vào màn hình để bắt đầu phát nhạc "Một Đời"
        </div>
      )}
    </aside>
  );
};
