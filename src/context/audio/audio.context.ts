import { createContext } from 'react';

export interface AudioContextType {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  src: string;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  setSource: (src: string) => void;
  play: () => Promise<void>;
  pause: () => void;
  togglePlay: () => Promise<void>;
  seek: (time: number) => void;
}

export const AudioContext = createContext<AudioContextType | null>(null);
