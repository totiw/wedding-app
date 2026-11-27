/// <reference types="youtube" />

import Frame from '@/components/frame';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { container, item } from '@/lib/constant';

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Prewed() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const initializePlayer = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: '852S1cKSOLc',
        playerVars: {
          autoplay: 0,
          mute: 1,
          controls: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
          },
        },
      });

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!playerRef.current?.playVideo) return;

          if (entry.isIntersecting) {
            playerRef.current.mute();
            playerRef.current.playVideo();
          } else {
            playerRef.current.pauseVideo();
          }
        },
        {
          threshold: 0.5,
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    return () => {
      observer?.disconnect();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <Frame id='prewed' ref={sectionRef}>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        className='mx-auto w-full max-w-2xl'
      >
        <motion.div variants={item} className='aspect-video w-full px-4'>
          <div id='youtube-player' className='h-full w-full' />
        </motion.div>
      </motion.div>
    </Frame>
  );
}
