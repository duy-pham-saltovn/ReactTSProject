
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import styles from './Styles'

export default function SignIn({ navigation }: { navigation: StackNavigationProp<any> }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
    </View>
  )
}
