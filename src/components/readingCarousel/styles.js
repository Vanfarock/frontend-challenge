import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;

  background-color: #eef5db;
  border-radius: 5px;
  padding: 15px 20px;
  margin-right: 5px;

  position: relative;
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

export const BookTitle = styled.h1`
  font-size: 27px;
  font-weight: bold;
  font-family: "Playfair Display";

  text-overflow: ellipsis;
  white-space: nowrap;

  color: #2a2b26;
  margin-bottom: 5px;
`;

export const BookAuthor = styled.h3`
  font-family: "Roboto";
  font-style: italic;
  font-weight: normal;

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

  max-width: 60%;
`;

export const ChapterIcon = styled.img``;
