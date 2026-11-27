import { Slider } from '@/components/ui/slider';
import { cn } from 'cn';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatTime } from '@/lib/utils';
import type { MediaDTO } from '@/feat/thanks/dto';
import { useAudio } from '@/context/audio/use-audio';

export default function Media({ data }: { data: MediaDTO }) {
  const { name } = data;
  const { togglePlay, seek, audioRef, duration, isPlaying, currentTime } = useAudio();
  const skipTime = 5; //seconds

  const handleForward = () => {
    if (!audioRef.current) return;

    if (currentTime <= duration - skipTime) {
      seek(currentTime + 5);
    } else {
      seek(duration);
    }
  };

  const handleBackward = () => {
    if (!audioRef.current) return;

    if (currentTime >= skipTime) {
      seek(currentTime - 5);
    } else {
      seek(0);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      {/* COVER IMAGE */}
      {/* <div
        onClick={togglePlay}
        className='bg-primary mx-auto box-border flex h-40 w-40 rounded-full p-4'
      >
        <img
          src={imageUrl}
          alt='cover bgm'
          className={cn(
            'animation-duration-[5s] animate-spin rounded-full border-6 border-white',
            !isPlaying && 'paused'
          )}
        />
      </div> */}
      {/* SONG NAME */}
      <div className='mx-auto w-48 overflow-hidden whitespace-nowrap'>
        <div className='animate-marquee w-fit'>{name}</div>
      </div>
      {/* SLIDER CONTROL */}
      <div className='flex items-baseline gap-4'>
        <span>{formatTime(currentTime)}</span>
        <Slider
          value={currentTime}
          onValueChange={(value) => seek(+value)}
          max={duration || 1}
          step={1}
          className={cn(
            'mx-auto',
            '**:data-[slot=slider-range]:bg-primary **:data-[slot=slider-thumb]:bg-primary **:data-[slot=slider-track]:bg-secondary **:data-[slot=slider-thumb]:border-none'
          )}
        />
        <span>{formatTime(duration)}</span>
      </div>
      {/* AUDIO SOURCE */}
      <div className='flex justify-center'>
        <div className='flex'>
          <Button onClick={handleBackward} className='' variant='link' size='icon'>
            <SkipBack />
          </Button>
          <Button onClick={togglePlay} className='bg-primary rounded-full' size='icon'>
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <Button onClick={handleForward} className='' variant='link' size='icon'>
            <SkipForward />
          </Button>
        </div>
      </div>
    </div>
  );
}
