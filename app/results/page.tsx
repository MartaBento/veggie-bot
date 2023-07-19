"use client";

import useIngredientStore from "@/store/store";
import {
  Badge,
  Divider,
  List,
  ListIcon,
  ListItem,
  VStack,
  HStack,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { LuVegan } from "react-icons/lu";
import { MdDoNotDisturbOn } from "react-icons/md";

export default function Results() {
  const { ingredientInfo, productIsVegan } = useIngredientStore();
  const badgeColor =
    productIsVegan === null ? "gray" : productIsVegan ? "green" : "red";

  const renderBadge = () => (
    <Badge variant="solid" colorScheme={badgeColor}>
      {productIsVegan === true
        ? "vegan"
        : productIsVegan === false
        ? "not vegan"
        : "unknown"}
    </Badge>
  );

  return (
    <VStack align="center" spacing={4} minHeight="100vh">
      <Heading
        as="h1"
        fontWeight={600}
        fontSize={{ base: "lg", md: "4xl", sm: "xl" }}
        lineHeight="100%"
      >
        Ingredient Analysis
      </Heading>
      {renderBadge()}
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
                  <Text fontSize="sm" fontWeight="semibold">
                    {ingredient.ingredientName}
                  </Text>
                  <Text fontSize="xs">{ingredient.reason}</Text>
                </VStack>
              </HStack>
              {index !== ingredientInfo.length - 1 && <Divider my={2} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
}
