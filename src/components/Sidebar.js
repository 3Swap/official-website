import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarBtn
} from '../styles/sidebar/Sidebar.styled';
import { Button } from './index';
import { NavLinks } from '../data/Navlink.data';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NavLinks.map(({ label, path }, i) => (
            <SidebarLink to={path} onClick={toggle} key={i}>
              {label}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtn to="/connect">
            <Button
              bgColor="var(--bg-two)"
              textColor="var(--text-color)"
              hoverBg="var(--text-color)"
              hoverColor="var(--bg-one)"
              label="Connect Wallet"
            />
          </SidebarBtn>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
