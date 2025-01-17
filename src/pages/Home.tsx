import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import AnimatedSection from './components/AnimatedSection';

const Home: React.FC = () => {
  return (
    <>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Box
          component="img"
          src="/images/ov-vector-line.png"
          alt={`Vector Line`}
          sx={{
            position: 'absolute',
            height: '235px',
            top: '-3rem',
            right: '0',
            objectFit: 'contain',
            padding: '0',
            width: '1775px',
            zIndex: '0',
            transform: 'scaleY(1.5)',
          }}
        />
      </Box>
      <AnimatedSection>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#FFFFFF',
            padding: '24px 0 0 46px',
            overflow: 'hidden', // Prevent horizontal overflow
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              padding: '0 32px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '200%',
                gap: '1rem',
              }}
            >
              <Box
                sx={{
                  width: '10%',
                  marginTop: '3rem',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Raleway',
                    fontSize: '90px',
                    fontWeight: '800',
                    lineHeight: '100%',
                  }}
                  color="#D3B1FF"
                >
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: 'Raleway',
                      fontSize: '90px',
                      fontWeight: '800',
                      marginBottom: 0,
                      lineHeight: '100%',
                    }}
                    color="#FFFFFF"
                  >
                    Gamification
                  </Typography>{' '}
                  Suite
                </Typography>
              </Box>

              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: '1.7rem',
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: '500',
                  }}
                >
                  Ignite thrills with our all-in-one solution{' '}
                  <span style={{ color: '#E1E1E1' }}>- EezePlus</span>
                </Typography>
              </Box>

              <Box sx={{ width: '100%' }}>
                {[
                  'tournaments',
                  'leaderboards',
                  'rewards management',
                  'back office support',
                ].map((tag) => (
                  <Button
                    key={tag}
                    sx={{
                      fontFamily: 'Raleway',
                      fontSize: '1.8rem',
                      fontWeight: 500,
                      lineHeight: '140%',
                      letterSpacing: '0.32px',
                      backgroundColor: '#5912FF',
                      color: '#FFFFFF',
                      textTransform: 'none',
                      borderRadius: '5px',
                      padding: '3px 10px',
                      marginRight: '1.5rem',
                      marginY: '0.5rem',
                      '&:hover': { backgroundColor: '#8E53F4' },
                    }}
                  >
                    {tag}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
              <Box
                component="img"
                src="/images/ov-mobile.png"
                alt={`Mobile Phone Preview`}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  maxHeight: '85%',
                  objectFit: 'contain',
                  left: '-5rem',
                  top: '6rem',
                  transform: 'rotate(16.405deg) scale(2)',
                  zIndex: '1',
                }}
              />

              <Box
                component="img"
                src="/images/ov-eeze-widget.png"
                alt={`Eeze Logo`}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '7%',
                  objectFit: 'contain',
                  left: '19rem',
                  top: '20.5rem',
                  transform: 'rotate(-1deg) scale(4.5)',
                  zIndex: '2',
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Raleway',
                fontWeight: '700',
                fontSize: '2.2rem',
                lineHeight: '100%',
                margin: '120px 0 8px 32px',
              }}
            >
              Key Benefits:
            </Typography>
            <Grid
              container
              spacing={4}
              sx={{ marginLeft: '0rem', marginTop: '0rem' }}
            >
              {[
                {
                  title: 'Boost Engagement',
                  description:
                    'Keep players excited with dynamic tournaments, real-time leaderboards, and evolving rewards systems',
                  color: '#30A977',
                },
                {
                  title: 'Optimise Resources',
                  description:
                    'Simplify operations with plug-and-play modules and interactive data tools to optimise costs and strategies',
                  color: '#30A977',
                },
                {
                  title: 'Integrated Tournament Interface',
                  description:
                    'Enjoy a built-in and exciting tournament interface across all Eeze products for smooth gameplay and participation',
                  color: '#30A977',
                },
                {
                  title: 'Foster Loyalty',
                  description:
                    'Offer customised tournaments to retain users and fuel ambition with achievements',
                  color: '#30A977',
                },
              ].map((benefit) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={benefit.title}
                  sx={{ margin: '0', padding: '46px 32px' }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: benefit.color,
                      fontFamily: 'Raleway',
                      fontWeight: '600',
                      fontSize: '2rem',
                      lineHeight: '100%',
                      paddingTop: '0px',
                      paddingLeft: '32px',
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Raleway',
                      fontWeight: '500',
                      fontSize: '1.75rem',
                      lineHeight: '150%',
                      marginTop: '21px',
                      paddingLeft: '32px',
                      marginBottom: '26px',
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              marginTop: 2,
              textAlign: 'center',
              padding: '0 20px 0 32px',
              '@media screen and (min-width: 3200px)': {
                marginTop: 12, // Adjust spacing for larger screens
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                maxWidth: '1900px',
                fontSize: '3.25rem',
                fontFamily: 'Raleway',
                fontWeight: 200,
                letterSpacing: '0.6px',
                textAlign: 'left',
                fontStyle: 'normal',
                lineHeight: '150%',
                marginBottom: 2,
              }}
            >
              Our mission is to{' '}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '3.25rem',
                  lineHeight: '150%',
                  letterSpacing: '0.6px',
                }}
              >
                provide the tools
              </span>{' '}
              needed to{' '}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '3.25rem',
                  lineHeight: '150%',
                  letterSpacing: '0.6px',
                }}
              >
                captivate players
              </span>
              ,{' '}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '3.25rem',
                  lineHeight: '150%',
                  letterSpacing: '0.6px',
                }}
              >
                drive growth
              </span>
              , and{' '}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '3.25rem',
                  lineHeight: '150%',
                  letterSpacing: '0.6px',
                }}
              >
                enhance loyalty
              </span>{' '}
              through gamification solutions.
            </Typography>
          </Box>
        </Box>
      </AnimatedSection>
    </>
  );
};

export default Home;
