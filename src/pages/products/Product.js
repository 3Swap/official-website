import React from 'react';
import { Dart, ProductBg, ProductBg_, TimeBg, Vefi } from '../../assets';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { BrandContainer } from '../../styles/about/About.styled';
import {
  InfoSection,
  ProductConent,
  ProductContainer,
  ProductDetails,
  ProductHeading,
  ProductLogo,
  ProductSectionWrapper,
  ImageWrapper,
  InfoSectionWrapper,
  SupportedBy,
} from '../../styles/products/Products.styled';
import {
  SectionPadding,
  SectionWrapper,
} from '../../styles/section/Section.styled';

import { Title } from '../../utility';
import {
  Column,
  Container,
  Heading,
  Row,
  Subheading,
} from '../../utility/GlobalStyle';

const Product = (props) => {
  return (
    <>
      <ProductSectionWrapper>
        <Container mxWidth="lg">
          <Title as="h1" bold uppercase textColor="var(--bg-two)">
            {props.heading}
          </Title>
          <Subheading>{props.subheading}</Subheading>
          <ProductContainer>
            {props.productInfo.map((product, i) => (
              <ProductConent key={i}>
                <ProductLogo>
                  <Image img={ProductBg_} alt="image" />
                  <Image img={ProductBg} alt="image" />
                  {/* {product.icon} */}
                </ProductLogo>
                <ProductHeading>
                  <Heading as="h1" bold>
                    {product.title}
                  </Heading>
                </ProductHeading>
                <ProductDetails>
                  <Subheading as="p">{product.description}</Subheading>
                </ProductDetails>
              </ProductConent>
            ))}
          </ProductContainer>
        </Container>
      </ProductSectionWrapper>
      <SectionWrapper>
        <Container mxWidth="lg">
          <InfoSection>
            <Title as="h1" bold uppercase textColor="var(--bg-two)">
              Trade Anything
            </Title>
            <Heading>No registration, No hassle. </Heading>
            <Subheading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              molestie donec nunc vitae id metus purus, sit risus. Pellentesque
              id blandit tellus felis nulla auctor nibh. Imperdiet ultrices
              ullamcorper enim nibh at. Risus ac iaculis orci sit molestie
              interdum posuere enim sit.
            </Subheading>
            <Button label="Trade Now" />
            <ImageWrapper>
              <Image img={TimeBg} alt="countdown" />
              <Image img={TimeBg} alt="countdown" />
            </ImageWrapper>
          </InfoSection>
        </Container>
      </SectionWrapper>
      <SectionWrapper bg="#fff" textColor="var(--bg-one)">
        <InfoSectionWrapper>
          <Container>
            <Row>
              <Column flex="0.7">
                <SectionPadding>
                  <Title as="h1" size="sm" textColor="var(--bg-one)" bold>
                    <span>Participate</span> in our ICO
                  </Title>
                  <Subheading as="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ultrices netus sit quis sapien.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ultrices netus sit quis
                    sapien.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ultrices netus sit quis sapien.
                  </Subheading>
                  <Button
                    label="Buy Now"
                    bgColor="var(--bg-two)"
                    textColor="var(--text-color)"
                  />
                </SectionPadding>
              </Column>
              <Column flex="0.3">
                <Image img={Dart} alt="dart" />
              </Column>
            </Row>
          </Container>
        </InfoSectionWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Container mxWidth="md">
          <SupportedBy>
            <Heading>Supported Wallet</Heading>
            <BrandContainer>
              <Image img={Vefi} />
              <Image img={Vefi} />
              <Image img={Vefi} />
              <Image img={Vefi} />
              <Image img={Vefi} />
              <Image img={Vefi} />
            </BrandContainer>
          </SupportedBy>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Product;
