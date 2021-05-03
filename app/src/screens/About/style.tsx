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
    borderBottomWidth: 1,
    borderBottomColor: BaseColor.grayColor,
    flexWrap: 'wrap'
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 5,
    paddingRight: 5
  },
  txt: {
    fontSize: 16,

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})