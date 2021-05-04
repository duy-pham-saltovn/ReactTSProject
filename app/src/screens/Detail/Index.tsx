import React, { useEffect, useState } from "react"
import { Animated, SafeAreaView, ScrollView, Text, useWindowDimensions, View } from "react-native"
import HTML from "react-native-render-html"
import { BaseColor } from "../../components/Color/Index"
import { IPost, IDetail } from '../../Interfaces/Post'
import Image from '../../components/Image/Index'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import * as Utils from '../../utils/Index'
import styles from './style'
import Header from "../../components/Header/Index"
import { findOne } from "../../api/HandleRequest"
import CONFIG from "../../configs/config"
import format from "date-fns/format"

export default function Detail({ navigation, route }: { navigation: any, route: any }) {
  const info = route.params as IPost
  const deltaY = new Animated.Value(0);
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const heightImageBanner = Utils.scaleWithPixel(300, 1);
  const contentWidth = useWindowDimensions().width;
  const [data, setData] = useState<IDetail | null>(null)

  useEffect(() => {
    let current = true;
    async function fetchAnime() {
      const res = await findOne(CONFIG.API_POST, info.post_id)
      // let content = res.results[0].content as string
      // content = content.trim()
      if (current) {
        setData(res.results)
      }
    }

    fetchAnime();
    return () => { current = false }
  }, [])
  /**
   * render Banner
   * @returns
   */
  function renderBanner() {
    const createdAt = data?.created_at ? new Date(data?.created_at) : ''
    return (
      <Animated.View
        style={[
          styles.imgBanner,
          {
            height: deltaY.interpolate({
              inputRange: [
                0,
                Utils.scaleWithPixel(150),
                Utils.scaleWithPixel(150),
              ],
              outputRange: [heightImageBanner, heightHeader, heightHeader],
            }),
          },
        ]}>
        <Image source={{ uri: `${CONFIG.IMAGE_URL}/${data?.media_url}` }} style={{ flex: 1, height: 300 }} />
        <Animated.View
          style={[styles.captionAbsolute, {
            opacity: deltaY.interpolate({
              inputRange: [
                0,
                Utils.scaleWithPixel(150),
                Utils.scaleWithPixel(150),
              ],
              outputRange: [1, 0, 0],
            }),
          }]}>
          <Image source={{ uri: data?.is_new_avatar === 1 ? data?.profile_url : `${CONFIG.IMAGE_URL}/${data?.profile_url}` }} style={styles.userIcon} />
          <View style={{ justifyContent: "space-around" }}>
            <Text style={styles.textAbsolute}>
              {createdAt && format(createdAt, 'Y-MM-dd')}
            </Text>
            <Text style={styles.textAbsolute}>
              {data?.full_name}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    )
  }

  return (
    <View style={{ flex: 1, }}>
      {renderBanner()}
      <Header
        title=""
        subTitle=""
        styleLeft={{ paddingHorizontal: 10 }}
        styleCenter={{ color: BaseColor.whiteColor }}
        renderLeft={() => <SimpleLineIcon name="arrow-left-circle" color={BaseColor.whiteColor} size={30} />}
        renderRight={() => <SimpleLineIcon name="arrow-left-circle" size={20} color={BaseColor.whiteColor} />}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate('PreviewImage', { gallery: '111' })}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: deltaY },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          onContentSizeChange={() => setHeightHeader(Utils.heightHeader())}
          scrollEventThrottle={50}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ height: 300 - heightHeader }} />
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20 }}>{data?.short_desc}</Text>
          </View>
          <View style={{ padding: 10 }}>
            <HTML
              source={{ html: data?.post_content?.replace('<p></p>', '') || '<p></p>' }}
              ignoredStyles={['font-family']}
              contentWidth={contentWidth} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}