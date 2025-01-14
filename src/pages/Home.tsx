import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinearGradient from '../components/LinearGradient';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: '#FFFFFF',
        padding: '0 0 0 46px',
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
                fontSize: '100px',
                fontWeight: '800',
                // marginTop: '-14rem',
                lineHeight: '100%',
              }}
              color="#D3B1FF"
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'Raleway',
                  fontSize: '100px',
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
                fontSize: '2rem',
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
                  fontSize: '2rem',
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
            src="/images/ov-vector-line.png"
            alt={`Vector Line`}
            sx={{
              position: 'absolute',
              height: '230px',
              top: '-4rem',
              right: '-90rem',
              objectFit: 'contain',
              padding: '0',
              width: '4500px',
              zIndex: '0',
            }}
          />
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
              left: '-7rem',
              top: '6.5rem',
              transform: 'rotate(16.405deg) scale(2)',
            }}
          ></Box>

          <Box
            component="img"
            src="/images/ov-eeze-widget.png"
            alt={`Eeze Logo`}
            sx={{
              position: 'absolute',
              width: '100%',
              maxWidth: '7%',
              objectFit: 'contain',
              left: '18.5rem',
              top: '23.5rem',
              transform: 'rotate(-1deg) scale(4.5)',
            }}
          ></Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: '2.5rem',
            lineHeight: '100%',
            margin: '80px 0 8px 32px',
          }}
        >
          Key Benefits:
        </Typography>
        {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'}/> */}
        <Grid
          container
          spacing={4}
          sx={{ marginLeft: '0rem', marginTop: '0rem' }}
        >
          {[
            {
              title: 'Boost Engagement',
              description:
                'Keep players excited with dynamic tournaments, real-time leaderboards, and evolving rewards systems.',
              color: '#30A977',
            },
            {
              title: 'Optimise Resources',
              description:
                'Simplify operations with plug-and-play modules and interactive data tools to optimise costs and strategies.',
              color: '#30A977',
            },
            {
              title: 'Integrated Tournament Interface',
              description:
                'Enjoy a built-in and exciting tournament interface across all Eeze products for smooth gameplay and participation.',
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
              sx={{ margin: '0rem', padding: '32px' }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: benefit.color,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  fontSize: '2.25rem',
                  lineHeight: '100%',
                  marginTop: '0px',
                }}
              >
                {benefit.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: '2rem',
                  lineHeight: '150%',
                  marginTop: '21px',
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
          marginTop: 6,
          textAlign: 'center',
          padding: '0 32px',
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
            marginTop: '-1.5rem',
            fontStyle: 'normal',
            lineHeight: '150%',
            marginBottom: 2,
          }}
        >
          Our mission is to{' '}
          <span
            style={{
              fontWeight: 600,
              fontSize: '3.75rem',
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
              fontSize: '3.75rem',
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
              fontSize: '3.75rem',
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
              fontSize: '3.75rem',
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
  );
};

// const Home: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         color: '#FFFFFF',
//         padding: '0rem 6rem',
//         overflowX: 'hidden', // Prevent horizontal overflow
//       }}
//     >
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 gap: 3,
//                 flexWrap: 'wrap',
//                 marginBottom: 2,
//               }}
//             >
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontFamily: 'Raleway',
//                   fontSize: '100px',
//                   fontWeight: '800',
//                   marginTop: '-14rem',
//                   lineHeight: '100%',
//                 }}
//                 color="#D3B1FF"
//               >
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontFamily: 'Raleway',
//                     fontSize: '100px',
//                     fontWeight: '800',
//                     marginBottom: 0,
//                     lineHeight: '100%',
//                   }}
//                   color="#FFF"
//                 >
//                   Gamification
//                 </Typography>{' '}
//                 Suite
//               </Typography>
//             </Box>
//             <br></br>
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 fontSize: '2rem',
//                 fontFamily: 'Raleway',
//                 fontStyle: 'normal',
//                 marginTop: '-2rem',
//                 fontWeight: '500',
//               }}
//             >
//               Ignite thrills with our all-in-one solution{' '}
//               <span style={{ color: '#E1E1E1' }}>- EezePlus</span>
//             </Typography>
//             <br></br>
//             <Box
//               sx={{
//                 flex: 1,
//                 minWidth: '1250px',
//                 gap: 0,
//                 flexWrap: 'wrap',
//                 marginBottom: 2,
//                 alignContent: 'space-evenly',
//               }}
//             >
//               {[
//                 'tournaments',
//                 'leaderboards',
//                 'rewards management',
//                 'back office support',
//               ].map((tag) => (
//                 <Button
//                   key={tag}
//                   sx={{
//                     fontFamily: 'Raleway',
//                     fontSize: '2rem',
//                     fontWeight: 500,
//                     lineHeight: '140%',
//                     letterSpacing: '0.32px',
//                     backgroundColor: '#5912FF',
//                     color: '#FFFFFF',
//                     textTransform: 'none',
//                     borderRadius: '5px',
//                     padding: '3px 10px',
//                     marginRight: '1.5rem',
//                     marginY: '0.5rem',
//                     '&:hover': { backgroundColor: '#8E53F4' },
//                   }}
//                 >
//                   {tag}
//                 </Button>
//               ))}
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 display: 'flex',
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/images/ov-vector-line.png"
//                 alt={`Vector Line`}
//                 sx={{
//                   position: 'absolute',
//                   height: '20%',
//                   top: '-0.1rem',
//                   left: '-62rem',
//                   maxWidth: '2000px',
//                   objectit: 'contain',
//                   padding: '0rem 0rem 0rem 0rem',
//                   transform: 'scale(1.5)',
//                   zIndex: '0',
//                 }}
//               />
//               <Box
//                 component="img"
//                 src="/images/ov-mobile.png"
//                 alt={`Mobile Phone Preview`}
//                 sx={{
//                   width: '100%',
//                   maxWidth: '1000px',
//                   padding: '0rem 0rem 4rem 0rem',
//                   zIndex: '1',
//                   transform: 'rotate(16.405deg) scale(1.25)',
//                 }}
//               />
//               <Box
//                 component="img"
//                 src="/images/ov-eeze-widget.png"
//                 alt={`Eeze Logo`}
//                 sx={{
//                   position: 'absolute',
//                   width: '100%',
//                   maxWidth: '245px',
//                   top: '17.5rem',
//                   left: '12.5rem',
//                   padding: '5.7rem 0rem 0rem 20.5rem',
//                   zIndex: '2',
//                   transform: 'rotate(3deg) scale(1.08)',
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Key Benefits Section */}
//         <Box sx={{ marginTop: 0 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontFamily: 'Raleway',
//               fontWeight: '700',
//               fontSize: '2.5rem',
//               marginTop: '-14rem',
//               lineHeight: '100%',
//             }}
//           >
//             Key Benefits:
//           </Typography>
//           {/* <LinearGradient height={'4px'} width={'25%'} marginBottom={'4rem'}/> */}
//           <Grid
//             container
//             spacing={4}
//             sx={{ marginLeft: '0rem', marginTop: '0rem', paddingRight: '7rem' }}
//           >
//             {[
//               {
//                 title: 'Boost Engagement',
//                 description:
//                   'Keep players excited with dynamic tournaments, real-time leaderboards, and evolving rewards systems.',
//                 color: '#30A977',
//               },
//               {
//                 title: 'Optimise Resources',
//                 description:
//                   'Simplify operations with plug-and-play modules and interactive data tools to optimise costs and strategies.',
//                 color: '#30A977',
//               },
//               {
//                 title: 'Integrated Tournament Interface',
//                 description:
//                   'Enjoy a built-in and exciting tournament interface across all Eeze products for smooth gameplay and participation.',
//                 color: '#30A977',
//               },
//               {
//                 title: 'Foster Loyalty',
//                 description:
//                   'Offer customised tournaments to retain users and fuel ambition with achievements',
//                 color: '#30A977',
//               },
//             ].map((benefit) => (
//               <Grid
//                 item
//                 xs={12}
//                 sm={6}
//                 key={benefit.title}
//                 sx={{ margin: '0rem', padding: '32px' }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: benefit.color,
//                     fontFamily: 'Raleway',
//                     fontWeight: '600',
//                     fontSize: '2.25rem',
//                     lineHeight: '100%',
//                     marginTop: '16px',
//                   }}
//                 >
//                   {benefit.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontFamily: 'Raleway',
//                     fontWeight: '500',
//                     fontSize: '2rem',
//                     lineHeight: '150%',
//                     marginTop: '21px',
//                   }}
//                 >
//                   {benefit.description}
//                 </Typography>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </motion.div>
//       {/* Mission Statement */}
//       <Box
//         sx={{
//           marginTop: 6,
//           textAlign: 'center',
//           '@media screen and (min-width: 3200px)': {
//             marginTop: 12, // Adjust spacing for larger screens
//           },
//         }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             maxWidth: '1900px',
//             fontSize: '3.75rem',
//             fontFamily: 'Raleway',
//             fontWeight: 200,
//             letterSpacing: '0.6px',
//             textAlign: 'left',
//             marginTop: '3rem',
//             fontStyle: 'normal',
//             lineHeight: '150%',
//             marginBottom: 2,
//           }}
//         >
//           Our mission is to{' '}
//           <span
//             style={{
//               fontWeight: 600,
//               fontSize: '3.75rem',
//               lineHeight: '150%',
//               letterSpacing: '0.6px',
//             }}
//           >
//             provide the tools
//           </span>{' '}
//           needed to{' '}
//           <span
//             style={{
//               fontWeight: 600,
//               fontSize: '3.75rem',
//               lineHeight: '150%',
//               letterSpacing: '0.6px',
//             }}
//           >
//             captivate players
//           </span>
//           ,{' '}
//           <span
//             style={{
//               fontWeight: 600,
//               fontSize: '3.75rem',
//               lineHeight: '150%',
//               letterSpacing: '0.6px',
//             }}
//           >
//             drive growth
//           </span>
//           , and{' '}
//           <span
//             style={{
//               fontWeight: 600,
//               fontSize: '3.75rem',
//               lineHeight: '150%',
//               letterSpacing: '0.6px',
//             }}
//           >
//             enhance loyalty
//           </span>{' '}
//           through gamification solutions.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

export default Home;
