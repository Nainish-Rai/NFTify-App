import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();
  return (
      isFocused?<StatusBar animated={true} />:null
  );
};

export default FocusedStatusBar;
  