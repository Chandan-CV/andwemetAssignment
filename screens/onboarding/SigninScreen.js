import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import PhoneInput from "../../components/PhoneAndCountryInput";
import PhoneAndCountryInput from "../../components/PhoneAndCountryInput";
import EmailInput from "../../components/EmailInput";

function SigninScreen({navigation}) {
  const [toggle, setToggle] = useState("phone");
  const [phone, setPhone] = useState("");
  
  return (
    <View style={styles.mainContainer}>
      {/* Text above the signin box */}
      <View style={styles.topText}>
        <Text style={{ fontWeight: "500", fontSize: 20, textAlign: "center" }}>
          Building meaningful and wholesome relationships
        </Text>
      </View>
    <View>
      <Text style={{ fontWeight: "300", fontSize: 16, textAlign: "center", marginVertical:10 }}>
        {" "}
        Sign in with us to start your romantic journey
      </Text>

    </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: 17, textAlign: "center", color: "#AA336A" }}>
          {" "}
          Trusted by Indians living in India and overseas
        </Text>
        <View style={styles.signInWith}>
          <Text style={{ fontSize: 20, fontWeight: 700 }}> Sign in with</Text>

          <View style={styles.outerToggle}>

            {
              toggle == 'phone' ? (
                <TouchableOpacity style={[styles.toggle,{backgroundColor:"#AA336A"}]}>
                  <Text style={{color:"white"}}>Phone Number</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.toggle} onPress={()=>setToggle("phone")}>
                  <Text>Phone Number</Text>
                </TouchableOpacity>
              )
            }
             
              {
                toggle == 'email' ? (
                  <TouchableOpacity style={[styles.toggle,{backgroundColor:"#AA336A"}]}>
                    <Text style={{color:"white"}}>Email</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.toggle} onPress={()=>setToggle("email")}>
                    <Text>Email</Text>
                  </TouchableOpacity>
                )
              }
          </View>
          <View style={{width:"100%"}}>
            {toggle=="phone" ? 
              <PhoneAndCountryInput inputValue={phone} setInputValue={(text)=>setPhone(text)} />:
            <EmailInput/>}
          
          </View>
          <View style={styles.captcha}>
            <Text>Captcha stuff</Text>
          </View>
          <TouchableOpacity style={styles.SignInButton} onPress={()=>navigation.navigate("otpPhone",{
            otpRecepient: phone,
            navigateTo:"EmailOnboarding"
          })}>
            
              <Text style={{fontSize:20, color:"white", fontWeight:500}}> Sign In</Text>

          </TouchableOpacity>
          <Text style={{color:"grey"}}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 20,
    backgroundColor: "#FFDBE9",
    height: "100%",
  },
  innerContainer: {
    backgroundColor: "white",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    elevation: 30,
    shadowColor: "#AA336A",
    marginVertical: 20,
  },
  topText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signInWith: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  outerToggle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    
  },
  toggle: {
    backgroundColor: "#FFDBE9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
    padding:10,
    borderRadius: 2,
  },
  PhoneInput:{
    width:"100%",
    marginVertical:10,
    borderRadius:360,
    borderWidth:1,
    borderColor:"#AA336A",
    
  },
  captcha: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "lightgrey",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    height: 80,
  },
  SignInButton:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#AA336A",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    
  }
});
