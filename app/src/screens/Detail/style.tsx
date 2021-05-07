import { StyleSheet } from 'react-native'
import { BaseColor } from '../../configs/Theme'

export default StyleSheet.create({
  imgBanner: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 5,
  },
  contain: { height: 45, flexDirection: 'row' },
  captionAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 0,
    flexDirection: 'row',
    backgroundColor: BaseColor.whileOpacity,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  textAbsolute: {
    color: BaseColor.orangeColor
  },
  captionRelative: {
    position: 'relative',
  }
})