import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: normal;

  color: ${({ theme }) => theme.bookTitleColor};
  margin-bottom: 15px;
`;
