import dayjs from '@/lib/dayjs';
import { cn } from 'cn';
import type { RsvpDTO } from '../dto';

export default function Card({ data }: { data: RsvpDTO }) {
  const { name, notes, present, createdAt } = data;
  const formattedDate = dayjs(createdAt).format('D MMMM YYYY, HH:mm');

  return (
    <div className='flex w-4/5 flex-col gap-4 rounded-md bg-white/50 p-2.5'>
      <div className='flex items-center justify-between'>
        <span className='font-semibold'>{name}</span>
        <span
          className={cn(
            present ? 'bg-green-500/50 text-green-700' : 'bg-red-500/50 text-red-700',
            'rounded-md px-1.5 py-1 text-sm'
          )}
        >
          {present ? 'Hadir' : 'Tidak Hadir'}
        </span>
      </div>
      <p>{notes}</p>
      <span className='italic'>{formattedDate}</span>
    </div>
  );
}
