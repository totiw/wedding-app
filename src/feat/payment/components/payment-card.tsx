import { Button } from '@/components/ui/button';
import type { PaymentDTO } from '../dto';
import { toast } from '@/components/ui/toast';
import { useState } from 'react';

export default function PaymentCard({ data }: { data: PaymentDTO }) {
  const [btnText, setBtnText] = useState('Salin Rekening');
  const { accountNumber, name, url } = data;
  const handleCopy = async (text: string) => {
    setBtnText('Menyalin..');
    try {
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setBtnText('Salin Rekening');
        toast.add({
          type: 'success',
          description: 'Berhasil menyalin rekening',
        });
      }, 2000);
    } catch {
      toast.add({
        type: 'error',
        description: 'Gagal menyalin rekening',
      });
    }
  };

  return (
    <div className='flex w-full flex-col gap-4 rounded-md bg-white/50 p-2.5'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='w-20'>
            <img src={url} alt='Logo Bank' className='h-full w-full leading-tight' />
          </div>
          <span className='text-lg font-semibold'>{accountNumber}</span>
          <span>{name}</span>
        </div>
        <Button className='bg-yellow-500' onClick={() => handleCopy(accountNumber)}>
          {btnText}
        </Button>
      </div>
    </div>
  );
}
