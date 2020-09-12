import React from 'react';
import styled from 'styled-components/native';
import Header from './header';
import CheckBox from '../../checkBox';
import Button from '../../button';
const StyledNobetGunleriContainer = styled.View`
  flex: 1;
`;
const StyledNobetGunleriMain = styled.View`
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

export default function NobetGunleri({navigation}) {
  return (
    <StyledNobetGunleriContainer>
      <Header
        title="Nöbetçi olduğunuz
günler ?"
        onPress={() => navigation.goBack()}
      />
      <StyledNobetGunleriMain>
        {Days.map((item) => {
          return <CheckBox title={item} />;
        })}
        <Button onPress={() => navigation.navigate('CleanDay')} />
      </StyledNobetGunleriMain>
    </StyledNobetGunleriContainer>
  );
}
