import { cn } from 'cn';
import Hero from './components/section/hero';
import Couple from './components/section/couple';
import Events from './components/section/events';

function App() {
  return (
    <main
      className={cn(
        'relative z-0 h-dvh w-dvw space-y-6 overflow-auto bg-[url(/src/assets/paper-bg.jpeg)] bg-center',
        'font-roboto-serif',
        'after:fixed after:top-0 after:left-0 after:z-10 after:h-dvh after:w-dvw after:bg-[#D1F8EF]/50 after:content-[""]'
      )}
    >
      <Hero />
      <Couple />
      <Events />
      <section id='media' className='relative z-20'>
        Media
      </section>
      <section id='couple-photo-second' className='relative z-20'>
        Couple Photo 2
      </section>
      <section id='timeline' className='relative z-20'>
        Timeline
      </section>
      <section id='rsvp' className='relative z-20'>
        RSVP
      </section>
      <section id='couple-photo-third' className='relative z-20'>
        Couple Photo 3
      </section>
      <section id='maps' className='relative z-20'>
        Maps
      </section>
      <section id='payment' className='relative z-20'>
        Payment
      </section>
    </main>
  );
}

export default App;
