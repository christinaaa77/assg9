import React from 'react';
import {TextInput} from 'react-native';

const TextInputCustom = ({placeholder, value, onChangeText, keyboardType}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

export default TextInputCustom;
