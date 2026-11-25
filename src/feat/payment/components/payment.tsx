import PaymentCard from '@/feat/payment/components/payment-card';
import PaymentData from '@/feat/payment/data.json';
import type { PaymentDTO } from '@/feat/payment/dto';
import Frame from '@/components/frame';
import { container, item } from '@/lib/constant';
import { motion } from 'motion/react';

export default function Payment() {
  const data_payment: PaymentDTO[] = PaymentData.data;
  return (
    <Frame id='payment'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col gap-6 px-4'
      >
        <motion.div variants={item} className='flex flex-col gap-4'>
          <span className='text-primary font-monte-carlo self-center text-5xl font-semibold'>
            Wedding
          </span>
          <span className='self-center font-semibold'>Gift</span>
        </motion.div>
        <motion.p variants={item} className='text-center text-sm'>
          Terima kasih telah menambah semangat kegembiraan kami dengan kehadiran dan hadiah indah
          Anda.
        </motion.p>
        <motion.div
          variants={item}
          className='relative z-10 flex max-h-screen flex-col gap-6 overflow-y-auto *:even:self-end'
        >
          {data_payment.map((payment) => (
            <PaymentCard key={payment.name} data={payment} />
          ))}
        </motion.div>
      </motion.div>
    </Frame>
  );
}
