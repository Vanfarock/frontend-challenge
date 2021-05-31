import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: normal;

  color: ${({ theme }) => theme.bookTitleColor};
  margin-bottom: 15px;
`;

export const SectionViewMore = styled(Link)`
  color: ${({ theme }) => theme.linkDefaultColor};
`;
