import Flower1 from '@/assets/flower1.png';
import { cn } from 'cn';
import type { ComponentProps } from 'react';

interface SectionWrapperProps extends ComponentProps<'section'> {
  children: React.ReactNode;
}

export default function Frame({ children, ...props }: SectionWrapperProps) {
  return (
    <section {...props} className={cn('relative z-20', props.className)}>
      <div className='flex h-dvh flex-col justify-between'>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/3 self-start' />
          <img src={Flower1} alt='Flower Image' className='w-1/3 scale-x-[-1] self-start' />
        </div>
        {children}
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/3 scale-y-[-1] self-start' />
          <img
            src={Flower1}
            alt='Flower Image'
            className='w-1/3 scale-x-[-1] scale-y-[-1] self-start'
          />
        </div>
      </div>
    </section>
  );
}
