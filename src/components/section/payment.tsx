import PaymentCard from '@/feat/payment/components/payment-card';

export default function Payment() {
  return (
    <section id='payment' className='relative z-20'>
      <div className='flex flex-col gap-6 py-12'>
        <div className='flex flex-col gap-4'>
          <span className='text-primary font-monte-carlo self-center text-5xl font-semibold'>
            Wedding
          </span>
          <span className='self-center font-semibold'>Gift</span>
        </div>
        <p className='text-center text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem eum
          perspiciatis repellat officiis sequi tenetur nesciunt a officia commodi.
        </p>
        <div className='relative z-10 flex max-h-screen flex-col gap-6 overflow-y-auto *:even:self-end'>
          <PaymentCard />
        </div>
      </div>
    </section>
  );
}
