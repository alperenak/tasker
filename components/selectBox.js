import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';
import Option from '../icons/option';
import AsyncStorage from '@react-native-community/async-storage';

const StyledSelectBox = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30px;
`;
const StyledSelectBoxTouchable = styled.TouchableHighlight`
  margin-left: ${(props) => (props.selectbox ? '135px' : '0')};
`;
const StyledSelectBoxTitle = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 15px;
  margin-left: 7px;
`;
export default function SelectBox({title = 'pazartesi', checkbox, keys}) {
  const [isEnabled, setIsEnabled] = useState(false);
  function SetData() {
    setIsEnabled(!isEnabled);
    if (!isEnabled) {
      GetSelectBoxData(title, true, checkbox);
    }
    if (isEnabled) {
      GetSelectBoxData(title, false, checkbox);
    }
  }
  return (
    <StyledSelectBox key={keys}>
      <StyledSelectBoxTouchable
        selectbox
        underlayColor={'none'}
        onPress={() => SetData()}>
        <Option isActive={isEnabled} />
      </StyledSelectBoxTouchable>

      <StyledSelectBoxTouchable
        underlayColor={'none'}
        onPress={() => SetData()}>
        <StyledSelectBoxTitle>{title}</StyledSelectBoxTitle>
      </StyledSelectBoxTouchable>
    </StyledSelectBox>
  );
}

// export default function SelectBox({checkbox, title = 'sabah'}) {
//   const [isEnabled, setIsEnabled] = useState(false);

//   GetSelectBoxData(checkbox, title);
//   function setEnabled() {
//     setIsEnabled(!isEnabled);
//   }
//   return (
//     <StyledSelectBox key={title}>
//       <StyledSelectBoxTouchable
//         underlayColor={'none'}
//         onPress={() => setEnabled()}>
//         <Option isActive={isEnabled} />
//       </StyledSelectBoxTouchable>
//       <StyledSelectBoxTouchable
//         underlayColor={'none'}
//         onPress={() => setEnabled()}>
//         <StyledSelectBoxTitle>{title}</StyledSelectBoxTitle>
//       </StyledSelectBoxTouchable>
//     </StyledSelectBox>
//   );
// }
export function GetSelectBoxData(title, isExisted, checkbox) {
  let obj = {value: title, isExisted, checkbox};

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
}

const storeData = async (value) => {
  try {
    console.log('val', value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@selectbox', jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@selectbox');
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
