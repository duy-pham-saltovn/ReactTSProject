import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, } from 'react-native'
import { IPost } from '../../Interfaces/Post'
import styles from './style'
import CONFIG from '../../configs/config'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Progressive
} from "rn-placeholder"

import { fetchData } from '../../api/HandleRequest'
import HomeList from '../../components/HomeList/Index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Image from '../../components/Image/Index'
import { AuthContext } from '../../reducers/Auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { BaseColor } from '../../configs/Theme'

const avatar = require('../../assets/avatar.jpg')

export default function Home({ navigation }: { navigation: StackNavigationProp<any> }) {
  const [data, setData] = useState<IPost[]>([])
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [endReached, setEndReached] = useState(false)
  const [offset, setOffset] = useState(1)
  const { loginState } = useContext(AuthContext)

  /**
   * Fetch data when load page
   */
  useEffect(() => {
    let current = true
    setLoading(true)
    async function fetchItem() {
      const res = await fetchData(CONFIG.API_POST)
      if (res.isError) return setLoading(false)

      if (current) {
        setLoading(false)
        setData(res.results.data)
      }
    }

    fetchItem();

    return () => { current = false }
  }, [])

  /**
   * Refresh new data when pull down
   */
  useEffect(() => {
    let current = true
    setOffset(0)
    async function fetchItem() {
      const res = await fetchData(CONFIG.API_POST);
      if (res.isError) return setRefreshing(false)

      if (current) {
        setRefreshing(false)
        setData(res.results.data)
      }

    }
    if (refreshing) {
      fetchItem();
    }
    return () => { current = false }
  }, [refreshing])

  /**
   * Refresh new data when pull up
   */
  useEffect(() => {
    let current = true
    async function fetchItem() {
      const res = await fetchData(`${CONFIG.API_POST}?page=${offset}`);
      if (res.isError) return setEndReached(false)

      if (current) {
        setData([...data, ...res.results.data])
        setEndReached(false)
      }

    }
    if (endReached) {
      fetchItem();
    }
    return () => { current = false }
  }, [endReached])

  /**
   * Render placeholder
   * @returns Placeholder
   */
  function renderLoading(total = 1 as number) {
    const listItems = [...Array(total)].map((_x, i) =>
      <View key={i} style={styles.holderHomeBox}>
        <View style={{ width: 100 }}>
          <PlaceholderMedia style={styles.holderHomeImg} />
        </View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <PlaceholderLine style={{ width: '50%' }} />
          <PlaceholderLine style={{ width: '100%' }} />
          <View style={styles.holderHomeLineMap}>
            <PlaceholderLine style={{ width: '25%' }} />
          </View>
          <View style={styles.holderHomeLinePhone}>
            <PlaceholderLine style={{ width: '50%' }} />
          </View>
        </View>
      </View>
    )

    return <Placeholder Animation={Progressive}>{listItems}</Placeholder>
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1 }}>
        <View style={styles.contentHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.headerText}>Salto Vietnam</Text>
          </TouchableOpacity>
          {
            loginState.token && <TouchableOpacity>
              <Image style={styles.avatar} source={avatar} />
            </TouchableOpacity>
          }

        </View>
        {loading ? renderLoading(6) :
          <FlatList
            contentContainerStyle={{ backgroundColor: '#eee' }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={data as IPost[]}
            renderItem={({ item }) =>
              <HomeList onPress={() => navigation.navigate('DetailItem', item)} item={item} style={styles.homeListItem} />
            }
            keyExtractor={(_item, index) => `home_item_${index}`}
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
            onEndReached={() => { setOffset(previusOffset => previusOffset + 1); setEndReached(true) }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              <View style={{ flex: 1, justifyContent: "center", marginVertical: 10 }}>
                <ActivityIndicator size="large" color={BaseColor.orangeColor} />
              </View>
            }
          />
        }
      </View >
    </SafeAreaView>
  )
}