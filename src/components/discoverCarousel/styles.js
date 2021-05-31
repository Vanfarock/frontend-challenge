import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  background-color: #00173d;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);

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

  width: 100%;
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

  color: white;
  margin-bottom: 5px;
`;

export const BookAuthor = styled.h3`
  font-style: italic;
  font-weight: normal;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const BookStats = styled.p`
  display: flex;
  align-items: center;

  margin-top: auto;
  font-size: 10px;
`;

export const ReadNow = styled.span`
  font-size: 10px;
`;

export const BookCover = styled.img`
  font-weight: bold;

  border-radius: 5px;

  max-width: 60%;
  margin-left: auto;
`;

export const StatsIcon = styled.img``;
