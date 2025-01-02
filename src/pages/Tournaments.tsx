import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';
import Carousel from '../components/Carousel';

const Tournaments: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '0rem 4rem',
        color: '#FFFFFF',
        fontFamily: 'Inter',
        overflowX: 'hidden', // Prevent horizontal overflow
        marginTop: '-2rem',
        '@media screen and (min-width: 2560px)': {
          padding: '0rem 8rem', // Adjust padding for larger screen
        },
        '@media screen and (min-width: 3200px)': {
          marginTop: '8rem',
          padding: '0rem 8rem', // Adjust padding for larger screen
          marginLeft: '3rem',
        },
      }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                marginBottom: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '90px',
                  fontWeight: 'bold',
                  marginTop: '6rem',
                  marginBottom: 2,
                  '@media screen and (min-width: 2560px)': {
                    fontSize: '120px', // Scale font size for large screens
                  },
                  '@media screen and (min-width: 3200px)': {
                    marginTop: '-2rem',
                    fontSize: '180px', // Scale font size for large screens
                  },
                }}
              >
                Customisable <br />{' '}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '90px',
                    fontWeight: 'bold',
                    marginBottom: 0,
                    '@media screen and (min-width: 2560px)': {
                      fontSize: '120px', // Scale font size for large screens
                    },
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '180px', // Scale font size for large screens
                    },
                  }}
                  color="#D3B1FF"
                >
                  Tournament
                </Typography>{' '}
                Features
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Typography
              width={'100%'}
              variant="subtitle1"
              sx={{
                fontWeight: 100,
                alignSelf: 'right',
                '@media screen and (min-width: 2560px)': {
                  fontSize: '1.75rem', // Adjust font size
                },
                '@media screen and (min-width: 3200px)': {
                  fontSize: '2rem', // Adjust font size
                },
              }}
            >
              Easily set up tournaments with{' '}
              <span style={{ fontWeight: 800 }}>
                flexible Promotion and Registration phases, including bet/win
                requirements
              </span>{' '}
              to build excitement before they go live.{' '}
              <br></br>
              <br></br>
              <span style={{ fontWeight: 800 }}>
                Create exclusivity by limiting player spots
              </span>
              , available on a first-come, first served basis. 
              <br></br>
              <br></br>
              Keep players
              engaged with{' '}
              <span style={{ fontWeight: 800 }}>customisable mechanics</span>{' '}
              like <span style={{ fontWeight: 800 }}>score calculation</span>{' '}
              and round{' '}
              <span style={{ fontWeight: 800 }}>qualification strategies</span>.
            </Typography>
          </Grid>
        </Grid>
      </motion.div>
      {/* Hero Section - Front End Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Key Benefits Section */}
        <Box sx={{ marginTop: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: 1,
              '@media screen and (min-width: 2560px)': {
                fontSize: '3rem', // Adjust font size
              },
              '@media screen and (min-width: 3200px)': {
                fontSize: '3.5rem', // Adjust font size
              },
            }}
          >
            Tournament UI
          </Typography>
          <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'} />
          <Carousel settings={frontEndCourselSettings} slides={frontEndSlides} />
        </Box>
      </motion.div>
      {/* Hero Section - Back End Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Key Benefits Section */}
        <Box sx={{ marginTop: '20rem' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: 1,
              '@media screen and (min-width: 2560px)': {
                fontSize: '3rem', // Adjust font size
              },
              '@media screen and (min-width: 3200px)': {
                fontSize: '3.5rem', // Adjust font size
              },
            }}
          >
            Back Office
          </Typography>
          <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'} />
          <Carousel settings={backEndCourselSettings} slides={backEndSlides} />
        </Box>
      </motion.div>
    </Box>
  );
};

// Data for slides: Includes titles and image paths
const frontEndSlides = [
  {
    number: '1',
    title: 'Live Widget',
    image: '/eeze/images/live-widget.png',
  },
  {
    number: '2',
    title: 'Default Widget',
    image: '/eeze/images/default-widget.png',
  },
  {
    number: '3',
    title: 'Leaderboard',
    image: '/eeze/images/leaderboard.png',
  },
  {
    number: '4',
    title: 'Registration',
    image: '/eeze/images/registration.png',
  },
  // { number: "5", title: "Limited Widget", image: "/eeze/images/final.png" },
];

const frontEndCourselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

// Data for slides: Includes titles and image paths
const backEndSlides = [
  {
    number: '1',
    title: 'Tournament List',
    image: '/eeze/images/tournament-list.png',
  },
  {
    number: '2',
    title: 'Creating New Tournament',
    image: '/eeze/images/create-new-tournament.png',
  }
];

const backEndCourselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
};

export default Tournaments;
