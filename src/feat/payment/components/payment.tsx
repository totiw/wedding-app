import PaymentCard from '@/feat/payment/components/payment-card';
import PaymentData from '@/feat/payment/data.json';
import type { PaymentDTO } from '@/feat/payment/dto';
import Frame from '@/components/frame';

export default function Payment() {
  const data_payment: PaymentDTO[] = PaymentData.data;
  return (
    <Frame id='payment'>
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
    </Frame>
  );
}
