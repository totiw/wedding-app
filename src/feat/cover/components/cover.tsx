import Frame from '@/components/frame';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/context/audio/use-audio';
import type { ComponentProps } from 'react';
import { motion } from 'motion/react';
import { container, item } from '@/lib/constant';

interface SectionProps extends ComponentProps<'section'> {
  setIsOpened: React.Dispatch<boolean>;
}

export default function Cover({ setIsOpened }: SectionProps) {
  const searchParams = new URLSearchParams(window.location.search);
  const guest = searchParams.get('guest');
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
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          className='flex flex-col items-center gap-4'
        >
          <motion.span variants={item} className='text-xl capitalize'>
            YOU'RE INVITED TO <br /> THE WEDDING OF
          </motion.span>
          <motion.span
            variants={item}
            className='font-monte-carlo text-primary text-7xl font-semibold'
          >
            Tanu
          </motion.span>
          <motion.span variants={item} className='text-4xl text-yellow-500'>
            &
          </motion.span>
          <motion.span
            variants={item}
            className='font-monte-carlo text-primary text-7xl font-semibold'
          >
            Nur
          </motion.span>
          <motion.span variants={item} className='text-lg font-medium'>
            12 Desember 2026
          </motion.span>
        </motion.div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          className='flex flex-col items-center'
        >
          <motion.span variants={item} className='text-sm'>
            Kepada Yth.
          </motion.span>
          <motion.span variants={item} className='text-primary text-2xl'>
            {guest || 'Tamu & Partner'}
          </motion.span>
          <motion.div variants={item}>
            <Button
              onClick={() => {
                handleOpen();
                play();
              }}
              className='mt-4 bg-yellow-500'
            >
              Open Invitation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Frame>
  );
}
