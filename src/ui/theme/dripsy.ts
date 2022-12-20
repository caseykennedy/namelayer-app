import { makeTheme } from 'dripsy';

import { fontName, monoFontName } from './fonts';

export const theme = makeTheme({
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
  colors: {
    mode: {
      dark: {
        text: '#E9E8EA',
      },
    },
    black: '#000000',
    white: '#ffffff',
    primary: '',
    secondary: '',
    accent: '',
    text: '#E9E8EA',
    muted: '#96929B',
    border: '#322E3C',
    bg: {
      100: '#5E5B71',
      200: '#524F63',
      300: '#464455',
      400: '#3D3B4A',
      500: '#312F3B',
      600: '#26242D',
      700: '#1C1B22',
      800: '#15141A',
      900: '#070708',
    },
    gold: {
      100: '#E6E2D9',
      200: '#CCC5B3',
      300: '#998A66',
      400: '#AC9358',
      500: '#8C7746',
      600: '#695A35',
      700: '#605230',
      800: '#403720',
      900: '#201B10',
    },
    purple: {
      100: '#D9D3E8',
      200: '#BCB2D7',
      300: '#9F90C5',
      400: '#826FB4',
      500: '#67529D',
      600: '#51417C',
      700: '#3B2F5A',
      800: '#251E39',
      900: '#0F0C17',
    },
    aqua: {
      100: '#F8FCFC',
      200: '#E1F4F3',
      300: '#BBE7E3',
      400: '#96D9D3',
      500: '#71CCC4',
      600: '#4BBEB4',
      700: '#399E95',
      800: '#2B7871',
      900: '#163C38',
    },
    success: {
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
    },
    warning: {
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
    },
    danger: {
      100: '#F4DCD7',
      200: '#F1D2CB',
      300: '#E6AFA3',
      400: '#DB8C7B',
      500: '#D06952',
      600: '#BC4C33',
      700: '#943C28',
      800: '#6C2C1D',
      900: '#441B13',
    },
  },
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
    gutter: 8,
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

    xxs: { fontSize: 'xxs' },
    xs: { fontSize: 'xs' },
    sm: { fontSize: 'sm' },
    md: { fontSize: 'md' },
    lg: { fontSize: 'lg' },
    xl: { fontSize: 'xl' },
    xxl: { fontSize: 'xxl' },
    xxxl: { fontSize: 'xxxl' },
  },
  shadows: {
    md: {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.8,
      shadowRadius: 14,
      elevation: 25,
      shadowColor: 'background',
    },
  },
  sizes: {
    container: 700,
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
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
  layout: {
    wide: {},
    narrow: {},
  },
  types: {
    onlyAllowThemeValues: {
      // let's only restrict colors!
      // colors: 'always',
      space: 'always',
    },
    // strictVariants: true,
  },
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
