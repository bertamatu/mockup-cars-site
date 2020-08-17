import React from "react";
import styled from "styled-components";
import HomeBanner from "../banners/HomeBanner";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBanner />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  height: 100vh;
`;
