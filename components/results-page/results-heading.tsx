import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

function ResultsHeading() {
  return (
    <>
      <Heading
        as="h1"
        fontWeight={600}
        fontSize={{ base: "2xl", md: "6xl", sm: "4xl" }}
        lineHeight="100%"
        letterSpacing="tight"
        fontFamily="Lato"
        color={useColorModeValue("#344E41", "#DAD7CD")}
      >
        Ingredient Analysis
      </Heading>
      <Text
        fontSize="xl"
        color={useColorModeValue("gray.600", "gray.300")}
        mt={2}
        maxWidth="xl"
        textAlign="center"
        fontFamily="Nunito"
      >
        Veggie Bot has analyzed the vegan status of each ingredient and provided
        the reasons behind it. Here are the results:
      </Text>
    </>
  );
}

export default ResultsHeading;
