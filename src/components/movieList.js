import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'
const {width,height}=Dimensions.get("window")
const MovieList = ({title,data}) => {
    let movieName="Ant-Man and the Wasap: Quantumania"
    const navigation=useNavigation();
  return (
    <View className='mb-8 space-y-4'>
     <View className='mx-4 flex-row justify-between items-center'>
            <Text className='text-white text-xl'>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.text} className='text-lg'>See All</Text>
            </TouchableOpacity>
     </View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}}>
        {data.map((item,index)=>{
            return(
                <TouchableWithoutFeedback key={index} onPress={()=>navigation.navigate("Movie",item)}>
                    <View className='space-y-1 mr-4'>
                        <Image source={require("../../assets/moviePoster1.jpg")}
                        className='rounded-3xl'
                        style={{width:width*0.33,height:height*0.2}}/>
                        <Text className='text-neutral-300 ml-1'>{movieName.length>14 ? movieName.slice(0,14)+"...":movieName}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        })}
     </ScrollView>
    </View>
  )
}

export default MovieList

