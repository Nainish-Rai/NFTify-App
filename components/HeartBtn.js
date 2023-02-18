import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import HeartIcon from "../assets/icons/heart.png";

const HeartBtn = () => {
  return (
    <TouchableOpacity className="absolute right-4 top-4 p-2 bg-gray-200 rounded-full flex justify-center items-center">
          <Image source={HeartIcon} className="w-7 h-7 " />
        </TouchableOpacity>
  )
}

export default HeartBtn