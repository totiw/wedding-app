import { cn } from 'cn';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function Rsvp() {
  return (
    <section id='rsvp' className='relative z-20'>
      <div className='-mt-8 h-[80vh]'>
        <div
          className={cn(
            'h-full w-full bg-[url(/src/assets/couple1.webp)] bg-cover bg-center bg-no-repeat',
            'mask-[url(/src/assets/ripped1.webp)] mask-center mask-no-repeat'
          )}
        />
      </div>
      <div className='relative z-10 -mt-8'>
        <img
          src='/src/assets/flower1.png'
          alt='Flower Image'
          className='w-1/3 self-start object-contain'
        />
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
                className='h-40 resize-none bg-white'
              />
            </Field>
            <Button>Kirim</Button>
          </form>
        </div>
        {/* CARD */}
        <div className='relative flex justify-center p-4'>
          <div
            data-slot='rsvp-card'
            className='relative z-10 flex max-h-screen flex-col gap-12 overflow-y-auto *:even:self-end'
          >
            <div className='flex w-4/5 flex-col gap-4 rounded-md bg-white/50 p-2.5'>
              <div className='flex items-center justify-between'>
                <span className='font-semibold'>Rian & Vina</span>
                <span className='rounded-md bg-green-500/50 px-1.5 py-1 text-sm text-green-700'>
                  Hadir
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptatum sit
                corrupti sapiente cupiditate atque aliquid placeat odit facere exercitationem.
              </p>
              <span className='italic'>18 April 2025, 07:27</span>
            </div>
          </div>
        </div>
      </div>
      <div className='relative z-10 flex justify-end'>
        <img
          src='/src/assets/flower1.png'
          alt='Flower Image'
          className='w-1/3 scale-x-[-1] rotate-90 self-start object-contain'
        />
      </div>
    </section>
  );
}
