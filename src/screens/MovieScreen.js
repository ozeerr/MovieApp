import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {styles, theme} from '../theme';
import {height, width} from '../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';
const MovieScreen = () => {
    let movieName="Ant-Man and the Wasap: Quantumania"
  const navigation = useNavigation();
  const {params: item} = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([1,2,3,4,5])
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])
  const [loading,setLoading]=useState(false)

  useEffect(() => {}, [item]);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="bg-neutral-900 flex-1">
      <View className="w-full">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row items-center justify-between px-4' +
            topMargin
          }>
          <TouchableOpacity
            style={styles.background}
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1">
            <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsFavourite(!isFavourite);
            }}>
            <HeartIcon
              size="35"
              color={isFavourite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {
            loading?(
            <Loading/>
            ):(
                <View>
                <Image
                  source={{
                    uri: 'https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_FMjpg_UX1000_.jpg',
                  }}
                  style={{width: width, height: height * 0.55}}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                  style={{width, height: height * 0.4}}
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1}}
                  className="absolute bottom-0"
                />
              </View>
            )
        }
      
      </View>
      <View style={{marginTop:-height*0.09}} className='spaca-y-3'>
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>{movieName}</Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>Released - 2020 - 170min</Text>
        <View className='flex-row justify-center mx-4 space-x-2'>
            <Text className='text-neutral-400 font-semibold text-base text-center'>Action -</Text>
            <Text className='text-neutral-400 font-semibold text-base text-center'>Thrill -</Text>
            <Text className='text-neutral-400 font-semibold text-base text-center'>Comedy</Text>
        </View> 
        <Text className='text-neutral-400 mx-4 mt-2 tracking-wide'>Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mother hiding? And who is the mysterious Kang?</Text>
      </View>
            <Cast cast={cast} navigation={navigation}/>

            <MovieList title="Similar Movies" hideSeeAll={true } data={similarMovies}/>
    </ScrollView>
  );
};

export default MovieScreen;
