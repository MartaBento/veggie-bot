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
  const headingColor = useColorModeValue("brownish", "timberwolf");
  const textColor = useColorModeValue("gray.500", "gray.400");
  const buttonColorScheme = useColorModeValue("fernGreen", "hunterGreen");

  return (
    <Container maxW="4xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 4, md: 6 }}
      >
        <Box>
          <Heading
            as="h1"
            fontWeight={600}
            fontSize={{ base: "xl", md: "6xl", sm: "2xl" }}
            lineHeight="100%"
            marginBottom="-6"
          >
            Discover the power of AI
          </Heading>
          <Heading
            color={headingColor}
            fontWeight={600}
            as="h2"
            fontSize={{ base: "2xl", md: "6xl", sm: "4xl" }}
          >
            <span aria-hidden="true">in your vegan journey </span>
            <span
              aria-label="Leaf emoji representing vegan lifestyle"
              role="img"
            >
              🌱
            </span>
          </Heading>
        </Box>
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
            color="white"
            _hover={{
              opacity: 0.9,
            }}
            aria-label="Check Ingredient Vegan Status"
          >
            Check Ingredient Vegan Status
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default CallToAction;
