import React from 'react'
import styled from 'styled-components'

import image1 from '../assets/Nfts/bighead.svg'
import image2 from '../assets/Nfts/bighead-1.svg'
import image3 from '../assets/Nfts/bighead-2.svg'
import image4 from '../assets/Nfts/bighead-3.svg'
import image5 from '../assets/Nfts/bighead-4.svg'
import image6 from '../assets/Nfts/bighead-5.svg'

const Section = styled.section`
  height: 25rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  border-top: 2px solid ${(props) => props.theme.text};
  position: relative;
  overflow: hidden;

  @media(max-width:48rem){
    height: 15rem;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2;

    img {
        width: 15rem;
    height: auto;
    }

    @media(max-width:48rem){
        img {
            width: 10rem;
        height: auto;
        }
      }
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxxl};
    color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
    z-index: 10;
    width: 35%;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px ${(props) => props.theme.text};

    @media(max-width:64rem) {
        width: 40%;
        text-align: center;
        font-size: ${(props) => props.theme.fontxxl};
    }
    @media(max-width:48rem) {
        width: 100%;
        font-size: ${(props) => props.theme.fontxl};
        padding: 2rem 0;
    }

`

const BtnContainer = styled.div`
width: 35%;
    display: flex;
    justify-content: flex-end;

    @media(max-width:48rem)  {
        width: 100%;
        justify-content: center;
    }
`



const JoinNow = styled.button`
    display: inline-block;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    outline: none;
    border: none;
    font-weight:600;
    font-size: ${props => props.theme.fontlg};
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    @media(max-width:48rem) {
        padding: 1rem 2rem;
    }

    @media(max-width:30rem) {
        padding: 0.5rem 2rem;
        font-size: ${props => props.theme.fontsm};
    }

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.body};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }
    
    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`;



const Banner = () => {
    return (
        <Section>
            <ImageContainer>
                <img src={image1} alt="The Weirdos" />
                <img src={image2} alt="The Weirdos" />
                <img src={image3} alt="The Weirdos" />
                <img src={image4} alt="The Weirdos" />
                <img src={image5} alt="The Weirdos" />
                <img src={image6} alt="The Weirdos" />
            </ImageContainer>
            <Title>Join the <br /> weirdos club</Title>
            <BtnContainer>
                <JoinNow>
                    Join Now
                </JoinNow>
            </BtnContainer>
        </Section>
    )
}

export default Banner