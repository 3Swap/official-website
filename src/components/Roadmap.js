import React from 'react';
import {
  RoadmapWrapper,
  RoadmapHeader,
  RoadmapContainer,
  RoadmapItem,
  RoadmapStage,
  RoadmapStageContent,
  RoadmapContent,
  RoadmapContentHeading,
  RoadmapMilstone
} from '../styles/roadmap/Roadmap.styled';
import { SectionWrapper } from '../styles/section/Section.styled';
import { Container, Heading, Title } from '../utility/GlobalStyle';

const Roadmap = props => {
  return (
    <>
      <RoadmapWrapper id={props.id}>
        <SectionWrapper>
          <Container>
            <RoadmapHeader>
              <Title bold>{props.heading}</Title>
            </RoadmapHeader>
            <RoadmapContainer>
              {props.events.map((event, i) => (
                <RoadmapItem bg={event.color} key={i}>
                  <RoadmapStage bg={event.color}>
                    <RoadmapStageContent>
                      <span>
                        <Heading bold>{event.slug}</Heading>
                      </span>
                    </RoadmapStageContent>
                  </RoadmapStage>
                  <RoadmapContent>
                    <RoadmapContentHeading>
                      <Heading bold textColor={event.color}>
                        {event.title}
                      </Heading>
                      {/* <Subheading>{event.date}</Subheading> */}
                    </RoadmapContentHeading>
                    <RoadmapMilstone>
                      <ul>
                        {event.description.map((info, i) => (
                          <li key={i}>{info}</li>
                        ))}
                      </ul>
                    </RoadmapMilstone>
                  </RoadmapContent>
                </RoadmapItem>
              ))}
            </RoadmapContainer>
          </Container>
        </SectionWrapper>
      </RoadmapWrapper>
    </>
  );
};

export default Roadmap;
