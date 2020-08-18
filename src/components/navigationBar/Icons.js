import React from "react";
import FacebookIcon from "../../assets/svg/navBarIconsSocial/Facebook.svg";
import InstagramIcon from "../../assets/svg/navBarIconsSocial/Instagram.svg";
import TelegramIcon from "../../assets/svg/navBarIconsSocial/Telegram.svg";
import YoutubeIcon from "../../assets/svg/navBarIconsSocial/Youtube.svg";

import styled from "styled-components";

const Icons = () => {
  return (
    <IconsMenu>
      <Parallelogram>
        <SocialIcon src={FacebookIcon} alt="facebook" />
      </Parallelogram>
      <Parallelogram>
        <SocialIcon src={InstagramIcon} alt="instagram" />
      </Parallelogram>
      <Parallelogram>
        <SocialIcon src={TelegramIcon} alt="telegram" />
      </Parallelogram>
      <Parallelogram>
        <SocialIcon src={YoutubeIcon} alt="youtube" />
      </Parallelogram>
    </IconsMenu>
  );
};

export default Icons;
const IconsMenu = styled.section`
  display: flex;
  flex-direction: row;
  margin-left: -12rem;
`;

const Parallelogram = styled.section`
  width: 2rem;
  height: 2.2rem;
  transform: skew(-30deg);
  background: #f0f0f0 0% 0% no-repeat padding-box;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled.img`
  transform: skew(30deg);
  text-align: center;
  height: 0.7rem;
`;
