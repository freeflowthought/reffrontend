import { mode } from "@chakra-ui/theme-tools";
import {theme as baseTheme} from '@chakra-ui/react'

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    brand: baseTheme.colors.teal
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
        fontFamily: 'Helvetica, sans-serif',

      },
      html: {
        fontFamily: 'Helvetica, sans-serif'
      },
      "a.chakra-link": {
        color: 'brand'       
      }
    }),
  },
};
