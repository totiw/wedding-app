import { Button } from '@/components/ui/button';
import type { PaymentDTO } from '../dto';

export default function PaymentCard({ data }: { data: PaymentDTO }) {
  const { accountNumber, name, url } = data;
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text berhasil disalin!');
    } catch (error) {
      console.error('Gagal menyalin text:', error);
    }
  };

  return (
    <div className='flex w-full flex-col gap-4 rounded-md bg-white/50 p-2.5'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='w-20'>
            <img src={url} alt='Logo Bank' className='h-full w-full leading-tight' />
          </div>
          <span>{accountNumber}</span>
          <span>{name}</span>
        </div>
        <Button onClick={() => handleCopy(accountNumber)}>Salin Rekening</Button>
      </div>
    </div>
  );
}
