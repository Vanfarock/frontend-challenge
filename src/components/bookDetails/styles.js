import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 100%;
  padding: 0 var(--horizontal-distance);
`;

export const BookCover = styled.img`
  border-radius: 5px;

  max-width: 40%;

  margin: 84px auto 0;
`;

export const BookTitle = styled.h1`
  color: ${({ theme }) => theme.bookTitleColor};
  line-height: 28px;
  font-size: 24px;

  margin-top: 32px;
`;

export const BookAuthors = styled.h4`
  color: ${({ theme }) => theme.bookAuthorsColor};
  font-size: 16px;

  margin-top: 7px;
`;

export const BookDescription = styled.p`
  color: ${({ theme }) => theme.bookDescriptionColor};
  line-height: 25px;

  margin-top: 10px;
`;

export const BookMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background: ${({ theme }) => theme.navBackgroundColor};
  border-radius: 2px;

  box-shadow: 3px 3px 23px ${({ theme }) => theme.boxShadow};

  padding: 10px;

  position: sticky;
  bottom: 55px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuLabel = styled.h3`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.darkerColorNav};

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.defaultColorNav};
  }
`;

export const BackIcon = styled.img`
  position: absolute;

  margin-top: var(--top-distance);

  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  transition: all 0.3s ease;

  color: ${({ theme }) => theme.iconColor};

  &:hover {
    background-color: ${({ theme }) => theme.iconHoverBackgroundColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.iconFocusBackgroundColor};
  }
`;

export const Icon = styled.img`
  padding: 10px;
`;
