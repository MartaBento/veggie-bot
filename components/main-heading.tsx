import { Heading, Box, Text, useColorModeValue } from "@chakra-ui/react";
import LeafIconHeader from "./leaf-icon-header";

function MainHeading() {
  const headingColor = useColorModeValue("#745E4D", "#DAD7CD");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      <Box>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "xl", md: "6xl", sm: "2xl" }}
          lineHeight="100%"
          letterSpacing="tight"
          fontFamily="Montserrat"
          color="#344E41"
          marginBottom="-2"
        >
          Discover the Power of AI
        </Heading>
        <Heading
          color={headingColor}
          fontWeight={600}
          as="h2"
          fontSize={{ base: "2xl", md: "6xl", sm: "4xl" }}
          lineHeight="100%"
          letterSpacing="tight"
          fontFamily="Lato"
        >
          <span aria-hidden="true">In Your Vegan Journey</span>{" "}
          <LeafIconHeader />
        </Heading>
      </Box>
      <Text
        color={textColor}
        fontSize="sm"
        maxW="600px"
        mx="auto"
        textAlign="center"
        fontFamily="Nunito"
      >
        Eliminate the guesswork in your plant-based lifestyle. Discover the
        vegan status of ingredients instantly with Veggie Bot, empowering you to
        make informed choices and lead a cruelty-free and sustainable way of
        living.
      </Text>
    </>
  );
}

export default MainHeading;
