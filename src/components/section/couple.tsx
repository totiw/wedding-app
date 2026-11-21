import { cn } from 'cn';
import Couple1 from '@/assets/couple1.webp';
import Ripped1 from '@/assets/ripped1.webp';
import Flower2 from '@/assets/flower2.png';

export default function Couple() {
  return (
    <section id='couple-photo-first' className='relative z-20 space-y-12'>
      <div className='flex h-screen flex-col'>
        <div className='h-125'>
          <div
            style={{
              backgroundImage: `url(${Couple1})`,
              maskImage: `url(${Ripped1})`,
            }}
            className={cn(
              'h-full bg-cover bg-center bg-no-repeat',
              'mask-cover mask-center mask-no-repeat'
            )}
          />
        </div>
        <div className='flex flex-1 flex-col items-center justify-center gap-4'>
          <span className='font-monte-carlo text-primary text-3xl font-semibold'>
            Bismillahirrahmanirrahim
          </span>
          <p className='flex items-center justify-center p-4 text-center text-sm'>
            Dengan ini kami mengundang bapak dan ibu untuk hadir dalam acara pernikahan kami.
          </p>
          <span className='font-bold'>Calon Mempelai</span>
        </div>
      </div>
      <div className='font-monte-carlo flex flex-col items-center justify-center gap-12 text-7xl [anchor-name:--anchor-couple]'>
        <span className='-translate-x-1/2'>Tanu</span>
        <span className='font-roboto-serif text-2xl'>&</span>
        <span className='translate-x-1/2'>Nur</span>
      </div>
      <img
        src={Flower2}
        alt='Flower Image'
        className={cn(
          'w-1/3 origin-top-left -rotate-90 object-contain',
          'absolute top-[anchor(bottom)] [position-anchor:--anchor-couple]'
        )}
      />
      <img
        src={Flower2}
        alt='Flower Image'
        className={cn(
          'w-1/3 origin-bottom-right -translate-y-full -rotate-90 object-contain',
          'absolute top-[anchor(top)] right-[anchor(right)] [position-anchor:--anchor-couple]'
        )}
      />
    </section>
  );
}
