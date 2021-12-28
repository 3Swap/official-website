import styled from 'styled-components';
import { Button, Column } from '../../utility/GlobalStyle';
import { LinkRouter, LinkScroll } from '../../utility';
export const NavWrapper = styled.div`
  height: 60px;
  background: var(--bg-one);
  opacity: 0.85;
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  position: sticky;
  top: 30px;
  border-radius: 10px;
  margin-bottom: 40px;
  z-index: 999;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Navcontent = styled.div`
  padding: 0px 20px;

  ${Column} {
    &:nth-child(1) {
      margin-left: 30px;

      @media screen and (max-width: 768px) {
        img {
          position: relative;
          margin-top: 5px;
          left: -150px;
        }
      }
    }

    &:nth-child(2) {
      text-align: right;
      margin-right: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px) {
    .row {
      display: flex;
      width: 100%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -15px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-color);

    .icon {
      font-size: 1.8rem;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled(LinkScroll)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  height: 60px;
  transition: all 300ms ease-out;
  &.active {
    color: var(--bg-two);
    font-weight: bold;
    border-bottom: 2px solid var(--bg-two);
  }
  &:hover {
    transition: all 300ms ease-out;
    color: var(--bg-two);
  }
`;

export const NavBtn = styled.nav`
  margin-right: 30px;
  ${Button} {
    margin-top: 0px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  text-decoration: none;
`;
