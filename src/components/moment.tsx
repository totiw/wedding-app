import { cn } from 'cn';
import Ripped1 from '@/assets/ripped1.webp';

export default function Moment({ url }: { url: string }) {
  return (
    <section id='moment' className='relative z-20 snap-start'>
      <div className='flex h-dvh flex-col justify-center'>
        <div className='h-full'>
          <div
            style={{
              backgroundImage: `url(${url})`,
              maskImage: `url(${Ripped1})`,
            }}
            className={cn(
              'h-full bg-cover bg-center bg-no-repeat',
              'mask-cover mask-center mask-no-repeat'
            )}
          />
        </div>
      </div>
    </section>
  );
}
