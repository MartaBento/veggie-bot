// https://chakra-ui.com/getting-started/nextjs-guide
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/league-spartan/900.css";

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
  neutralBeige: "#F1EFE7",
  brownish: "#745E4D",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors,
  config,
  fonts: { body: `'Inter', sans-serif`, heading: `'Open Sans', sans-serif` },
  styles: {
    global: ({ colorMode }: { colorMode: string }) => ({
      body: {
        "--chakra-colors-bg": `var(--chakra-colors-${
          colorMode === "light" ? "neutralBeige" : "brunswickGreen"
        })`,
        color: "default",
      },
    }),
  },
});

export function Providers({ children }: ProvidersProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
