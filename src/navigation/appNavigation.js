import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
      <Stack.Screen name="Person" options={{headerShown:false}} component={PersonScreen} />
      <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} />
    </Stack.Navigator>

  );
}

export default AppNavigation;