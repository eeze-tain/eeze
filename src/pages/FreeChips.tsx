import { Box, Typography } from '@mui/material';
import MarkedText from './components/MarkedText';
import AnimatedSection from './components/AnimatedSection';

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
    background:
      'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
    width: 'calc(100% - 120px)',
    height: 'calc(100% - 120px)',
    borderRadius: '30px',
    padding: '60px',
  },
};
const FreeChips = () => {
  return (
    <Box sx={containerStyles.mainWrapper}>
      {/* Hero Section */}
      <AnimatedSection>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="flex-end">
            <Box sx={{ width: '48%' }}>
              <Typography variant="h3" sx={typographyStyles.header}>
                Free
                <br />
                <span>Chips</span>
              </Typography>
            </Box>
            <Box sx={{ width: '68%', display: 'flex', alignItems: 'flex-end' }}>
              <Typography variant="body1" sx={typographyStyles.subHeader}>
                Boost engagement with low-risk, high-
                <br />
                reward promotions
              </Typography>
            </Box>
          </Box>
        </Box>
      </AnimatedSection>

      <AnimatedSection>
        <Box
          sx={{
            ...containerStyles.phasesWrapper,
            height: '100%',
            marginBottom: '20px',
          }}
        >
          <Box
            sx={{
              ...containerStyles.phasesInnerBg,
              flexDirection: 'column',
              gap: '60px',
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              gap="24px"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Typography sx={typographyStyles.sectionTitle}>
                  What <span>Players Can See</span>
                </Typography>
                <Box>
                  <Box
                    component="img"
                    src="/svg/chip-one.svg"
                    alt="Logo"
                    position="absolute"
                    left="25%"
                    top="25%"
                    sx={{
                      margin: '2.75rem 0rem 1.75rem 2rem',
                      padding: '1rem',
                      width: '246px',
                    }}
                  />
                  <Box
                    component="img"
                    src="/svg/chip-two.svg"
                    alt="Logo"
                    position="absolute"
                    left="33%"
                    top="29%"
                    sx={{
                      margin: '2.75rem 0rem 1.75rem 2rem',
                      padding: '1rem',
                      width: '178px',
                      height: '126px',
                    }}
                  />
                  <Box
                    component="img"
                    src="/svg/chip-three.svg"
                    alt="Logo"
                    position="absolute"
                    left="40%"
                    top="33%"
                    sx={{
                      margin: '2.75rem 0rem 1.75rem 2rem',
                      padding: '1rem',
                      width: '134px',
                    }}
                  />
                  <Box
                    component="img"
                    src="/svg/chip-four.svg"
                    alt="Logo"
                    position="absolute"
                    left="19%"
                    top="32%"
                    sx={{
                      margin: '2.75rem 0rem 1.75rem 2rem',
                      padding: '1rem',
                      width: '156px',
                    }}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                flex="1"
              >
                <MarkedText>
                  <span>Convert players into paying customers </span> by
                  offering Free Chips for risk-free trial play,{' '}
                  <span>building trust </span>and interest in the game
                </MarkedText>
                <MarkedText>
                  <span>Drive desired player behaviours</span> using Free Chips
                  strategically, guided by data on habits and trends
                </MarkedText>
                <MarkedText>
                  Maximise campaign impact while staying
                  <span>cost-effective </span>with budget management tools
                </MarkedText>
              </Box>
            </Box>
            <Box
              sx={{
                background: '#1C102E',
                borderRadius: '32.9px',
                height: '869.15px',
                border: '1.37px solid #FFFFFF',
                position: 'relative',
              }}
            />
          </Box>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

export default FreeChips;
