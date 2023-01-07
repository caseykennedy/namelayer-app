import { makeTheme } from 'dripsy';

import { colors } from './colors';
import { fontName, monoFontName } from './fonts';

const baseButton = {
  alignItems: 'center',
  px: 'sm',
  py: 'sm',
  mb: 'xs',

  bg: 'bg.900',
  borderRadius: 'sm',
  borderStyle: 'solid',
  borderColor: 'border.light',
  borderWidth: 1,

  width: '100%',
};

export const theme = makeTheme({
  colors,
  space: {
    none: 0,
    xxxxs: 1,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 64,
    xxl: 128,
    xxxl: 256,
    xxxxl: 512,
    gutter: 16,
  },
  customFonts: {
    [fontName]: {
      // I recommend setting every weight here
      default: fontName,
      normal: fontName,
      bold: `${fontName}-Bold`,
      400: fontName,
      500: `${fontName}-Medium`,
      600: `${fontName}-Bold`,
      700: `${fontName}-Bold`,
      800: `${fontName}-Bold`,
      900: `${fontName}-Bold`,
    },
    [monoFontName]: {
      default: monoFontName,
      normal: monoFontName,
      400: monoFontName,
    },
  },
  fonts: {
    root: fontName,
    mono: `${fontName}-Mono`,
  },
  fontSizes: {
    xxxs: 10,
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 18,
    lg: 24,
    xl: 28,
    xxl: 36,
    xxxl: 44,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '600',
    black: '900',
  },
  text: {
    body: {
      color: 'text',
      fontSize: 'sm',
    },
    mono: {
      color: 'muted',
      fontFamily: 'mono',
      letterSpacing: -0.5,
    },

    medium: { fontWeight: 'medium' },
    bold: { fontWeight: 'bold' },
    centered: { textAlign: 'center' },

    muted: { color: 'muted' },
    error: { color: 'danger.500' },

    xxxs: { fontSize: 'xxxs' },
    xxs: { fontSize: 'xxs' },
    xs: { fontSize: 'xs' },
    sm: { fontSize: 'sm' },
    md: { fontSize: 'md' },
    lg: { fontSize: 'lg' },
    xl: { fontSize: 'xl' },
    xxl: { fontSize: 'xxl' },
    xxxl: { fontSize: 'xxxl' },
  },
  button: {
    default: {
      ...baseButton,
    },
    primary: {
      ...baseButton,
      bg: 'primary',
      borderColor: 'border.dark',
    },
  },
  // forms: {
  //   input: {
  //     alignItems: 'center',
  //     px: 'sm',
  //     py: 'sm',
  //     // mb: 'xs',
  //     bg: 'bg.900',
  //     borderRadius: 'sm',
  //     borderStyle: 'solid',
  //     // borderColor: 'border.light',
  //     borderWidth: 1,
  //     width: '100%',
  //   },
  // },
  shadows: {
    md: {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.8,
      shadowRadius: 14,
      elevation: 25,
      shadowColor: 'bg.900',
    },
  },
  borders: {
    bottom: {
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border',
    },
  },
  radii: {
    full: 9999,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  textShadows: {
    onImage: {
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      textShadowColor: 'gray',
    },
  },
  linearGradients: {
    strong: ['primary', 'secondary'],
  },
  sizes: {
    container: 700,
  },
  layout: {
    container: {
      flex: 1,
      maxWidth: 'container',
    },
  },
  types: {
    onlyAllowThemeValues: {
      // let's only restrict colors!
      // colors: 'always',
      space: 'always',
    },
    reactNativeTypesOnly: true,
    // strictVariants: true,
  },
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
