import styled from "styled-components";
import { Link } from "react-router-dom";

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

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BookAuthor = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.bookInfoColor};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
