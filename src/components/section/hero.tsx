export default function Hero() {
  return (
    <section
      id='hero'
      className='relative z-20 flex flex-col items-center justify-center gap-6 p-4'
    >
      <div className='flex'>
        <img
          src='/src/assets/flower1.png'
          alt='Flower Image'
          className='w-1/2 self-start object-contain'
        />
        <img
          src='/src/assets/flower1.png'
          alt='Flower Image'
          className='w-1/2 scale-x-[-1] self-start object-contain'
        />
      </div>
      <img src='/src/assets/ring.png' alt='Ring Image' className='w-1/2' />
      <p className='p-8 text-center text-sm italic'>
        "dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu
        dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
        di antaramu rasa kasih dan sayang. Sungguhnya pada yang demikian itu benar-benar terdapat
        tanda-tanda kebesaran Allah bagi kaum yang berpikir."
      </p>
      <span className='mb-6 font-bold'>[QS. Ar-Rum: 21]</span>
      <div
        id='couple-initial'
        className='font-monte-carlo flex w-full justify-center gap-6 text-7xl'
      >
        <span>T</span>
        <hr className='ml-2 h-auto border-l-2 border-gray-300' />
        <span>N</span>
      </div>
    </section>
  );
}
