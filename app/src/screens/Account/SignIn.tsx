import React, { useContext } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from '../../components/Icon/FontAwesome'
import styles from './Styles'
import { AuthContext } from '../../reducers/Auth'

export default function SignIn({ navigation }: { navigation: StackNavigationProp<any> }) {
  const { colors } = useTheme();
  const { loginState, dispatch } = useContext(AuthContext)
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  function updateSecureTextEntry() {
    setData({ ...data, secureTextEntry: !data.secureTextEntry })
  }

  function handleUsernameChange(val: string) {
    setData({ ...data, username: val })
  }

  function handlePasswordChange(val: string) {
    setData({
      ...data,
      password: val,
      isValidPassword: val.trim().length > 4 ? true : false
    })
  }

  function handleLogin() {
    const { username, password } = data
    if (username.length == 0 || password.length == 0) {
      return Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [{ text: 'OK' }]);
    }

    if (username === 'admin' && password === '12345') {
      return dispatch({ type: "LOGIN", payload: { username, password } });
    }

    return Alert.alert('Invalid User!', 'Username or password is incorrect.', [{ text: 'OK' }]);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text_footer, { color: colors.text }]}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            style={[styles.textInput, { color: colors.text }]}
            onChangeText={(val) => handleUsernameChange(val)}
          />
        </View>
        <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
            style={[styles.textInput, { color: colors.text }]}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <FontAwesome name={`${data.secureTextEntry ? 'eye-slash' : 'eye'}`} color="grey" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={handleLogin}>
            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
              <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
