import React, {useState, useContext} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {flexCenter} from '../styles/style';
import Option from '../icons/option';
import Down from '../icons/down';
import {InputContext} from '../context/inputContext';
// export const windowWidth = Dimensions.get('window').width;
// export const windowHeight = Dimensions.get('window').height;
const scaleScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const StyledDropdownContainer = styled.View`
  ${flexCenter}
  width:100%;
  height: 50px;
`;

const StyledDropdown = styled.TouchableOpacity`
  width: 275px;
  height: 50px;
  justify-content: center;
  position: relative;
  padding-left: 10px;
  border-radius: 8px;
  background-color: white;
`;

const StyledDropdownText = styled.Text`
  font-family: Montserrat-Regular;
`;
const StyledDropdownModal = styled.Modal``;

const StyledDropdownModalCenter = styled.View`
  ${flexCenter}
  width:100%;
  height: 100%;
`;

const StyledDropdownModalCard = styled.View`
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
`;
const StyledDropdownModalScrollView = styled.ScrollView``;
const StyledDropdownModalTouchableCenter = styled.TouchableHighlight`
  ${flexCenter}
  width: 100%;
  height: 100%;
`;

const StyledDropdownModalButton = styled.TouchableOpacity`
  ${flexCenter}
  width: 200px;
  border-bottom-width: ${(props) => (props.isEnd ? '0px' : '0.2px')};
  height: 50px;
  position: relative;
`;
const StyledDropdownModalText = styled.Text`
  font-family: Montserrat-Regular;
  text-align: center;
`;
const StyledModalFilter = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${scaleScreen.width};
  height: ${scaleScreen.height};
  background-color: ${(props) =>
    props.isActive ? 'rgba(0,0,0,0.3)' : 'transparent'};
  elevation: 999999999999999999999;
`;
export default function Dropdown({
  title = 'Please select it...',
  data = [
    {value: 'alperen', isSelected: false},
    {value: 'kerem', isSelected: false},
    {value: 'sabah', isSelected: false},
    {value: 'sss', isSelected: false},
    {value: 'omer', isSelected: true},
    {value: 'fark', isSelected: false},
    {value: 'furkan', isSelected: false},
    {value: 'fatih', isSelected: false},
    {value: 'semih', isSelected: false},
  ],
  style,
  name = 'nameless',
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [value, setValue] = useState(title);
  const [inputValue, setInputValue] = useContext(InputContext);
  const [modalAnimation, setModalAnimation] = useState('fade');

  return (
    <>
      <StyledDropdownContainer>
        <StyledDropdown
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}
          onPress={() => {
            setIsOpenModal(true);
            setModalAnimation('fade');
          }}>
          <StyledDropdownText>{value}</StyledDropdownText>
          <Down />
        </StyledDropdown>
        <StyledDropdownModal
          animationType={modalAnimation}
          transparent={true}
          visible={isOpenModal}>
          <StyledDropdownModalTouchableCenter
            onPress={() => setIsOpenModal(false)}>
            <StyledDropdownModalCard>
              <StyledDropdownModalScrollView>
                {data
                  ? data.map((item, index) => {
                      return (
                        <StyledDropdownModalButton
                          key={index}
                          onPress={() => {
                            setValue(item.value);
                            setInputValue({data: item.value, name: name});
                            setModalAnimation('slide');
                            setIsOpenModal(false);
                          }}
                          isEnd={index + 1 === data.length ? true : false}>
                          <StyledDropdownModalText>
                            {item.value}
                          </StyledDropdownModalText>
                          {/* <Option isActive={item.isSelected} /> */}
                        </StyledDropdownModalButton>
                      );
                    })
                  : false}
              </StyledDropdownModalScrollView>
            </StyledDropdownModalCard>
          </StyledDropdownModalTouchableCenter>
        </StyledDropdownModal>
      </StyledDropdownContainer>

      {isOpenModal ? <StyledModalFilter isActive={isOpenModal} /> : <></>}
    </>
  );
}

// const styles = StyleSheet.create({
//   dropdown: {
//     justifyContent: 'center',
//     paddingLeft: 10,
//     borderWidth: 0.2,
//     width: 200,
//     height: 50,
//     borderRadius: 8,
//     backgroundColor: 'white',
//   },
//   center: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: windowHeight,
//   },
//   dropdownOptions: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 200,
//     borderBottomWidth: 0.2,
//     height: 50,
//   },
//   dropdownCard: {
//     alignItems: 'center',
//     width: 200,
//     height: 200,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     zIndex: 2,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,

//     elevation: 16,
//   },
//   dropdownBackgroundCloser: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     width: 500,
//     height: 500,
//     backgroundColor: 'red',
//   },
// });
