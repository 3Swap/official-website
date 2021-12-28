import React from 'react';
import { RoadmapWrapper } from '../../../styles/roadmap/Roadmap.styled';
import { SectionWrapper } from '../../../styles/section/Section.styled';
import { Container } from '../../../utility/GlobalStyle';

const Roadmap = () => {
  return (
    <>
      <RoadmapWrapper id="roadmap">
        <SectionWrapper>
          <Container>
            <h1>Roadmap</h1>
          </Container>
        </SectionWrapper>
      </RoadmapWrapper>
    </>
  );
};

export default Roadmap;
