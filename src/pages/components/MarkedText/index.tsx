import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface MarkedTextProps{
    children?: ReactNode,
}
const MarkedText = ({children} : MarkedTextProps) => {
    return (
        <Box display="flex" flexDirection="row" gap={2}>
            <Box sx={{ width: 'fit-content' }}>
                <Typography sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '30px',
                    width: '33px',
                    height: '42px',
                }}>
                    ✓
                </Typography>
            </Box>
            <Box sx={{ width: 'fit-content' }}>
                <Typography
                    sx={{
                        fontFamily: '"Raleway", serif',
                        fontWeight: 400,
                        fontSize: '30px',
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