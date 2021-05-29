import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  padding: 16px;
  background-color: ${(props) => props.theme.inputBackgroundColor};

  border-radius: 10px 0 0 10px;
`;

export const Input = styled.input`
  outline: none;

  width: 100%;
  padding: 15px 0;

  font-size: 16px;
  font-weight: bold;

  background-color: ${(props) => props.theme.inputBackgroundColor};
  border: none;
  border-radius: 0 10px 10px 0;
`;