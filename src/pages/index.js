import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { Aboutus } from '../data';
import { FooterData } from '../data/Footer.data';
import { HeroSectionData } from '../data/HeroSection';
import { ProductData } from '../data/Product.data';
import { TeamData } from '../data/Team.data';

import About from './about/About';
import Product from './products/Product';
import Roadmap from './roadmap/Roadmap';
import Team from './team/Team';
import Tokenomics from './tokenomics/Tokenomics';
const Home = () => {
  return (
    <>
      <Navbar />
      <Section {...HeroSectionData} />
      <About {...Aboutus} />
      <Tokenomics />
      <Roadmap />
      <Product {...ProductData} />
      <Team {...TeamData} />
      <Footer {...FooterData} />
    </>
  );
};

export default Home;
