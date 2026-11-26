import Moment3 from '@/assets/moment3.webp';
import Moment4 from '@/assets/moment4.webp';
import Moment5 from '@/assets/moment5.webp';
import Moment6 from '@/assets/moment6.webp';
import Moment7 from '@/assets/moment7.webp';
import Moment8 from '@/assets/moment8.webp';
import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { cn } from 'cn';
import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <Frame id='gallery'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-1 flex-col gap-6'
      >
        <motion.span
          variants={item}
          className='text-primary font-monte-carlo block text-center text-5xl'
        >
          Our Moments
        </motion.span>
        <motion.div
          variants={item}
          className={cn('grid h-full grid-cols-2 gap-4 px-4', '*:grid *:grid-rows-4 *:gap-4')}
        >
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.6 }}
            className={cn(
              '*:overflow-hidden *:bg-cover *:bg-center *:bg-no-repeat *:first:row-span-2'
            )}
          >
            <motion.div variants={item} style={{ backgroundImage: `url(${Moment7})` }} />
            <motion.div variants={item} style={{ backgroundImage: `url(${Moment4})` }} />
            <motion.div variants={item} style={{ backgroundImage: `url(${Moment6})` }} />
          </motion.div>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.6 }}
            className={cn(
              '*:overflow-hidden *:bg-cover *:bg-center *:bg-no-repeat *:last:row-span-2'
            )}
          >
            <motion.div variants={item} style={{ backgroundImage: `url(${Moment8})` }} />
            <motion.div variants={item} style={{ backgroundImage: `url(${Moment5})` }} />
            <motion.div variants={item} style={{ backgroundImage: `url(${Moment3})` }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </Frame>
  );
}
