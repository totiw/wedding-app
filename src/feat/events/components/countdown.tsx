import { Fragment } from 'react/jsx-runtime';
import { useCountdown } from '@/hooks/useCountdown';

interface CountDownItem {
  label: string;
  value: number;
}

export default function Countdown({ date }: { date: string }) {
  const { days, hours, minutes, seconds } = useCountdown(date);
  const countdownItems: (CountDownItem | string)[] = [
    { label: 'Hari', value: days },
    ':',
    { label: 'Jam', value: hours },
    ':',
    { label: 'Menit', value: minutes },
    ':',
    { label: 'Detik', value: seconds },
  ];
  return (
    <div className='flex items-center justify-center gap-4'>
      {countdownItems.map((item, idx) => (
        <Fragment key={typeof item !== 'string' ? item.label : idx}>
          {typeof item !== 'string' ? (
            <div className='rounded-lg bg-yellow-500 p-2 text-center text-white'>
              <div className='text-3xl'>{String(item.value).padStart(2, '0')}</div>
              <div className='text-sm'>{item.label}</div>
            </div>
          ) : (
            <div>{item}</div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
