import React from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';

const StyledQuestionContainer = styled.View`
  ${flexCenter}
  width:100%;
  min-height: 50px;
  margin: ${(props) => (props.marginHor ? '20px 0' : '20px 0 0 0')};
`;

const StyledQuetionView = styled.View`
  width: 275px;
  min-height: 50px;
  justify-content: flex-start;
`;
const StyledQuetionText = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 22px;
`;

export default function Question({question, marginHor}) {
  return (
    <StyledQuestionContainer marginHor={marginHor}>
      <StyledQuetionView>
        <StyledQuetionText>{question}</StyledQuetionText>
      </StyledQuetionView>
    </StyledQuestionContainer>
  );
}
