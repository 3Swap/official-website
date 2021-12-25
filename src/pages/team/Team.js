import React from 'react';
import { Title } from '../../utility';
import { SectionWrapper } from '../../styles/section/Section.styled';
import { Container, Heading, Subheading } from '../../utility/GlobalStyle';
import {
  Icon,
  SectionTeamContainer,
  SocialIcon,
  TeamContainer,
  TeamMeber,
  TeamMeberInfo,
} from '../../styles/team/Team.styled';
import { FiLinkedin, FiTwitter, FiGithub } from '../../utility';

const Team = (props) => {
  return (
    <>
      <SectionWrapper bg="var(--bg-three)">
        <Container mxWidth="lg">
          <SectionTeamContainer>
            <Title as="h1" bold uppercase>
              TEAM
            </Title>
            <TeamContainer>
              {props.team.map((user, i) => (
                <TeamMeber bg={user.pics} key={i}>
                  <SocialIcon>
                    {user.socialLink.twitter && (
                      <Icon href={user.socialLink.twitter} target="_blank">
                        <FiTwitter />
                      </Icon>
                    )}
                    {user.socialLink.linkedln && (
                      <Icon href={user.socialLink.linkedln} target="_blank">
                        <FiLinkedin />
                      </Icon>
                    )}
                    {user.socialLink.github && (
                      <Icon href={user.socialLink.github} target="_blank">
                        <FiGithub />
                      </Icon>
                    )}
                  </SocialIcon>
                  <TeamMeberInfo>
                    <Heading>{user.name}</Heading>
                    <Subheading>{user.position}</Subheading>
                  </TeamMeberInfo>
                </TeamMeber>
              ))}
            </TeamContainer>
          </SectionTeamContainer>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Team;
