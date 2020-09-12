import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../../../styles/style';
import Header from './header';
import Input from '../../input';
import Button from '../../button';
import {InputContext} from '../../../context/inputContext';

const StyledNamazSureleriContainer = styled.View`
  flex: 1;
`;

const StyledNamazSureleriMain = styled.View`
  align-items: center;
`;
const StyledNamazlar = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 20px;
`;
const ScrollView = styled.ScrollView`
  flex: 7;
`;
export default function NamazSureleri({navigation}) {
  const [inputValue, setInpuValue] = useContext(InputContext);
  console.warn(inputValue);
  return (
    <StyledNamazSureleriContainer>
      <Header
        title="5 vakit namaz için harcadığınız vakitler ?"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <StyledNamazSureleriMain>
          <StyledNamazlar>Sabah namazı</StyledNamazlar>
          <Input type="short" name="sabahNamazi" />
          <StyledNamazlar>Öğle namazı</StyledNamazlar>
          <Input type="short" name="ogleNamazi" />
          <StyledNamazlar>İkindi namazı</StyledNamazlar>
          <Input type="short" name="ikindiNamazi" />
          <StyledNamazlar>Akşam namazı</StyledNamazlar>
          <Input type="short" name="aksamNamazi" />
          <StyledNamazlar>Yatsı namazı</StyledNamazlar>
          <Input type="short" name="yatsiNamazi" />
          <Button
            style={{marginBottom: 15, marginBottom: 40}}
            onPress={() => navigation.navigate('DersGunleri')}
          />
        </StyledNamazSureleriMain>
      </ScrollView>
    </StyledNamazSureleriContainer>
  );
}
