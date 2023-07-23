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
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "react-query";

function VeggieBot({ Component, pageProps }: AppProps) {
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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default VeggieBot;
