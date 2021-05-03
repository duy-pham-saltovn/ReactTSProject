import { StyleSheet } from 'react-native'
import * as Utils from '../../utils/Index'

export default StyleSheet.create({
  listContent: {
    flexDirection: 'row',
  },
  listImage: {
    height: Utils.scaleWithPixel(80),
    width: Utils.scaleWithPixel(100),
    borderRadius: 8,
  },
  listContentRight: {
    paddingLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});