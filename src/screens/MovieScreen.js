import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { height, width } from '../utils/constants';
const ios=Platform.OS==='ios';
const topMargin=ios?"":"mt-3";
const MovieScreen = () => {
    const navigation=useNavigation();
    const {params:item} = useRoute();
    const [isFavourite,setIsFavourite]=useState(false);
    useEffect(()=>{

    },[item])
  return (
    <ScrollView
    contentContainerStyle={{paddingBottom:20}}
    className='bg-neutral-900 flex-1'
    >
      <View className='w-full'>
        <SafeAreaView className={'absolute z-20 w-full flex-row items-center justify-between px-4'+topMargin}>
            <TouchableOpacity style={styles.background} onPress={()=>navigation.goBack()} className='rounded-xl p-1'>
                    <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setIsFavourite(!isFavourite)}} >
                <HeartIcon size="35" color={isFavourite? theme.background:"white"}  />
            </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image source={{uri:"https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_FMjpg_UX1000_.jpg"}}
            style={{width:width,height:height*0.55}}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MovieScreen

