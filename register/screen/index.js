import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputCustom from './atom/textInput';
import ButtonCustom from './atom/button';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log({
      name,
      username,
      email,
      phoneNumber,
    });
  };

  const handlePhoneNumberInput = (text) => {
    // hanya menerima input angka
    setPhoneNumber(text.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.container}>
      <TextInputCustom
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInputCustom
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInputCustom
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInputCustom
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberInput}
        keyboardType="numeric"
      />
      <ButtonCustom
        style={styles.button}
        title="Register"
        onPress={handleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    backgroundColor: '#2ecc71',
    color: '#fff',
    borderWidth: 0,
    borderRadius: 4,
    fontSize: 16,
    cursor: 'pointer',
  },
});

export default RegisterPage;
