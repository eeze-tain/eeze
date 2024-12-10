import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '0rem 4rem',
        color: '#FFFFFF',
        fontFamily: 'Arial, sans-serif',
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
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginBottom: 2 }}>
            <Typography variant="h3" sx={{ fontSize: '90px', fontWeight: 'bold', marginBottom: 2 }}>
              Award <br /> Winning <br /> <Typography variant='h3' sx={{ fontSize: '90px', fontWeight: 'bold', marginBottom: 0 }} color='#D3B1FF'>Gamification</Typography> Suite
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginBottom: 2 }}>
              {['tournaments', 'leaderboards', 'rewards management', 'back-office support'].map(
                (tag) => (
                  <Button
                    key={tag}
                    sx={{
                      backgroundColor: '#6E38D9',
                      color: '#FFFFFF',
                      textTransform: 'none',
                      borderRadius: '20px',
                      padding: '6px 16px',
                      '&:hover': { backgroundColor: '#8E53F4' },
                    }}
                  >
                    {tag}
                  </Button>
                )
              )}
            </Box>
            <Typography variant="subtitle1">
              for dynamic, interactive experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src='/images/phone.png' alt="Phone Preview" style={{ width: '100%', maxWidth: '400px', padding: '8rem' }} />
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
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
          Key Benefits
        </Typography>
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
              <Typography variant="h6" sx={{ color: benefit.color, fontWeight: 'bold' }}>
                {benefit.title}
              </Typography>
              <Typography variant="body1">{benefit.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
      {/* Mission Statement */}
      <Box sx={{ marginTop: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Our mission is to{' '}
          <span style={{ color: '#49E3CE' }}>provide the tools</span> needed to{' '}
          <span style={{ color: '#F9D684' }}>captivate players</span>,{' '}
          <span style={{ color: '#6CC2BD' }}>drive growth</span>, and{' '}
          <span style={{ color: '#B684F9' }}>enhance loyalty</span> through gamification solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;