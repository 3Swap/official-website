import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --bg-one:#060e14;
    --bg-two:#6e00ff;
    --bg-three:#0b131a;
    --bg-four:#162028;
    --subheading-color:#060e14;
    --text-color:#fff;
    --font-sm:12.75px;
    --font-md:24px;
    --font-bg:4rem;
    --font-mb:16px;
}
html,body{
    background: radial-gradient(19.57% 100% at 6.55% 9.79%, rgba(0, 115, 180, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
linear-gradient(0deg, #0b131a, #060E14);
scroll-behavior: smooth;
    color:#fff;
    font-size:16px;
    font-family: 'Poppins', sans-serif;
}
img{
    max-width: 100%;
    -khtml-user-select:none;
    -o-user-select:none;
    -moz-user-select:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
    user-select:none;
    outline:none;
    border:none;
}
a{
  text-decoration:none;
}
`;
export const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;
export const SectionContainer = styled.div`
  padding: 80px 0px;
`;
export const Container = styled.div`
  width: 100%;
  max-width: ${props =>
    props.mxWidth === 'sm' ? '600px' : props.mxWidth === 'md' ? '800px' : props.mxWidth === 'lg' ? '1000px' : '1200px'};
  margin-left: auto;
  margin-right: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex || '1'};
`;

export const Title = styled.div`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
  color: ${({ textColor }) => textColor || 'var(--text-color)'};
  font-size: ${props =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '40px'};
`;
export const Heading = styled.div`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ textColor }) => textColor || ''};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
  font-size: ${props =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '16px'};
`;
export const Subheading = styled.div`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'capitalize')};
  font-size: ${props =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '16px'};
  line-height: 21px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const Button = styled.button`
  background: ${({ bgColor }) => bgColor || ''};
  color: ${({ textColor }) => textColor || 'var(--bg-one)'};
  margin-right: 10px;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  font-weight: 500;
  transition: all 300ms ease-out;
  > .icon {
    font-size: 24px;
    padding-right: 5px;
  }

  &:hover {
    transition: all 300ms ease-out;
    background: ${({ hoverBg }) => hoverBg || ''};
    color: ${({ hoverColor }) => hoverColor || 'var(--bg-one)'};
  }
`;
export const SectionLink = styled.a``;
export const NavLink = styled(Link)``;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
export const ModalWrapper = styled.div`
  width: 100%;
  max-width: ${props =>
    props.mxWidth === 'sm' ? '400px' : props.mxWidth === 'md' ? '600px' : props.mxWidth === 'lg' ? '800px' : '1000px'};
  margin-left: auto;
  margin-right: auto;
  background: #0b131a;
  color: #fff;
  position: relative;
  z-index: 999;
  padding: 20px 30px;
  border-radius: 10px;

  button {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    font-size: 16px;
    padding: 15px;
    margin-bottom: 30px;
  }
`;
export default GlobalStyle;
