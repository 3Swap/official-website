import React from 'react';
import { FooterLogoBg } from '../assets';
import {
  FooterContainer,
  FooterLink,
  FooterLinkWrapper,
  FooterLogo,
  FooterSocialIcon,
  Link
} from '../styles/footer/Footer.styled';
import { SectionWrapper } from '../styles/section/Section.styled';
import { Icon } from '../styles/team/Team.styled';
import { Column, Container, Heading, Row, Subheading } from '../utility/GlobalStyle';
import Image from './Image';

const Footer = props => {
  return (
    <SectionWrapper>
      <Container mxWidth="lg">
        <Row>
          <FooterContainer>
            <Column flex="0.4">
              <FooterLogo>
                <Image img={FooterLogoBg} alt="footer logo" />
              </FooterLogo>
              <Subheading as="p">
                3swap is a decentralized exchange that enables users to swap between three cryptocurrency assets by
                tapping into user-defined liquidity pools.
              </Subheading>
              <FooterSocialIcon>
                {props.socialLink.map((link, i) => (
                  <Icon key={i} href={link.url} target="_blank">
                    {<link.icon />}
                  </Icon>
                ))}
              </FooterSocialIcon>
            </Column>
            <Column flex="0.6">
              <FooterLinkWrapper>
                <FooterLink>
                  <Heading as="h1" bold textColor="var(--bg-two)">
                    About
                  </Heading>
                  <Link>Contact</Link>
                  <Link>Brand</Link>
                  <Link>Blog</Link>
                  <Link>Community</Link>
                  <Link>Products</Link>
                </FooterLink>
                <FooterLink>
                  <Heading as="h1" bold textColor="var(--bg-two)">
                    Help
                  </Heading>
                  <Link>Customer Support</Link>
                  <Link>Guides</Link>
                </FooterLink>
                <FooterLink>
                  <Heading as="h1" bold textColor="var(--bg-two)">
                    Developers
                  </Heading>
                  <Link>Documentation</Link>
                  <Link>Careers</Link>
                  <Link>Github</Link>
                </FooterLink>
              </FooterLinkWrapper>
            </Column>
          </FooterContainer>
          <Subheading
            style={{
              marginTop: '40px',
              textAlign: 'center',
              width: '100%',
              fontSize: '11px',
              color: '#CECECE',
              opacity: '0.4'
            }}
          >
            &copy; 3SWAP, All Rights Reserved
          </Subheading>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
