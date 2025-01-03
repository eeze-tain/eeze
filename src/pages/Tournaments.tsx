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
        fontFamily: 'Roboto',
        overflowX: 'hidden', // Prevent horizontal overflow
        marginTop: '0rem',
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
                  fontSize: '80px',
                  fontWeight: 'bold',
                  marginTop: '4rem',
                  marginBottom: 2,
                }}
              >
                Customisable <br />{' '}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '80px',
                    fontWeight: 'bold',
                  }}
                  color="#D3B1FF"
                >
                  Tournament
                </Typography>{' '}
                Features
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              width={'100%'}
              variant="subtitle1"
              sx={{
                fontWeight: 100,
                color: '#2FD093',
                alignSelf: 'right',
                fontSize: '2.5rem',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                marginTop: '15rem',
              }}
            >
              <span style={{ fontWeight: 800 }}>
                Unleash Competitive Spirit with Real-time, Engaging Tournaments
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
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
              marginBottom: '2rem',
              fontSize: '3rem'
            }}
          >
            Tournament UI
          </Typography>
          {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'} /> */}
          {/* <Box sx={{marginLeft: '-10%', transform: 'scale(80%)'}}> */}
          <Carousel
            settings={frontEndCourselSettings}
            slides={frontEndSlides}
          />
          {/* </Box> */}
        </Box>
      </motion.div>
      {/* Hero Section - Back End Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ marginTop: '7rem' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: 5,
              '@media screen and (min-width: 2560px)': {
                fontSize: '3rem', // Adjust font size
              },
            }}
          >
            Back Office
          </Typography>
          {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'} /> */}
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
    image: '/images/live-widget.png',
  },
  {
    number: '2',
    title: 'Default Widget',
    image: '/images/default-widget.png',
  },
  {
    number: '3',
    title: 'Leaderboard',
    image: '/images/leaderboard.png',
  },
  {
    number: '4',
    title: 'Registration',
    image: '/images/registration.png',
  },
  // { number: "5", title: "Limited Widget", image: "/eeze/images/final.png" },
];

const frontEndCourselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
};

// Data for slides: Includes titles and image paths
const backEndSlides = [
  {
    number: '1',
    title: 'Tournament List',
    image: '/images/tournament-list.png',
  },
  {
    number: '2',
    title: 'Creating New Tournament',
    image: '/images/create-new-tournament.png',
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

export default Tournaments;
