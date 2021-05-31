import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0 var(--horizontal-distance) 20px;
  width: 100%;
`;

export const UserGreetings = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.bookTitleColor};
`;

export const UserName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.bookAuthorsColor};
`;
