import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <nav>
      <MenuLink href="#">доставка і розмитнення</MenuLink>
      <MenuLink href="#auction">аукціон</MenuLink>
      <MenuLink href="#auction">автомобілі в Україні</MenuLink>
      <MenuLink href="#">кредит</MenuLink>
      <MenuLink href="#about_company">про компанію</MenuLink>
      <MenuLink href="#">відгуки</MenuLink>
      <MenuLink href="#">блог</MenuLink>
      <MenuLink href="#">контакти</MenuLink>
    </nav>
  );
};

export default Menu;

const MenuLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;
  margin-right: 1rem;
  color: gray;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0;
  &:hover {
    border-bottom: 2.5px solid red;
    padding-bottom: 0.3rem;
  }
`;
