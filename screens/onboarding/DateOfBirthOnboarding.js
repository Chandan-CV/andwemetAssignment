import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
function DateOfBirthOnboarding({navigation}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.mainContainer}>
      <FontAwesome
        name="birthday-cake"
        size={150}
        color="#ff007d"
        style={{ marginVertical: 50 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 500 }}>Your date of birth</Text>
      <View
      
        style={{ marginVertical:20 }}
      >
      <TouchableOpacity
        onPress={showDatepicker}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ff007d",
          width:"50%",
          padding:10,
          borderRadius:10,
        }}
        >
<Feather name="calendar" size={24} color="white" />
<Text style={{fontSize:20, marginLeft:10, color:"white"}}>Open Calendar</Text>

        </TouchableOpacity>
        </View>
      <Text style={{fontSize:16}}>selected: {date.toDateString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <View
      style={{
        marginVertical:50
      }}
      >
      <Button title="Next" color={"#ff007d"} onPress={()=>navigation.navigate("LocationOnboard")} />
      </View>
    </View>
  );
}

export default DateOfBirthOnboarding;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
