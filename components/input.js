import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';
import {InputContext} from '../context/inputContext';
const StyledInputContainer = styled.View`
  ${flexCenter}
  flex-direction:row;
  width: 100%;
  height: 50px;
  margin: ${(props) =>
    props.type === 'short' || props.type === 'shortSaat' ? '15px 0' : '0'};
`;
const StyledInputShortView = styled.View`
  ${flexCenter}
  position: relative;
  flex-direction: row;
  width: 100px;
  height: 50px;
`;
const StyledInput = styled.TextInput`
  height: 48px;
  width: ${(props) => (props.type === 'name' ? '275px' : '100px')};
  padding: ${(props) =>
    props.type === 'name'
      ? '0 10px'
      : props.type === 'short' || props.type === 'shortSaat'
      ? '0 45px 0 20px'
      : '0 20px'};
  font-size: 20px;
  box-shadow: 0px 1px 4px black;
  border-radius: 8px;
  background-color: white;
`;
const StyledInputShortDk = styled.Text`
  font-family: Montserrat-Regular;
  position: absolute;
  right: ${(props) => (props.type === 'spacing' ? '25px' : '15px')};
  font-size: 20px;
  elevation: 8;
  color: #707070;
`;
const StyledHyphen = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 22px;
  margin-left: 15px;
  margin-right: 15px;
`;

export default function Input({
  type = 'spacing',
  spacingStyle,
  onChangeName,
  name,
}) {
  return (
    <RenderByType
      type={type}
      spacingStyle={spacingStyle}
      onChangeName={onChangeName}
      name={name}
    />
  );
}

function RenderByType({type, spacingStyle, onChangeName, name}) {
  const [inputValue, setInputValue] = useContext(InputContext);
  const [value1, setValue1] = useState('');
  const [value1Min, setValue1Min] = useState('.00');
  const [value2, setValue2] = useState('');
  const [value2Min, setValue2Min] = useState('.00');

  if (type === 'name') {
    return (
      <StyledInputContainer>
        <StyledInput
          onChangeText={onChangeName}
          type={type}
          style={styles.TextInput}></StyledInput>
      </StyledInputContainer>
    );
  } else if (type === 'short') {
    return (
      <StyledInputContainer type={type}>
        <StyledInputShortView>
          <StyledInput
            keyboardType={'number-pad'}
            onChangeText={(e) => {
              setInputValue({data: e, name: name});
            }}
            type={type}
            style={styles.TextInput}></StyledInput>
          <StyledInputShortDk>dk</StyledInputShortDk>
        </StyledInputShortView>
      </StyledInputContainer>
    );
  } else if (type === 'shortSaat') {
    return (
      <StyledInputContainer type={type}>
        <StyledInputShortView>
          <StyledInput
            keyboardType={'number-pad'}
            onChangeText={(e) => {
              setInputValue({data: e, name: name});
            }}
            type={type}
            style={styles.TextInput}></StyledInput>
          <StyledInputShortDk>saat</StyledInputShortDk>
        </StyledInputShortView>
      </StyledInputContainer>
    );
  } else if ((type = 'spacing')) {
    return (
      <StyledInputContainer style={spacingStyle}>
        <StyledInputShortView>
          <StyledInput
            keyboardType={'number-pad'}
            maxLength={5}
            value={value1}
            onChangeText={(e) => {
              if (e.length < 2) {
                setValue1(e);
                setInputValue({name: name, data: e});
              } else if (e.length === 2) {
                if (e < 24) {
                  setValue1(e);
                  setInputValue({name: name, data: e});
                } else {
                  setInputValue({name: name, data: '23'});
                  setValue1('23');
                }
              } else if (e.length === 3 && !e.includes('.')) {
                setValue1Min('');
                setInputValue({
                  name: name,
                  data: inputValue + '.' + e[e.length - 1],
                });

                setValue1(value1 + '.' + e[e.length - 1]);
              } else if (e.length >= 3 && e.length < 5 && e.includes('.')) {
                setValue1(e);
                setInputValue({name: name, data: e});
                setValue1Min('');
              } else if (e.length === 5) {
                if (e.substr(3, 4) < 60) {
                  setValue1(e);
                  setInputValue({name: name, data: e});
                } else {
                  setValue1(value1.slice(0, 3) + '59');
                  setInputValue({name: name, data: e});
                }
              }
            }}
            type={type}
            style={styles.TextInput}></StyledInput>
          <StyledInputShortDk type={type}>{value1Min}</StyledInputShortDk>
        </StyledInputShortView>
        <StyledHyphen>-</StyledHyphen>
        <StyledInputShortView>
          <StyledInput
            keyboardType={'number-pad'}
            maxLength={5}
            value={value2}
            onChangeText={(e) => {
              if (e.length < 2) {
                setValue2(e);
              } else if (e.length === 2) {
                if (e < 24) setValue2(e);
                else {
                  setValue2('23');
                }
              } else if (e.length === 3 && !e.includes('.')) {
                setValue2Min('');
                setValue2(value2 + '.' + e[e.length - 1]);
              } else if (e.length >= 3 && e.length < 5 && e.includes('.')) {
                setValue2(e);
                setValue2Min('');
              } else if (e.length === 5) {
                if (e.substr(3, 4) < 60) {
                  setValue2(e);
                } else setValue2(value2.slice(0, 3) + '59');
              }
              setInputValue({
                name: name,
                value1: value1 + value1Min,
                value2: value2 + value2Min,
              });
            }}
            type={type}
            style={styles.TextInput}></StyledInput>
          <StyledInputShortDk type={type}>{value2Min}</StyledInputShortDk>
        </StyledInputShortView>
      </StyledInputContainer>
    );
  }
}

const styles = StyleSheet.create({
  TextInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
