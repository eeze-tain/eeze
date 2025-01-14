import { ReactNode } from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';

interface MarkedTextProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}
const MarkedText = ({ children, sx }: MarkedTextProps) => {
  return (
    <Box sx={sx} display="flex" flexDirection="row" gap={2}>
      <Box sx={{ width: 'fit-content' }}>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            width: '33px',
            height: '42px',
            transform: 'rotate(10deg)',
          }}
        >
          ✓
        </Typography>
      </Box>
      <Box sx={{ width: 'fit-content' }}>
        <Typography
          sx={{
            fontFamily: '"Raleway", serif',
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '42px',
            '& span': {
              fontWeight: 700,
            },
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export default MarkedText;
