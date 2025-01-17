import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import VideoPlayer from '../VideoPlayer';

interface ScreenWrapperProps {
    children?: ReactNode,
    title?: string,
    imageSrc?: string,
    videoSrc?: string
}
const ScreenWrapper = ({ children, title, imageSrc, videoSrc }: ScreenWrapperProps) => {
    return (
        <Box sx={{
            position: 'relative',
            width: '605px',
            height: '1232px',
            border: '1px solid #7C1DF7',
            padding: '16px',
            borderRadius: '40px',
        }}>
            <Box sx={{
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 48px )',
                background: 'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
                borderRadius: '30px',
                padding: '24px 16px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: '100%',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                        alignItems: 'center',
                        marginBottom: '40px'
                    }}>
                        <Typography
                            component="div"
                            sx={{
                                fontFamily: '"Raleway", serif',
                                fontWeight: 700,
                                fontSize: '36px',
                                lineHeight: '50.4px',
                                textAlign: 'center',
                            }}>
                            <span dangerouslySetInnerHTML={{ __html: title }} />
                        </Typography>
                        {/* Images */}
                        {imageSrc &&
                            <Box
                                component="img"
                                src={imageSrc}
                                alt={`Mobile Phone Preview`}
                                sx={{
                                    width: '383px',
                                    height: '675px',
                                    border: '1px solid #ffffff',
                                    borderRadius: '16px',
                                }}
                            />}
                        {/* Videos */}
                        {videoSrc &&
                            <VideoPlayer sx={{
                                width: '383px',
                                height: '675px',
                                border: '1px solid #ffffff',
                                borderRadius: '16px',
                            }}
                                videoSrc={videoSrc} />
                        }
                    </Box>

                    <Box sx={{ paddingBottom: '54px' }}>
                        {children}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default ScreenWrapper;