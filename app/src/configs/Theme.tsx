import { useColorScheme } from 'react-native'

/**
 * Define Const color use for whole application
 */
export const BaseColor = {
  grayColor: '#9B9B9B',
  dividerColor: '#BDBDBD',
  whiteColor: '#FFFFFF',
  fieldColor: '#F5F5F5',
  yellowColor: '#FDC60A',
  navyBlue: '#3C5A99',
  kashmir: '#5D6D7E',
  orangeColor: '#ff4d00', //'#E5634D',
  blueColor: '#5DADE2',
  pinkColor: '#A569BD',
  greenColor: '#58D68D',
  whileOpacity: 'rgba(254, 251, 251, 0.9)',
  redColor: 'red'
}

/**
 * Define Const list theme use for whole application
 */
export const ThemeSupport = [
  {
    theme: 'orange',
    light: {
      dark: false,
      colors: {
        primary: '#E5634D',
        primaryDark: '#C31C0D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        textWhite: 'white',
        border: '#c7c7cc',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#E5634D',
        primaryDark: '#C31C0D',
        primaryLight: '#FF8A65',
        accent: '#4A90A4',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        textWhite: 'white',
        border: '#272729',
      },
    },
  },
  {
    theme: 'pink',
    light: {
      dark: false,
      colors: {
        primary: '#A569BD',
        primaryDark: '#C2185B',
        primaryLight: '#F8BBD0',
        accent: '#8BC34A',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        textWhite: 'white',
        border: '#c7c7cc',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#A569BD',
        primaryDark: '#C2185B',
        primaryLight: '#F8BBD0',
        accent: '#8BC34A',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        textWhite: 'white',
        border: '#272729',
      },
    },
  },
  {
    theme: 'blue',
    light: {
      dark: false,
      colors: {
        primary: '#5DADE2',
        primaryDark: '#1281ac',
        primaryLight: '#68c9ef',
        accent: '#FF8A65',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        textWhite: 'white',
        border: '#c7c7cc',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#5DADE2',
        primaryDark: '#1281ac',
        primaryLight: '#68c9ef',
        accent: '#FF8A65',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        textWhite: 'white',
        border: '#272729',
      },
    },
  },
  {
    theme: 'green',
    light: {
      dark: false,
      colors: {
        primary: '#58D68D',
        primaryDark: '#388E3C',
        primaryLight: '#C8E6C9',
        accent: '#607D8B',
        background: '#58D68D', //'white',
        card: '#F5F5F5',
        text: '#212121',
        textWhite: 'white',
        border: '#c7c7cc',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#58D68D',
        primaryDark: '#388E3C',
        primaryLight: '#C8E6C9',
        accent: '#607D8B',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        textWhite: 'white',
        border: '#272729',
      },
    },
  },
  {
    theme: 'yellow',
    light: {
      dark: false,
      colors: {
        primary: '#FDC60A',
        primaryDark: '#FFA000',
        primaryLight: '#FFECB3',
        accent: '#795548',
        background: 'white',
        card: '#F5F5F5',
        text: '#212121',
        textWhite: 'white',
        border: '#c7c7cc',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#FDC60A',
        primaryDark: '#FFA000',
        primaryLight: '#FFECB3',
        accent: '#795548',
        background: '#010101',
        card: '#121212',
        text: '#e5e5e7',
        textWhite: 'white',
        border: '#272729',
      },
    },
  },
];


/**
 * Define default theme use for whole application
 */
export const DefaultTheme = {
  theme: 'orange',
  light: {
    dark: false,
    colors: {
      primary: '#E5634D',
      primaryDark: '#C31C0D',
      primaryLight: '#FF8A65',
      accent: '#4A90A4',
      background: 'white',
      card: '#F5F5F5',
      text: '#212121',
      textWhite: 'white',
      border: '#c7c7cc',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#E5634D',
      primaryDark: '#C31C0D',
      primaryLight: '#FF8A65',
      accent: '#4A90A4',
      background: '#010101',
      card: '#121212',
      text: '#e5e5e7',
      textWhite: 'white',
      border: '#272729',
    },
  },
};

/**
 * Define list font use for whole application
 */
export const FontSupport = ['Roboto', 'Merriweather'];

/**
 * Define font default use for whole application
 */
export const DefaultFont = 'Roboto';

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const scheme = useColorScheme();

  const themeStorage = 'green'
  const listTheme = ThemeSupport.filter(item => item.theme == themeStorage)
  const theme = listTheme.length > 0 ? listTheme[0] : DefaultTheme

  return scheme === 'dark' ? { theme: theme.dark, colors: theme.dark.colors } : { theme: theme.light, colors: theme.light.colors }
}

/**
 * export font for application
 * @returns font
 */
export const useFont = () => {
  return DefaultFont;
}