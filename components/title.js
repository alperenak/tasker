import React from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';

const StyledTitleContainer = styled.View`
  ${flexCenter}
  width:100%;
  height: 100px;
`;
const StyledTitle = styled.Text`
  margin-left: 75px;
  padding: 0 15px;
  font-family: Montserrat-Regular;
  font-size: 22px;
`;

export default function Title({title}) {
  return (
    <StyledTitleContainer>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleContainer>
  );
}
