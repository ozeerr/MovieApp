import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/appNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();
const App = () => {
  return (
     <NavigationContainer>
        <AppNavigation />
     </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})