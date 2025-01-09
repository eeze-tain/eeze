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
        padding: '0rem 6rem',
        overflowX: 'hidden', // Prevent horizontal overflow
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
                  fontSize: '80px',
                  fontWeight: 'bold',
                  marginTop: '-7.5rem',
                  lineHeight: '100%',
                }}
                color="#D3B1FF"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '80px',
                    fontWeight: 'bold',
                    marginBottom: 0,
                    lineHeight: '100%',
                  }}
                  color="#FFF"
                >
                  Gamification
                </Typography>{' '}
                Suite
              </Typography>
            </Box>
            <br></br>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '1.75rem',
                marginTop: '-1rem'
              }}
            >
              Ignite Thrills with our All-In-One solution <span style={{ color: '#E1E1E1'}}>- EezePlus</span>
            </Typography>
            <br></br>
            <Box
              sx={{
                flex: 1,
                gap: 0,
                flexWrap: 'wrap',
                marginBottom: 2,
                alignContent: 'space-evenly'
              }}
            >
              {[
                'tournaments',
                'leaderboards',
                'rewards management',
                'back office support',
              ].map((tag) => (
                <Button
                  key={tag}
                  sx={{
                    backgroundColor: '#5912FF',
                    color: '#FFFFFF',
                    textTransform: 'none',
                    borderRadius: '5px',
                    padding: '3px 10px',
                    fontSize: '1.35rem',
                    marginRight: '1rem',
                    marginY: '0.5rem',
                    '&:hover': { backgroundColor: '#8E53F4' },
                  }}
                >
                  {tag}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/phone.png"
              alt={`Mobile Phone Preview`}
              sx={{
                width: '100%',
                maxWidth: '300px',                
                padding: '7rem 0rem 0rem 15rem'
              }}
            />
          </Grid>
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Key Benefits Section */}
        <Box sx={{ marginTop: 0 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              marginTop: '-4rem'
            }}
          >
            Key Benefits:
          </Typography>
          {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'}/> */}
          <Grid container spacing={4} sx={{ marginLeft: '1rem', marginTop: '0rem', paddingRight: '7rem'}}>
            {[
              {
                title: 'Boost Engagement',
                description:
                  'Keep players excited with dynamic tournaments, real-time leaderboards, and evolving rewards systems.',
                color: '#22B1C3',
              },
              {
                title: 'Optimise Resources',
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
                  'Enjoy a built-in and exciting tournament interface across all Eeze products for effortless gameplay and participation.',
                color: '#22B1C3',
              },
            ].map((benefit) => (
              <Grid item xs={12} sm={6} key={benefit.title} sx={{ margin: '0rem'}}>
                <Typography
                  variant="h6"
                  sx={{
                    color: benefit.color,
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.5rem'
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
            marginTop: '4rem',
            fontStyle: 'normal',
            marginBottom: 2
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
