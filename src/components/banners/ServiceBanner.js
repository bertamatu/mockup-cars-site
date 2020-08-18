import React from "react";
import styled from "styled-components";
import CopartLogo from "../../assets/images/banners/servicesBanner/copart_logo.png";
import IaaiLogo from "../../assets/images/banners/servicesBanner/iaai_logo.png";
import ManheimLogo from "../../assets/images/banners/servicesBanner/manheim_logo.png";

const ServicesBanner = () => {
  return (
    <ServiceBannerContainer>
      <ServiceBannertext>
        Автомобільні аукціони США з якими ми співпрацюємо
      </ServiceBannertext>
      <LogosSection>
        <BannerLogo src={CopartLogo} alt="" />
        <BannerLogo src={IaaiLogo} alt="" />
        <BannerLogo src={ManheimLogo} alt="" />
      </LogosSection>
    </ServiceBannerContainer>
  );
};

export default ServicesBanner;

const ServiceBannerContainer = styled.section`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const ServiceBannertext = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  width: 25vw;
  padding: 3rem 5rem;
`;

const LogosSection = styled.section`
  padding: 3rem 5rem;
`;
const BannerLogo = styled.img`
  margin-right: 1.5rem;
  height: 7rem;
  cursor: pointer;
`;
