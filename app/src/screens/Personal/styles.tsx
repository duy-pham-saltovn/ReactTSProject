import { StyleSheet } from "react-native";
import { BaseColor } from '../../configs/Theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  card: {
    flex: 1,
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  cardLine: {
    paddingBottom: 20,
  },
  cardLabel: {
    textAlign: "center",
    color: BaseColor.grayColor,
    fontSize: 25,
  },
  cardIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: BaseColor.greenColor,
    borderRadius: 50,
  },
  cardTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: BaseColor.grayColor,
  }
})
