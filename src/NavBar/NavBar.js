import React from "react";
import Logo from "./Logo/Logo";
import Icons from "./Icons";
import Menu from "./Menu";
import Contacts from "./Contacts";

import styled from "styled-components";

const NavBar = () => {
  return (
    <NavigationBar>
      <LogoIconsContactContainer>
        <Logo />
        <Icons />
        <Contacts />
      </LogoIconsContactContainer>
      <Menu />
    </NavigationBar>
  );
};

export default NavBar;

const NavigationBar = styled.header`
  margin: 0 5rem;
`;

const LogoIconsContactContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
