import React from 'react';
import styled from 'styled-components/native';

const StyledCheck = styled.View``;
const StyledCheckImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export default function Check({isActive = false}) {
  return (
    <StyledCheck>
      <StyledCheckImage
        source={
          isActive
            ? require('../assets/Image/checked.png')
            : require('../assets/Image/empty.png')
        }
      />
    </StyledCheck>
  );
}
