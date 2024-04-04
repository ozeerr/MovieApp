import { Image, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { height, width } from '../utils/constants'
import { debounce } from 'lodash'
import Loading from '../components/loading'
import { image185, searchMovies } from '../../api/moviedb'

const SearchScreen = () => {
    const navigation = useNavigation();
    const [results,setResults]=useState([])
    const [loading,setLoading]=useState(false)
    let movieName="Ant-Man and the Wase: Quantumania"
    const handleSearch=(text)=>{
        if(text&&text?.length>2){
            setLoading(true)
            searchMovies({
                query:text,
                include_adult:"false",
                language:"en-US",
                page:"1"

            }).then(data=>{
                setLoading(false)
                if(data&&data?.results){
                    setResults(data?.results)
                }
        })
        }
        else{
            setLoading(false)
            setResults([])
        }
    }

    const handleTextDebounce=useCallback(debounce(handleSearch,400),[])
  return (
    <SafeAreaView className='bg-neutral-800 flex-1'>
      <View className='mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full'>
        <TextInput onChangeText={handleTextDebounce} placeholder='Search Movie' placeholderTextColor={"lightgray"} className='pb-1 flex-1 pl-6 font-semibold text-base text-white tracking-wider'/>
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
                loading?(
                    <Loading/>
                ):
                (
                    results.map((item,index)=>{
                        return(
                            <TouchableWithoutFeedback key={index} onPress={()=>navigation.push("Movie",item)}>
                                <View className='space-y-2 mb-4'>
                                <Image source={{uri:image185(item?.poster_path)}} className='rounded-3xl' style={{width:width*0.44,height:height*0.3}}/>
                                <Text className='text-neutral-400 ml-1 text-center' style={{width:width*0.44}}>
                                {item?.title}
                                </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                )
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

