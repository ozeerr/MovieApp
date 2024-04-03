import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme';
import {height, width} from '../utils/constants';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'mt-3';
const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

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
                        uri: 'https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg',
                        }}
                        style={{height: height * 0.43, width: width * 0.74}}
                    />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                    Keanu Reeves
                    </Text>
                    <Text className="text-base text-neutral-500  text-center">
                    London, United Kingdom
                    </Text>

                    <View className="mx-3 p-4 mt-6 justify-between flex-row items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">1964-09-02</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>
                    <View className=" px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">64.23</Text>
                    </View>
                    </View>
                    <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        Keanu Charles Reeves, whose first name means "cool breeze over
                        the mountains" in Hawaiian, was born September 2, 1964 in
                        Beirut, Lebanon. He is the son of Patric Reeves, a showgirl and
                        costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's
                        father was born in Hawaii, of British, Portuguese, Native
                        Hawaiian, and Chinese ancestry, and Keanu's mother is originally
                        from Essex England. After his parents' marriage dissolved, Keanu
                        moved with his mother and younger sister, Kim Reeves, to New
                        York City, then Toronto. Stepfather #1 was Paul Aaron, a stage
                        and film director - he and Patricia divorced within a year,
                        after which she went on to marry (and divorce) rock promoter
                        Robert Miller. Reeves never reconnected with his biological
                        father. In high school, Reeves was lukewarm toward academics but
                        took a keen interest in ice hockey (as team goalie, he earned
                        the nickname "The Wall") and drama. He eventually dropped out of
                        school to pursue an acting career.
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
