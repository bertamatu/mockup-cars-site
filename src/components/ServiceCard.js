import React from "react";
import styled from "styled-components";
import data from "../data.json";

const ServiceCard = () => {
  const services = data.services;
  return (
    <ServicesContainer>
      {services.map((item) => {
        return (
          <ServiceCards>
            <img src={item.icon} alt="icon" />
            <h5 key={item.id}>{item.title}</h5>
            <p key={item.id}>{item.text}</p>
          </ServiceCards>
        );
      })}
    </ServicesContainer>
  );
};

export default ServiceCard;

const ServicesContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem;
`;

const ServiceCards = styled.section`
  flex-grow: 1;
  width: 15;
  background: white;
  /* width: 15vw; */
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  flex-wrap: wrap;
  flex: 4 1 20vw;
`;
