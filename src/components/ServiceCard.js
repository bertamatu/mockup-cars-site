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
            <img
              style={{ height: "3rem", paddingBottom: "1rem" }}
              src={item.icon}
              alt="icon"
            />
            <h5 style={{ marginTop: "auto" }} key={item.id}>
              {item.title}
            </h5>
            <p key={item.id}>{item.text}</p>
          </ServiceCards>
        );
      })}
    </ServicesContainer>
  );
};

export default ServiceCard;

const ServicesContainer = styled.section`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5rem;
`;
const ServiceCards = styled.section`
  width: 100%;
  flex-basis: 20%;
  background: white;
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 3rem;
`;
