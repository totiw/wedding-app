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
