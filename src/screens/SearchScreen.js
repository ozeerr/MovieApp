import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { height, width } from '../utils/constants'


const SearchScreen = () => {
    const navigation = useNavigation();
    const [results,setResults]=useState([1,2,3,4])
    let movieName="Ant-Man and the Wase: Quantumania"
  return (
    <SafeAreaView className='bg-neutral-800 flex-1'>
      <View className='mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full'>
        <TextInput placeholder='Search Movie' placeholderTextColor={"lightgray"} className='pb-1 flex-1 pl-6 font-semibold text-base text-white tracking-wider'/>
        <TouchableOpacity onPress={()=>{navigation.goBack()}} className='rounded-full p-3 m-1 bg-neutral-500'>
        <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>
      {
        results.length>0?(
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}} className='space-y-3'>
            <Text className='text-white font-semibold ml-1'>Results ({results.length})</Text>
            <View className='flex-row justify-between flex-wrap'>
                {
                    results.map((item,index)=>{
                        return(
                            <TouchableWithoutFeedback key={index} onPress={()=>navigation.push("Movie",item)}>
                                <View className='space-y-2 mb-4'>
                                <Image source={{uri:"https://tr.web.img3.acsta.net/pictures/23/01/25/11/45/2784455.jpg"}} className='rounded-3xl' style={{width:width*0.44,height:height*0.3}}/>
                                <Text className='text-neutral-400 ml-1 text-center' style={{width:width*0.44}}>
                                {movieName}
                                </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
          </ScrollView>
        ):(
            <View className='flex-row justify-center'>
                <Image source={require("../../assets/nosearch.png")} className='h-96 w-96'/>
            </View>
        )
      }
    
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})