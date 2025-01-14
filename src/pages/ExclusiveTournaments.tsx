import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedSection from './components/AnimatedSection';
import MarkedText from './components/MarkedText';
import VideoPlayer from './components/VideoPlayer';

const typographyStyles = {
  header: {
    fontWeight: 800,
    color: '#FBF8F8',
    fontSize: '100px',
    textTransform: 'capitalize',
    fontFamily: 'Raleway, serif',
    lineHeight: '100px',
    '& span': { color: '#D3B1FF' },
  },
  subHeader: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'right',
    fontSize: '48px',
    lineHeight: '67.2px',
    fontFamily: 'Raleway, serif',
  },
  sectionTitle: {
    fontWeight: 700,
    color: '#FFFFFF',
    fontSize: '60px',
    textTransform: 'capitalize',
    lineHeight: '84px',
    fontFamily: 'Raleway, serif',
    '& span': { color: '#D3B1FF' },
  },
};

// Layout constants
const containerStyles = {
  mainWrapper: {
    padding: '0 4rem',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    overflowX: 'hidden',
    marginTop: '40px',
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
  },
};
const ExclusiveTournaments: React.FC = () => {
  return (
    <Box sx={containerStyles.mainWrapper}>
      <AnimatedSection>
        {/* Hero Section */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3" sx={typographyStyles.header}>
            Exclusive <span>Tournaments</span>
          </Typography>
          <Box sx={{ width: '70%', display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="body1" sx={typographyStyles.subHeader}>
              Tailored tournaments to engage specific player segments
            </Typography>
          </Box>
        </Box>

        {/* Phases Section */}
        <Box sx={containerStyles.sectionWrapper} marginTop={'120px'}>
          <Box
            sx={containerStyles.sectionInnerBg}
            display={'flex'}
            flexDirection={'column'}
          >
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography sx={typographyStyles.sectionTitle} width={'70%'}>
                What <span>Players can see</span>
              </Typography>
              <Box>
                <MarkedText>
                  Use <span>customer segmentation</span> to design tournaments
                  tailored to specific player groups
                </MarkedText>
                <MarkedText sx={{ marginTop: '24px' }}>
                  Deliver personalised, exclusive events that drive{' '}
                  <span>increased player activity</span> and{' '}
                  <span>elevate performance </span>
                </MarkedText>
              </Box>
            </Box>
            <Box sx={{ marginTop: '60px' }} display={'flex'}>
              {phases.map((slide, index) => (
                <Box
                  key={index}
                  width={'25%'}
                  display={'flex'}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Box
                    sx={{
                      border: '1px solid #ffffff',
                      borderRadius: '16px',
                    }}
                    component="img"
                    src={slide.image}
                    alt={slide.title}
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
            <Typography
              sx={{
                marginTop: '60px',
                fontSize: '36px',
                fontWeight: '700',
                fontFamily: 'Raleway, serif',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span>Set Up Exclusive Tournaments</span>
            </Typography>
            <MarkedText>
              Assign <span>customisable tags</span> to track players, upload
              targeted player lists, or set up dynamic filters based on player
              behaviour and location to include or exclude participants
              effortlessly
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
                playOnHover={false}
                videoSrc={'/videos/bo-exclusive-tournament.mov'}
                videoBorderRadius="33px"
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
    title: 'Promotion',
    image: '/images/et-promotion.png',
  },
  {
    number: '2',
    title: 'Registration',
    image: '/images/et-registration.png',
  },
  {
    number: '3',
    title: 'Leaderboard',
    image: '/images/et-leaderboard.png',
  },
  {
    number: '4',
    title: 'Winner',
    image: '/images/et-winner.png',
  },
];

export default ExclusiveTournaments;
