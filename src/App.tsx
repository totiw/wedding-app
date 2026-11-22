import { cn } from 'cn';
import Hero from './components/section/hero';
import Couple from './components/section/couple';
import Events from './components/section/events';
import Media from './components/section/media';
import Timeline from './components/section/timeline';
import Rsvp from './components/section/rsvp';
import Maps from './components/section/maps';
import Payment from './components/section/payment';
import PaperBG from '@/assets/paper-bg.jpeg';
import Envelope from '@/assets/envelope.jpeg';
import { Button } from './components/ui/button';

function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${PaperBG})`,
      }}
      className={cn(
        `bg-center`,
        'relative z-0 h-screen w-dvw max-w-2xl',
        'mx-auto space-y-6 overflow-auto',
        'font-roboto-serif',
        'after:fixed after:top-0 after:z-10 after:mx-auto after:h-screen after:w-dvw after:max-w-2xl after:bg-[#D1F8EF]/50 after:content-[""]'
      )}
    >
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
      <div className='p-4'>
        <Hero />
        <Couple />
        <Events />
        <Media />
        <Timeline />
        <Rsvp />
        <Payment />
        <Maps />
      </div>
    </main>
  );
}

export default App;
