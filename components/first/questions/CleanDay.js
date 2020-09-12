import React from 'react';
import styled from 'styled-components/native';
import Header from './header';
import Button from '../../button';
import CheckBox from '../../checkBox';
const StyledCleanDay = styled.View`
  flex: 1;
`;
const StyledCleanDayMain = styled.View`
  flex: 7;
`;
const Days = [
  'pazartesi',
  'salı',
  'çarşamba',
  'perşembe',
  'cuma',
  'cumartesi',
  'pazar',
];

export default function CleanDay({navigation}) {
  return (
    <StyledCleanDay>
      <Header
        onPress={() => navigation.goBack()}
        title="Genel temizliğin yapıldığı
        günler ?"
      />
      <StyledCleanDayMain>
        {Days.map((item) => {
          return <CheckBox title={item} />;
        })}
        <Button onPress={() => navigation.navigate('SomeQuestion')} />
      </StyledCleanDayMain>
    </StyledCleanDay>
  );
}
