import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'


export default function Header(props: any) {
  const {
    style,
    styleLeft,
    onPressLeft,
    styleCenter,
    renderLeft,
    title,
    styleTitle,
    subTitle,
    styleRightSecond,
    renderRightSecond,
    onPressRightSecond,
    styleRight,
    onPressRight,
    renderRight
  } = props

  return (
    <SafeAreaView style={{ width: '100%' }}>
      <View style={[styles.contain, style]}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={[styles.contentLeft, styleLeft]} onPress={onPressLeft}>
            {renderLeft && renderLeft()}
          </TouchableOpacity>
        </View>
        <View style={[styles.contentCenter, styleCenter]}>
          <Text numberOfLines={1} style={styleTitle}>{title}</Text>
          {subTitle != '' && <Text>{subTitle}</Text>}
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            style={[styles.contentRightSecond, styleRightSecond]}
            onPress={onPressRightSecond}>
            {renderRightSecond && renderRightSecond()}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contentRight, styleRight]}
            onPress={onPressRight}>
            {renderRight && renderRight()}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}
