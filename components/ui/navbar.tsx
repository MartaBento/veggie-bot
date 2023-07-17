"use client";

import {
  Flex,
  Stack,
  Button,
  Text,
  useColorModeValue,
  useColorMode,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const logoTextColor = useColorModeValue("sage", "neutralBeige");

  return (
    <Flex px={4} h={16} alignItems="center" justifyContent="space-between">
      <Text
        position="relative"
        fontFamily="'League Spartan', sans-serif"
        fontWeight="bold"
        fontSize="xl"
        color={logoTextColor}
        letterSpacing="tight"
        _after={{
          content: "''",
          width: "full",
          height: "30%",
          position: "absolute",
          bottom: 1,
          left: 0,
          bg: useColorModeValue("neutralBeige", "brownish"),
          zIndex: -1,
        }}
      >
        veggieBot
      </Text>
      <Flex alignItems="center">
        <Stack direction="row" spacing={7}>
          <Button
            variant="unstyled"
            onClick={toggleColorMode}
            aria-label={
              colorMode === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"
            }
          >
            <VisuallyHidden>
              {colorMode === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </VisuallyHidden>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Navbar;
