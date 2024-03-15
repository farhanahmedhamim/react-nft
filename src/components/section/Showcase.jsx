import React from 'react'
import styled, { keyframes } from 'styled-components'


import image1 from '../../assets/Nfts/bighead.svg'
import image2 from '../../assets/Nfts/bighead-1.svg'
import image3 from '../../assets/Nfts/bighead-2.svg'
import image4 from '../../assets/Nfts/bighead-3.svg'
import image5 from '../../assets/Nfts/bighead-4.svg'
import image6 from '../../assets/Nfts/bighead-5.svg'
import image7 from '../../assets/Nfts/bighead-6.svg'
import image8 from '../../assets/Nfts/bighead-7.svg'
import image9 from '../../assets/Nfts/bighead-8.svg'
import image10 from '../../assets/Nfts/bighead-9.svg'

import ETH from '../../assets/icons8-ethereum-48.png'
import { useRef } from 'react'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;


  &>*:first-child {
    animation-duration:20s;

    @media(max-width:30rem) {
        animation-duration:15s;
    }
  }

  &>*:last-child {
    animation-duration:15s;

    @media(max-width:30rem) {
        animation-duration:10s;
    }
  }


`;


const move = keyframes`
  0%{transform: translateX(100%);}
  100%{transform: translateX(-100%);}
`


const Row = styled.div`
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;
    animation: ${move} linear infinite ${props => props.direction};
`

const ImgContainer = styled.div`
width: 15rem;
    margin: 0 1rem;
    background-color: ${props => props.theme.body};
    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
    height: auto;
    }


    @media(max-width:48rem) {
        width: 12rem;
    }

    @media(max-width:30rem) {
        width: 10rem;
    }

`

const Details = styled.div`
display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
    }

    h1 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;

    @media(max-width:30rem) {
        font-size: ${props => props.theme.fontsm};
    }
}

`

const Price = styled.div`
display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 1rem;
    height: auto;
    }
`


const NFTItem = ({ img, number = 0, price = 0, passRef }) => {

    let play = (e) => {
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = (e) => {
        passRef.current.style.animationPlayState = 'paused';
    }

    return (
        <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
            <img src={img} alt="The Weirdos" />
            <Details>
                <div>
                    <span>Weirdos</span>
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>price</span>
                    <Price>
                        <img src={ETH} alt="ETH" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    )
}


const Showcase = () => {
    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

    return (
        <Section id='showcase'>
            <Row direction='none' ref={Row1Ref}>
                <NFTItem img={image1} number={852} price={1.5} passRef={Row1Ref} />
                <NFTItem img={image2} number={123} price={1.2} passRef={Row1Ref} />
                <NFTItem img={image3} number={654} price={2.5} passRef={Row1Ref} />
                <NFTItem img={image4} number={867} price={3.5} passRef={Row1Ref} />
                <NFTItem img={image5} number={137} price={4.7} passRef={Row1Ref} />
            </Row>
            <Row direction='reverse' ref={Row2Ref}>
                <NFTItem img={image6} number={638} price={1.2} passRef={Row2Ref} />
                <NFTItem img={image7} number={936} price={3.2} passRef={Row2Ref} />
                <NFTItem img={image8} number={274} price={1.8} passRef={Row2Ref} />
                <NFTItem img={image9} number={738} price={5.1} passRef={Row2Ref} />
                <NFTItem img={image10} number={483} price={3.7} passRef={Row2Ref} />
            </Row>
        </Section>
    )
}

export default Showcase