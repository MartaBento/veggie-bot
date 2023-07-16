import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import TextArea from "./ui/text-area";

function CallToAction() {
  const headingColor = useColorModeValue("hunterGreen", "fernGreen");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const buttonColorScheme = useColorModeValue("fernGreen", "green");

  return (
    <Container maxW="4xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 6, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", md: "6xl", sm: "4xl" }}
          lineHeight="100%"
          color={headingColor}
        >
          Discover the power of AI <br />
          <Text as="span" color={headingColor}>
            in your vegan journey 🌱
          </Text>
        </Heading>
        <Text
          color={textColor}
          fontSize="sm"
          maxW="600px"
          mx="auto"
          textAlign="center"
        >
          Take the guesswork out of your plant-based lifestyle. Discover the
          vegan status of ingredients instantly with Veggie Bot, empowering you
          to make conscious choices and lead a cruelty-free and sustainable way
          of living.
        </Text>
        <TextArea />
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme={buttonColorScheme}
            bg={buttonColorScheme}
            rounded="full"
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Check Ingredient Vegan Status
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default CallToAction;
