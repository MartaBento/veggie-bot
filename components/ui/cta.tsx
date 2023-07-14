import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

function CallToAction() {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Discover the Power of AI <br />
          <Text as={"span"} color={"green.400"}>
            in Your Vegan Journey
          </Text>
        </Heading>
        <Text color={"gray.200"}>
          Simplify your plant-based lifestyle by checking the vegan status of
          ingredients with Veggie Bot. Make informed choices and embrace a
          cruelty-free and sustainable way of living.
        </Text>

        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
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
