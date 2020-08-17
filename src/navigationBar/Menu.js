import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <nav>
      <MenuLink href="#">доставка і розмитнення</MenuLink>
      <MenuLink href="#">аукціон</MenuLink>
      <MenuLink href="#">автомобілі в Україні</MenuLink>
      <MenuLink href="#">кредит</MenuLink>
      <MenuLink href="#">про компанію</MenuLink>
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
  /* font: SemiBold 16px/25px Open Sans; */
  margin-right: 1rem;
  color: gray;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0;
  &:hover {
    border-bottom: 3px solid red;
    padding-bottom: 0.3rem;
  }
`;
