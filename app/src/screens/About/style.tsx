import { StyleSheet } from 'react-native'
import { BaseColor } from '../../components/Color/Index';

export default StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BaseColor.orangeColor,
    height: 80,
    paddingTop: 40,
    width: '100%'
  },
  headerText: {
    fontSize: 17,
    fontWeight: "600",
    color: BaseColor.whiteColor,
    textAlign: 'center'
  },
  iconBack: {
    position: 'absolute',
    left: 10
  },
  container: {
    flex: 1,
    backgroundColor: BaseColor.whiteColor,
    paddingHorizontal: 10
  },
  viewRow: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5,
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 5,
    paddingHorizontal: 5
  },
  txt: {
    fontSize: 16,
    lineHeight: 17
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})