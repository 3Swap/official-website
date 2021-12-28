import React from 'react';
import { About, Tokenomics, Product, Team, Roadmap } from './index';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Section from '../../components/Section';
import { Aboutus } from '../../data';
import { FooterData } from '../../data/Footer.data';
import { HeroSectionData } from '../../data/HeroSection';
import { ProductData } from '../../data/Product.data';
import { TeamData } from '../../data/Team.data';

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
