import Moment3 from '@/assets/moment3.webp';
import Moment4 from '@/assets/moment4.webp';
import Moment5 from '@/assets/moment5.webp';
import Moment6 from '@/assets/moment6.webp';
import Moment7 from '@/assets/moment7.webp';
import Moment8 from '@/assets/moment8.webp';
import Frame from '@/components/frame';
import { cn } from 'cn';

export default function Gallery() {
  return (
    <Frame id='gallery'>
      <div className='flex flex-1 flex-col gap-6'>
        <span className='text-primary font-monte-carlo block text-center text-5xl'>
          Our Moments
        </span>
        <div className={cn('grid h-full grid-cols-2 gap-4 px-4', '*:grid *:grid-rows-4 *:gap-4')}>
          <div
            className={cn(
              '*:overflow-hidden *:bg-cover *:bg-center *:bg-no-repeat *:first:row-span-2'
            )}
          >
            <div style={{ backgroundImage: `url(${Moment7})` }} />
            <div style={{ backgroundImage: `url(${Moment4})` }} />
            <div style={{ backgroundImage: `url(${Moment6})` }} />
          </div>
          <div
            className={cn(
              '*:overflow-hidden *:bg-cover *:bg-center *:bg-no-repeat *:last:row-span-2'
            )}
          >
            <div style={{ backgroundImage: `url(${Moment8})` }} />
            <div style={{ backgroundImage: `url(${Moment5})` }} />
            <div style={{ backgroundImage: `url(${Moment3})` }} />
          </div>
        </div>
      </div>
    </Frame>
  );
}
