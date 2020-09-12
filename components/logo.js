import React from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';
const StyledLogoView = styled.View`
  ${flexCenter}
  width:100%;
  height: 100px;
`;

const StyledLogoText = styled.Text`
  font-family: Montserrat-Black;
  font-size: 25px;
`;

export default function Logo() {
  return (
    <StyledLogoView>
      <StyledLogoText>TASKER</StyledLogoText>
    </StyledLogoView>
  );
}
