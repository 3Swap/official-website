import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { LinkRouter, LinkScroll } from '../../utility';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: var(--bg-one);
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.8rem;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 70px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 300ms ease-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: var(--bg-two);
    transition: all 300ms ease-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const SidebarBtn = styled(LinkRouter)``;
