import Flower1 from '@/assets/flower1.png';
import type { CoupleDTO } from '../dto';
export default function Couple({ data }: { data: CoupleDTO }) {
  return (
    <section className='relative z-20'>
      <div className='flex h-dvh flex-col items-center justify-between'>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/2 self-start' />
          <img src={Flower1} alt='Flower Image' className='w-1/2 scale-x-[-1] self-start' />
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img
            src={data.imgUrl}
            alt='Couple Image'
            className='h-64 rounded-full shadow-lg shadow-gray-700/50'
          />
          <span className='font-monte-carlo text-primary text-6xl font-bold'>{data.nickname}</span>
          <span className='text-lg font-semibold'>{data.name}</span>
          <p className='flex flex-col text-center text-sm'>
            <span>{data.type === 'groom' ? 'Putra' : 'Putri'} Pertama</span>
            <span>dari Bapak {data.fatherName}</span>
            <span>& Ibu {data.motherName}</span>
          </p>
        </div>
        <div className='flex justify-between'>
          <img src={Flower1} alt='Flower Image' className='w-1/2 scale-y-[-1] self-start' />
          <img
            src={Flower1}
            alt='Flower Image'
            className='w-1/2 scale-x-[-1] scale-y-[-1] self-start'
          />
        </div>
      </div>
    </section>
  );
}
