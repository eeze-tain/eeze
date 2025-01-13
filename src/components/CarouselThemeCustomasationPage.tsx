import {useEffect, useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import CustomSlider from './CustomSlider/CustomSlider';
const carouselStyles = {
  middle: {
    border: '5px solid red',
  },
};
const setings = {
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '1000px',
  draggable: false,
  swipe: false,
  // variableWidth: true,
  // arrows: true,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 10000, // 10 seconds for each slide
  beforeChange: (current: number, next: number) => {
    // setMiddleIndex(next); // Update active slide when the slide changes
  },
}; 
const CarouselThemeCustomasationPage = ({
  slides,
  settings,
  middleIndex,
}: {
  slides: any;
  settings: any;
  middleIndex: number;
}) => {

  
  console.log('activeSlide', {middleIndex, slides});
  return (
    <Box
    sx={{
      color: '#FFFFFF',
      fontWeight: '100',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      height: '100%',
    }}
    >
      <CustomSlider > 
        <div style={{width: '383px', height: '675px', backgroundColor: 'red'}}/>
        <div style={{width: '383px', height: '675px', backgroundColor: 'blue'}}/>
        <div style={{width: '383px', height: '675px', backgroundColor: 'white'}}/>
      </CustomSlider>
      {/* <Slider {...setings}>
        {slides.map((slide, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: '100px !important',
                height: '675px',
                backgroundColor: slide.backgroundColor,
                // ...(middleIndex === index ? carouselStyles.middle : {}) 
              }}
              // sx={{ ...(middleIndex === index ? carouselStyles.middle : {}) }}
            >
            </Box>
          );
        })}
      </Slider> */}
    </Box>
  );
};

export default CarouselThemeCustomasationPage;

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Box } from '@mui/material';

// const CarouselThemeCustomasationPage = ({
//   slides,
//   settings,
//   activeSlide,
// }: {
//   slides: any;
//   settings: any;
//   activeSlide: number;
// }) => {
//   console.log('activeSlide', activeSlide)

//   return (
//     <Box
//       sx={{
//         color: '#FFFFFF',
//         fontWeight: '100',
//         overflow: 'hidden',
//         position: 'relative',
//       }}
//     >
//       <Slider {...settings}>
//         {slides.map((slide, index) => {

//           const isActive = activeSlide === index;
//           return (
//             <div
//               key={index}
//               className={`slide ${isActive ? 'active' : ''}`}
//               // style={{width: '300px'}}
//             >
//               {/* <img
//                 src={slide.image}
//                 alt={slide.title}
//                 style={{
//                   width: '100%',
//                   height: 'auto',
//                   borderRadius: '10px',
//                 }}
//               /> */}
//               <div style={{ width: '383px', height: '675px', backgroundColor: slide.backgroundColor }} />
//             </div>
//           );
//         })}
//       </Slider>
//     </Box>
//   );
// };

// export default CarouselThemeCustomasationPage;
