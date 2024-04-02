import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
    </Stack.Navigator>

  );
}

export default AppNavigation;