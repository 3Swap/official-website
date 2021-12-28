import React, { useState } from 'react';
import { About, Tokenomics, Product, Team, Roadmap } from './index';

import { Footer, Sidebar, Navbar, Section } from '../../components';

import { Aboutus } from '../../data';
import { FooterData } from '../../data/Footer.data';
import { HeroSectionData } from '../../data/HeroSection';
import { ProductData } from '../../data/Product.data';
import { TeamData } from '../../data/Team.data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
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
