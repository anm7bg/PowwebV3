'use client';
import { useRef, useEffect } from 'react';
import styles from './Background.module.scss';

export default function Background({ children }: { children?: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set constant slow‑motion playback (0.5×)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);


  return (
    <>
      <video
        ref={videoRef}
        className={styles['video-background']}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/backgrnd.mp4" type="video/mp4" />
      </video>
      <div className={styles['content-overlay']}>
        {children}
      </div>
    </>
  );
}