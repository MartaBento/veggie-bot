import {
  VStack,
  Text,
  Center,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/link";

function ErrorMessage() {
  const { headingColor, textColor, buttonColorScheme, buttonTextColor } =
    useColorModeValue(
      {
        headingColor: "#344E41",
        textColor: "#344E41",
        buttonColorScheme: "sage",
        buttonTextColor: "white",
      },
      {
        headingColor: "#DAD7CD",
        textColor: "#DAD7CD",
        buttonColorScheme: "fernGreen",
        buttonTextColor: "black",
      }
    );

  return (
    <Center minHeight="50vh" p={4}>
      <VStack spacing={8} textAlign="center" maxW="lg">
        <RiErrorWarningFill size="72px" color={headingColor} />
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontFamily="Lato, sans-serif"
          fontWeight={700}
          color={headingColor}
        >
          Sorry! The vegan data is temporarily unavailable.
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          color={textColor}
          fontFamily="Montserrat, sans-serif"
          fontWeight={500}
        >
          We apologize for the inconvenience. Our vegan servers are taking a
          little break.
        </Text>
        <Link href="/">
          <Button
            colorScheme={buttonColorScheme}
            bg={buttonColorScheme}
            rounded="full"
            px={6}
            color={buttonTextColor}
            _hover={{ opacity: 0.9, boxShadow: "md" }}
            fontFamily="Montserrat, sans-serif"
            fontWeight={700}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            letterSpacing="wider"
            textAlign="center"
          >
            Take me back to VeggieBot Home
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}

export default ErrorMessage;
