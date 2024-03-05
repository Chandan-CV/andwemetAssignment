import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import EmailInput from "../../components/EmailInput";
import LocationSearch from "../../components/LocationSearch";
function LocationOnboard({ navigation }) {
  const [location, setLocation] = useState("");
  return (
    <View style={styles.mainContainer}>
      <Entypo
        name="location"
        size={150}
        color="#ff007d"
        style={{ marginVertical: 50 }}
      />
      <View
        style={{
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <Text>Where are you located?</Text>

        <LocationSearch
          location={location}
          setLocation={(text) => setLocation(text)}
        />
      </View>
      <Button
        title="Next"
        color={"#ff007d"}
        onPress={() => navigation.navigate("DisplayName")}
      />
    </View>
  );
}

export default LocationOnboard;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
});
