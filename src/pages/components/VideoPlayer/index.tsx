import { useRef, useState, useEffect } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface VideoPlayerProps {
  playOnHover?: boolean;
  sx?: SxProps<Theme>;
  thumbnailSrc?: string;
  videoSrc?: string;
  videoBorderRadius?: string;
}

const VideoPlayer = ({
  playOnHover = false,
  thumbnailSrc,
  videoSrc,
  sx,
  videoBorderRadius,
}: VideoPlayerProps) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle auto-loop behavior
  useEffect(() => {
    if (!playOnHover && videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  }, [playOnHover]);

  const handleMouseEnter = () => {
    if (playOnHover && videoRef.current) {
      setIsHovered(true);
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && videoRef.current) {
      setIsHovered(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          cursor: playOnHover ? 'pointer' : 'default',
          width: '100%',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail: Show only when not hovered */}
        {!isHovered && playOnHover && (
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
          loop={!playOnHover} // Loop if playOnHover is false
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: videoBorderRadius,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
