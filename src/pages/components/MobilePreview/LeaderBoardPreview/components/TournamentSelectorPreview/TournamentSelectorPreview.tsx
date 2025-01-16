import { Box, Typography } from '@mui/material';
import { blendColors } from '../../../../../../utils/colorsUtils';
import { dotSvg, multipleStarsSvg } from '../../../asset';

const TournamentSelectorPreview = ({
  bgColor = '#2d1d48',
  fontColor = 'white',
  btnTextColor = 'white',
  secondaryColor = '#03A6F7'
} : any) => {
  const commonTypographyStyles = {
    color: fontColor,
    textAlign: 'center',
    fontFamily: 'Inter'
  };

  const tournamentBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    width: '135px',
    height: '55px'
  };

  const completedTournamentStyles = {
    ...tournamentBoxStyles,
    borderRadius: '16px 16px 0px 0px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    background: blendColors(bgColor, '#ffffff', 0.048)
  };

  const upcomingTournamentStyles = {
    ...tournamentBoxStyles,
    background:
      'linear-gradient(249deg, rgba(255, 255, 255, 0.05) 5.99%, rgba(0, 0, 0, 0.00) 26.98%)',
    backgroundSize: '100% 70%',
    backgroundRepeat: 'no-repeat',
    opacity: '0.25'
  };

  const transparentTournamentStyles = {
    ...tournamentBoxStyles,
    background: 'transparent',
    opacity: '0.25'
  };

  const headerStyles = {
    ...commonTypographyStyles,
    fontSize: '12px',
    fontWeight: 700
  };

  const timerStyles = {
    ...commonTypographyStyles,
    fontSize: '10px',
    fontWeight: 500,
    opacity: 0.7
  };

  return (
    <Box position="absolute" top="0px" zIndex="1" display="flex" flexDirection="row" gap="8px">
      {/* Completed Tournament */}
      <Box sx={completedTournamentStyles}>
        <Typography variant="body1" sx={headerStyles}>
          TOURNAMENT 1
        </Typography>
        <Typography variant="body2" sx={timerStyles}>
          FINISHED
        </Typography>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <Box sx={{ position: 'absolute', bottom: '33px', right: '0' }}>{multipleStarsSvg}</Box>
        </Box>
      </Box>

      {/* Upcoming Tournament */}
      <Box sx={upcomingTournamentStyles}>
        <Typography variant="body1" sx={headerStyles}>
          TOURNAMENT 2
        </Typography>
        <Typography variant="body2" sx={timerStyles}>
          21:39:42
        </Typography>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <Typography
            sx={{
              position: 'absolute',
              bottom: '40px',
              left: '25%',
              color: btnTextColor,
              height: '12px',
              padding: '2px 6px',
              backgroundColor: secondaryColor,
              width: '62px',
              borderRadius: '12px',
              textAlign: 'center',
              fontSize: '8px',
              fontWeight: 700,
              letterSpacing: '0.1029em'
            }}>
            UPCOMING
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <Box sx={{ position: 'absolute', bottom: '33px', right: '-2px' }}>{dotSvg}</Box>
        </Box>
      </Box>

      {/* Transparent Tournament */}
      <Box sx={transparentTournamentStyles}>
        <Typography variant="body1" sx={headerStyles}>
          TOURNAMENT 3
        </Typography>
        <Typography variant="body2" sx={timerStyles}>
          21:39:42
        </Typography>
      </Box>
    </Box>
  );
};

export default TournamentSelectorPreview;