import QRCode from 'react-qr-code';

export default function Maps() {
  return (
    <section id='maps' className='relative z-20'>
      <div className='flex w-full flex-col items-center gap-12 px-4'>
        <div className='flex flex-col gap-4'>
          <span className='font-monte-carlo text-primary text-5xl font-semibold'>Peta Lokasi</span>
          <span className='font-semibold'>Rumah mempelai wanita</span>
        </div>
        <p className='w-80 text-center'>Scan kode QR berikut untuk akses lebih cepat</p>
        <div className='h-40 w-40 rounded-md border-2 bg-white p-2'>
          <QRCode value='https://maps.app.goo.gl/jv9ArhLjfVfwoccVA' className='h-full w-full' />
        </div>
        <span className='font-monte-carlo text-primary text-5xl'>Terima Kasih!</span>
        <div className='w-full overflow-x-auto'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4273602080902!2d106.81360079999999!3d-6.4674223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c2016bb3b12d%3A0xfdcb0504851aad5d!2sJl.%20Bougenville%20No.28%2C%20Rw.%20Panjang%2C%20Kecamatan%20Bojonggede%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016920!5e0!3m2!1sid!2sid!4v1795101845272!5m2!1sid!2sid'
            height='350'
            width='100%'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='strict-origin-when-cross-origin'
          />
        </div>
      </div>
    </section>
  );
}
