import { useRef, useState } from 'react';
import { Slider } from '../ui/slider';
import { cn } from 'cn';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '../ui/button';
import { formatTime } from '../../lib/utils';

export default function Media() {
  const skipTime = 5; //seconds
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);
  const [timeValue, setTimeValue] = useState([0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  const handleSlider = (value: number) => {
    setTimeValue([value]);

    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const handleForward = () => {
    if (!audioRef.current) return;

    if (timeValue[0] <= duration - skipTime) {
      audioRef.current.currentTime = timeValue[0] + 5;
    } else {
      audioRef.current.currentTime = duration;
    }
  };

  const handleBackward = () => {
    if (!audioRef.current) return;

    if (timeValue[0] >= skipTime) {
      audioRef.current.currentTime = timeValue[0] - 5;
    } else {
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section id='media' className='relative z-20 py-6'>
      <div className='flex flex-col gap-4 px-4'>
        {/* COVER IMAGE */}
        <div
          onClick={togglePlay}
          className='mx-auto box-border flex h-40 w-40 rounded-full bg-[#578FCA] p-4'
        >
          <img
            src='/src/assets/bgm-cover.jpeg'
            alt='cover bgm'
            className={cn(
              'animation-duration-[5s] animate-spin rounded-full border-6 border-white',
              !isPlaying && 'paused'
            )}
          />
        </div>
        {/* SONG NAME */}
        <div className='mx-auto w-48 overflow-hidden whitespace-nowrap'>
          <div className='animate-marquee w-fit'>
            Stephen Sanchez - Until I Found You (Official Video)
          </div>
        </div>
        {/* SLIDER CONTROL */}
        <div className='flex items-baseline gap-4'>
          <span>{formatTime(timeValue[0])}</span>
          <Slider
            value={timeValue}
            onValueChange={(value) => handleSlider(+value)}
            max={duration || 1}
            step={1}
            className={cn(
              'mx-auto',
              '**:data-[slot=slider-range]:bg-[#578FCA] **:data-[slot=slider-thumb]:border-none **:data-[slot=slider-thumb]:bg-[#578FCA] **:data-[slot=slider-track]:bg-[#A1E3F9]'
            )}
          />
          <span>{formatTime(duration)}</span>
        </div>
        {/* AUDIO SOURCE */}
        <div className='flex justify-center'>
          <div className='flex'>
            <audio
              ref={audioRef}
              src='/src/assets/bgm.mp3'
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              onTimeUpdate={(e) => setTimeValue([e.currentTarget.currentTime])}
            />
            <Button onClick={handleBackward} className='' variant='link' size='icon'>
              <SkipBack />
            </Button>
            <Button onClick={togglePlay} className='rounded-full bg-[#578FCA]' size='icon'>
              {isPlaying ? <Pause /> : <Play />}
            </Button>
            <Button onClick={handleForward} className='' variant='link' size='icon'>
              <SkipForward />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
