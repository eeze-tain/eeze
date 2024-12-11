import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '0rem 4rem',
        color: '#FFFFFF',
        fontFamily: 'Inter',
        overflowX: 'hidden', // Prevent horizontal overflow
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
                  marginBottom: 2,
                  '@media screen and (min-width: 3200px)': {
                    fontSize: '160px', // Scale font size for large screens
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
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '160px', // Scale font size for large screens
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
                    backgroundColor: '#6E38D9',
                    color: '#FFFFFF',
                    textTransform: 'none',
                    borderRadius: '20px',
                    padding: '6px 16px',
                    fontSize: '1rem',
                    '@media screen and (min-width: 3200px)': {
                      padding: '12px 24px', // Adjust padding
                      fontSize: '1.75rem', // Adjust font size
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
                '@media screen and (min-width: 3200px)': {
                  fontSize: '2rem', // Adjust font size
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
                padding: '8rem',
                '@media screen and (min-width: 3200px)': {
                  maxWidth: '800px',
                  marginTop: '6.5rem',
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
              '@media screen and (min-width: 3200px)': {
                fontSize: '3.5rem', // Adjust font size
              },
            }}
          >
            Key Benefits
          </Typography>
          <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'}/>
          <Grid container spacing={4}>
            {[
              {
                title: 'Boost Engagement',
                description:
                  'Keep players excited with dynamic tournaments, real-time leaderboards, and evolving rewards systems.',
                color: '#49E3CE',
              },
              {
                title: 'Increase Engagements',
                description:
                  'Simplify operations with plug-and-play modules and interactive data tools to optimise costs and strategies.',
                color: '#6CC2BD',
              },
              {
                title: 'Foster Loyalty',
                description:
                  'Create tailored events and exclusive tournaments with compelling rewards to drive long-term retention.',
                color: '#B684F9',
              },
              {
                title: 'Integrated Tournament Interface',
                description:
                  'Enjoy a built-in tournament interface across all Eeze products for effortless gameplay and participation.',
                color: '#F9D684',
              },
            ].map((benefit) => (
              <Grid item xs={12} sm={6} key={benefit.title}>
                <Typography
                  variant="h6"
                  sx={{
                    color: benefit.color,
                    fontWeight: 'bold',
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '2rem', // Adjust font size
                    },
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    '@media screen and (min-width: 3200px)': {
                      fontSize: '1.25rem', // Adjust font size
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
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            '@media screen and (min-width: 3200px)': {
              fontSize: '2.5rem', // Adjust font size
            },
          }}
        >
          Our mission is to{' '}
          <span style={{ color: '#49E3CE' }}>provide the tools</span> needed to{' '}
          <span style={{ color: '#F9D684' }}>captivate players</span>,{' '}
          <span style={{ color: '#6CC2BD' }}>drive growth</span>, and{' '}
          <span style={{ color: '#B684F9' }}>enhance loyalty</span> through
          gamification solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
