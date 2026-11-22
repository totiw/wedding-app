export { cn } from 'cn';

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
};

import dayjs from '@/lib/dayjs';

export const formatEventsDate = (date: string) => {
  const parsedDate = dayjs(date);

  return {
    day: parsedDate.format('dddd'),
    date: parsedDate.format('DD'),
    month: parsedDate.format('MMMM'),
    year: parsedDate.format('YYYY'),
  };
};

export const formatEventsTime = (startTime: string, endTime: string) => {
  return `Pukul ${startTime} WIB ~ ${endTime} WIB`;
};

export const getEventsDateTime = (date: string, time: string) => {
  return `${date}T${time}:00+07:00`;
};
