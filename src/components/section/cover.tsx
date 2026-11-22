import Envelope from '@/assets/envelope.jpeg';
import { cn } from 'cn';
import { Button } from '../ui/button';
export default function Cover() {
  return (
    <section id='cover-invitation' className='relative z-20'>
      <div
        style={{
          backgroundImage: `url(${Envelope})`,
        }}
        className={cn(
          'h-dvh bg-cover bg-center bg-no-repeat',
          'mask-cover mask-center mask-no-repeat',
          'flex flex-col justify-around',
          'text-white'
        )}
      >
        <div className='flex flex-col items-center gap-4'>
          <span className='text-xl capitalize'>
            YOUR INVITED TO <br /> THE WEDDING OF
          </span>
          <span className='font-monte-carlo text-7xl font-semibold text-yellow-500'>Tanu</span>
          <span className='text-4xl'>&</span>
          <span className='font-monte-carlo text-7xl font-semibold text-yellow-500'>Nur</span>
          <span className='text-lg font-medium'>12 Desember 2026</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-sm'>Kepada Yth.</span>
          <span className='text-2xl text-yellow-500'>Tamu & Partner</span>
          <Button className='mt-4'>Open Invitation</Button>
        </div>
      </div>
    </section>
  );
}
