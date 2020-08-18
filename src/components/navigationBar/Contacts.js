import React from "react";
import TriangleIcon from "../../assets/svg/navBarIconsContact/Triangle.svg";
import PhoneIcon from "../../assets/svg/navBarIconsContact/Phone.svg";
import PhoneArrowIcon from "../../assets/svg/navBarIconsContact/PhoneArrow.svg";
import styled from "styled-components";

const Contacts = () => {
  return (
    <ContactsContainer>
      <City>Київ</City>
      <IconTriangle src={TriangleIcon} alt="contacts" />
      <IconPhone src={PhoneIcon} alt="phone-contacts" />
      <PhoneNumber href="tel:380-95-829-5001">+ 380 95 829 5001</PhoneNumber>
      <VerticalLine></VerticalLine>
      <IconPhoneArrow src={PhoneArrowIcon} alt="phone-contacts" />
      <ContactText>зворотний дзвінок</ContactText>
    </ContactsContainer>
  );
};

export default Contacts;

const ContactsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.5rem;
`;

const City = styled.p`
  text-align: right;
  font: Regular 16px/20px Open Sans;
  color: #000000;
  font-size: 0.7rem;
`;

const IconTriangle = styled.img`
  padding: 0 0.5rem 0 0.2rem;
`;
const IconPhone = styled.img`
  height: 0.85rem;
`;
const PhoneNumber = styled.a`
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  color: #2d3178;
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: 0.2rem;
`;

const VerticalLine = styled.div`
  background: lightgray 0% 0% no-repeat padding-box;
  width: 1.5px;
  height: 2rem;
  margin: 0 1rem;
`;

const IconPhoneArrow = styled.img`
  height: 1.3rem;
`;

const ContactText = styled.p`
  text-align: left;
  font: Regular 16px/25px Open Sans;
  letter-spacing: 0px;
  color: #f55448;
  font-size: 0.8rem;
  padding-left: 0.5rem;
`;
