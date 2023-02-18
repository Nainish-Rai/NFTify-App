import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navcard from "./components/FocusedStatusBar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Test from "./screens/Test";
export default function App() {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Test" component={Test}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
