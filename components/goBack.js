import React from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';
const StyledGoBack = styled.View`
  ${flexCenter}
  width:100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;
const StyledGoBackTouchable = styled.TouchableOpacity`
  ${flexCenter}
  width: 100%;
  height: 100%;
`;
const StyledGoBackImage = styled.Image`
  position: absolute;
  left: 25px;
  width: 50px;
  height: 50px;
`;

export default function GoBack(props) {
  return (
    <StyledGoBack>
      <StyledGoBackTouchable {...props}>
        <StyledGoBackImage source={require('../assets/Image/goBack.png')} />
      </StyledGoBackTouchable>
    </StyledGoBack>
  );
}
