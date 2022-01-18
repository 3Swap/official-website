import React from 'react';
import { useDispatch } from 'react-redux';
import { Dart, ProductBg, ProductBg_ } from '../../../assets';
import { Button, Image } from '../../../components';
import { ProductDataTwo } from '../../../data/Product.data';
import { openModal } from '../../../redux/toggleSlice';
// import { BrandContainer } from '../../../styles/about/About.styled';
import {
  InfoSection,
  ProductConent,
  ProductContainer,
  ProductDetails,
  ProductHeading,
  ProductLogo,
  ProductSectionWrapper,
  ImageWrapper,
  InfoSectionWrapper
  // SupportedBy
} from '../../../styles/products/Products.styled';
import { SectionPadding, SectionWrapper } from '../../../styles/section/Section.styled';

import { Title } from '../../../utility';
import { Column, Container, Heading, NavLink, Row, Subheading } from '../../../utility/GlobalStyle';

const Product = props => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <ProductSectionWrapper id="feature">
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
                  {<product.icon className="icon" />}
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
              {ProductDataTwo.title}
            </Title>
            <Heading>{ProductDataTwo.subheading}</Heading>
            <Subheading>{ProductDataTwo.description}</Subheading>
            <NavLink to="/app">
              <Button
                label="Try Demo"
                bgColor="var(--bg-two)"
                textColor="var(--text-color)"
                hoverBg="var(--text-color)"
                hoverColor="var(--bg-one)"
              />
            </NavLink>
            <ImageWrapper>
              <Image img={ProductDataTwo.img} alt="countdown" />
              <Image img={ProductDataTwo.img} alt="countdown" />
            </ImageWrapper>
          </InfoSection>
        </Container>
      </SectionWrapper>
      <SectionWrapper bg="#fff" textColor="var(--bg-one)" id="ico">
        <InfoSectionWrapper>
          <Container>
            <Row>
              <Column flex="0.7">
                <SectionPadding className="infosection">
                  <Title as="h1" size="sm" textColor="var(--bg-one)" bold>
                    <span>Participate</span> in our sales &amp; token distribution.
                  </Title>
                  <Subheading as="p" className="sub">
                    The 3Swap native token (SAP) can be purchased directly on our platform after which the purchased
                    tokens would be locked and be released at intervals (this is to imbue value).
                    <ul>
                      <li>
                        There is a two-month cliff from the moment the sale ends and subsequent one-month cliffs after
                        that.
                      </li>
                      <li>
                        5% of the purchased tokens would be released during these intervals which would last for a year.
                        At the end of the year, buyers would be able to withdraw their entire locked tokens.
                      </li>
                    </ul>
                  </Subheading>
                  <Button
                    label="Buy Now"
                    bgColor="var(--bg-two)"
                    textColor="var(--text-color)"
                    hoverBg="var(--text-color)"
                    hoverColor="var(--bg-one)"
                    onClick={handleOpenModal}
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
      {/* <SectionWrapper bg="var(--bg-one)">
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
      </SectionWrapper> */}
    </>
  );
};

export default Product;
