import { useEffect, useState } from 'react';
import { getRsvps } from '@/feat/rsvp/api';
import FormRsvp from '@/feat/rsvp/components/form';
import FrameRsvp from '@/feat/rsvp/components/frame';
import Card from '@/feat/rsvp/components/card';
import type { RsvpDTO } from '@/feat/rsvp/dto';

export default function Rsvp() {
  const [rsvps, setRsvps] = useState<RsvpDTO[] | never[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rsvps_data = await getRsvps();
        setRsvps(rsvps_data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <FrameRsvp id='rsvp'>
      <div className='flex flex-col gap-4 py-12'>
        <span className='text-primary font-monte-carlo self-center text-5xl font-semibold'>
          RSVP
        </span>
        <span className='self-center font-semibold'>Ucapan dan Doa</span>
        {/* FORM */}
        <div className='p-4'>
          <FormRsvp setRsvps={setRsvps} />
        </div>
        {/* CARD */}
        <div className='relative flex justify-center py-4'>
          <div className='relative z-10 flex max-h-80 w-full flex-col gap-12 overflow-y-auto px-4 *:even:self-end'>
            {rsvps?.length > 0 ? (
              rsvps.map((rsvp: RsvpDTO) => <Card key={rsvp.id} data={rsvp} />)
            ) : (
              <p>Silahkan kirim ucapan</p>
            )}
          </div>
        </div>
      </div>
    </FrameRsvp>
  );
}
