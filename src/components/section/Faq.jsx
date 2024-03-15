import React, { useRef } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Section = styled.section`
  min-height: 100vh;
  height:auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media(max-width:48rem) {
    font-size: ${(props) => props.theme.fontxl};
  }

`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width:64rem) {
    width: 80%;
  }

  @media(max-width:48rem) {
    width: 90%;
    flex-direction: column;

    &>*:last-child {
      &>*:first-child {
        margin-top:0;
      }
    }

  }
`;

const Box = styled.div`
  width: 45%;

  @media(max-width:48rem) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      trigger.kill(); // Use trigger.kill() to clean up ScrollTrigger
    };
  }, []);

  return (
    <Section ref={ref} id='faq'>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title='WHERE CAN I VIEW MY NFTS?'>Once minted or bought simply connect to your OpenSea account to view your NFTs.</Accordion>
          <Accordion title='WHAT IS THE METAVERSE?'>A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.</Accordion>
          <Accordion title='WHY DO WE NEED ROYALTIES?'>The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.</Accordion>
        </Box>
        <Box>
          <Accordion title='HOW CAN I USE MY NFT?'>You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.</Accordion>
          <Accordion title='WHAT ARE THE WEIRDOS?'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.</Accordion>
          <Accordion title='WHAT IS THE FUSION PROCESS?'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.</Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
