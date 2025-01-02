import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Inter',
        padding: '0rem 4rem',
        marginTop: '0rem',
        marginLeft: '0rem', 
        overflowX: 'hidden', // Prevent horizontal overflow
        '@media screen and (min-width: 2560px)': {
          padding: '0rem 8rem', // Adjust padding for larger screen
        },
        '@media screen and (min-width: 3200px)': {
          marginTop: '0rem',
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
                gap: 3,
                flexWrap: 'wrap',
                marginBottom: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '90px',
                  fontWeight: 'bold',
                  marginTop: '-6rem',
                  '@media screen and (min-width: 2560px)': {
                    fontSize: '120px', // Scale font size for large screens
                  },
                  '@media screen and (min-width: 3200px)': {
                    marginTop: '-2rem',
                    fontSize: '180px', // Scale font size for large screens
                  },
                }}
              >
                Award <br /> Winning <br />{' '}
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
                  Gamification
                </Typography>{' '}
                Suite
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                marginBottom: 2,
                '@media screen and (min-width: 3200px)': {
                marginTop: '3rem',
                width: '125%'
                }
              }}
            >
              {[
                'tournaments',
                'leaderboards',
                'rewards management',
                'back-office support',
              ].map((tag) => (
                <Button
                  key={tag}
                  sx={{
                    backgroundColor: '#5912FF',
                    color: '#FFFFFF',
                    textTransform: 'none',
                    borderRadius: '10px',
                    padding: '6px 16px',
                    fontSize: '1rem',
                    marginX: '0.5rem',
                    marginY: '0.5rem',
                    '@media screen and (min-width: 2560px)': {
                      padding: '12px 24px', // Adjust padding
                      fontSize: '1.25rem', // Adjust font size
                    },
                    '@media screen and (min-width: 3200px)': {
                      padding: '12px 24px', // Adjust padding
                      fontSize: '4rem', // Adjust font size
                      marginX: '1rem',
                      marginY: '1rem'
                    },
                    '&:hover': { backgroundColor: '#8E53F4' },
                  }}
                >
                  {tag}
                </Button>
              ))}
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '1.25rem',
                '@media screen and (min-width: 2560px)': {
                  fontSize: '1.75rem', // Adjust font size
                },
                '@media screen and (min-width: 3200px)': {
                  fontSize: '4rem', // Adjust font size
                },
              }}
            >
              for dynamic, interactive experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/eeze/images/phone.png"
              alt={`Mobile Phone Preview`}
              sx={{
                width: '100%',
                maxWidth: '400px',
                padding: '8rem 2rem',
                '@media screen and (min-width: 2560px)': {
                  maxWidth: '600px',
                  marginTop: '6.5rem',
                },
                '@media screen and (min-width: 3200px)': {
                  maxWidth: '950px',
                  marginTop: '10rem',
                  padding: '0rem 20rem'
                },
              }}
            />
          </Grid>
        </Grid>
      </motion.div>
      {/* Hero Section */}

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
              '@media screen and (min-width: 2520px)': {
                fontSize: '3rem', // Adjust font size
              },
              '@media screen and (min-width: 3200px)': {
                fontSize: '5rem', // Adjust font size
              },
            }}
          >
            Key Benefits
          </Typography>
          {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'}/> */}
          <Grid container spacing={4}>
            {[
              {
                title: 'Boost Engagement',
                description:
                  'Keep players excited with dynamic tournaments, real-time leaderboards, and evolving rewards systems.',
                color: '#22B1C3',
              },
              {
                title: 'Increase Engagements',
                description:
                  'Simplify operations with plug-and-play modules and interactive data tools to optimise costs and strategies.',
                color: '#22B1C3',
              },
              {
                title: 'Foster Loyalty',
                description:
                  'Create tailored events and exclusive tournaments with compelling rewards to drive long-term retention.',
                color: '#22B1C3',
              },
              {
                title: 'Integrated Tournament Interface',
                description:
                  'Enjoy a built-in tournament interface across all Eeze products for effortless gameplay and participation.',
                color: '#22B1C3',
              },
            ].map((benefit) => (
              <Grid item xs={12} sm={6} key={benefit.title}>
                <Typography
                  variant="h6"
                  sx={{
                    color: benefit.color,
                    fontWeight: 'bold',
                    '@media screen and (min-width: 2560px)': {
                      fontSize: '2.25rem', // Adjust font size
                    },
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '5rem', // Adjust font size
                    },
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    '@media screen and (min-width: 2560px)': {
                      fontSize: '1.75rem', // Adjust font size
                    },
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '4rem', // Adjust font size
                    },
                  }}
                >
                  {benefit.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
      {/* Mission Statement */}
      <Box
        sx={{
          marginTop: 6,
          textAlign: 'center',
          '@media screen and (min-width: 3200px)': {
            marginTop: 12, // Adjust spacing for larger screens
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            // fontFamily: 'Inter Tight',
            fontWeight: 100,
            letterSpacing: 1,
            textAlign: 'left',
            marginTop: '14rem',
            fontStyle: 'normal',
            marginBottom: 2,
            '@media screen and (min-width: 2560px)': {
              // fontFamily: 'Inter Tight',
              fontWeight: 100,
              fontSize: '5.75rem', // Adjust font size
            },
            '@media screen and (min-width: 3200px)': {
              // fontFamily: 'Inter Tight',
              fontWeight: 100,
              fontSize: '180px', // Adjust font size
              lineHeight: '150%'
            },
          }}
        >
          Our mission is to{' '}
          <span style={{ fontWeight: 800 }}>provide the tools</span> needed to{' '}
          <span style={{ fontWeight: 800 }}>captivate players</span>,{' '}
          <span style={{ fontWeight: 800 }}>drive growth</span>, and{' '}
          <span style={{ fontWeight: 800 }}>enhance loyalty</span> through
          gamification solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
