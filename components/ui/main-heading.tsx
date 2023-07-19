import { Heading, Box, Text, useColorModeValue } from "@chakra-ui/react";
import LeafIconHeader from "./leaf-icon-header";

function MainHeading() {
  const headingColor = useColorModeValue("brownish", "timberwolf");
  const textColor = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <Box>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "xl", md: "6xl", sm: "2xl" }}
          lineHeight="100%"
          marginBottom="-3"
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
          <LeafIconHeader />
        </Heading>
      </Box>
      <Text
        color={textColor}
        fontSize="sm"
        maxW="600px"
        mx="auto"
        textAlign="center"
      >
        Take the guesswork out of your plant-based lifestyle. Discover the vegan
        status of ingredients instantly with Veggie Bot, empowering you to make
        conscious choices and lead a cruelty-free and sustainable way of living.
      </Text>
    </>
  );
}

export default MainHeading;
