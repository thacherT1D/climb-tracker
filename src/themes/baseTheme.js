import colorPalette from './colorPalette';

export const breakpoints = ['512px', '768px', '1024px', '1280px'];

export const colors = {
  ...colorPalette.primary,
  ...colorPalette.secondary,
  ...colorPalette.neutrals,
  ...colorPalette.extended,
  text: {
    primary: '#4F6A92',
    primaryDisabled: '#A6B1BB',
    primarySubdued: '#7E98C3',
    link: '#6582FF',
  },
  border: {
    default: colorPalette.extended.grays[1],
  },
};

export const borders = {
  default: `1px solid ${colors.border.default}`,
  input: `1px solid ${colors.border.default}`,
  modal: `1px solid ${colors.border.default}`,
};

export const fonts = {
  default: 'Basis, "Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: '"Basis Mono", "Andale Mono", monospace',
};

export const fontSizes = [12, 14, 16, 20, 24, 36, 48];

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

export const lineHeights = [1, 1.25, 1.33, 1.5, 1.75, 2];

export const mediaQueries = {
  phone: '@media screen and (max-width: 512px)',
  tablet: '@media screen and (max-width: 767px)',
  laptop: '@media screen and (max-width: 1024px)',
  desktop: '@media screen and (min-width: 1280px)',
};

export const radii = {
  default: 4,
  input: 3,
};

export const shadows = {
  small: '0px 0px 1px rgba(67, 90, 111, 0.47)',
  large: '0px 3px 6px rgba(67, 90, 111, 0.301);',
};

export const space = [0, 4, 8, 16, 24, 32, 48, 64, 96, 128];

export const transitions = {
  easeOut: 'all .2s ease-out',
};

export const zIndices = [0, 10, 100, 1000];

/* Element Theming */
export const buttons = {
  primary: {
    backgroundColor: colors.purpleMedium,
    border: borders.input,
    borderColor: colors.purpleMedium,
    color: colors.white,
    '&:hover,&:active,&:focus': {
      backgroundColor: colors.text.primary,
      borderColor: colors.text.primary,
    },
  },
  secondary: {
    bg: colors.white,
    color: colors.text.primary,
    border: borders.input,
    '&:hover,&:active,&:focus': {
      color: colors.white,
      backgroundColor: colors.text.primary,
      borderColor: colors.text.primary,
    },
  },
};

export default {
  breakpoints,
  buttons,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  mediaQueries,
  radii,
  shadows,
  space,
  transitions,
  zIndices,
};
