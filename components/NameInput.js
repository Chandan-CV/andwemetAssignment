import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const NameInput = ({Name,setName}) => {

  const HandleLocationChange = (text) => {
    setName(text);
  };

  return (
    <TextInput
    style={styles.input}
      placeholder="Enter your Display Name"
      value={Name}
      onChangeText={HandleLocationChange}
      keyboardType="name-phone-pad"
      autoCorrect={false}
    />
  );
};

export default NameInput;


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
