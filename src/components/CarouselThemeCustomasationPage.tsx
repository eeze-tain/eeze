import {useEffect, useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

const carouselStyles = {
  middle: {
    border: '5px solid red',
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
    }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <Box
              key={index}
              sx={{ ...(middleIndex === index ? carouselStyles.middle : {}) }}
            >
              <div
                style={{
                  width: '383px',
                  height: '675px',
                  backgroundColor: slide.backgroundColor,
                }}
              />
            </Box>
          );
        })}
      </Slider>
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
