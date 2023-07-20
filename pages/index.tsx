import IngredientInput from "@/components/ingredient-input";
import MainHeading from "@/components/main-heading";
import { metadata } from "@/constants/metadata";
import { getRandomLoadingText } from "@/utils/loadingBtnRandomizer";
import {
  useColorModeValue,
  Container,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function Home() {
  const router = useRouter();
  const buttonColorScheme = useColorModeValue("sage", "fernGreen");
  const buttonTextColor = useColorModeValue("black", "white");
  const [userInputIngredients, setUserInputIngredients] = useState<string[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleIngredientChange = (ingredientList: string[]) => {
    setUserInputIngredients(ingredientList);
  };

  const handleSubmitIngredients = async () => {
    try {
      setIsLoading(true);
      const queryParams = userInputIngredients.join(",");
      await router.push(`/results?ingredients=${queryParams}`);
    } catch (error) {
      console.error("Error occurred while navigating to results page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const btnDisabled =
    isLoading || !userInputIngredients || userInputIngredients.length === 0;
  const loadingBtnText = getRandomLoadingText();

  return (
    <>
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Container maxW="4xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 4, md: 6 }}
        >
          <MainHeading />
          <IngredientInput onChange={handleIngredientChange} />
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
            mt={{ base: "12", md: "0" }}
          >
            <Button
              colorScheme={buttonColorScheme}
              bg={buttonColorScheme}
              rounded="full"
              px={6}
              color={buttonTextColor}
              _hover={
                !btnDisabled ? { opacity: 0.9, boxShadow: "md" } : undefined
              }
              aria-label="Check Ingredient Vegan Status"
              isDisabled={btnDisabled}
              onClick={handleSubmitIngredients}
              isLoading={isLoading}
              loadingText={loadingBtnText}
              fontFamily="Nunito"
              fontWeight="bold"
              fontSize={{ base: "xs", md: "sm" }}
              w={{ base: "full", md: "auto" }}
              padding={isLoading ? "6px 24px" : "12px 24px"}
              leftIcon={<BiSearchAlt />}
            >
              Analyse product ingredients
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
