import styled from "styled-components";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: var(--top-distance) 0 0;
`;

export const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 15px;

  margin-top: 40px;
`;

export const LoadMoreButton = styled.button`
  margin: 40px auto;
  padding: 15px;
  width: 50%;

  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ theme }) => theme.primaryColorButton};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.textColorButton};

  &:hover {
    background-color: ${({ theme }) => theme.lighterPrimaryColorButton};
  }

  &:focus {
    background-color: ${({ theme }) => theme.darkerPrimaryColorButton};
  }
`;
