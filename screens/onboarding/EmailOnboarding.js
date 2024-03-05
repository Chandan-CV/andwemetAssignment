import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import EmailInput from "../../components/EmailInput";

function EmailOnboarding({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.mainContainer}>
      <MaterialIcons name="email" size={100} color="#ff007d" />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 500,
        }}
      >
        {" "}
        Enter your Email Address{" "}
      </Text>
      <EmailInput email={email} setEmail={(text) => setEmail(text)} />
      <Text> We will send you a verification code to your email address </Text>
      <View style={{ marginVertical: 20 }}></View>
      <Button
        title="Send OTP"
        color={"#ff007d"}
        onPress={() =>
          navigation.navigate("otpPhone", {
            navigateTo: "GenderSelect",
            otpRecepient: email,
          })
        }
      />

      <View style={{ marginVertical: 20 }}></View>
      <Text
        style={{
          fontSize: 15,
          color: "grey",
          textAlign: "center",
        }}
      >
        By Signing in with your Email ID, you agree to privacy policy and terms
        of service of andwemet
      </Text>
    </View>
  );
}

export default EmailOnboarding;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
