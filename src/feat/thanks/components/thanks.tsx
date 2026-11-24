import Media from '@/feat/thanks/components/media';
import MediaData from '@/feat/thanks/data.json';
import type { MediaDTO } from '@/feat/thanks/dto';
import Frame from '@/components/frame';

export default function Thanks() {
  const data_media: MediaDTO = MediaData.data;
  return (
    <Frame id='thanks'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <p className='px-8 text-center text-sm italic'>
          Merupakan suatu kebahagiaan bagi kami atas kehadiran Bapak/Ibu untuk memberikan doa restu
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
    </Frame>
  );
}
