import { cn } from 'cn';
import { Gem, Blend, Utensils, PartyPopper } from 'lucide-react';
import Couple2 from '@/assets/couple2.webp';
import Ripped1 from '@/assets/ripped1.webp';
import Flower1 from '@/assets/flower1.png';
import Wedding1 from '@/assets/wedding.svg';

const timeline = [
  {
    name: 'Akad Nikah',
    time: '08:00',
    icon: Blend,
  },
  {
    name: 'Resepsi',
    time: '10:00',
    icon: Gem,
  },
  {
    name: 'ISHOMA',
    time: '12:00',
    icon: Utensils,
  },
  {
    name: 'Hiburan',
    time: '13:00',
    icon: PartyPopper,
  },
];

export default function Timeline() {
  return (
    <section id='timeline' className='relative z-30'>
      <div className='h-125'>
        <div
          style={{
            backgroundImage: `url(${Couple2})`,
            maskImage: `url(${Ripped1})`,
          }}
          className={cn(
            'h-full w-full bg-cover bg-center bg-no-repeat',
            'mask-cover mask-center mask-no-repeat'
          )}
        />
      </div>
      <div className='relative z-10 -mt-8'>
        <img src={Flower1} alt='Flower Image' className='w-1/3 self-start object-contain' />
      </div>
      <div className='flex min-h-[80vh] flex-col items-center'>
        <span className='text-primary font-monte-carlo text-5xl font-semibold'>Susunan Acara</span>
        <span className='font-semibold'>Pernikahan</span>
        <img src={Wedding1} alt='wedding illustration' className='h-40 w-40' />
        <div className='relative grid flex-1 grid-cols-1'>
          <div className='bg-primary absolute top-12 bottom-12 left-1/2 w-0.5 -translate-x-1/2 border-r-2 border-dashed' />
          {timeline.map((tl, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={tl.name}
                className={cn('grid grid-cols-3 place-content-stretch items-center gap-4')}
              >
                <div className='flex flex-col items-end font-semibold'>
                  {!isLeft && (
                    <>
                      <span>{tl.name}</span>
                      <span>{tl.time}</span>
                    </>
                  )}
                </div>
                <div className='relative z-10 flex items-center justify-center'>
                  <span className='border-primary rounded-full border bg-white p-2'>
                    <tl.icon className='text-primary' />
                  </span>
                </div>
                <div className='flex flex-col items-start font-semibold'>
                  {isLeft && (
                    <>
                      <span>{tl.name}</span>
                      <span>{tl.time}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='relative z-10 flex justify-end'>
        <img
          src={Flower1}
          alt='Flower Image'
          className='w-1/3 scale-x-[-1] rotate-90 self-start object-contain'
        />
      </div>
    </section>
  );
}
