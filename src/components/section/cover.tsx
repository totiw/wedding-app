import { Button } from '../ui/button';
import Flower1 from '@/assets/flower1.png';

export default function Cover() {
  return (
    <section id='cover-invitation' className='relative z-20'>
      <div className='flex h-dvh flex-col justify-between'>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/3 self-start' />
          <img src={Flower1} alt='Flower Image' className='w-1/3 scale-x-[-1] self-start' />
        </div>
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
            <Button className='mt-4 bg-yellow-500'>Open Invitation</Button>
          </div>
        </div>
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
