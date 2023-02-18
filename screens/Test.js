import { View, Text ,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <SafeAreaView className="h-screen flex ">
        <ScrollView>
      <Text className="font-extrabold text-6xl py-24">Test</Text>
      <Text className="font-extrabold text-6xl py-24">Test</Text>
      <Text className="font-extrabold text-6xl py-24">Test</Text>
      <Text className="font-extrabold text-6xl py-24">Test</Text>
      <Text className="font-extrabold text-6xl py-24">Test</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Test