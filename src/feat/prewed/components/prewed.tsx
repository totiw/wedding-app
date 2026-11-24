import Frame from '@/components/frame';

export default function Prewed() {
  return (
    <Frame id='prewed'>
      <iframe
        width='100%'
        height='315'
        src='https://www.youtube.com/embed/852S1cKSOLc?si=AlDWW7Q0HSrG8-x5&autoplay=1&mute=1'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
    </Frame>
  );
}
