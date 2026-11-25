import React, { useRef, useState } from 'react';
import BGMAudio from '@/assets/bgm.mp3';
import { AudioContext } from './audio.context';

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [src, setSrc] = useState(BGMAudio);

  const setSource = (newSrc: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setSrc(newSrc);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  };

  const play = async () => {
    if (!audioRef.current) return;
    await audioRef.current.play();
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await play();
    } else {
      pause();
    }
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
  };

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        src,
        currentTime,
        duration,
        isPlaying,
        setSource,
        pause,
        play,
        togglePlay,
        seek,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={src}
        preload='auto'
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />
    </AudioContext.Provider>
  );
}
