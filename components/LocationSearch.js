import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const LocationSearch = ({location,setLocation}) => {

  const HandleLocationChange = (text) => {
    setLocation(text);
  };

  return (
    <TextInput
    style={styles.input}
      placeholder="Enter your Location"
      value={location}
      onChangeText={HandleLocationChange}
      keyboardType="web-search"
      autoCompleteType="location"
      autoCorrect={false}
    />
  );
};

export default LocationSearch;


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
