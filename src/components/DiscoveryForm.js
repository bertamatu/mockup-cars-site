import React from "react";
import styled from "styled-components";
// import ReactSlider from "react-slider";

const DiscoveryForm = () => {
  return (
    <FormContainer>
      <FormTitle>
        Цікавлять можливі варіанти? Ми знайдемо для вас найкращі пропозиції!
      </FormTitle>
      <FormInput type="text" placeholder="Ваше ім'я" />
      <FormInput type="text" placeholder="Ваш номер телефону" />
      <SelectOption>
        <option disabled selected>
          Bиберіть Тип кузова
        </option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </SelectOption>
      <PriceRange>$6 000 - $10 000</PriceRange>
      <RangeInput type="range" min="6000" max="70000" value="1000" />
      <SliderText>
        <p>$6 000</p>
        <SliderTitle>Бюджет</SliderTitle>
        <p>$70 000</p>
      </SliderText>

      <FormButton>
        <CapitalLetter>з</CapitalLetter>амовити підбір
      </FormButton>
    </FormContainer>
  );
};

export default DiscoveryForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  width: 15vw;
  margin-top: -2rem;
  padding: 2rem;
  color: #2d3178;
  -webkit-box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.38);
`;
const FormTitle = styled.p`
  color: #2d3178;
  font-size: 0.8rem;
  font-weight: 800;
`;
const FormInput = styled.input`
  width: 92%;
  margin-bottom: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5rem;
  &::-webkit-input-placeholder {
    color: #8f8f8f;
    font-size: 0.8rem;
  }
`;
const SelectOption = styled.select`
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5rem;
  color: #8f8f8f;
  font-size: 0.8rem;
`;
const PriceRange = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
`;
const FormButton = styled.button`
  background: #f55448 0% 0% no-repeat padding-box;
  color: white;
  padding: 0.6rem 0.8rem;
  border: none;
  border-radius: 5px;
  margin: 1rem 0;
`;
const CapitalLetter = styled.span`
  text-transform: uppercase;
`;
const RangeInput = styled.input`
  width: 100%;
`;
const SliderText = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: gray;
  font-size: 0.7rem;
  font-weight: 600;
`;

const SliderTitle = styled.p`
  color: #2d3178;
  font-weight: 800;
  padding-top: 0.3rem;
`;
