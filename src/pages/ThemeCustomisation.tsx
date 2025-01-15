import React, { useCallback, useState } from 'react';
// import { FormProvider } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import AnimatedSection from './components/AnimatedSection';
import GridItem from './components/GridItem';
import MobilePreview from './components/MobilePreview';
import LeaderboardPreview from './components/MobilePreview/LeaderBoardPreview/LeaderBoardPreview';
import LogoPreview from './components/MobilePreview/LogoPreview/LogoPreview';
import WidgetScorePreview from './components/MobilePreview/WidgetScorePreview/WidgetScorePreview';
import BasicColorsSettings from './containers/BasicColorsSettings';
// import RadioLogoSelector from './containers/RadioLogoSelector';
import CarouselThemeCustomasationPage from '../components/CarouselThemeCustomasationPage';

import { motion } from 'framer-motion';
import VideoPlayer from './components/VideoPlayer';
// Reusable styles for Typography
const typographyStyles = {
  header: {
    fontWeight: 800,
    color: '#FBF8F8',
    fontSize: '85px',
    textTransform: 'capitalize',
    fontFamily: 'Raleway, serif',
    lineHeight: '85px',
    '& span': { color: '#D3B1FF' },
  },
  subHeader: {
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'right',
    fontSize: '44px',
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
    display: 'flex',
    '& span': { color: '#D3B1FF' },
  },
  description: {
    fontWeight: 400,
    fontSize: '35px',
    lineHeight: '57.6px',
    fontFamily: 'Raleway, serif',
    '& span': { fontWeight: 700 },
    color: 'white', // Set the default color
    '&.Mui-focused': {
      color: 'white', // Prevent color change on focus
    },
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
  phasesWrapperPlayAround: {
    border: '4px solid transparent',
    boxShadow: '0px 0px 10px 0px #00FFB966',
    backgroundImage:
      'linear-gradient(90deg, #0064CA -0.34%, #0086D8 27.8%, #0091C6 32.83%, #00A4AA 42.88%, #00B295 53.94%, #00BD85 66.01%, #00C37C 80.08%, #00C57A 100.19%)',
    borderRadius: '40px',
    padding: '4px',
    marginTop: '60px',
    width: 'calc(100% - 32px)',
    backgroundColor: 'transparent',
    backgroundClip: 'border-box',
    backgroundOrigin: 'border-box',
  },
  phasesInnerBg: {
    display: 'flex',
    flexDirection: 'column',
    background:
      'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
    width: 'calc(100% - 120px)',
    height: 'calc(100% - 120px)',
    borderRadius: '30px',
    padding: '60px',
    '& .theme__cursor__wrapper': {
      marginLeft: '10px',
      marginY: 'auto',
      '& svg': {
        width: '50px',
        height: '50px',
      },
    },
  },
  phasesInnerBgRow: {
    display: 'flex',
    flexDirection: 'row',
    background:
      'linear-gradient(172.92deg, rgba(0, 0, 0, 0.1) 5.53%, rgba(90, 53, 151, 0.2) 89.21%)',
    width: 'calc(100% - 120px)',
    height: 'calc(100% - 120px)',
    borderRadius: '30px',
    padding: '60px',
  },
};

const ThemeCustomisation: React.FC = (props: any) => {
  const [colors, setColors] = useState({
    'data.main.backgroundColor': '#2D1D48',
    'data.widget.backgroundColor': '#2D1D48',
    'data.logo.backgroundColor': '#2D1D48',
    'data.main.secondaryColor': '#6D03F7',
    'data.widget.secondaryBackgroundColor': '#33FFBD',
    'data.main.primaryColor': '#31D887',
  });

  const updateColors = (updates: { [key: string]: string }) => {
    setColors((prevColors) => ({
      ...prevColors,
      ...updates,
    }));
  };

  const frontEndSlides = [
    {
      number: '1',
      image: '/svg/themes-coursel-forest.svg',
    },
    {
      number: '2',
      image: '/svg/themes-coursel-default.svg',
    },
    {
      number: '3',
      image: '/svg/themes-coursel-grey.svg',
    },
  ];

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const label = 'UPLOAD FROM FILE';
  const formattedLabel = capitalizeFirstLetter(label);

  const [selectedValue, setSelectedValue] = useState('default');
  const [logoUrl, setLogoUrl] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.value === 'default') {
      setLogoUrl('');
    }
  };
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);

        const blob = new Blob([binaryStr], { type: file.type });

        // Create an object URL from the Blob
        const url = URL.createObjectURL(blob);

        // Set the URL to display the image
        setLogoUrl(url);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
    },
    onDrop,
  });

  return (
    <Box sx={containerStyles.mainWrapper}>
      {/* Hero Section */}
      <AnimatedSection>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ width: '38%' }}>
              <Typography variant="h3" sx={typographyStyles.header}>
                Theme <span>Customisation</span>
              </Typography>
            </Box>
            <Box sx={{ width: '48%', display: 'flex', alignItems: 'flex-end' }}>
              <Typography variant="body1" sx={typographyStyles.subHeader}>
                Customise themes to deliver standout,
                <br /> personalised experiences
              </Typography>
            </Box>
          </Box>
        </Box>
      </AnimatedSection>
      <AnimatedSection>
        <Box display="flex" gap="60px" sx={containerStyles.phasesWrapper}>
          <Box gap="60px" sx={containerStyles.phasesInnerBgRow}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              flex="2"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="375px"
                height="354px"
              >
                <VideoPlayer
                  sx={{
                    height: '354px',
                  }}
                  playOnHover={false}
                  videoSrc={'/videos/logos-switch.mp4'}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              flex="3"
              gap="60px"
            >
              <Typography width="668px" sx={typographyStyles.description}>
                Strengthen your brand identity by{' '}
                <span>personalising your own branding, colours,</span> and{' '}
                <span>logos</span> twithin tournaments to align with your brand
              </Typography>
              <Typography width="668px" sx={typographyStyles.description}>
                Create a&nbsp;<span>seamless brand experience</span> for players
                in tournaments to <span>reinforce your brand identity</span> and{' '}
                <span>build players' loyalty</span> to your platform
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={containerStyles.phasesWrapperPlayAround}>
          <Box sx={{ backgroundColor: '#2f1e4c', borderRadius: '40px' }}>
            <Box sx={containerStyles.phasesInnerBg}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent={'center'}
              >
                <Typography sx={typographyStyles.sectionTitle}>
                  Play&nbsp;<span>Around!</span>
                </Typography>
                <div className="theme__cursor__wrapper">
                  <div className="theme__cursor">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M20.6252 5.62515V3.75015C20.6252 3.25287 20.8227 2.77596 21.1743 2.42433C21.526 2.0727 22.0029 1.87515 22.5002 1.87515C22.9974 1.87515 23.4743 2.0727 23.826 2.42433C24.1776 2.77596 24.3752 3.25287 24.3752 3.75015V5.62515C24.3752 6.12244 24.1776 6.59935 23.826 6.95098C23.4743 7.30261 22.9974 7.50015 22.5002 7.50015C22.0029 7.50015 21.526 7.30261 21.1743 6.95098C20.8227 6.59935 20.6252 6.12244 20.6252 5.62515ZM3.75015 24.3752H5.62515C6.12244 24.3752 6.59935 24.1776 6.95098 23.826C7.30261 23.4743 7.50015 22.9974 7.50015 22.5002C7.50015 22.0029 7.30261 21.526 6.95098 21.1743C6.59935 20.8227 6.12244 20.6252 5.62515 20.6252H3.75015C3.25287 20.6252 2.77596 20.8227 2.42433 21.1743C2.0727 21.526 1.87515 22.0029 1.87515 22.5002C1.87515 22.9974 2.0727 23.4743 2.42433 23.826C2.77596 24.1776 3.25287 24.3752 3.75015 24.3752ZM29.1611 9.17828C29.3814 9.28863 29.6214 9.35446 29.8672 9.37201C30.113 9.38955 30.3598 9.35848 30.5936 9.28055C30.8274 9.20262 31.0435 9.07937 31.2296 8.91785C31.4158 8.75633 31.5682 8.5597 31.6783 8.33922L33.5533 4.58922C33.7758 4.14446 33.8126 3.62952 33.6554 3.15768C33.4983 2.68583 33.1601 2.29573 32.7154 2.0732C32.2706 1.85067 31.7557 1.81393 31.2838 1.97106C30.812 2.1282 30.4219 2.46634 30.1994 2.91109L28.3244 6.66109C28.2139 6.88129 28.148 7.1211 28.1303 7.36681C28.1126 7.61251 28.1434 7.8593 28.2211 8.09306C28.2988 8.32683 28.4219 8.54299 28.5831 8.7292C28.7444 8.91541 28.9408 9.06801 29.1611 9.17828ZM6.66109 28.3244L2.91109 30.1994C2.46634 30.4219 2.1282 30.812 1.97106 31.2838C1.81393 31.7557 1.85067 32.2706 2.0732 32.7154C2.29573 33.1601 2.68583 33.4983 3.15768 33.6554C3.62952 33.8126 4.14446 33.7758 4.58922 33.5533L8.33922 31.6783C8.55944 31.5681 8.7558 31.4156 8.91709 31.2295C9.07838 31.0435 9.20144 30.8274 9.27925 30.5938C9.35705 30.3602 9.38808 30.1135 9.37055 29.8679C9.35303 29.6222 9.28729 29.3825 9.17711 29.1623C9.06692 28.942 8.91444 28.7457 8.72836 28.5844C8.54229 28.4231 8.32627 28.3 8.09263 28.2222C7.859 28.1444 7.61233 28.1134 7.3667 28.1309C7.12108 28.1485 6.88131 28.2142 6.66109 28.3244ZM51.4009 43.1252C51.7492 43.4734 52.0256 43.8868 52.2141 44.3418C52.4026 44.7969 52.4996 45.2846 52.4996 45.7771C52.4996 46.2696 52.4026 46.7573 52.2141 47.2124C52.0256 47.6674 51.7492 48.0808 51.4009 48.4291L48.4291 51.4009C48.0808 51.7492 47.6674 52.0255 47.2124 52.2141C46.7573 52.4026 46.2696 52.4996 45.7771 52.4996C45.2846 52.4996 44.7969 52.4026 44.3419 52.2141C43.8868 52.0255 43.4734 51.7492 43.1252 51.4009L31.1017 39.3752L26.9533 50.1775C26.9533 50.2009 26.9345 50.2267 26.9228 50.2525C26.6359 50.9215 26.1584 51.4914 25.55 51.891C24.9415 52.2907 24.2289 52.5025 23.5009 52.5001H23.3158C22.5566 52.468 21.8255 52.2035 21.2215 51.7424C20.6175 51.2813 20.1696 50.6459 19.9384 49.922L7.68765 12.4033C7.47735 11.7471 7.45189 11.0457 7.61408 10.376C7.77627 9.70634 8.11984 9.09429 8.60706 8.60706C9.09429 8.11984 9.70634 7.77627 10.376 7.61408C11.0457 7.45189 11.7471 7.47735 12.4033 7.68765L49.922 19.9384C50.6391 20.1783 51.2669 20.6293 51.7231 21.2324C52.1792 21.8354 52.4425 22.5622 52.4782 23.3175C52.5139 24.0728 52.3205 24.8212 51.9233 25.4646C51.5261 26.108 50.9437 26.6163 50.2525 26.9228L50.1775 26.9533L39.3752 31.0994L51.4009 43.1252ZM48.7502 45.7759L36.7244 33.7502C36.2915 33.3181 35.9709 32.7867 35.7905 32.2023C35.6101 31.618 35.5753 30.9983 35.6892 30.3975C35.8032 29.7966 36.0623 29.2327 36.4442 28.7549C36.826 28.2771 37.3189 27.9 37.8798 27.6564L37.9548 27.6236L48.7244 23.4892L11.2502 11.2502L23.4845 48.7173L27.6212 37.9361C27.6212 37.9103 27.64 37.8845 27.6517 37.8587C27.8954 37.2982 28.2725 36.8057 28.75 36.4242C29.2275 36.0427 29.7911 35.7836 30.3916 35.6697C30.6235 35.6267 30.8588 35.6047 31.0947 35.6041C32.0883 35.6051 33.0408 36.0005 33.7431 36.7033L45.7759 48.7502L48.7502 45.7759Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </Box>
              <Typography sx={typographyStyles.description}>
                Adjust the slider to customise your own theme!
              </Typography>
              <Box display="flex" flexDirection="row">
                {/*left side*/}
                <GridItem border={'none'}>
                  <Box display="flex" flexDirection="column" flex="1">
                    {/* Theme Color Sliders Section */}
                    <Box sx={{ marginTop: '2rem' }}>
                      <br></br>
                      <br></br>
                      <BasicColorsSettings
                        mainThemeColor={colors['data.main.backgroundColor']}
                        secondaryThemeColor={colors['data.main.secondaryColor']}
                        CTATextColor={colors['data.main.primaryColor']}
                        setColors={updateColors}
                      />
                    </Box>
                    {/* <Grid item xs={12} md={12}>
                      <RadioLogoSelector />
                    </Grid> */}
                    <Box flexGrow={1}>
                      <Divider
                        style={{
                          width: '100%',
                          marginTop: '16px',
                          marginBottom: '16px',
                        }}
                      />
                      <Box>
                        <FormControl>
                          <FormLabel
                            sx={{
                              ...typographyStyles.description,
                              fontWeight: 600,
                            }}
                          >
                            Choose a Logo:
                          </FormLabel>
                          <br />
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="default"
                            name="radio-buttons-group"
                            value={selectedValue}
                            onChange={handleRadioChange}
                          >
                            <FormControlLabel
                              sx={{
                                color: 'white',
                                '& .MuiFormControlLabel-label': {
                                  fontFamily: 'Raleway',
                                  fontSize: '30px',
                                  fontWeight: 600,
                                },
                              }}
                              value="default"
                              control={<Radio sx={{ color: 'white' }} />}
                              label="Default logo"
                            />
                            <br />
                            <FormControlLabel
                              sx={{
                                color: 'white',
                                '& .MuiFormControlLabel-label': {
                                  fontFamily: 'Raleway',
                                  fontSize: '30px',
                                  fontWeight: 600,
                                },
                              }}
                              value="custom"
                              control={<Radio sx={{ color: 'white' }} />}
                              label="Custom logo (Optional)"
                            />
                          </RadioGroup>
                          <br />
                          {selectedValue === 'custom' && (
                            <Box {...getRootProps()} sx={{ width: '297px' }}>
                              <input {...getInputProps()} />
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: '#4A2289',
                                  borderRadius: '30px',
                                  textTransform: 'none',
                                  fontSize: '28px',
                                  fontFamily: 'Raleway',
                                  padding: '16px 30px',
                                  // color: '#fff', // Custom text color
                                  // '&:hover': {
                                  //   backgroundColor: '#115293', // Custom hover color
                                  // },
                                }}
                              >
                                {formattedLabel}
                              </Button>
                            </Box>
                          )}
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
                {/*right side*/}
                <Box flex="2">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Grid
                      container
                      columnGap={5}
                      borderRadius={'20px'}
                      sx={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '2rem',
                      }}
                    >
                      <GridItem border={'none'}>
                        <Box width={'80%'} marginLeft={'20%'}>
                          <MobilePreview
                            primaryColor={colors['data.main.primaryColor']}
                            secondaryColor={colors['data.main.secondaryColor']}
                            backgroundColor={
                              colors['data.main.backgroundColor']
                            }
                          >
                            <LeaderboardPreview
                              primaryColor={colors['data.main.primaryColor']}
                              secondaryColor={
                                colors['data.main.secondaryColor']
                              }
                              backgroundColor={
                                colors['data.main.backgroundColor']
                              }
                              logoUrl={logoUrl}
                            />
                          </MobilePreview>
                        </Box>
                      </GridItem>
                      <GridItem border={'none'}>
                        <Box
                          marginRight={'20%'}
                          marginBottom={'7.5%'}
                          marginTop={'-2.5%'}
                        >
                          <Divider
                            style={{ width: '100%', marginBottom: '16px' }}
                          />
                          <MobilePreview
                            primaryColor={colors['data.main.primaryColor']}
                            secondaryColor={colors['data.main.secondaryColor']}
                            backgroundColor={
                              colors['data.main.backgroundColor']
                            }
                          >
                            <LogoPreview logoUrl={logoUrl} />
                          </MobilePreview>
                        </Box>
                        <Box marginRight={'20%'}>
                          <Divider
                            style={{ width: '100%', marginBottom: '16px' }}
                          />
                          <MobilePreview
                            primaryColor={colors['data.main.primaryColor']}
                            secondaryColor={colors['data.main.secondaryColor']}
                            backgroundColor={
                              colors['data.main.backgroundColor']
                            }
                          >
                            <WidgetScorePreview
                              bgColor={colors['data.main.backgroundColor']}
                              fontColor={'white'}
                              secColor={colors['data.main.secondaryColor']}
                              secBgColor={colors['data.main.backgroundColor']}
                              widgetSecBgColor={colors['data.widget.secondaryBackgroundColor']}
                            />
                          </MobilePreview>
                        </Box>
                      </GridItem>
                    </Grid>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          marginBottom={'20px'}
          display="flex"
          gap="60px"
          sx={containerStyles.phasesWrapper}
        >
          <Box gap="60px" sx={containerStyles.phasesInnerBgRow}>
            <Box display="flex" flexDirection="column" flex="2" margin="auto">
              <Typography
                sx={{
                  ...typographyStyles.sectionTitle,
                  p: { marginBottom: '40px' },
                }}
              >
                Our&nbsp;<span>Present Themes</span>
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                flex="1"
                gap="60px"
              >
                <Typography width="668px" sx={typographyStyles.description}>
                  Effortlessly adopt&nbsp;
                  <span>ready-to-use</span> preset themes and&nbsp;
                  <span>refresh your offerings</span> for players
                </Typography>
                <Typography width="668px" sx={typographyStyles.description}>
                  You can further&nbsp;<span>customise your own colours</span>{' '}
                  flexibly per component group with our advanced setting
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="start"
              flex="3"
              gap="60px"
            >
              <CarouselThemeCustomasationPage slides={frontEndSlides} />
            </Box>
          </Box>
        </Box>
      </AnimatedSection>
    </Box>
  );
};

export default ThemeCustomisation;
