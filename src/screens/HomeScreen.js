import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';

const ios=Platform.OS==='ios';

const HomeScreen = () => {
  const [trending,setTrending]=useState([1,2,3])
  return (
    <View className='flex-1 bg-neutral-800' >
      <SafeAreaView className={ios?"-mb-2":"mb-3"}>
          <StatusBar style="light" />
          <View className='flex-row items-center justify-between mx-4'>
              <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
              <Text className='text-white text-3xl font-bold'>
                <Text style={styles.text}>M</Text>
                ovies
                </Text>
              <TouchableOpacity>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
              </TouchableOpacity>
          </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
          <TrendingMovies data={trending}/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

