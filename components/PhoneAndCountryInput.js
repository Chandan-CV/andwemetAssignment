import React, { useState } from 'react';
import PhoneInput from 'react-native-international-phone-number';

export default function PhoneAndCountryInput({inputValue, setInputValue}) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
      <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
      />
  
  );
}