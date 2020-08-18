import React from "react";
import styled from "styled-components";
import NavBar from "../components/navigationBar/NavBar";
import HomeContent from "../components/HomeContent";
import HomeBanner from "../components/banners/HomeBanner";

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
