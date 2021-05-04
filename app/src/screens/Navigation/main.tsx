import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import { BaseColor } from '../../components/Color/Index'
import FontAwesome from '../../components/Icon/FontAwesome'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import Material from '../../components/Icon/Material'
import Home from '../Home/index'
import Detail from '../Detail/Index'
import About from '../About/Index'
import SignInScreen from '../Account/SignIn';
import { AuthContext } from '../../reducers/Auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="BottomTabNavigator">
        <MainStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <MainStack.Screen name="DetailItem" component={Detail}
        />
      </MainStack.Navigator>
    </>
  )
}

function Event() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={{ fontSize: 30, color: BaseColor.orangeColor }}>Event</Text>
      </View>
    </SafeAreaView>
  )
}

function Profile() {
  const { loginState, dispatch } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 20, color: BaseColor.orangeColor, marginBottom: 30 }}>Welcome: {loginState.username}</Text>
        <TouchableOpacity onPress={() => dispatch({ type: 'LOGOUT' })}>
          <Text style={{ fontSize: 20 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function BottomTabNavigator() {
  const { loginState } = useContext(AuthContext);

  return (
    <BottomTab.Navigator
      initialRouteName="Account"
      screenOptions={{ headerShown: false } as any}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: BaseColor.orangeColor,
        inactiveTintColor: BaseColor.grayColor,
        style: { borderTopWidth: 1 },
        labelStyle: {
          fontSize: 12,
          paddingBottom: 4,
        },
      } as any}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Event"
        component={Event}
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <SimpleLineIcon name="event" solid color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={loginState.token ? Profile : SignInScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" solid color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="AboutUs"
        component={About}
        options={{
          title: 'About Us',
          tabBarIcon: ({ color }) => <Material name="information" solid color={color} size={20} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
