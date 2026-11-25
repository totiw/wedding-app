import Media from '@/feat/thanks/components/media';
import MediaData from '@/feat/thanks/data.json';
import type { MediaDTO } from '@/feat/thanks/dto';
import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { motion } from 'motion/react';

export default function Thanks() {
  const data_media: MediaDTO = MediaData.data;
  return (
    <Frame id='thanks'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col items-center justify-center gap-8'
      >
        <motion.p variants={item} className='px-8 text-center text-sm italic'>
          Merupakan suatu kebahagiaan bagi kami atas kehadiran Bapak/Ibu untuk memberikan doa restu
        </motion.p>
        <motion.div variants={item} className='flex flex-col gap-2'>
          <span className='font-bold'>Hormat kami yang mengundang</span>
          <div className='font-monte-carlo text-primary flex w-full items-end justify-center gap-4 text-5xl font-bold'>
            <span>Tanu</span>
            <span className='font-roboto-serif text-3xl font-normal'>&</span>
            <span>Nur</span>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <Media data={data_media} />
        </motion.div>
      </motion.div>
    </Frame>
  );
}
