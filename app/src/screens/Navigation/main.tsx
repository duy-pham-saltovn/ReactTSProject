import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '../../components/Icon/FontAwesome'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import Home from '../Home/Index'
import Detail from '../Detail/Index'
import PersonalDashboard from '../Personal/Index'
import SignInScreen from '../Account/SignIn'
import About from '../About/Index'
import { AuthContext } from '../../reducers/Auth'
import { BaseColor, useTheme, useFont } from '../../configs/Theme'
import Image from '../../components/Image/Index'

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const avatar = require('../../assets/avatar.jpg')

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

function Job() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={{ fontSize: 30, color: BaseColor.orangeColor }}>Job</Text>
      </View>
    </SafeAreaView>
  )
}

function BottomTabNavigator() {
  const { loginState } = useContext(AuthContext)
  const { colors } = useTheme()
  const font = useFont()

  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false } as any}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: { borderTopWidth: 1 },
        labelStyle: {
          fontFamily: font,
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
        name="Job"
        component={Job}
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <SimpleLineIcon name="rocket" solid color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Personal"
        component={loginState.token ? PersionalScreen : SignInScreen}
        options={{
          title: 'Personal',
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" solid color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="AboutUs"
        component={AboutScreen}
        options={{
          title: 'About Us',
          tabBarIcon: ({ color }: any) => <SimpleLineIcon name="location-pin" solid color={color} size={20} />,
        } as any}

      />
    </BottomTab.Navigator>
  )
}

function AboutScreen() {
  const { colors } = useTheme()
  const { loginState } = useContext(AuthContext)
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.textWhite
        },
      }}
    >
      <MainStack.Screen
        name="About"
        component={About}
        options={{
          title: 'Welcome Salto Vietnam',
          headerRight: () => loginState &&
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Image style={{
                width: 36,
                height: 36,
                borderRadius: 18
              }} source={avatar} />
            </TouchableOpacity>
        }}
      />
    </MainStack.Navigator >
  )
}

function PersionalScreen() {
  const { colors } = useTheme();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.textWhite
        },
      }}
    >
      <MainStack.Screen
        name="Persional"
        component={PersonalDashboard}
        options={{
          title: 'Welcome Salto Vietnam',
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Image style={{
                width: 36,
                height: 36,
                borderRadius: 18
              }} source={avatar} />
            </TouchableOpacity>
          )
        }}
      />
    </MainStack.Navigator >
  )
}