import { View, Text, SafeAreaView, Image, FlatList, ScrollView,StatusBar } from "react-native";
import React, { useEffect, useState } from "react";

import Buyersgrp from "../components/Buyersgrp";
import EthIcon from "../assets/icons/eth.png";
import BidderCard from "../components/BidderCard";
import Backbtn from "../components/Backbtn";
import RectButton  from "../components/Rectbutton";
import Rectbutton from "../components/Rectbutton";

const Details = ({ route, navigatiom }) => {
  const { data } = route.params;
  const [text, setText] = useState(data.description.substring(0, 120));
  const [readmore, setReadmore] = useState(true);



  function readMoreToggle() {
    setReadmore(() => !readmore);
    readmore
      ? setText(data.description)
      : setText(data.description.substring(0, 120));
  }
  return (
    <View className="flex-1 relative">
      <StatusBar/>
      <ScrollView className=" -z-10 overflow-scroll">
        {/* Image Section */}
        <View>
          <Image source={data.image} className="relative w-screen h-96" />
          <Buyersgrp />
          <Backbtn/>
          <View className="absolute right-6 bottom-0 bg-white border border-gray-100 px-5 py-3 mb-[-32] shadow-md">
            <Text className="text-gray-500 font-medium ml-1 ">Ending in</Text>
            <Text className="text-gray-800 font-bold text-lg">12h 30m</Text>
          </View>
        </View>
        {/* Details Section */}
        <View className="p-5 mt-1">
          <View className="flex flex-row justify-between mt-10 items-center">
            <View>
              <Text className="font-bold text-3xl text-gray-800">
                {data.name}
              </Text>
              <Text className="text-gray-500 mt-1 ml-[2px] text-base font-semibold">
                {data.creator}
              </Text>
            </View>
            <View className="flex flex-row justify-between items-center mr-4 ">
              <Image source={EthIcon} className="w-5 h-5" />
              <Text className="font-semibold text-gray-600 text-2xl pl-1">
                {data.price}
              </Text>
            </View>
          </View>
          {/*  */}
              
          {/* Description */}
          <View className="mt-10">
            <Text className="font-bold text-lg text-gray-700">Description</Text>
            <View>
              <Text className="mt-2 text-base text-gray-500">
                {text}{" "}
                <Text
                  onPress={readMoreToggle}
                  className="font-semibold text-gray-800"
                >
                  {readmore ? "...Read More" : "Read Less"}
                </Text>
              </Text>
            </View>
          </View>
          {/*  */}
          {/* BIDDING SECTION */}
          <View className="mt-10 mb-10">
            <Text className="font-bold text-lg text-gray-700">
              Current Bids
            </Text>
            {/* <View className="flex-0">
            <View className=" z-0">
              <FlatList
               keyExtractor={(item)=> item.id}
                data={data.bids}
                renderItem={({ item }) => (
                  <BidderCard
                    date={item.date}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                   
                  />
                )}
              />
            </View>
            </View> */}
            {data.bids.map((item)=>{
              return(
                <BidderCard
                date={item.date}
                name={item.name}
                price={item.price}
                image={item.image}
               
              />
              )
            })}
          </View>

          {/*  */}
        </View>

        {/*  */}
      </ScrollView>
      <View className="absolute bottom-0 pb-2 pt-2 px-32 bg-white/25">
          <View className="">
            <RectButton/>
            </View>
        </View>
    </View>
  );
};

export default Details;
