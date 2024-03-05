import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import OTPInput from "../../components/OTPInput";
import { Entypo } from "@expo/vector-icons";
function OTPScreen({ navigation, route }) {
  const otpRecepient = route.params.otpRecepient;
  const navigateTo = route.params.navigateTo;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(6);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <View style={styles.mainContainer}>
      <Entypo name="lock-open" size={36} color="#e01d68" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 500,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Enter OTP
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        We have sent the verification code to{" "}
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontWeight: 500,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        {otpRecepient} (fSetched from backend after registration)
      </Text>
      <OTPInput />
      <Text>
        Resend OTP in {minutes}:{seconds}s
      </Text>
      <View style={styles.resendButton}>
        <Button
          title="Resend OTP"
          disabled={minutes === 0 && seconds === 0 ? false : true}
          color={"#e01d68"}
          onPress={() => {
            setMinutes(0);
            setSeconds(5);
          }}
        />
      </View>
      <View style={styles.resendButton}>
        <Button
          onPress={() => navigation.navigate(navigateTo)}
          title="Verify OTP"
          color={"#e01d68"}
        />
      </View>
    </View>
  );
}

export default OTPScreen;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  resendButton: {
    padding: 10,
    marginVertical: 10,
  },
});
