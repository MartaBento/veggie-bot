import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/inter";
import "@fontsource/league-spartan";
import "@fontsource/montserrat";
import "@fontsource/nunito";
import "@fontsource/lato";
import { AppProps } from "next/app";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

function VeggieBot({ Component, pageProps }: AppProps) {
  // Palette: https://coolors.co/dad7cd-a3b18a-588157-3a5a40-344e41
  const colors = {
    timberwolf: "#DAD7CD",
    sage: "#A3B18A",
    darkSage: "#859c66",
    fernGreen: "#588157",
    hunterGreen: "#3A5A40",
    brunswickGreen: "#344E41",
    neutralBeige: "#F1EFE7",
    brownish: "#745E4D",
  };

  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
  };

  const theme = extendTheme({
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

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default VeggieBot;
