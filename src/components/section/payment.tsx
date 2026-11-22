import PaymentCard from '@/feat/payment/components/payment-card';
import PaymentData from '@/feat/payment/data.json';
import Flower1 from '@/assets/flower1.png';
import type { PaymentDTO } from '@/feat/payment/dto';

export default function Payment() {
  const data_payment: PaymentDTO[] = PaymentData.data;
  return (
    <section id='payment' className='relative z-20'>
      <div className='flex h-dvh flex-col justify-between'>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/3 self-start' />
          <img src={Flower1} alt='Flower Image' className='w-1/3 scale-x-[-1] self-start' />
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <span className='text-primary font-monte-carlo self-center text-5xl font-semibold'>
              Wedding
            </span>
            <span className='self-center font-semibold'>Gift</span>
          </div>
          <p className='text-center text-sm'>
            Terima kasih telah menambah semangat kegembiraan kami dengan kehadiran dan hadiah indah
            Anda.
          </p>
          <div className='relative z-10 flex max-h-screen flex-col gap-6 overflow-y-auto *:even:self-end'>
            {data_payment.map((payment) => (
              <PaymentCard key={payment.name} data={payment} />
            ))}
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
