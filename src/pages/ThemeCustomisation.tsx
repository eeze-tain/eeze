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
                  Theme <br />{' '}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '80px',
                      fontWeight: 'bold'
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

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
        <Grid container columnGap={5} borderRadius={'20px'}
        sx={{
          // backgroundImage: 'url(/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          background: 'linear-gradient(180deg, #34175D 0%, #2A1545 0%)',
          padding: '2rem',
        }}
        >
          <GridItem border={'none'}>
            <Box display="flex" flexDirection="column">
                {/* Theme Color Sliders Section */}
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
            <Box width={'80%'} marginLeft={'20%'}>
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
            <Box marginRight={'20%'} marginBottom={'7.5%'} marginTop={'-2.5%'}>
              <Divider style={{ width: '100%', marginBottom: '16px' }} />
              <MobilePreview
                primaryColor={colors['data.main.primaryColor']}
                secondaryColor={colors['data.main.secondaryColor']}
                backgroundColor={colors['data.main.backgroundColor']}
              >
                <WidgetScorePreview
                  bgColor={colors['data.main.backgroundColor']}
                  fontColor={'white'}
                  secColor={colors['data.main.secondaryColor']}
                  secBgColor={colors['data.main.backgroundColor']}
                />
              </MobilePreview>
            </Box>
            <Box marginRight={'20%'}>
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
        </motion.div>
      </Box>
    </>
  );
};

export default ThemeCustomisation;
