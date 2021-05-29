import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: var(--top-distance) var(--horizontal-distance) 0;
`;

export const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 15px;

  margin-top: 40px;
`;

export const Book = styled(Link)``;

export const BookCover = styled.img`
  max-width: 100%;
  height: 150px;
  display: block;

  border-radius: 5px;

  object-fit: cover;
`;

export const BookTitle = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.bookInfoColor};
`;

export const BookAuthor = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.bookInfoColor};
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
