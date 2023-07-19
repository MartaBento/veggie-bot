import IngredientInput from "@/components/ingredient-input";
import MainHeading from "@/components/main-heading";
import { getRandomLoadingText } from "@/utils/loadingBtnRandomizer";
import {
  useColorModeValue,
  Container,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const buttonColorScheme = useColorModeValue("fernGreen", "hunterGreen");

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
      router.push(`/results?ingredients=${queryParams}`);
    } catch (error) {
      console.error("Error occurred while navigating to results page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const btnDisabled =
    !userInputIngredients || userInputIngredients.length === 0;
  const loadingBtnText = getRandomLoadingText();

  return (
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
            isLoading={isLoading}
            loadingText={loadingBtnText}
          >
            Check Ingredient Vegan Status
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
