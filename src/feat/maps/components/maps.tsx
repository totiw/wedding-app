import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { motion } from 'motion/react';

export default function Maps() {
  return (
    <Frame id='maps'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex w-full flex-col items-center gap-8 px-4'
      >
        <motion.span
          variants={item}
          className='font-monte-carlo text-primary text-5xl font-semibold'
        >
          Peta Lokasi
        </motion.span>
        <motion.div
          variants={item}
          className='w-full overflow-x-auto rounded-3xl shadow-xl shadow-gray-700/50'
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4273602080902!2d106.81360079999999!3d-6.4674223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c2016bb3b12d%3A0xfdcb0504851aad5d!2sJl.%20Bougenville%20No.28%2C%20Rw.%20Panjang%2C%20Kecamatan%20Bojonggede%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016920!5e0!3m2!1sid!2sid!4v1795101845272!5m2!1sid!2sid'
            height='250'
            width='100%'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='strict-origin-when-cross-origin'
          />
        </motion.div>
        <motion.div variants={item} className='flex flex-col items-center gap-2'>
          <span className='text-lg font-semibold'>Rumah mempelai wanita</span>
          <p className='w-80 text-center text-sm'>
            Perumahan Taman Raya Citayam Blok B3 No.4 Jl. Bougenville
          </p>
        </motion.div>
        <motion.div variants={item} className='flex flex-col items-center gap-2'>
          <a
            href='https://maps.app.goo.gl/jv9ArhLjfVfwoccVA'
            target='_blank'
            className='rounded-md bg-yellow-500 p-2 text-white'
          >
            Petunjuk Ke Lokasi
          </a>
        </motion.div>
      </motion.div>
    </Frame>
  );
}
