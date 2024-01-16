
import styled from '@emotion/styled';
import './App.css';
import background from '../src/imgs/hero-image-wr.jpg'
import logo from './imgs/Logo.svg'
import { Box } from '@mui/material';
import Container from './components/Container';

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

function App() {
  return (
    <div className="App">
      <BoxContainer>
        <BackgroundImage src={background} />
        <Logo src={logo} />
        <Container/>
      </BoxContainer>
    </div>
  );
}

export default App;
