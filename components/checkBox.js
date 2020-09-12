import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Check from '../icons/check';
import {flexCenter} from '../styles/style';
import AsyncStorage from '@react-native-community/async-storage';

const StyledCheckBoxView = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 50px;
`;

const StyledCheckBoxTitle = styled.Text`
  font-family: Montserrat-Regular;
  margin-left: 10px;
  font-size: 25px;
`;

const StyledCheckBoxTouchable = styled.TouchableHighlight`
  margin-left: ${(props) => (props.checkbox ? '100px' : '0')};
`;
export default function CheckBox({title = 'pazartesi', keys}) {
  const [isEnabled, setIsEnabled] = useState(false);
  function SetData() {
    setIsEnabled(!isEnabled);
    if (!isEnabled) {
      GetCheckBoxData(title, true);
    }
    if (isEnabled) {
      GetCheckBoxData(title, false);
    }
  }
  return (
    <StyledCheckBoxView key={keys}>
      <StyledCheckBoxTouchable
        underlayColor={'none'}
        onPress={() => SetData()}
        checkbox>
        <Check isActive={isEnabled} />
      </StyledCheckBoxTouchable>

      <StyledCheckBoxTouchable underlayColor={'none'} onPress={() => SetData()}>
        <StyledCheckBoxTitle>{title}</StyledCheckBoxTitle>
      </StyledCheckBoxTouchable>
    </StyledCheckBoxView>
  );
}

export function GetCheckBoxData(data, isExisted) {
  let obj = {value: data, isExisted};

  var arr = [];
  getData()
    .then((data) => {
      if (data !== null) {
        console.log('data var');
        arr.push(...data);
      }
    })
    .then(() => {
      arr = [...arr, obj];
      arr.map((item) => {
        if (!item.isExisted) {
          arr = arr.filter((kere) => kere.value !== item.value);
        }
      });
      storeData(arr);
      console.log(arr);
    });

  return arr;
}
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@checkBox', jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@checkBox');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};
