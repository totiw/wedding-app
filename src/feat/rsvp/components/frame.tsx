import Flower1 from '@/assets/flower1.webp';
import { cn } from 'cn';
import type { ComponentProps } from 'react';
import { motion } from 'motion/react';

interface SectionRsvpProps extends ComponentProps<typeof motion.section> {
  children: React.ReactNode;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: -50,
    x: -50,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
};

function FlowerFrame({ ...props }: ComponentProps<typeof motion.img>) {
  return (
    <motion.img
      {...props}
      src={Flower1}
      alt='Flower Image'
      className={cn('w-1/3', props.className)}
    />
  );
}

export default function FrameRsvp({ children, ...props }: SectionRsvpProps) {
  return (
    <motion.section
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
      className={cn('relative z-20 snap-start', props.className)}
      {...props}
    >
      <div className='flex justify-between'>
        <FlowerFrame variants={item} />
        <FlowerFrame variants={item} className='scale-x-[-1]' />
      </div>
      {children}
      <div className='flex justify-between'>
        <FlowerFrame variants={item} className='scale-y-[-1]' />
        <FlowerFrame variants={item} className='scale-x-[-1] scale-y-[-1]' />
      </div>
    </motion.section>
  );
}
