import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';
import Carousel from '../components/Carousel';
import AnimatedSection from './components/AnimatedSection';
import MarkedText from './components/MarkedText';
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
  }
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
    background: 'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
    width: 'calc(100% - 120px)',
    height: 'calc(100% - 120px)',
    borderRadius: '30px',
    padding: '60px',
  },
};
const DynamicRewards: React.FC = () => {
  return (
    <Box sx={containerStyles.mainWrapper}>
      <AnimatedSection>
        {/* Hero Section */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3" sx={typographyStyles.header}>
            Dynamic <span>Rewards
            </span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="body1" sx={typographyStyles.subHeader} >
              Excite players with a growing reward system while keeping costs in check by planning budget in advance
            </Typography>
          </Box>
        </Box>

        {/* Phases Section */}
        <Box sx={containerStyles.sectionWrapper} marginTop={"120px"}>
          <Box sx={containerStyles.sectionInnerBg} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"space-between"} flexDirection={"column"}>
              <Typography sx={typographyStyles.sectionTitle} width={"70%"}>
                What <span>Players can see
                </span>
              </Typography>
              <Box>
                <Typography >
                  <span>Drive player interaction
                  </span>by scaling rewards based on participation, fostering excitement and activity
                </Typography>
                <Typography >
                  Maintain <span>budget control</span> and <span>cost efficiency</span> by balancing prize allocation with engagement levels
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "60px" }} display={"flex"}>
              {phases.map((slide) => (
                <Box width={"25%"} display={"flex"} justifyContent={"center"} flexDirection={"column"}
                  alignItems={"center"}>
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Box sx={{
                    border: '1px solid #ffffff',
                    borderRadius: '16px',
                  }} component="img" src={slide.image} alt={slide.title}
                  />
                </Box>

              ))}
            </Box>
          </Box>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

// Data for slides: Includes titles and image paths
const phases = [
  {
    number: '1',
    title: 'Promotion - Dynamic Prize',
    image: '/images/live-widget.png',
  },
  {
    number: '2',
    title: 'Live Tournamet - Dynamic Prize',
    image: '/images/default-widget.png',
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
    image: '/images/tournament-list.png',
  },
  {
    number: '2',
    title: 'Configuring Different Stages & Results',
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

export default DynamicRewards;
