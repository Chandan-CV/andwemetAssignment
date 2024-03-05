import { useState } from 'react';
import { View } from 'react-native';
import OtpTextInput from 'react-native-text-input-otp'

export default function OTPInput () {
  const [otp, setOtp] = useState('');
  return(
    <View
    style={{
        display:'flex',
        padding:20,
        justifyContent:"center",
        alignItems:"center",
      marginVertical:20
    }}
    >

    <OtpTextInput 
        otp={ otp }
        setOtp={ setOtp }
        digits={6}
         
        />
        </View>
  )
};