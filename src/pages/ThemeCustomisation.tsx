import React, { useState } from 'react';
// import { FormProvider } from 'react-hook-form';

import { Box, Typography, Grid, Divider, useTheme } from '@mui/material';

import GridItem from './components/GridItem';
import MobilePreview from './components/MobilePreview';
import LeaderboardPreview from './components/MobilePreview/LeaderBoardPreview/LeaderBoardPreview';
import LogoPreview from './components/MobilePreview/LogoPreview/LogoPreview';
import WidgetScorePreview from './components/MobilePreview/WidgetScorePreview/WidgetScorePreview';
import BasicColorsSettings from './containers/BasicColorsSettings';
// import RadioLogoSelector from './containers/RadioLogoSelector';

import { motion } from 'framer-motion';

const ThemeCustomisation: React.FC = (props: any) => {

  const [colors, setColors] = useState({
    'data.main.backgroundColor': '#FF5733',
    'data.widget.backgroundColor': '#FF5733',
    'data.logo.backgroundColor': '#FF5733',
    'data.main.secondaryColor': '#33FFBD',
    'data.widget.secondaryBackgroundColor': '#33FFBD',
    'data.main.primaryColor': '#337BFF',
  });

  const updateColors = (updates: { [key: string]: string }) => {
    setColors((prevColors) => ({
      ...prevColors,
      ...updates,
    }));
  };

  return (
    <>
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
                  Theme <br />{' '}
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
                    Customisation
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
                Strengthen your brand identity by{' '}
                <span style={{ fontWeight: 800 }}>
                  personalising your own branding, colours,
                </span>{' '}
                and <span style={{ fontWeight: 800 }}>logos</span> within
                tournaments to align with your brand.
                <br />
                <br />
                You can either{' '}
                <span style={{ fontWeight: 800 }}>
                  choose from our preset themes
                </span>{' '}
                to offer a fresh experience for players with new colour theme;{' '}
                <span style={{ fontWeight: 800 }}>or custom colour themes</span>
                .
                <br />
                <br />
                Create a{' '}
                <span style={{ fontWeight: 800 }}>
                  seamless brand experience
                </span>{' '}
                for players in tournaments to emphasise your brand identity and
                build players' loyalty to your platform.
                <br />
                <br />
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
        <Grid container columnGap={2}>
          {/* <ThemeSelector
                  setNewCustomTheme={setNewCustomTheme}
                  newCustomTheme={newCustomTheme}
                  setAlertMessage={setAlertMessage}
                /> */}

          <GridItem border={'none'}>
            <Box display="flex" flexDirection="column">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Key Benefits Section */}
                <Box sx={{ marginTop: '0rem' }}>
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
                    Play Around!
                  </Typography>
                  {/* <LinearGradient
                    height={'4px'}
                    width={'25%'}
                    marginBottom={'4rem'}
                  /> */}
                  <br></br>
                                    <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: 1,
                      '@media screen and (min-width: 2560px)': {
                        fontSize: '2.5rem', // Adjust font size
                      },
                      '@media screen and (min-width: 3200px)': {
                        fontSize: '3rem', // Adjust font size
                      },
                    }}
                  >
                    Adjust the slider to select a colour:
                  </Typography>
                  <BasicColorsSettings
                    mainThemeColor={colors['data.main.backgroundColor']}
                    secondaryThemeColor={colors['data.main.secondaryColor']}
                    CTATextColor={colors['data.main.primaryColor']}
                    setColors={updateColors}
                  />
                </Box>
              </motion.div>
              {/* Hero Section - Front End Carousel */}
              {/* Hero Section - Back End Carousel */}
              

              {/* <Grid item xs={12} md={12}>
                      <RadioLogoSelector />
                    </Grid> */}

              <Box flexGrow={1}>
                <Divider
                  style={{
                    width: '100%',
                    marginTop: '16px',
                    marginBottom: '16px',
                  }}
                />
                <Box></Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem border={'none'}>
            <Box>
              <Divider style={{ width: '100%', marginBottom: '16px' }} />
              <MobilePreview
                primaryColor={colors['data.main.primaryColor']}
                secondaryColor={colors['data.main.secondaryColor']}
                backgroundColor={colors['data.main.backgroundColor']}
              >
                <LeaderboardPreview
                  primaryColor={colors['data.main.primaryColor']}
                  secondaryColor={colors['data.main.secondaryColor']}
                  backgroundColor={colors['data.main.backgroundColor']}
                />
              </MobilePreview>
            </Box>
          </GridItem>
          <GridItem border={'none'}>
            <Box>
              <Divider style={{ width: '100%', marginBottom: '16px' }} />
              <MobilePreview
                primaryColor={colors['data.main.primaryColor']}
                secondaryColor={colors['data.main.secondaryColor']}
                backgroundColor={colors['data.main.backgroundColor']}
              >
                <WidgetScorePreview />
              </MobilePreview>
            </Box>
            <Box>
              <Divider style={{ width: '100%', marginBottom: '16px' }} />
              <MobilePreview
                primaryColor={colors['data.main.primaryColor']}
                secondaryColor={colors['data.main.secondaryColor']}
                backgroundColor={colors['data.main.backgroundColor']}
              >
                <LogoPreview />
              </MobilePreview>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default ThemeCustomisation;
