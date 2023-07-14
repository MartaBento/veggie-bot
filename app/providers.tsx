// https://chakra-ui.com/getting-started/nextjs-guide
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  StyleFunctionProps,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";

type ProvidersProps = {
  children: React.ReactNode;
};

// Palette: https://coolors.co/dad7cd-a3b18a-588157-3a5a40-344e41
const colors = {
  timberwolf: "#DAD7CD",
  sage: "#A3B18A",
  fernGreen: "#588157",
  hunterGreen: "#3A5A40",
  brunswickGreen: "#344E41",
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  colors,
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: "default",
        bg: colors.brunswickGreen,
      },
    }),
  },
});

export function Providers({ children }: ProvidersProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
