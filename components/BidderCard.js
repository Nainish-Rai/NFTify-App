import { View, Text,Image, FlatList } from 'react-native'
import React from 'react'
import EthIcon from "../assets/icons/eth.png"

const BidderCard = ({date,image,name,price}) => {
  return (
    <View className="flex flex-row items-center justify-between my-2 ">
        <Image className="w-12 h-12" source={image}/>
        <View>
            <Text className="font-semibold text-gray-700 text-center">Bid Placed by {name}</Text>
            <Text className="font-thin text-gray-500">{date}</Text>
        </View>
        <View className="flex flex-row items-center">
        <Image source={EthIcon} className="w-6 h-6"/>
        <Text className="font-semibold text-basen">{price}</Text>
        </View>
    </View>
  )
}

export default BidderCard