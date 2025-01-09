import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';
import Carousel from '../components/Carousel';

const ExclusiveTournaments: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '0rem 4rem',
        color: '#FFFFFF',
        fontFamily: 'Inter',
        overflowX: 'hidden', // Prevent horizontal overflow
        marginTop: '-2rem'
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
                Exclusive <br />{' '}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '80px',
                    fontWeight: 'bold',
                    '@media screen and (min-width: 2560px)': {
                      fontSize: '120px', // Scale font size for large screens
                    },
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '160px', // Scale font size for large screens
                    },
                  }}
                  color="#D3B1FF"
                >
                  Tournaments
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
                fontSize: '1.75rem',
                lineHeight: '100%',
                marginBottom: '2rem',
                '@media screen and (min-width: 2560px)': {
                  fontSize: '1.75rem', // Adjust font size
                },
                '@media screen and (min-width: 3200px)': {
                  fontSize: '2rem', // Adjust font size
                },
              }}
            >
              Use <span style={{ fontWeight: 800 }}>customer segmentation</span>{' '}
              to create{' '}
              <span style={{ fontWeight: 800 }}>tailored tournaments</span> with{' '}
              <span style={{ fontWeight: 800 }}>precise engagement</span> based
              on player <span style={{ fontWeight: 800 }}>behaviour</span> and{' '}
              <span style={{ fontWeight: 800 }}>location</span>. Upload{' '}
              <span style={{ fontWeight: 800 }}>targeted player lists</span> or
              set <span style={{ fontWeight: 800 }}>dynamic filters</span> to
              include or exclude participants effortlessly. 
              <br></br>
              <br></br>
              Assign{' '}
              <span style={{ fontWeight: 800 }}>customisable tags</span> to
              track players, enabling more{' '}
              <span style={{ fontWeight: 800 }}>personalised</span> and{' '}
              <span style={{ fontWeight: 800 }}>effective</span> events. This
              approach boosts{' '}
              <span style={{ fontWeight: 800 }}>engagement</span> by focusing on
              specific player preferences. 
              <br></br>
              <br></br>
              Host{' '}
              <span style={{ fontWeight: 800 }}>
                exclusive, personalised events
              </span>{' '}
              to increase{' '}
              <span style={{ fontWeight: 800 }}>player interaction</span> and
              maximise{' '}
              <span style={{ fontWeight: 800 }}>
                Gross Gaming Revenue (GGR)
              </span>
              .
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
              marginBottom: '2rem', 
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
          {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'} /> */}
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
    title: 'Leaderboard',
    image: '/images/et-leaderboard.png',
  },
  {
    number: '2',
    title: 'Promotion',
    image: '/images/et-promotion.png',
  },
  {
    number: '3',
    title: 'Win/Bet Criteria',
    image: '/images/et-winbet.png',
  },
  {
    number: '4',
    title: 'Winner Layout',
    image: '/images/et-winner.png',
  },
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
    title: 'Player Segmentation - Tagging',
    image: '/images/et-tagging.png',
  },
  {
    number: '2',
    title: 'Setting Up Player Group With Filters',
    image: '/images/et-player-group.png',
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

export default ExclusiveTournaments;
