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
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={FacebookIcon} alt="facebook" />
        </a>
      </Parallelogram>
      <Parallelogram>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={InstagramIcon} alt="instagram" />
        </a>
      </Parallelogram>
      <Parallelogram>
        <a
          href="https://telegram.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={TelegramIcon} alt="telegram" />
        </a>
      </Parallelogram>
      <Parallelogram>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={YoutubeIcon} alt="youtube" />
        </a>
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
