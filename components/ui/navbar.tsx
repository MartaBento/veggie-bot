"use client";

import { Flex, Stack, Button, Box, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
