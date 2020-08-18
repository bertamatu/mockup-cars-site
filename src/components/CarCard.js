import React from "react";
import styled from "styled-components";
import data from "../data.json";

const CarCard = () => {
  const cars = data.cars;
  return (
    <CarsCardsContainer>
      {cars.map((car) => {
        return (
          <CarsCard>
            <img style={{ width: "100%" }} src={car.image} alt="car" />
            <h3
              style={{ padding: "1.5rem 1rem", margin: 0, textAlign: "left" }}
            >
              {car.model}
            </h3>
            <PriceYearSection>
              <CarPrice>
                {car.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </CarPrice>
              <CarYear>
                <CarYear>{car.year}</CarYear>
              </CarYear>
            </PriceYearSection>
            <HorizontalLine></HorizontalLine>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <SectionInfo1>
                {car.fuel}
                <br />
                {car.gearbox}
                <br />
                {car.drivenWheels} <br />
                {car.engineCapacity} <br />
                {car.kilometrage}
              </SectionInfo1>
              <SectionInfo2>
                <section>
                  <InfoLabel>Город:</InfoLabel>
                  <InfoValue>{car.location}</InfoValue>
                </section>
                <section>
                  <InfoLabel> Дата торгов:</InfoLabel>
                  <InfoValue>{car.tradeDate}</InfoValue>
                </section>
              </SectionInfo2>
            </section>
            <CarButton>
              <CapitalLetter>п</CapitalLetter>одробнee
            </CarButton>
          </CarsCard>
        );
      })}
    </CarsCardsContainer>
  );
};

export default CarCard;

const CarsCardsContainer = styled.section`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 5rem;
`;
const CarsCard = styled.section`
  flex-basis: 23%;
  background: white;
  text-align: left;
  margin-bottom: 3rem;
  text-align: center;
`;
const PriceYearSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: -2.2rem;
  margin-bottom: -1rem;
`;
const CarPrice = styled.p`
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #2e3179;
  font-weight: 600;
`;
const CarYear = styled.p`
  font-weight: 700;
`;
const HorizontalLine = styled.div`
  border: 1px solid #d5d5d5;
  margin: 0 1rem;
`;
const SectionInfo1 = styled.section`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: left;
`;
const SectionInfo2 = styled.section`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.9;
  text-align: left;
`;
const InfoLabel = styled.p`
  color: #8f8f8f;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;
const InfoValue = styled.p`
  margin: 0;
  padding: 0;
`;
const CarButton = styled.button`
  cursor: pointer;
  border: 1px solid #2d3178;
  border-radius: 5px;
  padding: 0.7rem 2rem;
  background: transparent;
  color: #2d3178;
  margin-bottom: 1.5rem;
`;
const CapitalLetter = styled.span`
  text-transform: uppercase;
`;
