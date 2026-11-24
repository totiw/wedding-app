import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { createRsvp, getRsvps } from '@/feat/rsvp/api';
import Flower1 from '@/assets/flower1.png';
import Card from '@/feat/rsvp/components/card';
import { Controller, useForm } from 'react-hook-form';
import type { RsvpDTO } from '@/feat/rsvp/dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { rsvpSchema, type RsvpFormValues } from '@/feat/rsvp/schema';
import { Spinner } from '../ui/spinner';
import { toast } from '../ui/toast';

export default function Rsvp() {
  const [rsvps, setRsvps] = useState([]);
  const items = [
    { label: 'Hadir', value: true },
    { label: 'Tidak Hadir', value: false },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RsvpFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: '',
      present: true,
      notes: '',
    },
  });

  const onSubmit = async (data: RsvpFormValues) => {
    const { success, message } = await createRsvp(data);
    if (!success) {
      return toast.add({
        type: 'error',
        description: message,
        timeout: 3000,
      });
    }

    const rsvps_data = await getRsvps();
    setRsvps(rsvps_data.data);

    return toast.add({
      type: 'success',
      description: 'Berhasil membuat rsvp',
      timeout: 3000,
    });
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='**:data-[slot=form-rsvp]:text-primary flex flex-col gap-8'
          >
            <Field data-slot='form-rsvp'>
              <FieldLabel htmlFor='field-name' className='font-semibold'>
                Nama
              </FieldLabel>
              <Input
                id='field-name'
                className='border-primary bg-white'
                placeholder='Haryono jati'
                {...register('name', { required: 'Nama wajib diisi' })}
              />
            </Field>
            <Field data-slot='form-rsvp'>
              <FieldLabel htmlFor='field-present' className='font-semibold'>
                Kehadiran
              </FieldLabel>
              <Controller
                name='present'
                control={control}
                render={({ field }) => (
                  <Select {...field} items={items} onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger className='border-primary w-full bg-white'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {items.map((item) => (
                        <SelectItem key={item.label} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            <Field data-slot='form-rsvp'>
              <FieldLabel htmlFor='field-notes' className='font-semibold'>
                Ucapan
              </FieldLabel>
              <Textarea
                id='field-notes'
                placeholder='Selamat atas pernikahannya!'
                className='border-primary h-20 resize-none bg-white'
                {...register('notes', { required: 'Silahkan isi ucapan anda' })}
              />
            </Field>
            <Button type='submit' disabled={isSubmitting} className='bg-yellow-500'>
              {isSubmitting ? (
                <>
                  <Spinner /> Mengirim..
                </>
              ) : (
                'Kirim'
              )}
            </Button>
          </form>
        </div>
        {/* CARD */}
        <div className='relative flex justify-center py-4'>
          <div className='relative z-10 flex max-h-80 w-full flex-col gap-12 overflow-y-auto *:even:self-end'>
            {rsvps?.length > 0 ? (
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
