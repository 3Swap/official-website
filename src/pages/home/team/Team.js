import React from 'react';
import { Title } from '../../../utility';
import { SectionWrapper } from '../../../styles/section/Section.styled';
import { Container, Heading, Subheading } from '../../../utility/GlobalStyle';
import {
  Icon,
  SectionTeamContainer,
  SocialIcon,
  TeamContainer,
  TeamMeber,
  TeamMeberInfo
} from '../../../styles/team/Team.styled';
import { FiLinkedin, FiTwitter, FiGithub } from '../../../utility';
import Image from '../../../components/Image';

const Team = props => {
  return (
    <>
      <SectionWrapper bg="var(--bg-three)" id="team">
        <Container mxWidth="lg">
          <SectionTeamContainer>
            <Title as="h1" bold uppercase>
              TEAM
            </Title>
            <TeamContainer>
              {props.team.map((user, i) => (
                <TeamMeber key={i}>
                  <Image
                    img="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                    alt={user.name}
                    className="teamImg"
                  />
                  <div className="team">
                    <SocialIcon>
                      {user.socialLink.twitter && (
                        <Icon href={user.socialLink.twitter} target="_blank" className="icon">
                          <FiTwitter />
                        </Icon>
                      )}
                      {user.socialLink.linkedln && (
                        <Icon href={user.socialLink.linkedln} target="_blank" className="icon">
                          <FiLinkedin />
                        </Icon>
                      )}
                      {user.socialLink.github && (
                        <Icon href={user.socialLink.github} target="_blank" className="icon">
                          <FiGithub />
                        </Icon>
                      )}
                    </SocialIcon>
                    <TeamMeberInfo>
                      <Heading>{user.name}</Heading>
                      <Subheading>{user.position}</Subheading>
                    </TeamMeberInfo>
                  </div>
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
