"use client";

import IngredientInput from "@/components/ui/ingredient-input";
import useIngredientStore from "@/store/store";
import { APIResponse } from "@/types/apiResponse";
import { responseParse } from "@/utils/responseParser";
import {
  useColorModeValue,
  Container,
  Stack,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  const headingColor = useColorModeValue("brownish", "timberwolf");
  const textColor = useColorModeValue("gray.500", "gray.400");
  const buttonColorScheme = useColorModeValue("fernGreen", "hunterGreen");

  const { ingredientList, setIngredients, fetchData, ingredientsInfoData } =
    useIngredientStore();

  const handleIngredientChange = (ingredientList: string[]) => {
    setIngredients(ingredientList);
  };
  const handleSubmitIngredients = async () => {
    await fetchData(ingredientList);
    const ingredientInfo =
      ingredientsInfoData && responseParse(ingredientsInfoData);
    console.log(ingredientInfo);
  };

  const btnDisabled = !ingredientList || ingredientList.length === 0;

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
        <IngredientInput onChange={handleIngredientChange} />
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
              boxShadow: "md",
            }}
            aria-label="Check Ingredient Vegan Status"
            isDisabled={btnDisabled}
            onClick={handleSubmitIngredients}
          >
            Check Ingredient Vegan Status
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
