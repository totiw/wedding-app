import Flower1 from '@/assets/flower1.png';
import Rings from '@/assets/ring.png';

export default function Greetings() {
  return (
    <section id='greetings' className='relative z-20'>
      <div className='flex h-dvh flex-col justify-between'>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/3 self-start' />
          <img src={Flower1} alt='Flower Image' className='w-1/3 scale-x-[-1] self-start' />
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <img src={Rings} alt='Ring Image' className='w-1/2' />
          <span className='font-bold'>Assalamu'alaikum Wr Wb</span>
          <p className='px-8 text-center text-sm italic'>
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara
            resepsi pernikahan anak kami
          </p>
          <div className='font-monte-carlo flex w-full justify-center gap-6 pb-4 text-7xl'>
            <span>T</span>
            <hr className='ml-2 h-auto border-l-2 border-gray-300' />
            <span>N</span>
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
