import Countdown from '@/feat/events/components/countdown';
import type { EventDTO } from '@/feat/events/dto';
import { formatEventsDate, formatEventsTime, getEventsDateTime } from '@/lib/utils';
import Frame from '@/components/frame';

export default function Events({ data }: { data: EventDTO }) {
  const { date, endTime, location, name, startTime } = data;
  const event_date = formatEventsDate(date);
  const event_time = formatEventsTime(startTime, endTime);
  return (
    <Frame>
      <div className='flex flex-col gap-8'>
        <span className='text-primary font-monte-carlo text-center text-5xl font-bold'>{name}</span>
        <div className='flex flex-col gap-4'>
          <span className='text-center text-lg'>{event_date.month}</span>
          <div className='m-auto flex w-4/5 items-center justify-evenly'>
            <span className='border-primary flex-1 border-y-2 text-center text-lg leading-loose'>
              {event_date.day}
            </span>
            <span className='font-monte-carlo text-primary flex-1 text-center text-6xl font-bold'>
              {event_date.date}
            </span>
            <span className='border-primary flex-1 border-y-2 text-center text-lg leading-loose'>
              {event_date.year}
            </span>
          </div>
          <span className='text-center text-lg'>{event_time}</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-primary text-center text-3xl font-medium'>Lokasi Acara</span>
          <span className='text-center text-lg font-semibold'>Rumah mempelai wanita</span>
          <span className='w-60 text-center text-sm'>{location}</span>
        </div>
        <Countdown date={getEventsDateTime(date, startTime)} />
      </div>
    </Frame>
  );
}
