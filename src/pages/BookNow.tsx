import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';

const BookNow: React.FC = () => {
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
                    marginBottom: 0,
                    lineHeight: '100%',
                  }}
                  color="#FFF"
                >
                  Book an
                Appointment
                </Typography>{' '}
            </Box>
            <br></br>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '1.75rem',
                marginTop: '-1rem'
              }}
            >
              Schedule a 30mins session with one of our representatives
            </Typography>
            <br></br>
          </Grid>
          <Grid item xs={12} md={6}>
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
          {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'}/> */}
          <Grid container spacing={4} sx={{ marginLeft: '1rem', marginTop: '0rem', paddingRight: '7rem'}}>
          
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default BookNow;
