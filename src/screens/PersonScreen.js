import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from '../theme';
import {height, width} from '../utils/constants';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
import { fetchPersonDetails, fetchPersonMovies, image342 } from '../../api/moviedb';
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'mt-3';
const PersonScreen = () => {
    const navigation = useNavigation();
    const {params: item} = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [person,setPerson]=useState({})
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPersonDetails(item?.id)
    getPersonMovies(item?.id)
  }, [item]);

  const getPersonDetails = async (id) => {
     const data = await fetchPersonDetails(id);
     if (data) setPerson(data);
    setLoading(false);
  }

  const getPersonMovies = async (id) => {
    const data = await fetchPersonMovies(id);
    if (data && data.cast) setPersonMovies(data.cast);
  }



  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView
        className={
          'z-20 w-full flex-row items-center justify-between px-4' +
          verticalMargin
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
          <HeartIcon size="35" color={isFavourite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <View>
                <View
                    className="flex-row justify-center"
                    style={{
                    shadowColor: 'gray',
                    shadowRadius: 40,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 1,
                    }}>
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-300">
                    <Image
                        source={{
                        uri: image342(person?.profile_path),
                        }}
                        style={{height: height * 0.43, width: width * 0.74}}
                    />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                    {person?.name}
                    </Text>
                    <Text className="text-base text-neutral-500  text-center">
                    {person?.place_of_birth}
                    </Text>

                    <View className="mx-3 p-4 mt-6 justify-between flex-row items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">{person?.gender==1? "Female":"Male"}</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">{person?.birthday}</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">{person?.known_for_department}</Text>
                    </View>
                    <View className=" px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">%{person?.popularity?.toFixed(2)}</Text>
                    </View>
                    </View>
                    <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        {person?.biography}
                    </Text>
                    </View>
                    <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
                </View>
        </View>
      )}
    </ScrollView>
  );
};

export default PersonScreen;
