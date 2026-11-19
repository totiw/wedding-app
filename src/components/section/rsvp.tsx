import { cn } from 'cn';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function Rsvp() {
  return (
    <section id='rsvp' className='relative z-20'>
      <div className='-mt-8 h-[80dvh]'>
        <div
          className={cn(
            'h-full w-full bg-[url(/src/assets/couple1.webp)] bg-cover bg-center bg-no-repeat',
            'mask-[url(/src/assets/ripped1.webp)] mask-center mask-no-repeat'
          )}
        />
      </div>

      <div className='flex flex-col gap-4 py-12'>
        <span className='text-primary self-center text-4xl'>RSVP</span>
        <span className='self-center'>12 Desember 2026</span>
        <div className='p-4'>
          <form className='flex flex-col gap-8'>
            <Field>
              <FieldLabel htmlFor='field-name'>Nama Lengkap</FieldLabel>
              <Input id='field-name' className='bg-white' placeholder='Albert Eisntein' required />
            </Field>
            <Field>
              <FieldLabel htmlFor='field-notes'>Ucapan</FieldLabel>
              <Textarea
                id='field-notes'
                placeholder='Selamat atas pernikahannya!'
                className='resize-none bg-white'
              />
            </Field>
            <Button>Kirim RSVP</Button>
          </form>
        </div>
        <div className='flex justify-center'>
          <img src='/src/assets/flower3.png' alt='Flower and Butterfly Image' className='h-80' />
        </div>
      </div>
    </section>
  );
}
