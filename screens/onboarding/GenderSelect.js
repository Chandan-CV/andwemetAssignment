import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function GenderSelect({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize:24, marginTop:10, fontWeight:600}}>Select your Gender</Text>
      <TouchableOpacity style={styles.gendertile}
      onPress={()=>navigation.navigate("DateOfBirthOnboarding")}
      >
        <Image
          source={require("../../assets/female_avatar.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 400 }}>
          Female
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.gendertile}
        onPress={()=>navigation.navigate("DateOfBirthOnboarding")}
      >
        <Image
          source={require("../../assets/male_avatar.png")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 400 }}>
          Male
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default GenderSelect;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gendertile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
