import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/first/home/home';
import NamazSureleri from './components/first/questions/namazSure';
import DersGunleri from './components/first/questions/dersGunleri';
import DersTime from './components/first/questions/dersTime';
import NobetGunleri from './components/first/questions/nobetGunleri';
import CleanDay from './components/first/questions/CleanDay';
import SomeQuestion from './components/first/questions/SomeQuestion';
import InputContextProvider from './context/inputContext';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <InputContextProvider>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen
            name="NamazSure"
            component={NamazSureleri}></Stack.Screen>
          <Stack.Screen
            name="DersGunleri"
            component={DersGunleri}></Stack.Screen>
          <Stack.Screen name="DersTime" component={DersTime}></Stack.Screen>
          <Stack.Screen
            name="NobetGunleri"
            component={NobetGunleri}></Stack.Screen>
          <Stack.Screen name="CleanDay" component={CleanDay}></Stack.Screen>
          <Stack.Screen
            name="SomeQuestion"
            component={SomeQuestion}></Stack.Screen>
        </Stack.Navigator>
      </InputContextProvider>
    </NavigationContainer>
  );
}

// fetch('https://ezanvakti.herokuapp.com/sehirler?ulke=2', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     setData(data);
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
