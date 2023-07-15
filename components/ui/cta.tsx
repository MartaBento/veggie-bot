import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

function CallToAction() {
  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight="100%"
          color="white"
        >
          Discover the power of AI <br />
          <Text as="span" color="green.400">
            in your vegan journey 🌱
          </Text>
        </Heading>
        <Text color="gray.200">
          Take the guesswork out of your plant-based lifestyle. Discover the
          vegan status of ingredients instantly with Veggie Bot, empowering you
          to make conscious choices and lead a cruelty-free and sustainable way
          of living.
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="green"
            bg="green.400"
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
