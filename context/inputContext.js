import React, {createContext, useState} from 'react';

export const InputContext = createContext();

export default function InputContextProvider(props) {
  const [inputValue, setInputValue] = useState('');
  const [fullName, setFullName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [namazSureleri, setNamazSureleri] = useState('');
  const [DersGunleri, setDersGunleri] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  return (
    <InputContext.Provider value={[inputValue, setInputValue]}>
      {props.children}
    </InputContext.Provider>
  );
}
