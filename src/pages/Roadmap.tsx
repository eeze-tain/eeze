import {
  Box,
  CardContent,
  Grid2,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import CoinIcon from '../assets/svg/coin.svg';
import DiceIcon from '../assets/svg/dice.svg';
import LightningIcon from '../assets/svg/lightning.svg';
import LuckyWheelIcon from '../assets/svg/lucky-wheel.svg';
import AnimatedSection from './components/AnimatedSection';

// Colors constants
const iconColor = '#30D689';
const secondaryColor = '#30A977';

// Typography styles
const typographyStyles = {
  header: {
    fontWeight: 800,
    color: '#FBF8F8',
    fontSize: '80px',
    textTransform: 'capitalize',
    fontFamily: 'Raleway, serif',
    lineHeight: '80px',
    '& span': { color: '#D3B1FF' },
  },
  subHeader: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'right',
    fontSize: '44px',
    lineHeight: '60px',
    fontFamily: 'Raleway, serif',
  },
  roadmapIcon: {
    width: '88px',
    height: '88px',
    opacity: 0.9,
    fill: iconColor,
    mb: 3
  },
  roadmapTitle: {
    fontWeight: 700,
    color: '#FFFFFF',
    fontSize: '30px',
    lineHeight: '34px',
    fontFamily: 'Raleway, serif',
    mb: 1,
  },
  roadmapDescription: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: 'Raleway, serif',
    '& span': { fontWeight: 700 },
  },
  callToAction: {
    fontFamily: '"Raleway", serif',
    fontWeight: 500,
    fontSize: '50px',
    lineHeight: '42px',
    opacity: 0.9,
    '& span': { fontWeight: 200 },
  }
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
  iconWrapper:{
    width: '88px',
    height: '88px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
  },
  roadmapItemWrapper: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'transparent',
    // borderRadius: 25 * 2 + 'px',
    // border: `6px solid ${secondaryColor}`,
    transition: 'all 0.3s ease',
    zIndex: 2,
    textAlign: 'center',
  },
  connectingLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  nowDot: {
    position: 'absolute',
    width: '32px',
    height: '32px',
    backgroundColor: secondaryColor,
    borderRadius: '50%',
    border: `4px solid ${secondaryColor}`,
    zIndex: 3,
  },
  nowLabel: {
    position: 'absolute',
    left: '10px',
    transform: 'translateX(-30%)',
    top: '40px',
    color: secondaryColor,
    fontWeight: 600,
    fontSize: '24px',
    zIndex: 4,
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

const Roadmap: React.FC = () => {
  return (
    <Box sx={containerStyles.mainWrapper}>
      <AnimatedSection>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ width: '48%' }}>
              <Typography variant="h3" sx={typographyStyles.header}>
                Roadmap<br/><span>2025</span>
              </Typography>
            </Box>
            <Box sx={{ width: '48%', display: 'flex', alignItems: 'flex-end' }}>
              <Typography variant="body1" sx={typographyStyles.subHeader}>
                Gamify your strategies with new exciting features this year
              </Typography>
            </Box>
          </Box>
        </Box>
      </AnimatedSection>
      
      <AnimatedSection>
        <Box sx={{ position: 'relative', overflow: 'hidden' }} py={8}>
          {/* Now dot and label */}
          <Box sx={{ position: 'absolute', left: '5px', top: '490px' }}>
            <Box sx={containerStyles.nowDot} />
            <Typography sx={containerStyles.nowLabel}>Now</Typography>
          </Box>

          <Grid2 container sx={{ flexGrow: 1, minHeight: '540px', height: '760px' }}>
            {[
              {
                title: 'Free Chips Campaigns',
                icon: CoinIcon,
                description: 'Transform the ordinary Free Chips giveaway into an <span>interactive adventure,</span> enhancing retention',
                top: '50px'
              },
              {
                title: 'Flash Tournament',
                icon: LightningIcon,
                description: 'Drive players\' <span>excitement</span> with our Flash Tournament Mode, offering <span>fast-paced, high-stakes</span> competitions',
                top: '320px'
              },
              {
                title: 'Lucky Drop',
                icon: DiceIcon,
                description: 'Offer surprise rewards and real-time prizes, <span>maximizing gameplay engagement</span> and <span>driving loyalty</span> like never before',
                top: '50px'
              },
              {
                title: 'Lucky Wheel',
                icon: LuckyWheelIcon,
                description: 'Offer a gamified experience where players can win <span>diverse rewards,</span> while fostering long-term connections and <span>boosting</span> daily player <span>activity</span>',
                top: '320px'
              }
            ].map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 3 }} key={index} sx={{ position: 'relative' }}>
                <Box 
                  sx={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: item.top === '50px' ? '170px' : '470px',
                  }}
                />

                <CardContent
                  sx={{
                    ...containerStyles.roadmapItemWrapper,
                    position: 'absolute',
                    width: index === 0 ? 'calc(100% - 25px)' : '100%',
                    top: item.top,
                    p: 2,
                    py: 6,
                    height: 'max-content',
                    // border: '1px solid #7C1DF7',
                    boxSizing: 'border-box',
                    minHeight: '400px',
                    left: index === 0 ? '25px' : 0,
                    borderLeft: `6px solid ${secondaryColor}`,
                    borderRight: `6px solid ${secondaryColor}`, 
                    borderTop: index % 2 === 0 ? `6px solid ${secondaryColor}` : 'none',
                    borderBottom: index % 2 === 0 ? 'none' : `6px solid ${secondaryColor}`,
                    borderTopLeftRadius: index % 2 === 0 ? '50%' : '0px',
                    borderTopRightRadius: index % 2 === 0 ? '50%' : '0px',
                    borderBottomLeftRadius: index % 2 === 0 ? '0px' : '50%',
                    borderBottomRightRadius: index % 2 === 0 ? '0px' : '50%',
                    '&:before': {},
                    '&:after': {}
                  }}
                >
                  <Box sx={containerStyles.iconWrapper}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      sx={typographyStyles.roadmapIcon}
                    />
                  </Box>
                  <Typography sx={typographyStyles.roadmapTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={typographyStyles.roadmapDescription}>
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                  </Typography>
                </CardContent>
              </Grid2>
            ))}
          </Grid2>
        </Box> 
      </AnimatedSection>

      <AnimatedSection>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          textAlign="center"
          mt={8}
          p={4}
        >
          <Typography
            sx={typographyStyles.callToAction}
          >
            Book a call{" "}
            <span>with us today and let's achieve your goals together!</span>
          </Typography>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

export default Roadmap;
