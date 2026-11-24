import { cn } from 'cn';
// COMPONENTS
import Moment from './components/moment';
import Couple from './feat/couple/components/couple';
import Events from './feat/events/components/events';
import Rsvp from './feat/rsvp/components/rsvp';
import Maps from './feat/maps/components/maps';
import Payment from './feat/payment/components/payment';
import Cover from './feat/cover/components/cover';
import Greetings from './feat/greetings/components/greetings';
import Quotes from './feat/quotes/components/quotes';

// ASSETS
import PaperBG from '@/assets/paper-bg.jpeg';
import Moment1 from '@/assets/moment1.webp';
import Moment2 from '@/assets/moment2.webp';
import Groom from '@/assets/groom.jpg';
import Bride from '@/assets/bride.jpg';

// DATA
import CoupleData from '@/feat/couple/data.json';
import EventData from '@/feat/events/data.json';
import type { CoupleDTO } from './feat/couple/dto';
import type { EventDTO } from './feat/events/dto';
import Thanks from './feat/thanks/components/thanks';
import { Toaster } from './components/ui/toast';
import Prewed from './feat/prewed/components/prewed';

function App() {
  const groom_data: CoupleDTO = { ...CoupleData.groom, type: 'groom', imgUrl: Groom };
  const bride_data: CoupleDTO = { ...CoupleData.bride, type: 'bride', imgUrl: Bride };
  const marriage_data: EventDTO = { ...EventData.marriage };
  const reseption_data: EventDTO = { ...EventData.reseption };
  return (
    <>
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
        <Cover />
        <div className='p-4'>
          <Greetings />
          <Moment url={Moment1} />
          <Couple data={groom_data} />
          <Couple data={bride_data} />
          <Moment url={Moment2} />
          <Events data={marriage_data} />
          <Events data={reseption_data} />
          <Moment url={Moment1} />
          <Maps />
          <Rsvp />
          <Payment />
          <Quotes />
          <Prewed />
          <Thanks />
        </div>
      </main>
      <Toaster />
    </>
  );
}

export default App;
