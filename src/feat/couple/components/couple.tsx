import type { CoupleDTO } from '../dto';
import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { motion } from 'motion/react';

export default function Couple({ data }: { data: CoupleDTO }) {
  return (
    <Frame>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col items-center gap-4'
      >
        <motion.img
          variants={item}
          src={data.imgUrl}
          alt='Couple Image'
          className='h-64 rounded-full shadow-lg shadow-gray-700/50'
        />
        <motion.span variants={item} className='font-monte-carlo text-primary text-6xl font-bold'>
          {data.nickname}
        </motion.span>
        <motion.span variants={item} className='text-lg font-semibold'>
          {data.name}
        </motion.span>
        <motion.p variants={item} className='flex flex-col text-center text-sm'>
          <span>{data.type === 'groom' ? 'Putra' : 'Putri'} Pertama</span>
          <span>dari Bapak {data.fatherName}</span>
          <span>& Ibu {data.motherName}</span>
        </motion.p>
      </motion.div>
    </Frame>
  );
}
