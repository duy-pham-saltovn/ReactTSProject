import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './main'
import SplashScreen from 'react-native-splash-screen'


const RootStack = createStackNavigator();

export default function Navigator() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }} initialRouteName="Loading">
          <RootStack.Screen name="Main" component={Main} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  )
}