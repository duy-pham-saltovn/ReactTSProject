import React, { useState } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import styles from './style'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import { BaseColor } from '../../components/Color/Index'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Index({ navigation, route }: { navigation: any, route: any }) {
  const [region] = useState({
    latitude: 10.79164346,
    longitude: 106.69741627,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  })

  const h = useWindowDimensions().height - 520;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity style={{
          flex: 1, paddingHorizontal: 20,
        }} onPress={() => navigation.goBack()}>
          <SimpleLineIcon name="arrow-left-circle" color={BaseColor.whiteColor} size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Salto Vietnam</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.viewRow}>
          <Text style={styles.label}>Company name:</Text>
          <Text style={styles.txt}>Salto Viet Nam</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.label}>CEO:</Text>
          <Text style={styles.txt}>NGO TUAN ANH</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.label}>Established:</Text>
          <Text style={styles.txt}>December, 27 2019</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.label}>Capital:</Text>
          <Text style={styles.txt}>50.000 USD</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.label}>Branch:</Text>
          <Text style={styles.txt}>株式会社SALTO</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.txt}>55-57 Nguyen Van Giai, DaKao Ward, District 1, HCMC</Text>
        </View>
      </View>
      <View style={{ height: h, width: '100%' }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          onRegionChange={() => { }}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Salto Viet Nam"
          />
        </MapView>
      </View>
    </View >
  )
}