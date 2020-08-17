import React from "react";
import styled from "styled-components";
import NavBar from "../navBar/NavBar";
import HomeContent from "../components/HomeContent";
import HomeBanner from "../banners/HomeBanner";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <HomeContent />
      <HomeBanner />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  height: 100vh;
`;
