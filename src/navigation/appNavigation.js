import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
    </Stack.Navigator>

  );
}

export default AppNavigation;