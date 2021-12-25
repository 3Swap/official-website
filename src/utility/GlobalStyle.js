import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --bg-one:#060e14;
    --bg-two:#b50050;
    --bg-three:#0b131a;
    --bg-four:#162028;
    --subheading-color:#060e14;
    --text-color:#fff;
    --font-sm:12.75px;
    --font-md:24px;
    --font-bg:4rem;
}
body{
    background: radial-gradient(19.57% 100% at 6.55% 9.79%, rgba(0, 115, 180, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
linear-gradient(0deg, #0b131a, #060E14);

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

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex || '1'};
`;

export const Title = styled.div`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${(props) =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '16px'};
`;
export const Heading = styled.div`
  font-size: ${(props) =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '16px'};
`;
export const Subheading = styled.div`
  font-size: ${(props) =>
    props.size === 'sm'
      ? 'var(--font-sm)'
      : props.size === 'md'
      ? 'var(--font-md)'
      : props.size === 'bg'
      ? 'var(--font-bg)'
      : '16px'};
  line-height: 21px;
`;
export const Button = styled.button`
  background: green;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

export default GlobalStyle;
