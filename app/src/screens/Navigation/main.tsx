import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import { BaseColor } from '../../components/Color/Index'
import FontAwesome from '../../components/Icon/FontAwesome'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import Home from '../Home/index'
import Detail from '../Detail/Index'
import SignInScreen from '../Account/SignIn'
import SignUpScreen from '../Account/SignUp'
import About from '../About/Index';


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
    <View>
      <Text>Event</Text>
    </View>
  )
}

function Account() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  )
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
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
        component={Account}
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
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" solid color={color} size={20} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
