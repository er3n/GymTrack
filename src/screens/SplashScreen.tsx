import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";

type SplashScreenProps = {
  route: RouteProp<RootStackParamList, "splash">;
  navigation: StackNavigationProp<RootStackParamList, "splash">;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.push("home")} title="home" />
      <Button onPress={() => navigation.push("signIn")} title="signIn" />
      <Button onPress={() => navigation.push("signUp")} title="signUp" />
    </SafeAreaView>
  );
};

export default SplashScreen;
