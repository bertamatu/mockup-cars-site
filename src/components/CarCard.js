import React from "react";
import styled from "styled-components";
import data from "../data.json";

const CarCard = () => {
  const cars = data.cars;
  return (
    <CarsCardsConatiner>
      {cars.map((car) => {
        console.log("IMAGECAR", car.image);
        return (
          <CarsCard>
            <img src={car.image} alt="car" />
            <p>{car.model}</p>
            <p>
              {car.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p>{car.year}</p>
          </CarsCard>
        );
      })}
    </CarsCardsConatiner>
  );
};

export default CarCard;

const CarsCardsConatiner = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem;
`;

const CarsCard = styled.section`
  background: white;
  padding: 0.5rem;
`;
