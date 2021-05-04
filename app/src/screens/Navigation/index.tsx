import React, { useEffect, useReducer } from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'
import Main from './main'
import { userState, useLoginReducer, AuthContext } from '../../reducers/Auth'
import { logHightLevel, getAsyncStorage } from '../../common/Utils'

const RootStack = createStackNavigator();

export default function Navigator() {
  const [loginState, dispatch] = useReducer(useLoginReducer, userState)

  useEffect(() => {
    SplashScreen.hide()
    // Init app will set token first
    setTimeout(async () => {
      let loginInfo = null;
      try {
        loginInfo = await getAsyncStorage('LOGIN_INFO')
      } catch (e) {
        console.log(e);
      }
      logHightLevel('Navagiate.index: ', loginState?.token)
      if (loginInfo !== null && loginInfo !== '') {
        dispatch({ type: 'RETRIEVE_TOKEN', payload: { token: loginInfo.token } })
      }
    }, 1000)
  }, [])

  return (
    <AuthContext.Provider value={{ loginState, dispatch }}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }} initialRouteName="Loading">
          <RootStack.Screen name="Main" component={Main} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
