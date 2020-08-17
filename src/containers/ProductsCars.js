import React from "react";
import styled from "styled-components";
import CarCard from "../components/CarCard";

const ProductsCars = () => {
  return (
    <CarsContainer id="auction">
      <TopOffersText>Топ пропозицій</TopOffersText>
      <CarCard />
      <ShowAllButton>Показать все</ShowAllButton>
    </CarsContainer>
  );
};

export default ProductsCars;

const CarsContainer = styled.section`
  min-height: 100vh;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  text-align: center;
`;

const TopOffersText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 900;
  text-align: left;
  padding: 0 5rem;
`;
const ShowAllButton = styled.button`
  background: #f55448 0% 0% no-repeat padding-box;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
