import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import Pfp from "../assets/images/person01.png"
import Searchicon from "../assets/icons/search.png"
const HomeHeader = ({onSearch}) => {
  return (
    <View className="p-5 mt-2">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-100 font-extrabold text-4xl ">
            NFT-ify
          </Text>
          <Image source={Pfp} className="w-12 h-12"/>
        </View>

        <View>
          <Text className="text-gray-200 font-semibold py-2">
            Hello, Nainish 
          </Text>
          <Text className="font-bold text-2xl text-gray-100">Let's find a masterpiece</Text>
        </View>
        <View>
        <TextInput
        placeholder='Search NFTS'
        onChangeText={onSearch}
        className="mt-10 px-5 pl-11 py-2 relative bg-gray-400 text-base font-semibold focus:bottom-0"/>
        <Image source={Searchicon} className="absolute bottom-3 h-5 w-5 left-3"/>
        </View>
    </View>
  )
}

export default HomeHeader

