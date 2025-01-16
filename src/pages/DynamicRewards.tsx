import { Box, Button, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import AnimatedSection from './components/AnimatedSection';
import MarkedText from './components/MarkedText';
import VideoPlayer from './components/VideoPlayer';
const typographyStyles = {
  header: {
    fontWeight: 800,
    color: '#FBF8F8',
    fontSize: '90px',
    textTransform: 'capitalize',
    fontFamily: 'Raleway, serif',
    lineHeight: '90px',
    '& span': { color: '#D3B1FF' },
  },
  subHeader: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'right',
    fontSize: '42px',
    lineHeight: '67.2px',
    fontFamily: 'Raleway, serif',
  },
  sectionTitle: {
    fontWeight: 700,
    color: '#FFFFFF',
    fontSize: '54px',
    textTransform: 'capitalize',
    lineHeight: '84px',
    fontFamily: 'Raleway, serif',
    '& span': { color: '#D3B1FF' },
  },
};

// Layout constants
const containerStyles = {
  mainWrapper: {
    padding: '2rem 4rem',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    overflowX: 'hidden',
    marginTop: '40px',
    marginBottom: '30px',
  },
  sectionWrapper: {
    border: '1px solid #7C1DF7',
    borderRadius: '40px',
    padding: '16px',
    marginTop: '120px',
    width: 'calc(100% - 32px)',
  },
  sectionInnerBg: {
    display: 'flex',
    background:
      'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
    width: 'calc(100% - 120px)',
    height: 'calc(100% - 120px)',
    borderRadius: '30px',
    padding: '60px',
    gap: '60px',
  },
};
const DynamicRewards: React.FC = () => {

  const videoPlayerRefs = useRef([]); // Array of refs
  const handleToggleVideo = (index: number) => {
    const videoPlayerRef = videoPlayerRefs.current[index];
    if (videoPlayerRef) {
      if (isPlaying[index]) {
        videoPlayerRef.pause();
      } else {
        videoPlayerRef.play();
      }
      setIsPlaying((prev) => {
        const newStatus = [...prev];
        newStatus[index] = !prev[index];
        return newStatus;
      });
    }
  };
  const [isPlaying, setIsPlaying] = useState<boolean[]>(Array(phases.length).fill(false)); // State to track video player status

  const togglePlayState = (index: number, playing: boolean) => {
    const newStates = [...isPlaying];
    newStates[index] = playing;
    setIsPlaying(newStates);
  };

  return (
    <Box sx={containerStyles.mainWrapper}>
      <AnimatedSection>
        {/* Hero Section */}
        <Box display="flex" justifyContent="center">
          <Typography variant="h3" sx={typographyStyles.header}>
            Dynamic <span>Rewards</span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="body1" sx={typographyStyles.subHeader}>
              Excite players with a growing reward system while keeping costs in
              check by planning budget in advance
            </Typography>
          </Box>
        </Box>

        {/* Phases Section */}
        <Box sx={containerStyles.sectionWrapper} marginTop={'120px'}>
          <Box
            sx={containerStyles.sectionInnerBg}
            display={'flex'}
            flexDirection={'row'}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              flexDirection={'column'}
              width={'42%'}
            >
              <Typography sx={typographyStyles.sectionTitle}>
                What <span>Players can see</span>
              </Typography>
              <Box marginTop={'60px'}>
                <Typography
                  sx={{
                    fontFamily: '"Raleway", serif',
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '42px',
                    '& span': {
                      fontWeight: 700,
                    },
                  }}
                >
                  <span>Drive player interaction</span>&nbsp;by scaling rewards
                  based on participation, fostering excitement and activity
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Raleway", serif',
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '42px',
                    '& span': {
                      fontWeight: 700,
                    },
                    marginTop: '60px',
                  }}
                >
                  Maintain <span>budget control</span> and{' '}
                  <span>cost efficiency</span> by balancing prize allocation
                  with engagement levels
                </Typography>
              </Box>
            </Box>
            <Box display={'flex'} marginTop={'60px'} gap={'60px'} width={'58%'}>
              {phases.map(({ title, videoSrc, thumbnailSrc }, index) => (
                <Box
                  key={index}
                  width={'50%'}
                  display={'flex'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Typography
                    sx={{
                      fontSize: '1.725rem',
                      marginBottom: '40px',
                      fontFamily: '"Raleway", serif',
                      fontWeight: 700,
                    }}
                  >
                    {title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'rgba(112, 23, 230, 1)',
                      borderRadius: '16px',
                      textTransform: 'none',
                      fontSize: '28px',
                      fontFamily: 'Raleway',
                      padding: '16px 30px',
                      boxShadow: "0px 0px 20.23px 0px rgba(0, 0, 0, 0.2)",
                      marginBottom: "40px"
                    }}
                    startIcon={
                      <Box
                        component="img"
                        src={isPlaying[index] ? '/images/pause-icon.png' : '/svg/play-icon.svg'}
                        alt={`Play Icon`}
                        sx={{
                          width: '34px',
                          height: '34px'
                        }}
                      />
                    }
                    onClick={() => handleToggleVideo(index)}
                  >
                    Play Animation
                  </Button>
                  <VideoPlayer
                    sx={{
                      border: '1px solid #ffffff',
                      borderRadius: '8px',
                      width: '373px',
                    }}
                    playOnLoop={false}
                    ref={(el: any) => (videoPlayerRefs.current[index] = el)} // Assign ref to the current index
                    videoSrc={videoSrc}
                    thumbnailSrc={thumbnailSrc}
                    onPlay={() => togglePlayState(index, true)}
                    onPause={() => togglePlayState(index, false)}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Back Office Section */}
        <Box
          sx={containerStyles.sectionWrapper}
          marginTop={'120px'}
          marginBottom={'20px'}
        >
          <Box
            sx={containerStyles.sectionInnerBg}
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography sx={typographyStyles.sectionTitle}>
              Back <span>Office</span>
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: '36px',
                  fontWeight: '700',
                  fontFamily: 'Raleway, serif',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <span>Set Up Dynamic Rewards</span>
              </Typography>
              <MarkedText
                sx={{
                  fontSize: '24px',
                  justifyContent: 'center',
                }}
              >
                Set up triggers, stages, and reward increments flexibly
              </MarkedText>
              <Box
                sx={{
                  background: '#1C102E',
                  borderRadius: '32.9px',
                  border: '1.37px solid #FFFFFF',
                  position: 'relative',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  marginTop: '60px',
                }}
              >
                <VideoPlayer
                  playOnLoop={false}
                  videoSrc={'/videos/bo-dynamic-rewards.mov'}
                  videoBorderRadius="33px"
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '36px',
                  fontWeight: '700',
                  fontFamily: 'Raleway, serif',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <span>Preview Prize Pool</span>
              </Typography>
              <MarkedText sx={{ justifyContent: 'center' }}>
                Preview the prize pool to ensure alignment with your budget
              </MarkedText>
              <Box
                component="img"
                src="/images/bo-dynamic-rewards-pool.png"
                alt="Dynamic Rewards Pool"
                sx={{
                  background: '#00000066',
                  borderRadius: '32.9px',
                  height: 'auto',
                  width: '100%',
                  border: '1.37px solid #FFFFFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '60px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

// Data for phases: Includes titles and image paths
const phases = [
  {
    number: '1',
    title: 'Registration - Dynamic Prize',
    videoSrc: '/videos/dynamic-rewards-reg-phase.mp4',
    thumbnailSrc: '/images/reg-thumbnail.png',
  },
  {
    number: '2',
    title: 'Live - Dynamic Prize',
    videoSrc: '/videos/dynamic-rewards-live-phase.mp4',
    thumbnailSrc: '/images/live-thumbnail.png',
  },
];

export default DynamicRewards;
