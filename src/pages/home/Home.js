import React, { useState } from 'react';
import { About, Tokenomics, Product, Team } from './index';

import { Footer, Sidebar, Navbar, Section, Roadmap } from '../../components';

import { Aboutus, FooterData, HeroSectionData, ProductData, RoadmapData, TeamData } from '../../data';

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
      <Roadmap {...RoadmapData} />
      <Product {...ProductData} />
      <Team {...TeamData} />
      <Footer {...FooterData} />
    </>
  );
};

export default Home;
