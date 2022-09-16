import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { useSelector } from "react-redux";
import SignUpScreen from "../../screen/SignStack/SignUpScreen/SignUpScreen";
import SignInScreen from "../../screen/SignStack/SignInScreen/SignInScreen";
import BottomNavigation from "../BottomNavigation/BottomNavigation";

const Stack = createNativeStackNavigator();

function SignStackNavigation() {

  const theme = useSelector((state) => state.theme.value);

  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerTintColor: theme ? 'black' : 'white', headerStyle: { backgroundColor: theme ? 'white' : '#121212' } }} >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default SignStackNavigation;
