import React from "react";
import BckgImage from "../assets/images/backgrounds/HomeSectionBackground.png";
import styled from "styled-components";

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <ParagraphHeader>
        Вигідний шлях покупки якісного авто з США
      </ParagraphHeader>
      <TextLine>Міжнародна компанія відтепер в Україні</TextLine>
      <TextParagraph>
        Найширший вибір автомобілів в наявності, а також авто у дорозі і
        пропозицій на аукціонах. Страхування перевезень. Кредитування навіть під
        замовлення.
      </TextParagraph>
    </HomeContentContainer>
  );
};

export default HomeContent;

const HomeContentContainer = styled.section`
  background-image: url(${BckgImage});
  width: 100vw;
  height: 60vh;
  margin-top: 0.4rem;
  padding: 5rem;
`;

const ParagraphHeader = styled.p`
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #2d3178;
  width: 15vw;
  padding: 0;
`;

const TextLine = styled.p`
  color: #2d3178;
  font-size: 0.7rem;
  margin-top: -1rem;
  font-weight: 500;
`;

const TextParagraph = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  width: 20vw;
  line-height: 1.7;
`;
