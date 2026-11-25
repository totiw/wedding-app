import Rings from '@/assets/ring.png';
import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { motion } from 'motion/react';

export default function Greetings() {
  return (
    <Frame id='greetings'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col items-center justify-center gap-4'
      >
        <motion.img variants={item} src={Rings} alt='Ring Image' className='w-1/2' />
        <motion.span variants={item} className='font-bold'>
          Assalamu'alaikum Wr Wb
        </motion.span>
        <motion.p variants={item} className='px-8 text-center text-sm italic'>
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara
          resepsi pernikahan anak kami
        </motion.p>
        <motion.div
          variants={item}
          className='font-monte-carlo flex w-full justify-center gap-6 pb-4 text-7xl'
        >
          <span>T</span>
          <hr className='ml-2 h-auto border-l-2 border-gray-300' />
          <span>N</span>
        </motion.div>
      </motion.div>
    </Frame>
  );
}
