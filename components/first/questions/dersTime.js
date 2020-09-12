import React, {useContext} from 'react';
import styled from 'styled-components/native';
import Header from './header';
import Question from '../../question';
import Input from '../../input';
import Button from '../../button';
import {InputContext} from '../../../context/inputContext';

const StyledDersTimeContainer = styled.View`
  flex: 1;
`;
const StyledDersName = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 20px;
  margin: 20px;
`;
const StyledDersTimeMain = styled.View`
  align-items: center;
  flex: 7;
`;
export default function DersTime({navigation}) {
  const [inputValue, setInputValue] = useContext(InputContext);
  console.log(inputValue);
  return (
    <StyledDersTimeContainer>
      <Header
        title="Dersler ne zaman 
başlar ve biter ?"
        onPress={() => navigation.goBack()}
      />
      <StyledDersTimeMain>
        <StyledDersName>Sabah dersleri</StyledDersName>
        <Input name="sabahDersleri" />
        <StyledDersName>Akşam dersleri</StyledDersName>
        <Input name="aksamDersleri" />
        <Button onPress={() => navigation.navigate('NobetGunleri')} />
      </StyledDersTimeMain>
    </StyledDersTimeContainer>
  );
}
