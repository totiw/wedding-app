import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Flower1 from '@/assets/flower1.png';
import { useEffect, useState } from 'react';
import { getRsvps } from '@/feat/rsvp/api';
import Card from '@/feat/rsvp/components/card';
import type { RsvpDTO } from '@/feat/rsvp/dto';

export default function Rsvp() {
  const [rsvps, setRsvps] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rsvps_data = await getRsvps();
        setRsvps(rsvps_data.data);
        console.log(rsvps_data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section id='rsvp' className='relative z-20'>
      <div className='flex justify-between'>
        <img src={Flower1} alt='Flower Image' className='w-1/3 self-start' />
        <img src={Flower1} alt='Flower Image' className='w-1/3 scale-x-[-1] self-start' />
      </div>
      <div className='flex flex-col gap-4 py-12'>
        <span className='text-primary font-monte-carlo self-center text-5xl font-semibold'>
          RSVP
        </span>
        <span className='self-center font-semibold'>Ucapan dan Doa</span>
        {/* FORM */}
        <div className='p-4'>
          <form className='flex flex-col gap-8'>
            <Field>
              <FieldLabel htmlFor='field-name' className='font-semibold'>
                Nama
              </FieldLabel>
              <Input id='field-name' className='bg-white' placeholder='Haryono jati' required />
            </Field>
            <Field>
              <FieldLabel htmlFor='field-notes' className='font-semibold'>
                Ucapan
              </FieldLabel>
              <Textarea
                id='field-notes'
                placeholder='Selamat atas pernikahannya!'
                className='h-20 resize-none bg-white'
              />
            </Field>
            <Button>Kirim</Button>
          </form>
        </div>
        {/* CARD */}
        <div className='relative flex justify-center p-4'>
          <div className='relative z-10 flex max-h-80 flex-col gap-12 overflow-y-auto *:even:self-end'>
            {rsvps.length ? (
              rsvps.map((rsvp: RsvpDTO) => <Card key={rsvp.id} data={rsvp} />)
            ) : (
              <p>Silahkan kirim ucapan</p>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <img src={Flower1} alt='Flower Image' className='w-1/3 scale-y-[-1] self-start' />
        <img
          src={Flower1}
          alt='Flower Image'
          className='w-1/3 scale-x-[-1] scale-y-[-1] self-start'
        />
      </div>
    </section>
  );
}
