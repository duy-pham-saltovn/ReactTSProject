import React from 'react'
import { ImageStyle, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { format } from 'date-fns'
import { makeImageURL } from '../../common/Utils'
import { IPost } from 'src/Interfaces/Post'
import Image from '../../components/Image/Index'
import styles from './styles'

export default function HomeList(props: { style?: ViewStyle | TextStyle | ImageStyle, item: IPost, onPress?: any, formatDate?: string }) {
  const { style, item, formatDate, onPress } = props

  const createdAt = new Date(item.created_at)

  function onPressItem(item: IPost) {
    if (onPress) onPress(item)
  }

  return (
    <TouchableOpacity key={`home_list_key_${item.post_id}`} style={[styles.listContent, style]} onPress={() => onPressItem(item)}>
      <Image source={{ uri: `${makeImageURL(item.image.media_url)}` }} style={styles.listImage} />
      <View style={styles.listContentRight}>
        <Text style={styles.title} numberOfLines={2}>{item.post_title}</Text>
        <Text numberOfLines={3} style={{ marginTop: 5 }}>{item.short_desc}</Text>
        <Text style={{ marginTop: 10 }}>{format(createdAt, formatDate ?? 'Y-MM-dd')}</Text>
      </View>
    </TouchableOpacity>
  )
}