import React, { useState } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import styles from './style'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import MaterialIcons from '../../components/Icon/MaterialIcons'
import FontAwesome from '../../components/Icon/FontAwesome'
import Material from '../../components/Icon/Material'
import { BaseColor } from '../../components/Color/Index'
import { useTheme } from '../../configs/Theme'
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Index() {
  const { colors } = useTheme()
  const [region] = useState({
    latitude: 10.79164346,
    longitude: 106.69741627,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  })

  const h = useWindowDimensions().height - 520;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.viewRow}>
          <MaterialIcons name="home-city-outline" color={colors.primary} size={30} />
          <Text style={styles.label}>Company name:</Text>
          <Text style={styles.txt}>Salto Viet Nam</Text>
        </View>
        <View style={styles.viewRow}>
          <FontAwesome name="user-secret" color={colors.primary} size={30} />
          <Text style={styles.label}>CEO:</Text>
          <Text style={styles.txt}>NGO TUAN ANH</Text>
        </View>
        <View style={styles.viewRow}>
          <MaterialIcons name="open-source-initiative" color={colors.primary} size={30} />
          <Text style={styles.label}>Established:</Text>
          <Text style={styles.txt}>December, 27 2019</Text>
        </View>
        <View style={styles.viewRow}>
          <Material name="attach-money" color={colors.primary} size={30} />
          <Text style={styles.label}>Capital:</Text>
          <Text style={styles.txt}>50.000 USD</Text>
        </View>
        <View style={styles.viewRow}>
          <MaterialIcons name="source-branch-check" color={colors.primary} size={30} />
          <Text style={styles.label}>Branch:</Text>
          <Text style={styles.txt}>株式会社SALTO</Text>
        </View>
        <View style={styles.viewRow}>
          <MaterialIcons name="map-marker-radius" color={colors.primary} size={30} />
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