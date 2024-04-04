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
import Loading from '../components/loading';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../../api/moviedb';
import MovieList from '../components/movieList';
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';
const MovieScreen = () => {
    let movieName="Ant-Man and the Wasap: Quantumania"
  const navigation = useNavigation();
  const {params: item} = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [loading,setLoading]=useState(false)
  const [movie,setMovie]=useState({})

  useEffect(() => {
    setLoading(true)
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id)
  }, [item]);
  const getMovieDetails=async(id)=>{
    const data=await fetchMovieDetails(id);
    if(data) setMovie(data);
    setLoading(false)
  }

  const getMovieCredits=async(id)=>{
    const data=await fetchMovieCredits(id);
    if(data&&data.cast) setCast(data.cast);
  }
  const getSimilarMovies=async(id)=>{
    const data=await fetchSimilarMovies(id);
    if(data&&data.results) setSimilarMovies(data.results);
  }
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
                    uri: image500(movie?.poster_path),
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
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>{movie.title}</Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>{movie?.status} - {movie?.release_date?.split("-")[0]} - {movie?.runtime}</Text>
        <View className='flex-row justify-center mx-4 space-x-2'>
            {
                movie?.genres?.map((genre,index)=>{
                    let last=index!==movie?.genres?.length-1;
                    return(
                        <Text key={index} className='text-neutral-400 font-semibold text-base text-center'>{genre?.name} {!last?"":"-"}</Text>
                        )
                })
            }
        </View> 
        <Text className='text-neutral-400 mx-4 mt-2 tracking-wide'>{movie?.overview}</Text>
      </View>
            {cast.length>0&& <Cast cast={cast} navigation={navigation}/>}

            {similarMovies.length>0&&<MovieList title="Similar Movies" hideSeeAll={true } data={similarMovies}/>}
    </ScrollView>
  );
};

export default MovieScreen;
