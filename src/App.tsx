import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";

export type RootStackParamList = {
  splash: undefined;
  signIn: undefined;
  signUp: undefined;
  home: undefined;
  activities: undefined;
  newActivity: undefined;
  activity: undefined;
  groups: undefined;
  newGroup: undefined;
  group: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="splash" component={SplashScreen} />
          <RootStack.Screen name="signIn" component={SignInScreen} />
          <RootStack.Screen name="signUp" component={SignUpScreen} />
          <RootStack.Screen name="home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
