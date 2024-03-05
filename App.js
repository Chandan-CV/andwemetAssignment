import { StyleSheet, Text, View, Image } from "react-native";
import SigninScreen from "./screens/onboarding/SigninScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Header";
import OTPScreen from "./screens/onboarding/OTPScreen";
import EmailOnboarding from "./screens/onboarding/EmailOnboarding";
import GenderSelect from "./screens/onboarding/GenderSelect";
import DateOfBirthOnboarding from "./screens/onboarding/DateOfBirthOnboarding";
import LocationOnboard from "./screens/onboarding/LocationOnboard";
import DisplayName from "./screens/onboarding/DisplayName";

const Stack = createNativeStackNavigator();

export default function App() {
  const screens = [
    {
      screen: SigninScreen,
      name:'Auth'
    },
    {
      screen: OTPScreen,
      name:"otpPhone"
    },
    {
      screen: EmailOnboarding,
      name:"EmailOnboarding"
    },
    {
      screen: GenderSelect,
      name:"GenderSelect"
    },
    {
      screen: DateOfBirthOnboarding,
      name:"DateOfBirthOnboarding"
    },
    {
      screen:LocationOnboard,
      name:"LocationOnboard"
    },
    {
      screen:DisplayName,
      name:"DisplayName"
    }
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {screens.map((screen) =>  <Stack.Screen
          name={screen.name}
          component={screen.screen}
          options={{
            headerTitleAlign: "center",
            headerTitle: (props) => <Header {...props} />,
          }}
        />)}

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
