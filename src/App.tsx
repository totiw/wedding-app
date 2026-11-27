import { useState } from 'react';
import { cn } from 'cn';
// COMPONENTS
import Moment from '@/components/moment';
import Couple from '@/feat/couple/components/couple';
import Events from '@/feat/events/components/events';
import Rsvp from '@/feat/rsvp/components/rsvp';
import Maps from '@/feat/maps/components/maps';
import Payment from '@/feat/payment/components/payment';
import Cover from '@/feat/cover/components/cover';
import Greetings from '@/feat/greetings/components/greetings';
import Quotes from '@/feat/quotes/components/quotes';
import Gallery from '@/feat/gallery/components/gallery';
import Thanks from '@/feat/thanks/components/thanks';
import Prewed from '@/feat/prewed/components/prewed';
import FloatingButton from '@/components/floating-btn';

// ASSETS
import PaperBG from '@/assets/paper-bg.jpeg';
import Moment1 from '@/assets/moment1.webp';
import Moment2 from '@/assets/moment2.webp';
import Groom from '@/assets/groom.webp';
import Bride from '@/assets/bride.webp';

// DATA
import CoupleData from '@/feat/couple/data.json';
import EventData from '@/feat/events/data.json';
import type { CoupleDTO } from '@/feat/couple/dto';
import type { EventDTO } from '@/feat/events/dto';
import { Toaster } from '@/components/ui/toast';
import { AudioProvider } from '@/context/audio/audio.provider';

function App() {
  const groom_data: CoupleDTO = { ...CoupleData.groom, type: 'groom', imgUrl: Groom };
  const bride_data: CoupleDTO = { ...CoupleData.bride, type: 'bride', imgUrl: Bride };
  const marriage_data: EventDTO = { ...EventData.marriage };
  const reseption_data: EventDTO = { ...EventData.reseption };

  const [isOpened, setIsOpened] = useState(false);

  return (
    <AudioProvider>
      <main
        style={{
          backgroundImage: `url(${PaperBG})`,
        }}
        className={cn(
          isOpened ? 'h-screen snap-y snap-mandatory overflow-y-auto' : 'h-dvh overflow-hidden',
          'bg-center',
          'relative z-0 w-dvw max-w-2xl',
          'mx-auto',
          'font-roboto-serif',
          'after:fixed after:top-0 after:z-10 after:mx-auto after:h-screen after:w-dvw after:max-w-2xl after:bg-[#D1F8EF]/50 after:content-[""]'
        )}
      >
        <FloatingButton />
        <Cover setIsOpened={setIsOpened} />
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
        <Quotes />
        <Gallery />
        <Prewed />
        <Payment />
        <Thanks />
      </main>
      <Toaster />
    </AudioProvider>
  );
}

export default App;
