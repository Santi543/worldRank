import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import background from '../imgs/hero-image-wr.jpg'
import logo from '../imgs/Logo.svg'
import Container from '../components/Container';
import { Outlet } from 'react-router-dom';

const BackgroundImage = styled.img`
  width: 100%;
  z-index: -100;
`

const BoxContainer = styled(Box)`
  position: relative;
  top: 0px;
  left: 0px;
  height: auto;
`

const Logo = styled.img`
  position: absolute;
  top: -55px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const Layout = () => {
  return (
    <>
      <BoxContainer>
        <BackgroundImage src={background} />
        <Logo src={logo} />
      </BoxContainer>
      <Outlet/>
    </>
  )
}

export default Layout