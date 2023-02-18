import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import BackIcon from "../assets/icons/left.png"
import { useNavigation } from '@react-navigation/native'

const Backbtn = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity className="absolute top-5 left-4 bg-slate-100 rounded-full p-2" onPress={()=>navigation.navigate("Home")}>
      <Image className="w-7 h-7" source={BackIcon}/>
    </TouchableOpacity>
  )
}

export default Backbtn