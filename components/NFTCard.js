import { View, Text, Image, TouchableOpacity,onPress } from "react-native";
import React from "react";
import {useNavigation } from "@react-navigation/native";
import EthIcon from "../assets/icons/eth.png";


import Rectbutton from "./Rectbutton";
import HeartBtn from "./HeartBtn";
import Buyersgrp from "./Buyersgrp";
const NFTCard = ({data, name, creator, price, image }) => {
  const navigation = useNavigation();
  return (
    <View className="mx-2 rounded-2xl bg-white overflow-hidden shadow-xl my-5">
      <View>
        <Image source={image} className="w-full h-72 relative" />
        <HeartBtn/>
        <Buyersgrp/>
       
        <View className="absolute right-6 bottom-0 bg-white border border-gray-100 px-5 py-3 mb-[-32] shadow-md">
          <Text className="text-gray-500 font-medium ml-1 ">Ending in</Text>
          <Text className="text-gray-800 font-bold text-lg">12h 30m</Text>
        </View>
      </View>

      <View className="p-5 mt-5">
        <Text className="font-bold text-3xl text-gray-800">{name}</Text>
        <Text className="text-gray-500 mt-1 ml-[2px] text-base font-semibold">
          {creator}
        </Text>
        <View className="flex flex-row justify-between mt-10 items-center">
          <View className="flex flex-row justify-between items-center">
            <Image source={EthIcon} className="w-5 h-5" />
            <Text className="font-semibold text-gray-600 text-lg pl-1">
              {price}
            </Text>
          </View>
          <Rectbutton handlePress={()=>navigation.navigate("Details",{data})}/>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
