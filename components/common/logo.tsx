import { useColorModeValue, Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Logo() {
  const logoBgColor = useColorModeValue("neutralBeige", "brownish");
  const logoTextColor = useColorModeValue("darkSage", "neutralBeige");

  return (
    <Box position="relative" display="inline-block" aria-label="veggieBot logo">
      <Link as={NextLink} href="/" cursor="pointer">
        <Text
          as="div"
          position="relative"
          fontFamily="'League Spartan', sans-serif"
          fontWeight="bold"
          fontSize="xl"
          color={logoTextColor}
          letterSpacing="tight"
        >
          veggieBot
        </Text>
      </Link>
      <Box
        position="absolute"
        width="100%"
        height="30%"
        bottom={1}
        left={0}
        bg={logoBgColor}
        zIndex={-1}
      />
    </Box>
  );
}

export default Logo;
