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
            <h3 style={{ padding: "1rem", margin: 0 }}>{car.model}</h3>
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
            <CarButton>подробнee</CarButton>
          </CarsCard>
        );
      })}
    </CarsCardsConatiner>
  );
};

export default CarCard;

const CarsCardsConatiner = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 0 5rem;
`;
const CarsCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  text-align: left;
  flex-grow: 1;
  width: 20vw;
`;
const PriceYearSection = styled.section`
  display: flex;
  flex-direction: row;
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
`;
const SectionInfo2 = styled.section`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.9;
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
`;
