import React, { useState } from 'react';
import DropDown from './components/DropDown/DropDown';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Toolbar from '@mui/material/Toolbar';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import TermsService from './pages/TermsService';

function App(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <>
      <GlobalStyle />
      <Toolbar id="back-to-top-anchor" style={{ background: '#ea5e35', minHeight: '40px', lineHeight: '40px', fontFamily: 'Oakes Grotesk', justifyContent: 'center', color: '#000000' }} > Order Your E-Stallion Now </Toolbar>
      <Header toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/Contact" element={<Contact></Contact>}></Route>
        <Route exact path="/About" element={<About></About>}></Route>
        <Route exact path="/TermsService" element={<TermsService></TermsService>}></Route>
      </Routes>
      <DropDown isOpen={isOpen} toggle={toggle} />

      <Footer />

      <ScrollTop {...props}>
        <Fab color="#333" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
