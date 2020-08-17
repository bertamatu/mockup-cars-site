import React from "react";
import CompanyLogo from "./companyLogo.svg";
import styled from "styled-components";

const Logo = () => {
  return (
    <>
      <CompanyLogoImg src={CompanyLogo} alt="cars-parking-lot" />
    </>
  );
};

export default Logo;

const CompanyLogoImg = styled.img`
  padding: 2rem 0;
  height: 1rem;
`;
