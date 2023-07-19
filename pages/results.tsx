import {
  Divider,
  List,
  ListIcon,
  ListItem,
  VStack,
  HStack,
  Text,
  Box,
  Heading,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { LuVegan } from "react-icons/lu";
import { MdDoNotDisturbOn } from "react-icons/md";

import BackButton from "@/components/ui/back-btn";
import VeganStatusBadge from "@/components/ui/vegan-status-badge";
import { useRouter } from "next/router";
import { IngredientInfo } from "@/types/apiResponse";
import { responseParse } from "@/utils/responseParser";
import { isProductVegan } from "@/utils/veganAnalyser";
import { GetServerSidePropsContext } from "next";
import { apiURL } from "@/constants/url";
import useIngredientStore from "@/store/store";

type ResultsPageProps = {
  ingredientInfo: IngredientInfo[];
  productIsVegan: boolean | null;
};

export default function ResultsPage({
  ingredientInfo,
  productIsVegan,
}: ResultsPageProps) {
  const router = useRouter();
  const textColor = useColorModeValue("gray.800", "gray.900");

  const handleClickBackBtn = () => {
    router.push("/");
  };

  return (
    <VStack align="center" spacing={4} minHeight="100vh">
      <Center marginTop="12">
        <BackButton onClick={handleClickBackBtn} />
        <Heading
          as="h1"
          fontWeight={600}
          fontSize={{ base: "lg", md: "4xl", sm: "xl" }}
          lineHeight="100%"
        >
          Ingredient Analysis
        </Heading>
      </Center>
      <VeganStatusBadge productIsVegan={productIsVegan} />
      <Box
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.300"
        borderRadius="md"
        p={6}
        boxShadow="sm"
        bg="gray.50"
        maxW="4xl"
      >
        <List spacing={3} fontSize="xs">
          {ingredientInfo?.map((ingredient, index) => (
            <ListItem key={ingredient.ingredientName}>
              <HStack spacing={3} align="middle">
                <ListIcon
                  as={ingredient.vegan ? LuVegan : MdDoNotDisturbOn}
                  color={ingredient.vegan ? "green" : "red"}
                  marginY="auto"
                />
                <VStack spacing={0} align="start">
                  <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                    {ingredient.ingredientName}
                  </Text>
                  <Text fontSize="xs" color={textColor}>
                    {ingredient.reason}
                  </Text>
                </VStack>
              </HStack>
              {index !== ingredientInfo.length - 1 && (
                <Divider my={2} borderColor="gray.300" />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const ingredients = useIngredientStore.getState().userInputIngredients;

  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a vegan ingredient checker. Provide the vegan status of each ingredient separately in the following format: [{ ingredient: ingredientName, vegan: true/false, reason: 'reason for being vegan or not here, in a detailed description. if the user inputs an ingredient that is not English, please find a way to translate the name of the ingredient here, in a natural way' }]",
        },
        {
          role: "user",
          content: `Ingredients: ${ingredients}`,
        },
      ],
      temperature: 0.2,
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      const ingredientInfo = responseParse(data);
      const productIsVegan = isProductVegan(ingredientInfo);

      return {
        props: {
          ingredientInfo,
          productIsVegan,
        },
      };
    } else {
      return {
        props: {
          ingredientInfo: [],
          productIsVegan: null,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        ingredientInfo: [],
        productIsVegan: null,
      },
    };
  }
}
