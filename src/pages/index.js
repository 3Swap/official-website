import React from 'react';
import Navbar from '../components/Navbar';
import { Aboutus } from '../data';

import About from './about/About';
import HeroSection from './herosection/HeroSection';
import Tokenomics from './tokenomics/Tokenomics';
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About {...Aboutus} />
      <Tokenomics />
    </>
  );
};

export default Home;
