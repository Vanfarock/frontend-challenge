import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  text-align: center;

  & > h3 {
    color: ${({ theme }) => theme.defaultFontColor};
  }

  & > a {
    color: ${({ theme }) => theme.linkDefaultColor};
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h3>This page was not found</h3>
      <Link to="/">Go home</Link>
    </NotFoundContainer>
  );
};

export default NotFound;