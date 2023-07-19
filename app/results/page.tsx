"use client";

import BackButton from "@/components/ui/back-btn";
import VeganStatusBadge from "@/components/ui/vegan-status-badge";
import useIngredientStore from "@/store/store";
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
import { useRouter } from "next/navigation";
import { LuVegan } from "react-icons/lu";
import { MdDoNotDisturbOn } from "react-icons/md";

export default function Results() {
  const { ingredientInfo, productIsVegan } = useIngredientStore();
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
