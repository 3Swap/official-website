import React from 'react';
import Navbar from '../components/Navbar';
import { Aboutus } from '../data';
import { ProductData } from '../data/Product.data';

import About from './about/About';
import HeroSection from './herosection/HeroSection';
import Product from './products/Product';
import Roadmap from './roadmap/Roadmap';
import Tokenomics from './tokenomics/Tokenomics';
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About {...Aboutus} />
      <Tokenomics />
      <Roadmap />
      <Product {...ProductData} />
    </>
  );
};

export default Home;
