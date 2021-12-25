import React from 'react';
import Section from '../../components/Section';
import { HeroSectionData } from '../../data/HeroSection';

const HeroSection = () => {
  return (
    <>
      <Section {...HeroSectionData} />
    </>
  );
};

export default HeroSection;
