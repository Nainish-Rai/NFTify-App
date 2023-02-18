import { Text, View ,SafeAreaView ,FlatList} from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import {NFTData} from "../constants"
import { HomeHeader,Focus
,NFTCard, 
FocusedStatusBar} from '../components'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  const [nftData,setNftData] = useState(NFTData)

  const handleSearch =(value)=>{
    console.log("asdad")
    if(!value.length){
      return(setNftData(NFTData))
    }
    const filteredData = NFTData.filter((item)=>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    if(filteredData.length){
      setNftData(filteredData)
    }else{
      setNftData(NFTData)
    }
   

  }
  return (
    <SafeAreaView className="">
      {/* <StatusBar className="bg-black"/> */}
      {/* <FocusedStatusBar/> */}
      <View className="">
         <View className="bg-transparent">
         <FlatList 
         data={nftData}
         renderItem={({item})=><NFTCard 
         image={item.image}
         name={item.name}
         price={item.price}
         creator={item.creator}
         data={item}
         />}
         keyExtractor={(item)=> item.id}
         ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}/>
         
         </View>
         <View className="absolute -z-10 top-0 bottom-0 right-0 left-0 bg-gray-200">
          <View className=" bg-gray-900 h-72"></View>
         </View>
      </View>
      {/* <View className="h-full bg-gray-800 -z-10"></View> */}
    </SafeAreaView>
  )
}

export default Home