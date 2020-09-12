import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import Logo from '../../logo';
import Input from '../../input';
import Button from '../../button';
import Dropdown from '../../dropdown';
import {flexCenter} from '../../../styles/style';
import Question from '../../question';
import {InputContext} from '../../../context/inputContext';
import AsyncStorage from '@react-native-community/async-storage';

const StyledViewCenter = styled.View`
  flex: 1;
`;
const StyledHeader = styled.View`
  flex: 1.3;
`;
const StyledMain = styled.View`
  flex: 7;
`;
const StyledMainTitleView = styled.View`
  ${flexCenter}
  width:100%;
`;
const StyledMainTitle = styled.Text`
  font-family: Montserrat-Medium;
  font-size: 25px;
`;
export default function Home({navigation}) {
  storeData([]);
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useContext(InputContext);
  console.warn('val: ', inputValue);
  storeData();
  return (
    <StyledViewCenter>
      <StyledHeader>
        <Logo />
      </StyledHeader>
      <StyledMain>
        <StyledMainTitleView>
          <StyledMainTitle>Gününü planla !</StyledMainTitle>
        </StyledMainTitleView>
        <Question question={'Adınız ?'} />
        <Input type="name" onChangeName={(e) => setName(e)} />
        <Question question={'Yaşadığınız şehir ?'} />
        <Dropdown title="Şehir şeç" name="Sehir" />
        <Question question={'Yaşadığınız ilçe ?'} />
        <Dropdown title="İlçe seç" name="Ilce" />
        <Button onPress={() => navigation.navigate('NamazSure')} />
      </StyledMain>
    </StyledViewCenter>
  );
}
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@selectbox', jsonValue);
    await AsyncStorage.setItem('@checkBox', jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};
