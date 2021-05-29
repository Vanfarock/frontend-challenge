import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexContainer = styled.div`
  flex: 1;
`;

export default function FlexComponent({ Component, ...other}) {
  return (
    <FlexContainer>
      <Component {...other} />
    </FlexContainer>
  );
}

FlexComponent.propTypes = {
  Component: PropTypes.func.isRequired,
}