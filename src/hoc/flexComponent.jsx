import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  flex: 1;
`;

export default function flexComponent(Component) {

  return (props) => {
    return (
      <FlexContainer>
        <Component {...props} />
      </FlexContainer>
    );
  };
}