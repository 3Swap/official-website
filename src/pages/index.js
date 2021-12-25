import React from 'react';
import Navbar from '../components/Navbar';
import { Aboutus } from '../data';

import About from './about/About';
import HeroSection from './herosection/HeroSection';
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About {...Aboutus} />
    </>
  );
};

export default Home;
