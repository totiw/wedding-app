import { Fragment } from 'react/jsx-runtime';
import { useCountdown } from '../../hooks/useCountdown';

interface CountDownItem {
  label: string;
  value: number;
}

export default function Events() {
  const { days, hours, minutes, seconds } = useCountdown('2026-12-12T08:00:00+07:00');
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
    <section id='events' className='relative z-20 flex flex-col gap-12'>
      <div className='flex flex-col'>
        <span className='text-center'>Desember</span>
        <div className='m-auto flex w-4/5 items-center justify-evenly'>
          <span className='flex-1 border-y-2 border-[#578FCA] text-center leading-loose'>
            Sabtu
          </span>
          <span className='font-monte-carlo flex-1 text-center text-6xl text-[#578FCA]'>12</span>
          <span className='flex-1 border-y-2 border-[#578FCA] text-center leading-loose'>2026</span>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <span className='text-center'>Menunggu hari istimewa kami</span>
        <div className='flex items-center justify-evenly'>
          {countdownItems.map((item, idx) => (
            <Fragment key={typeof item !== 'string' ? item.label : idx}>
              {typeof item !== 'string' ? (
                <div className='text-center'>
                  <div className='text-5xl text-[#578FCA]'>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className='text-sm text-gray-500'>{item.label}</div>
                </div>
              ) : (
                <div>{item}</div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
