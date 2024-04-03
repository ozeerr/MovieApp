import {  Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { height, width } from '../utils/constants'

const MovieCard = ({item,handleClick}) => {
    return(
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
            <Image source={{uri:"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_FMjpg_UX1000_.jpg"}}
            style={{
                width:width*0.6,
                height:height*0.4,
            }}
            className='rounded-3xl'
            />
         </TouchableWithoutFeedback>
    )
}

const TrendingMovies = ({data}) => {
    const navigation=useNavigation();
    const handleClick=(item)=>{
        navigation.navigate("Movie",item)
    }
  return (
    <View className='mb-8'>
      <Text className='text-white text-xl mx-4 mb-5'>Trending</Text>
      <Carousel data={data} 
      renderItem={({item})=><MovieCard item={item} handleClick={handleClick}
      />}
      firstItem={1}
      inactiveSlideOpacity={0.6}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{display:"flex",alignItems:"center"}}
      />
    </View>
  )
}

export default TrendingMovies

const styles = StyleSheet.create({})