import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* position: relative; */

  width: 100%;
  flex: 1;
  padding: var(--top-distance) var(--horizontal-distance) 0;

  & * {
    z-index: 10;
  }
`;

export const BookCover = styled.img`
  border-radius: 5px;

  max-width: 40%;

  margin: 0 auto;
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
  flex-direction: column;
  justify-content: space-around;

  background: ${({ theme }) => theme.navBackgroundColor};
  border-radius: 2px;

  box-shadow: 3px 3px 23px ${({ theme }) => theme.boxShadow};

  padding: 20px 10px;

  position: fixed;
  bottom: 55px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 320px) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding: 3px 0;

  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;

  @media screen and (min-width: 320px) {
    &:not(:last-of-type) {
      border-right: 1px solid ${({ theme }) => theme.defaultColorNav};
    }
    padding: 0 10px;
  }
`;

export const MenuLabel = styled.h3`
  flex: 1;
  color: ${({ theme }) => theme.darkerColorNav};
`;

export const AbstractBackground = styled.div`
  background-color: ${({ theme }) => theme.foregroundColor};

  width: 100%;
  height: 220px;
  border-radius: 0 0 30% 0;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BackIcon = styled.img`
  position: absolute;

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
  padding: 0 10px;
`;
