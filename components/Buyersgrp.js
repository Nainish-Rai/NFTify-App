import { View, Text ,Image } from 'react-native'
import React from 'react'
import BuyerIcon1 from "../assets/images/person01.png";
import BuyerIcon2 from "../assets/images/person02.png";
import BuyerIcon3 from "../assets/images/person03.png";

const Buyersgrp = () => {
  return (
    <View className="flex flex-row items-center absolute bottom-[-24] left-8">
    <Image
      source={BuyerIcon1}
      className="w-12 h-12 rounded-full ml-[-12]"
   />
    <Image
      source={BuyerIcon2}
      className="w-12 h-12 rounded-full ml-[-12]"
   />
    <Image
      source={BuyerIcon3}
      className="w-12 h-12 rounded-full ml-[-12]"
   />
    </View>
  )
}

export default Buyersgrp