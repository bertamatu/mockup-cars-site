import React from "react";
import styled from "styled-components";

const DiscoveryForm = () => {
  return (
    <FormContainer>
      <h3>
        Цікавлять можливі варіанти? Ми знайдемо для вас найкращі пропозиції!
      </h3>
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
      <h3>$6 000 - $10 000</h3>
      <div></div>

      <FormButton>
        <CapitalLetter>з</CapitalLetter>амовити підбір
      </FormButton>
    </FormContainer>
  );
};

export default DiscoveryForm;

const FormContainer = styled.form`
  background: white;
  width: 15vw;
  margin-top: -2rem;
  padding: 2rem;
  color: #2d3178;
  -webkit-box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.38);
`;

const FormInput = styled.input`
  width: 92%;
  margin-bottom: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5rem;
`;
const SelectOption = styled.select`
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5rem;
  color: gray;
`;
const FormButton = styled.button`
  background: #f55448 0% 0% no-repeat padding-box;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
`;

const CapitalLetter = styled.span`
  text-transform: uppercase;
`;
