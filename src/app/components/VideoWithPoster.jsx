"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VideoWithPoster() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [videoLoaded]);

  return (
    <>
      {!videoLoaded && (
        <Image
          src="/poster.jpg"
          alt="Primeiro frame do video"
          fill
          className={`object-cover w-full h-full -z-50 ${
            videoLoaded ? "hidden" : "block"
          }`}
          priority
        />
      )}

      <video
        ref={videoRef}
        className={`absolute top-0 left-0 object-cover -z-20 opacity-70 w-full h-full ${
          videoLoaded ? "block" : "hidden"
        }`}
        src="/video/Video-Dnt-2024.mp4"
        onLoad={() => setVideoLoaded(true)}
        onCanPlayThrough={() => setVideoLoaded(true)}
        muted
        playsInline
        loop
        preload="none"
        autoPlay
      />
    </>
  );
}
