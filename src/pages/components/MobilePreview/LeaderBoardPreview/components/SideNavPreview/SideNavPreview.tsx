import { Box, Button, IconButton } from '@mui/material';
import { iconHistory, iconLedaderboard, iconTables } from '../../../asset';

const SideNavPreview = ({
  btnTextColor = '#06191F',
  btnBackground = '#C5D831',
  iconColor = 'white',
  secondaryColor = '#03A6F7'
}) => {
  const iconButtonStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    display: 'flex',
    backgroundColor: 'transparent'
  };

  const joinButtonStyles = {
    width: '94px',
    height: '32px',
    padding: '8px 16px',
    borderRadius: '12px',
    backgroundColor: btnBackground,
    color: btnTextColor,
    fontFamily: 'Inter',
    fontSize: '11px',
    fontWeight: 700,
    lineHeight: '16px',
    '&:hover': {
      backgroundColor: btnBackground,
      color: btnTextColor
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0 24px"
      sx={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '0px 16px 0px 0px',
        height: '64px'
      }}>
      {/* Join Button Section */}
      <Box display="flex" alignItems="center" gap="8px">
        <Button sx={joinButtonStyles}>Join Now</Button>
      </Box>

      {/* Icon Section */}
      <Box display="flex" alignItems="center" gap="8px">
        <IconButton
          sx={{
            ...iconButtonStyles,
            borderRadius: '8px',
            backgroundColor: secondaryColor,
            padding: '4px'
          }}
          aria-label="Leaderboard">
          {iconLedaderboard ? iconLedaderboard(iconColor) : null}
        </IconButton>

        <IconButton
          sx={{
            ...iconButtonStyles,
            padding: '4px'
          }}
          aria-label="Tables">
          {iconTables ? iconTables(iconColor) : null}
        </IconButton>

        <IconButton
          sx={{
            ...iconButtonStyles,
            padding: '4px'
          }}
          aria-label="History">
          {iconHistory ? iconHistory(iconColor) : null}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SideNavPreview;