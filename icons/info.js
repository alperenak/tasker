import React from 'react';
import styled from 'styled-components/native';

const StyledInfo = styled.View``;
const StyledInfoImage = styled.Image`
  width: 18px;
  height: 18px;
`;

export default function Info() {
  return (
    <StyledInfo>
      <StyledInfoImage source={require('../assets/Image/InfoCircle.png')} />
    </StyledInfo>
  );
}
