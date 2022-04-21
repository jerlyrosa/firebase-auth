import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import components from "./components";
import foundations from "./foundations";

const theme = extendTheme(
  {
    components,
    ...foundations,
  },
  {
    config: defaultTheme.config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    breakpoints,
    zIndices: defaultTheme.zIndices,
    components: {},
    styles: {
      global:{
        html:{
          fontSize: ' 62.5%',
          boxSizing: 'border-box',
        },
        body:{
          border: 'none',
          margin: '0',
          padding: '0',
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          wordBreak: 'break-word'

        }
      }
    },
    borders: {},
    colors: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    fonts: {
      heading: "sans-serif",
      body: "sans-serif",
    },
    // fontSizes:{},
    // fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  }
);
export default theme;
