import { Dimensions, PixelRatio, Platform } from "react-native";

const scaleValue = PixelRatio.get() / 2;

export function scaleWithPixel(size: number, limitScale = 1.2) {
  /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
  const value = scaleValue > limitScale ? limitScale : scaleValue;
  return size * value;
};


export const heightHeader = () => {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const landscape = width > height
  const platform = Platform as any

  if (platform.OS === 'android') return 45;
  if (platform.isPad) return 65;
  switch (height) {
    case 375:
    case 414:
    case 812:
    case 896:
    case 926:
    case 844:
    case 812:
    case 844:
      return landscape ? 45 : 88;
    default:
      return landscape ? 45 : 65;
  }
};