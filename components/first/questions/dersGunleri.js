import React, {useState} from 'react';
import styled from 'styled-components/native';
import Header from './header';
import CheckBox from '../../checkBox';
import SelectBox from '../../selectBox';
import Button from '../../button';
import {getData} from '../../../actions/AsyncStorage';
const StyledDersGunleriContainer = styled.View`
  flex: 1;
`;
const StyledDersGunleriMain = styled.View`
  flex: 7;
`;
const StyledDersGunleriScrollView = styled.ScrollView``;
export default function DersGunleri({navigation}) {
  //context kullanacan bunun baska yolu yok gibi

  const [data, setData] = useState([
    {day: 'pazartesi', when: ['sabah', 'akşam']},
    {day: 'salı', when: ['sabah', 'akşam']},
    {day: 'çarşamba', when: ['sabah', 'akşam']},
    {day: 'perşembe', when: ['sabah', 'akşam']},
    {day: 'cuma', when: ['sabah', 'akşam']},
    {day: 'cumartesi', when: ['sabah', 'akşam']},
    {day: 'pazar', when: ['sabah', 'akşam']},
  ]);
  // const [newData, setNewData] = useState();
  // getData('@checkBox').then((chekBoxData) => {
  //   chekBoxData.map((item) => {
  //     setNewData([...data, {isExisted: item.isExisted}]);
  //   });
  // });

  return (
    <StyledDersGunleriContainer>
      <Header
        title="O gün ders olan günleri seçiniz"
        onPress={() => navigation.goBack()}
      />
      <StyledDersGunleriMain>
        {/* <CheckBox title={data[0].day} />
        <SelectBox checkbox={data[0].day} title={'sabah'} />
        <SelectBox checkbox={data[0].day} title={'aksam'} /> */}
        <StyledDersGunleriScrollView>
          {data.map((item, index) => {
            return (
              <>
                <CheckBox keys={index * Math.random()} title={item.day} />

                {item.when.map((item1, index1) => {
                  return (
                    <SelectBox
                      checkbox={item.day}
                      title={item1}
                      keys={index1}
                    />
                  );
                })}
              </>
            );
          })}
          <Button
            style={{marginBottom: 40}}
            onPress={() => navigation.navigate('DersTime')}
          />
        </StyledDersGunleriScrollView>
      </StyledDersGunleriMain>
    </StyledDersGunleriContainer>
  );
}
