import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  headerLogo: {
    flex: 1,
    height: 270,
    width: 'auto',
    resizeMode: 'contain',
  },
});

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      {/* <Image
        style={styles.headerLogo}
        source={require('../../images/test.png')}
      /> */}
    </View>
  );
}
