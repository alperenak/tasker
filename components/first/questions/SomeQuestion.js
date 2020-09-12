import React from 'react';
import styled, {css} from 'styled-components/native';
import Header from './header';
import Question from '../../question';
import Input from '../../input';
import {flexCenter} from '../../../styles/style';
import Button from '../../button';

const StyledSomeQuestionContainer = styled.View`
  flex: 1;
`;
const StyledSomeQuestionMain = styled.View`
  flex: 1;
  ${flexCenter}
`;
const StyledSomeQuestionScrollView = styled.ScrollView`
  flex: 7;
`;
const StyledCenterTitle = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 20px;
  margin-bottom: 20px;
  ${(props) =>
    props.type == 'gray'
      ? css`
          color: #818181;
        `
      : css`
          color: black;
        `}
`;
export default function SomeQuestion({navigation}) {
  return (
    <StyledSomeQuestionContainer>
      <Header
        title="Bir kaç sorumuz 
daha var"
        onPress={() => navigation.goBack()}
      />
      <StyledSomeQuestionScrollView>
        <StyledSomeQuestionMain>
          <Question
            marginHor={true}
            question="Hangi  saatler arasında uyursunuz ?"
          />
          <Input />
          <Question
            marginHor={true}
            question="Nöbetçiliğinizin olduğu günlerde
          hangi saatler arasında 
          yemek yaparsınız ?"
          />
          <StyledCenterTitle>Sabah kahvaltısı</StyledCenterTitle>
          <Input spacingStyle={{marginBottom: 20}} />
          <StyledCenterTitle>Akşam Yemeği</StyledCenterTitle>
          <Input />
          <Question
            marginHor={true}
            question="Temizlik günlerinde hangi saatler arasında temizlik yaparsın ?"
          />
          <Input spacingStyle={{marginBottom: 20}} />
          <Question
            marginHor={true}
            question="Kitap okumaya günlük kaç  saat
            vakit ayırmak istiyorsun ?"
          />

          <Input type="shortSaat" />
          <StyledCenterTitle type="gray">max: 2 saat</StyledCenterTitle>

          <Question
            marginHor={true}
            question="Çalışmak için günlük kaç  saat
            vakit ayırmak istiyorsun ?"
          />
          <Input type="shortSaat" />
          <StyledCenterTitle type="gray">max: 2 saat</StyledCenterTitle>
          <Button style={{marginBottom: 70}} />
        </StyledSomeQuestionMain>
      </StyledSomeQuestionScrollView>
    </StyledSomeQuestionContainer>
  );
}
