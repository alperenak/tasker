import React from 'react';
import styled from 'styled-components/native';

const StyledDownView = styled.View`
  position: absolute;
  right: 15px;
`;

const StyledDownImage = styled.Image`
  width: 20px;
  height: 20px;
`;
export default function Down() {
  return (
    <StyledDownView>
      <StyledDownImage source={require('../assets/Image/DropdownDown.png')} />
    </StyledDownView>
  );
}
