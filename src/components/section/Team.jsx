import React from 'react';
import styled from 'styled-components';
import ConfettiComponent from '../Confetti';

import image1 from '../../assets/Nfts/bighead.svg';
import image2 from '../../assets/Nfts/bighead-1.svg';
import image3 from '../../assets/Nfts/bighead-2.svg';
import image4 from '../../assets/Nfts/bighead-3.svg';
import image5 from '../../assets/Nfts/bighead-4.svg';
import image6 from '../../assets/Nfts/bighead-5.svg';
import image7 from '../../assets/Nfts/bighead-6.svg';
import image8 from '../../assets/Nfts/bighead-7.svg';
import image9 from '../../assets/Nfts/bighead-8.svg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media(max-width:40rem) {
    font-size: ${(props) => props.theme.fontxl};
  }

`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width:64rem) {
    width: 80%;
  }
  @media(max-width:48rem) {
    width: 90%;
    justify-content: center;
  }

`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  backdrop-filter: blur(4px);
  z-index: 5;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media(max-width:30rem) {
    width: 70vw;
  }

`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  cursor: pointer;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.5)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = '', position = '' }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id='team'>
      <ConfettiComponent /> {/* Make sure to import ConfettiComponent */}
      <Title>Team</Title>
      <Container>
        <MemberComponent img={image1} name="SKYBLAZE" position="founder" />
        <MemberComponent img={image2} name="MEGNUM" position="Co-Founder" />
        <MemberComponent img={image3} name="MONKEY KING" position="Director" />
        <MemberComponent img={image4} name="BLACK PANTHER" position="manager" />
        <MemberComponent img={image5} name="DEATHSTROKE" position="artist" />
        <MemberComponent img={image6} name="LAZY KONG" position="social media manager" />
        <MemberComponent img={image7} name="CYBER PUNK" position="Blockchin Specialist" />
        <MemberComponent img={image8} name="MONK" position="Web3 Developer" />
        <MemberComponent img={image9} name="BANANA" position="Graphic-Designer" />
      </Container>
    </Section>
  );
};

export default Team;
