import { View, Text , onPress, TouchableOpacity } from 'react-native'
import React from 'react'

const Rectbutton = ({handlePress}) => {
  return (
    <TouchableOpacity className="bg-gray-800 rounded-full p-3 px-8"
     onPress={handlePress}>
    <Text className="text-gray-200 text-lg font-bold">Place a bid</Text>
  </TouchableOpacity>
  )
}

export default Rectbutton