import { Box, Typography } from '@mui/material';
import AnimatedSection from './components/AnimatedSection';
import MarkedText from './components/MarkedText';
import ScreenWrapper from './components/ScreenWrapper';

// Reusable styles for Typography
const typographyStyles = {
  header: {
    fontWeight: 800,
    color: '#FBF8F8',
    fontSize: '90px',
    textTransform: 'capitalize',
    fontFamily: 'Raleway, serif',
    lineHeight: '90px',
    '& span': { color: '#D3B1FF' },
  },
  subHeader: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'right',
    fontSize: '42px',
    lineHeight: '67.2px',
    fontFamily: 'Raleway, serif',
  },
  sectionTitle: {
    fontWeight: 700,
    color: '#FFFFFF',
    fontSize: '54px',
    textTransform: 'capitalize',
    lineHeight: '74px',
    fontFamily: 'Raleway, serif',
    '& span': { color: '#D3B1FF' },
  },
  description: {
    fontWeight: 400,
    fontSize: '33px',
    lineHeight: '57.6px',
    fontFamily: 'Raleway, serif',
    '& span': { fontWeight: 700 },
  },
};

// Layout constants
const containerStyles = {
  mainWrapper: {
    padding: '2rem 4rem',
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
const Tournaments = () => {
  return (
    <Box sx={containerStyles.mainWrapper}>
      {/* Hero Section */}
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

      {/* Customizable Section */}
      <AnimatedSection>
        <Box display="flex" justifyContent="space-between" gap={'24px'} marginTop="120px">
          {[
            {
              title: 'Customisable <br/> Tournament Mechanics',
              texts: [
                'Customisable score <span>calculation</span> & <span>round qualification strategies</span>',
                'Keep players <span>engaged</span> with diverse mechanics',
              ],
              imageSrc: '/images/tournament-rules.png'
            },
            {
              title: 'Limited Player Spots',
              texts: [
                'Host tournaments on a <span>first-come, first-served</span> basis with <span>limited player spots</span>',
                'Foster a sense of <span>urgency</span> and enhance <span>player excitement</span>',
              ],
              videoSrc: '/videos/limited-seats.mp4'
            },
            {
              title: 'Diverse Reward Types',
              texts: [
                'Leverage <span>various reward types</span> from cash to physical prizes',
                'Motivate players and <span>boost participation</span>',
              ],
              imageSrc: '/images/tournament-reward.png'
            },
          ].map(({ title, texts, imageSrc, videoSrc }, index) => (
            <ScreenWrapper title={title} key={title} imageSrc={imageSrc} videoSrc={videoSrc}>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                sx={{ marginBottom: index % 2 === 0 ? '40px' : '0' }}
              >
                {texts.map((text, index) => (
                  <MarkedText key={index}
                    sx={{
                      '& p': {
                        fontSize: '25px'
                      }
                    }}
                  >{<div dangerouslySetInnerHTML={{ __html: text }} />}</MarkedText>
                ))}
              </Box>
            </ScreenWrapper>
          ))}
        </Box>

        {/* Phases Section */}
        <Box sx={containerStyles.phasesWrapper}>
          <Box sx={containerStyles.phasesInnerBg}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '60px',
                alignSelf: 'center',
                height: '100%',
                width: '36%',
              }}
            >
              <Typography sx={typographyStyles.sectionTitle}>
                Dynamic <span>Tournament Phases</span>
              </Typography>
              <Typography sx={typographyStyles.description}>
                Flexibly structure tournaments with <span>Promotion</span> and <span>Registration Phases</span> to build anticipation and filter committed players.
              </Typography>
              <Typography sx={typographyStyles.description}>
                Ensure more <span>competitive</span> and <span>active</span> participation in live tournaments.
              </Typography>
            </Box>
            <Box sx={{ width: '32%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
              <Box
                component="img"
                src="/images/promotion-cups.png"
                alt={`Mobile Phone Preview`}
                sx={{
                  width: '383px',
                  height: '675px',
                  border: '1px solid #ffffff',
                  borderRadius: '16px'

                }}
              />
              <MarkedText>
                Schedule <span>Promotion Phase</span> to <span>increase visibility</span> for players with eye-catching banners and countdown
              </MarkedText>
            </Box>
            <Box sx={{ width: '32%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
              <Box
                component="img"
                src="/images/promotion-custom.png"
                alt={`Mobile Phone Preview`}
                sx={{
                  width: '383px',
                  height: '675px',
                  border: '1px solid #ffffff',
                  borderRadius: '16px',
                }}
              />
              <MarkedText>
                Engage players with minimum bet or win criteria during <span>Registration Phase</span> to <span>accelerate returns</span>
              </MarkedText>
            </Box>
          </Box>
        </Box>

        {/* Backoffice Section */}
        <Box sx={{ ...containerStyles.phasesWrapper, height: '100%', marginBottom: '20px' }}>
          <Box sx={{ ...containerStyles.phasesInnerBg, flexDirection: 'column', gap: '60px' }}>
            <Typography sx={typographyStyles.sectionTitle}>
              Back <span>Office</span>
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <MarkedText sx={{ '& p': { fontSize: '30px', lineHeight: '46px' } }}>
                <span>Save your time and resources</span> by scheduling recurring regular tournaments
              </MarkedText>
              <MarkedText >
                Phases can be <span>flexibly arranged or overlapped</span> to align with your strategies and timeline
              </MarkedText>
            </Box>
            <Box
              component="img"
              src="/images/tournaments-bo-phases.jpg"
              alt="BO phases"
              sx={{
                background: '#00000066',
                borderRadius: '32.9px',
                height: 'auto',
                border: '1.37px solid #FFFFFF',
              }}
            />
            <Box alignSelf="center">
              <MarkedText sx={{ '& p': { fontSize: '30px', lineHeight: '46px' } }}>
                <span>Simplify setup, tracking, and analysis</span> with our detailed analytics dashboards
              </MarkedText>
            </Box>
            <Box
              component="img"
              src="/images/tournaments-bo-dashboard.jpg"
              alt="BO dashboard"
              sx={{
                background: '#00000066',
                borderRadius: '32.9px',
                height: 'auto',
                border: '1.37px solid #FFFFFF',
              }}
            />
          </Box>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

export default Tournaments;
