import Rings from '@/assets/ring.png';
import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { motion } from 'motion/react';

export default function Quotes() {
  return (
    <Frame id='quotes'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col items-center justify-center gap-6'
      >
        <motion.img variants={item} src={Rings} alt='Ring Image' className='w-1/2' />
        <motion.p variants={item} className='p-8 text-center text-sm italic'>
          "dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu
          dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
          menjadikan di antaramu rasa kasih dan sayang. Sungguhnya pada yang demikian itu
          benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir."
        </motion.p>
        <motion.span variants={item} className='mb-6 font-bold'>
          [QS. Ar-Rum: 21]
        </motion.span>
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
// https://youtu.be/852S1cKSOLc?si=a05wBDYc7FW9-Gj1
