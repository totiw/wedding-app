import Frame from '@/components/frame';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/context/audio/use-audio';
import type { ComponentProps } from 'react';

interface SectionProps extends ComponentProps<'section'> {
  setIsOpened: React.Dispatch<boolean>;
}

export default function Cover({ setIsOpened }: SectionProps) {
  const { play } = useAudio();
  const handleOpen = () => {
    play();
    setIsOpened(true);

    document.getElementById('greetings')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <Frame id='cover'>
      <div className='flex h-[calc(80dvh)] flex-col justify-around'>
        <div className='flex flex-col items-center gap-4'>
          <span className='text-xl capitalize'>
            YOUR INVITED TO <br /> THE WEDDING OF
          </span>
          <span className='font-monte-carlo text-primary text-7xl font-semibold'>Tanu</span>
          <span className='text-4xl text-yellow-500'>&</span>
          <span className='font-monte-carlo text-primary text-7xl font-semibold'>Nur</span>
          <span className='text-lg font-medium'>12 Desember 2026</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-sm'>Kepada Yth.</span>
          <span className='text-primary text-2xl'>Tamu & Partner</span>
          <Button
            onClick={() => {
              handleOpen();
              play();
            }}
            className='mt-4 bg-yellow-500'
          >
            Open Invitation
          </Button>
        </div>
      </div>
    </Frame>
  );
}
