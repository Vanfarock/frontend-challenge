import styled from "styled-components";

const DefaultBookCover = styled.div`
  background-color: ${({ theme }) => theme.navBackgroundColor};
  text-align: center;
  line-height: 130%;
  padding: 60px 5px;

  color: ${({ theme }) => theme.bookInfoColor};
  border: 1px solid ${({ theme }) => theme.bookThumbBorder};
  border-radius: 5px;
`;

export default DefaultBookCover;
