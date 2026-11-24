// UI
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { toast } from '@/components/ui/toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// UTILS
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rsvpSchema, type RsvpFormValues } from '@/feat/rsvp/schema';
import { createRsvp, getRsvps } from '@/feat/rsvp/api';
import type { RsvpDTO } from '@/feat/rsvp/dto';

export default function FormRsvp({
  setRsvps,
}: {
  setRsvps: React.Dispatch<React.SetStateAction<RsvpDTO[] | never[]>>;
}) {
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
  return (
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
  );
}
