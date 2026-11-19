import { cn } from 'cn';
import { Gem, Blend, Utensils, PartyPopper } from 'lucide-react';

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
    <section id='timeline' className='relative z-20'>
      <div className='h-[80dvh]'>
        <div
          className={cn(
            'h-full w-full bg-[url(/src/assets/couple1.webp)] bg-cover bg-center bg-no-repeat',
            'mask-[url(/src/assets/ripped1.webp)] mask-center mask-no-repeat'
          )}
        />
      </div>
      <div className='relative z-10 -mt-8'>
        <img
          src='/src/assets/flower1.png'
          alt='Flower Image'
          className='w-1/3 self-start object-contain'
        />
      </div>
      <div className='flex min-h-[80dvh] flex-col items-center'>
        <span className='font-bold'>Susunan Acara</span>
        <img src='/src/assets/wedding.svg' alt='wedding illustration' className='h-40 w-40' />
        <div className='relative grid flex-1 grid-cols-1'>
          <div className='absolute top-12 bottom-12 left-1/2 w-0.5 -translate-x-1/2 border-r-2 border-dashed bg-[#578FCA]' />
          {timeline.map((tl, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={tl.name}
                className={cn('grid grid-cols-3 place-content-stretch items-center gap-4')}
              >
                <div className='flex flex-col items-end'>
                  {!isLeft && (
                    <>
                      <span>{tl.name}</span>
                      <span>{tl.time}</span>
                    </>
                  )}
                </div>
                <div className='relative z-10 flex items-center justify-center'>
                  <span className='rounded-full border border-[#578FCA] bg-white p-2'>
                    <tl.icon className='text-[#578FCA]' />
                  </span>
                </div>
                <div className='flex flex-col items-start'>
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
      <div className='flex justify-end'>
        <img
          src='/src/assets/flower1.png'
          alt='Flower Image'
          className='w-1/3 scale-x-[-1] rotate-90 self-start object-contain'
        />
      </div>
    </section>
  );
}
