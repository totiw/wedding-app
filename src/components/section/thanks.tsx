import Flower1 from '@/assets/flower1.png';
import Media from '@/feat/thanks/components/media';
import MediaData from '@/feat/thanks/data.json';
import type { MediaDTO } from '@/feat/thanks/dto';

export default function Thanks() {
  const data_media: MediaDTO = MediaData.data;
  return (
    <section id='quotes' className='relative z-20'>
      <div className='flex h-dvh flex-col justify-between'>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/3 self-start' />
          <img src={Flower1} alt='Flower Image' className='w-1/3 scale-x-[-1] self-start' />
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
          <p className='px-8 text-center text-sm italic'>
            Merupakan suatu kebahagiaan bagi kami atas kehadiran Bapak/Ibu untuk memberikan doa
            restu
          </p>
          <div className='flex flex-col gap-2'>
            <span className='font-bold'>Hormat kami yang mengundang</span>
            <div className='font-monte-carlo text-primary flex w-full items-end justify-center gap-4 text-5xl font-bold'>
              <span>Tanu</span>
              <span className='font-roboto-serif text-3xl font-normal'>&</span>
              <span>Nur</span>
            </div>
          </div>
          <Media data={data_media} />
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
