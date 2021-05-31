import styled from "styled-components";
import { Link } from "react-router-dom";

export const OutterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  margin: 30px 0;

  position: relative;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #eef5db;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);

  border-radius: 5px;
  padding: 15px 20px;
  margin-right: 5px;

  overflow: hidden;
  z-index: 1;

  & * {
    color: #e7e7e1;
    z-index: 10;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: auto;
`;

export const BookTitle = styled(Link)`
  font-size: 27px;
  font-weight: bold;
  font-family: "Playfair Display";

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  color: #2a2b26;
  margin-bottom: 5px;
`;

export const BookAuthor = styled.h3`
  font-family: "Roboto";
  font-style: italic;
  font-weight: normal;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  color: #74776d;
`;

export const BookChapter = styled.p`
  display: flex;
  align-items: center;

  margin-top: auto;
  font-size: 10px;

  color: #2a2b26;
`;

export const CurrentChapter = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.bookAuthorsColor};
  margin: 0 2px;
`;

export const BookCover = styled.img`
  font-weight: bold;

  border-radius: 5px;

  max-width: 30%;

  position: absolute;
  top: -20%;
  z-index: 100;

  @media screen and (min-width: 376px) {
    max-width: 20%;
    top: -10%;
  }

  @media screen and (min-width: 512px) {
    max-width: 10%;
    top: -5%;
  }
`;

export const ChapterIcon = styled.img``;
