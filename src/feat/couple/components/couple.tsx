import type { CoupleDTO } from '../dto';
import Frame from '@/components/frame';

export default function Couple({ data }: { data: CoupleDTO }) {
  return (
    <Frame>
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
    </Frame>
  );
}
