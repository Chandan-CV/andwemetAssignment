import { View, StyleSheet, Image } from "react-native"

function Header() {
  return (
    <View>
        <Image
        style ={styles.image}
        source={require("../assets/awm_logo.png")}
        />
    </View>
    )
}


export default Header

const styles = StyleSheet.create({
    image:{
        height:24.5,
        width:140
    }
})