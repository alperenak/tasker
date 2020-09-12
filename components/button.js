import React from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';

const StyledButtonView = styled.View`
  ${flexCenter}
  width:100%;
  height: 62px;
  margin-top: 40px;
`;
const StyledButton = styled.TouchableOpacity`
  ${flexCenter}
  width: 178px;
  height: 62px;
  border-radius: 15px;
  background-color: #39a0ff;
`;
const StyledButtonTitle = styled.Text`
  color: white;
  font-family: Montserrat-Bold;
  font-size: 22px;
`;
export default function Button({title = 'DEVAM ET', onPress, style}) {
  return (
    <StyledButtonView>
      <StyledButton onPress={onPress} style={style}>
        <StyledButtonTitle>{title}</StyledButtonTitle>
      </StyledButton>
    </StyledButtonView>
  );
}
