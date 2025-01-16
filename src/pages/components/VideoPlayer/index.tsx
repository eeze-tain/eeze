import { useRef, useEffect, forwardRef, useImperativeHandle, useState } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface VideoPlayerProps {
  sx?: SxProps<Theme>;
  thumbnailSrc?: string;
  videoSrc?: string;
  videoBorderRadius?: string;
  playOnLoop?: boolean;
  onPlay?: () => void; // Callback for play event
  onPause?: () => void; // Callback for pause event
}

const VideoPlayer = forwardRef(({
  thumbnailSrc,
  videoSrc,
  sx,
  videoBorderRadius,
  playOnLoop = true,
  onPlay,
  onPause,
}: VideoPlayerProps, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);

  // Expose video control methods to parent
  useImperativeHandle(ref, () => ({
    play: () => videoRef.current?.play(),
    pause: () => videoRef.current?.pause(),
  }));

  // Attach event listeners for play and pause
  const handlePlay = () => {
    setIsStarted(true); // Video has started playing
    onPlay?.();
  }
  const handlePause = () => onPause?.();

  // Handle auto-loop behavior
  useEffect(() => {
    if (playOnLoop && videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  }, [playOnLoop]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        width: '100%',
        ...sx,
      }}
    >
      {/* Thumbnail */}
      {!isStarted &&  thumbnailSrc && (
        <img
          src={thumbnailSrc}
          alt="Video Thumbnail"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        muted
        loop={playOnLoop}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: videoBorderRadius,
        }}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
});

export default VideoPlayer;
