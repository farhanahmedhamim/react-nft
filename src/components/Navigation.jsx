import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import { useState } from 'react'



const Section = styled.section`
width:100vw;
background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile {
  display:none;
}


@media(max-width:64rem) {
  .desktop {
    display:none;
  }

  .mobile {
    display:inline-block;
  }
}


`


const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media(max-width:64rem) {
  position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba( ${props.theme.bodyRgba},0.85)`};
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(2px);
    transition: all 0.3s ease;
    transform: ${props => props.click ? "translateY(0)" : "translateY(1000%)"};
    touch-action: none;
}

`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
content: '';
display: block;
width: 0%;
height: 2px;
background: ${props => props.theme.text};
transition: width 0.3s ease;
}

&:hover::after{
  width:100%;
}

@media(max-width:64rem) {
  margin: 1rem 0;

  &::after{
    display: none;
    }

}

`


const HumbergerMenu = styled.span`
width: ${props => props.click ? "2rem" : "1.5rem"};
    height: 2px;
    background-color: ${props => props.theme.text};
    display:none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: ${props => props.click ? "translateX(-50%) rotate(90deg)" : "translateX(-50%) rotate(0)"};
    transition: all 0.3s ease;
    cursor:pointer;


    @media(max-width:64rem) {
      display:flex;
    }



    &::after, &::before {
      content: '';
    height: 2px;
    width: ${props => props.click ? "1rem" : "1.5rem"};
    right: ${props => props.click ? "-2px" : "0"};
    background-color: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
    }

    &::after {
      top: ${props => props.click ? "0.3rem" : "0.5rem"};
      transform: ${props => props.click ? "rotate(-40deg)" : "rotate(0)"};
    }
    &::before {
      bottom: ${props => props.click ? "0.3rem" : "0.5rem"};
      transform: ${props => props.click ? "rotate(40deg)" : "rotate(0)"};
    }

`

const Navigation = () => {

  const [click, setClick] = useState(false)


  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

    setClick(!click);
  }

  return (
    <Section id='navigation'>
      <NavBar>
        <Logo />
        <HumbergerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HumbergerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
          <MenuItem>
            <div className='mobile'>
              <Button text='Connect Wallet' link='https://google.com' />
            </div>
          </MenuItem>
        </Menu>
        <div className='desktop'>
          <Button text='Connect Wallet' link='https://google.com' />
        </div>
      </NavBar>
    </Section>
  )
}

export default Navigation