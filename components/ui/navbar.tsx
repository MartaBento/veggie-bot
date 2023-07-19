import {
  Flex,
  Stack,
  Button,
  useColorMode,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "./logo";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex px={4} h={16} alignItems="center" justifyContent="space-between">
      <Logo />
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
