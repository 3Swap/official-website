import React from 'react';
import { ProductBg, ProductBg_ } from '../../assets';
import Image from '../../components/Image';
import {
  ProductConent,
  ProductContainer,
  ProductDetails,
  ProductHeading,
  ProductLogo,
  ProductSectionWrapper,
} from '../../styles/products/Products.styled';
import { SectionWrapper } from '../../styles/section/Section.styled';

import { Title } from '../../utility';
import { Container, Heading, Subheading } from '../../utility/GlobalStyle';

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
                  {product.icon}
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
        <Container>
          <h1>Trade anything</h1>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Product;
