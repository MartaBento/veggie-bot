import {
  VStack,
  Text,
  Center,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const NotFoundPage = () => {
  const headingColor = useColorModeValue("#344E41", "#DAD7CD");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const buttonColorScheme = useColorModeValue("sage", "fernGreen");
  const buttonTextColor = useColorModeValue("white", "gray.800");

  return (
    <Center minHeight="50vh">
      <VStack spacing={4}>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="100%"
          letterSpacing="tight"
          fontFamily="Lato"
          color={headingColor}
        >
          404
        </Heading>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color={textColor}
          textAlign="center"
          fontFamily="Montserrat"
          fontWeight="bold"
        >
          Oops, VeggieBot couldn&apos;t find the path you were looking for.
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color={textColor}
          textAlign="center"
          fontFamily="Nunito"
          maxW="lg"
        >
          VeggieBot is always learning and growing. Let&apos;s head back to our
          green garden of knowledge!
        </Text>
        <Link href="/">
          <Button
            colorScheme={buttonColorScheme}
            bg={buttonColorScheme}
            rounded="full"
            px={6}
            color={buttonTextColor}
            _hover={{ opacity: 0.9, boxShadow: "md" }}
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize="sm"
            letterSpacing="wider"
            marginTop={12}
          >
            Back to VeggieBot Home
          </Button>
        </Link>
      </VStack>
    </Center>
  );
};

export default NotFoundPage;
