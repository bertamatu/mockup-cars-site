import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/images/banners/homeBanner/RoundImage.png";

const HomeBanner = () => {
  return (
    <BannerContainer>
      <Content>
        <BannerImage src={bannerImage} alt="cars-parking-lot" />
        <BannerText>
          Підбір і точний розрахунок авто з США за вашими критеріями
        </BannerText>
        <BannerButton stype="submit">Замовити розрахунок</BannerButton>
      </Content>
    </BannerContainer>
  );
};

export default HomeBanner;

const BannerContainer = styled.footer`
  background: #2e3179 0% 0% no-repeat padding-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 13rem;
  display: flex;
  align-items: center;
`;
const Content = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BannerImage = styled.img`
  height: 25vh;
`;

const BannerText = styled.p`
  width: 30vw;
  text-align: left;
  font: Bold 34px/40px Lato;
  letter-spacing: 0px;
  color: #ffffff;
  margin-left: -15rem;
`;

const BannerButton = styled.button`
  text-align: center;
  font: SemiBold 16px/36px Open Sans;
  letter-spacing: 0px;
  color: #2e3179;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
