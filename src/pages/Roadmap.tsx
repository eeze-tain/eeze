import {
  Box,
  CardContent,
  Grid2,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedSection from './components/AnimatedSection';

// Typography styles
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
  },
  description: {
    fontWeight: 400,
    fontSize: '36px',
    lineHeight: '57.6px',
    fontFamily: 'Raleway, serif',
    '& span': { fontWeight: 700 },
  },
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
  phasesWrapper: {
    border: '1px solid #7C1DF7',
    borderRadius: '40px',
    padding: '16px',
    marginTop: '60px',
    width: 'calc(100% - 32px)',
  },
  phasesInnerBg: {
    display: 'flex',
    background: 'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
    width: 'calc(100% - 120px)',
    height: 'calc(100% - 120px)',
    borderRadius: '30px',
    padding: '60px',
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const secondaryColor = 'rgba(46, 168, 127, 1)';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: 'Free Chips Campaigns',
      icon: '/svg/coin.svg',
      description: (
        <Typography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '40px' }}>
          Transform the ordinary Free Chips giveaway into an{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            interactive adventure,
          </Typography>{" "}
          enhancing{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            retention
          </Typography>
        </Typography>
      )
    },
    {
      title: 'Flash Tournament',
      icon: '/svg/lightning.svg',
      description: (
        <Typography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '40px' }}>
          Drive players'{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            excitement
          </Typography>{" "}
          with our Flash Tournament Mode, offering{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            fast-paced, high-stakes
          </Typography>{" "}
          competitions
        </Typography>
      )
    },
    {
      title: 'Lucky Drop',
      icon: '/svg/dice.svg',
      description: (
        <Typography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '40px' }}>
          Offer surprise rewards and real-time prizes,{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            maximizing gameplay engagement
          </Typography>{" "}
          and{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            driving loyalty
          </Typography>{" "}
          like never before
        </Typography>
      )
    },
    {
      title: 'Lucky Wheel',
      icon: '/svg/lucky-wheel.svg',
      description: (
          <Typography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '40px' }}>
            Offer a gamified experience where players can win{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            diverse rewards,
          </Typography>{" "}
          while fostering long-term connections and{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            boosting
          </Typography>{" "}
          daily player{" "}
          <Typography component="span" sx={{ fontSize: '24px', lineHeight: '40px', fontWeight: 700 }}>
            activity
          </Typography>
        </Typography>
      )
    }
  ];

  return (
    <Box sx={containerStyles.mainWrapper}>
      <AnimatedSection>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ width: '48%' }}>
              <Typography variant="h3" sx={typographyStyles.header}>
                Customisable <span>Tournament</span> Features
              </Typography>
            </Box>
            <Box sx={{ width: '48%', display: 'flex', alignItems: 'flex-end' }}>
              <Typography variant="body1" sx={typographyStyles.subHeader}>
                Unleash competitive spirit with real-time, engaging tournaments
              </Typography>
            </Box>
          </Box>
        </Box>
      </AnimatedSection>
      
      <AnimatedSection>
        <Box sx={{ position: 'relative' }} py={8}>
          <Box
            sx={{
              position: 'absolute',
              left: '30px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: secondaryColor,
              '&::before': {
                content: '"Now"',
                position: 'absolute',
                top: '-30px',
                left: '-20px',
                color: secondaryColor,
                fontSize: '1rem',
                fontWeight: 600
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '-4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: secondaryColor,
              }
            }}
          />

          {/* <Grid2 container spacing={4} justifyContent="center" sx={{ position: 'relative', height: '820px', display: 'flex' }}>
            {roadmapItems.map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 3 }} key={index} sx={{ position: 'relative' }}>
                <Box
                  component={motion.div}
                  variants={itemVariants}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    zIndex: 1,
                    textAlign: 'center',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }} className="roadmap-item">
                    <Box
                      sx={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        sx={{
                          width: '88px',
                          height: '88px',
                          filter: 'brightness(0) invert(1)',
                          opacity: 0.9,
                          fill: secondaryColor
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        mb: 2,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '30px'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#fff',
                        lineHeight: '46.44px',
                        fontWeight: 400,
                        fontSize: '20px'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid2>
            ))}
          </Grid2> */}
          <Grid2 container spacing={4} sx={{ flexGrow: 1 }}>
            {roadmapItems.map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 3 }} key={index} sx={{ position: 'relative' }} offset={{ md: index === 0 ? 0 : 3 }}>
                <Box
                  component={motion.div}
                  variants={itemVariants}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    zIndex: 1,
                    textAlign: 'center',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }} className="roadmap-item">
                    <Box
                      sx={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        sx={{
                          width: '88px',
                          height: '88px',
                          filter: 'brightness(0) invert(1)',
                          opacity: 0.9,
                          fill: secondaryColor
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        mb: 2,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '30px'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#fff',
                        lineHeight: '46.44px',
                        fontWeight: 400,
                        fontSize: '20px'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box> 

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          textAlign="center"
          mt={8}
          p={4}
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 500, fontSize: '60px', opacity: 0.9 }}>
            Book a call {" "}
            <Typography variant="h4" component="span" sx={{ fontWeight: 200, fontSize: '60px' , opacity: 0.9 }}>with us today and let's achieve your goals together!</Typography>
          </Typography>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

export default Roadmap;
