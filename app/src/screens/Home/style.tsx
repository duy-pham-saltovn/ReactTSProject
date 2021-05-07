import { StyleSheet } from 'react-native'
import { BaseColor } from '../../configs/Theme';

export default StyleSheet.create({
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 10,
    borderBottomColor: BaseColor.orangeColor,
    borderBottomWidth: 1
  },
  headerText: {
    fontSize: 17,
    fontWeight: "600",
    color: BaseColor.orangeColor
  },
  holderHomeBox: {
    flexDirection: 'row',
    alignItems: "center",
    padding: 10
  },
  holderHomeImg: {
    height: 100,
    width: 100,
    borderRadius: 10
  },
  holderHomeLineMap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  holderHomeLinePhone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  homeListItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 5,
    backgroundColor: '#fff'
  }
});