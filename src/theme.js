// import { checkboxAnatomy, selectAnatomy } from '@chakra-ui/anatomy';
import {
  extendTheme,
  defineStyleConfig,
//   createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    overflow: 'hidden',
    mt: 1.5,
  },
  variants: {
    brand: {
      transition: 'transform .2s ease-in-out',
      height: 'fit-content',
      padding: '5px 9px',
      color: 'white',
      fontWeight: 600,
      background: 'hsla(252, 89%, 78%, 1)',
      _hover: {
        transform: 'scale(1.03)',

      },
    },
    ghost: {
      border: '1px solid',
      height: 'fit-content',
      padding: '5px 13px',
      borderColor: 'gray.300',
    },
  },
  defaultProps: {
    variant: 'brand',
  },
});
const Link = defineStyleConfig({
  baseStyle: {
    cursor: 'alias',
    _hover: {
      textDecor: 'none',
    },
  },
  // variants: {
  //   common: {
  //     position: 'relative',
  //     _before: {
  //       content: "''",
  //       width: 'full',
  //       height: 'full',
  //       zIndex: -1,
  //       bg: 'gray.100',
  //       transform: 'translate(-50%, calc(-50% - 2px)) scale(0.95)',
  //       borderRadius: '4px',
  //       opacity: 0,
  //       position: 'absolute',
  //       top: '50%',
  //       left: '50%',
  //       transition: 'transform 150ms 0s ease, opacity 150ms 10ms ease',
  //     },
  //     _hover: {
  //       textDecoration: 'none',
  //       _before: {
  //         transform: 'translate(-50%, calc(-50% - 2px)) scale(1)',
  //         opacity: 1,
  //       },
  //     },
  //   },
  // },
  // defaultProps: {
  //   variant: 'common',
  // },
});
const theme = extendTheme({
  breakpoints: {
    sm: '0px',
    md: '670px',
    lg: '840px',
    xl: '1030px',
    '2xl': '1536px',
  },
  styles: {
    global: {
      body: {
        lineHeight: 1.6,
        bg: '#f9f9f9',
      },
      '#root': {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        p: 5,
        maxW: '1600px',
        margin: '0 auto',
        alignItems: 'center',
      },
    },
  },
  fonts: {
    body: "'Mabry Pro',sans-serif",
    heading: "'Mabry Pro', sans-serif",
  },
  //   colors: {
  //     brand: {
  //       50: '#f4f7ff',
  //       100: '#d2e1ff',
  //       200: '#aac6ff',
  //       300: '#78a5ff',
  //       400: '#5a91ff',
  //       500: '#2f75ff',
  //       600: '#145def',
  //       700: '#104bc1',
  //       800: '#0d3fa3',
  //       900: '#0a2e77',
  //     },
  //   },
  //   borders: {
  //     default: '1px solid #E2E8F0',
  //     brand: '2px solid #78a5ff',
  //     highlighted: '1px solid #ccd1d9',
  //   },
  components: {
    Button,
    Link,
  },
});
export default theme;
