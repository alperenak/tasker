import {LogBox} from 'react-native';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';
const StyledLogoView = styled.View`
  ${flexCenter}
  width:100%;
  height: 100px;
`;

const StyledLogo = styled.Image``;

export default function Logo() {
  return (
    <StyledLogoView>
      <StyledLogo source={require('../assets/Image/logo.png')}></StyledLogo>
    </StyledLogoView>
  );
}
