import React, {useState} from 'react';
import styled from 'styled-components/native';

const StyledOption = styled.View``;
const StyledOptionImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export default function Option({isActive = true}) {
  return (
    <StyledOption>
      <StyledOptionImage
        source={
          isActive
            ? require('../assets/Image/SelectedOption.png')
            : require('../assets/Image/unSelectedOption.png')
        }
      />
    </StyledOption>
  );
}
