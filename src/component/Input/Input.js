import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './Input.style';

function Input({ label, placeholder, onChangeText, secureTextEntry, value, onFocus, onBlur }) {

  const theme = useSelector((state) => state.theme.value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.input_container, { backgroundColor: theme ? 'white' : 'black' }]}>
        <TextInput
          value={value}
          style={[styles.text_input, { color: theme ? 'black' : 'white' }]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={theme ? 'black' : 'grey'}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
}

export default Input;
