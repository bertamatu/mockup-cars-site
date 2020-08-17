import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavigationBar>
      <Logo />
      <Menu />
    </NavigationBar>
  );
};

export default NavBar;

const NavigationBar = styled.header`
  margin: 0 3rem;
`;
