import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../configs/Theme'
import { AuthContext } from '../../reducers/Auth'
import styles from './styles'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import FontAwesome from '../../components/Icon/FontAwesome'
import Material from '../../components/Icon/Material'
import LinearGradient from 'react-native-linear-gradient'
import { StackNavigationProp } from '@react-navigation/stack'

export default function Index({ navigation }: { navigation: StackNavigationProp<any> }) {
  const { dispatch } = useContext(AuthContext);
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#fff' }}>
      <View style={styles.cardLine}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AccountInfo')}>
            <View style={styles.cardIcon}>
              <FontAwesome name="user-secret" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <SimpleLineIcon name="rocket" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Skills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <SimpleLineIcon name="rocket" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Setting</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardLine}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <SimpleLineIcon name="rocket" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <SimpleLineIcon name="rocket" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Working days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <Material name="timer-off" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Take leave</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardLine}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <Material name="timer-off" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Salary Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <FontAwesome name="users" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Payslips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardIcon}>
              <FontAwesome name="users" color='#fff' solid size={25} />
            </View>
            <Text style={[styles.cardTxt, { color: colors.primary }]}>Staffs</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        alignItems: 'center',
        marginTop: 50
      }}>
        <TouchableOpacity style={{
          width: '70%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
        }} onPress={() => dispatch({ type: 'LOGOUT' })} >
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
          }}>
            <Text style={[{
              fontSize: 18,
              fontWeight: 'bold'
            }, { color: '#fff' }]}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}
