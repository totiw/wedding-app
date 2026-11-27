import { useEffect, useState } from 'react';
import { getRsvps } from '@/feat/rsvp/api';
import FormRsvp from '@/feat/rsvp/components/form';
import FrameRsvp from '@/feat/rsvp/components/frame';
import Card from '@/feat/rsvp/components/card';
import type { RsvpDTO } from '@/feat/rsvp/dto';
import { motion } from 'motion/react';
import { container, item } from '@/lib/constant';

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
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='flex flex-col gap-4 py-12'
      >
        <motion.span
          variants={item}
          className='text-primary font-monte-carlo self-center text-5xl font-semibold'
        >
          RSVP
        </motion.span>
        <motion.span variants={item} className='self-center font-semibold'>
          Ucapan dan Doa
        </motion.span>
        {/* FORM */}
        <motion.div variants={item} className='p-4'>
          <FormRsvp setRsvps={setRsvps} />
        </motion.div>
        {/* CARD */}
        <motion.div variants={item} className='relative flex justify-center py-4'>
          <div className='relative z-10 flex max-h-80 w-full flex-col gap-12 overflow-y-auto px-4 *:even:self-end'>
            {rsvps?.length > 0 ? (
              rsvps.map((rsvp: RsvpDTO) => <Card key={rsvp.id} data={rsvp} />)
            ) : (
              <p className='text-primary text-center'>Silahkan kirim ucapan</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </FrameRsvp>
  );
}
