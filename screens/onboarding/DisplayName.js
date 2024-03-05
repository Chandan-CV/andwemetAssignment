import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LocationSearch from '../../components/LocationSearch';
import NameInput from '../../components/NameInput';
function DisplayName({navigation}) {
    const [name, setName] = useState("");
  return (
    <View
    style={styles.mainContainer}
    >
     <MaterialCommunityIcons name="account" size={150} color="#FF007D" />
     <Text style={{fontSize:24, fontWeight:500}}>Create a display name</Text>
     
     <Text 
     style={{fontSize:16, textAlign:"center", marginHorizontal:20, marginTop:20, color:'gray'}}
     >
         Recommended: Share a name that is not your real name
     </Text>
        <View 
        style={{width:"50%", justifyContent:'center', alignItems:"center", marginTop:50, marginBottom:50}}
        >

       <NameInput Name={name} setName={(text)=>setName(text)}/>
        </View>
        <Button title='Next' color={"#ff007d"} onPress={()=>navigation.navigate("Auth")}/>
    </View>
  )
}

export default DisplayName

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
      },
})