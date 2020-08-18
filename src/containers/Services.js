import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/backgrounds/ServicesSectionBackground.png";
import ServicesBanner from "../components/banners/ServiceBanner";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <ServicesContainer id="about_company">
      <ServicesBanner />
      <ServicesTopic>
        <h2>Вибір, безпека, вигода, швидкість </h2>
        <h5>Наші послуги</h5>
      </ServicesTopic>
      <ServiceCard />
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.section`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const ServicesTopic = styled.p`
  color: white;
  padding: 5rem;
  line-height: 1rem;
`;
