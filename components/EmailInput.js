import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const EmailInput = ({email, setEmail}) => {
  

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  return (
    <TextInput
    style={styles.input}
      placeholder="Enter your email"
      value={email}
      onChangeText={handleEmailChange}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCompleteType="email"
      autoCorrect={false}
    />
  );
};

export default EmailInput;


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        width:"100%",
        padding:10,
        borderColor: "gray",  
    },
})
