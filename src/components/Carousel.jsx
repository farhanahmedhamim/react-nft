import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Arrow from '../assets/Arrow.svg'; // Assuming this is the correct import path for your arrow icon
import image1 from '../assets/Nfts/bighead.svg';
import image2 from '../assets/Nfts/bighead-1.svg';
import image3 from '../assets/Nfts/bighead-2.svg';
import image4 from '../assets/Nfts/bighead-3.svg';
import image5 from '../assets/Nfts/bighead-4.svg';
import image6 from '../assets/Nfts/bighead-5.svg';
import image7 from '../assets/Nfts/bighead-6.svg';
import image8 from '../assets/Nfts/bighead-7.svg';
import image9 from '../assets/Nfts/bighead-8.svg';
import image10 from '../assets/Nfts/bighead-9.svg';

// Initialize Swiper core components
SwiperCore.use([EffectCards, Navigation, Pagination, Autoplay]);

// Styled component for the carousel container
const Container = styled.div`
  width: 25vw;
  height: 70vh;

  /* Media queries for responsive design */
  @media(max-width:70rem) {
    height: 60vh;
  }
  @media(max-width:64rem) {
    height: 50vh;
    width: 30vw;
  }
  @media(max-width:48rem) {
    height: 50vh;
    width: 40vw;
  }
  @media(max-width:30rem) {
    height: 45vh;
    width: 60vw;
  }

  /* Styling for Swiper container */
  .swiper {
    width: 100%;
    height: 100%;
  }

  /* Styling for individual slides */
  .swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Styling for images within slides */
    img {
      display:block;
      width:100%;
      height:auto;
      object-fit:cover;
    }
  }

  /* Styling for navigation buttons */
  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.text};
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    width: 3rem; /* Adjust width as needed */

    /* Hide default button element */
    &::after {
        display: none;
    }

    /* Media queries for responsive design */
    @media(max-width:64rem) {
      width: 2.5rem; /* Adjust width as needed */
    }
    @media(max-width:30rem) {
      width: 2rem; /* Adjust width as needed */
    }
  }

  /* Styling for previous button */
  .swiper-button-prev {
    left: 0;
    transform: rotate(180deg); /* Rotate the button for previous */
  }
`;

const Carousel = () => {
  return (
    <Container>
      {/* Swiper component */}
      <Swiper
        effect="cards"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true} // Enable navigation
        scrollbar={{ draggable: true }}
        grabCursor={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Swiper slides */}
        <SwiperSlide><img src={image1} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image5} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image6} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image7} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image8} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image9} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={image10} alt="The Weirdos" /></SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
