import { Button } from '@/components/ui/button';
import LogoBank1 from '@/assets/bca-logo.webp';

export default function PaymentCard() {
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
            <img src={LogoBank1} alt='Logo BCA' className='h-full w-full leading-tight' />
          </div>
          <span>000937864871</span>
          <span>Tanu</span>
        </div>
        <Button onClick={() => handleCopy}>Copy</Button>
      </div>
    </div>
  );
}
