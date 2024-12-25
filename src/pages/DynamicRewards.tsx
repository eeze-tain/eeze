import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';
import Carousel from '../components/Carousel';

const DynamicRewards: React.FC = () => {
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
          padding: '0rem 8rem', // Adjust padding for larger screen
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
                    fontSize: '160px', // Scale font size for large screens
                  },
                }}
              >
                Dynamic <br />{' '}
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
                      fontSize: '160px', // Scale font size for large screens
                    },
                  }}
                  color="#D3B1FF"
                >
                  Rewards
                </Typography>{' '}
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
              <span style={{ fontWeight: 800 }}>Budget</span> and{' '}
              <span style={{ fontWeight: 800 }}>scale prizes</span> according to
              player participation, ensuring a balance between{' '}
              <span style={{ fontWeight: 800 }}>increased engagement</span> and{' '}
              <span style={{ fontWeight: 800 }}>cost efficiency</span>.
              <br></br>
              <br></br>
              Effortlessly set up dynamic cash rewards by choosing{' '}
              <span style={{ fontWeight: 800 }}>triggers, stages,</span> and{' '}
              <span style={{ fontWeight: 800 }}>reward increases</span>. Preview
              the prize pool to{' '}
              <span style={{ fontWeight: 800 }}>match your budget</span>.
              <br></br>
              <br></br>
              <span style={{ fontWeight: 800 }}>Boost engagement</span> while
              managing costs and{' '}
              <span style={{ fontWeight: 800 }}>optimising GGR</span> with this
              simple configuration.
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
          <Carousel
            settings={frontEndCourselSettings}
            slides={frontEndSlides}
          />
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
    title: 'Promotion - Dynamic Prize',
    image: '/eeze/images/live-widget.png',
  },
  {
    number: '2',
    title: 'Live Tournamet - Dynamic Prize',
    image: '/eeze/images/default-widget.png',
  },
];

const frontEndCourselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
};

// Data for slides: Includes titles and image paths
const backEndSlides = [
  {
    number: '1',
    title: 'Setting Up Dynamic Rewards',
    image: '/eeze/images/tournament-list.png',
  },
  {
    number: '2',
    title: 'Configuring Different Stages & Results',
    image: '/eeze/images/create-new-tournament.png',
  },
];

const backEndCourselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
};

export default DynamicRewards;
