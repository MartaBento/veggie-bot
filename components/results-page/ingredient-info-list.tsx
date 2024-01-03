import { IngredientInfo } from "@/types/apiResponse";
import { formatUserInput } from "@/utils/formatUserInput";
import {
  List,
  ListItem,
  HStack,
  ListIcon,
  VStack,
  Divider,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { LuVegan } from "react-icons/lu";
import { MdDoNotDisturbOn } from "react-icons/md";

type IngredientInfoProps = {
  ingredientInfo: IngredientInfo[];
};

function IngredientInfoList({ ingredientInfo }: IngredientInfoProps) {
  const textColor = useColorModeValue("gray.800", "gray.900");

  if (!ingredientInfo || ingredientInfo.length === 0) {
    return (
      <Box
        p={6}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.300"
        borderRadius="md"
        boxShadow="lg"
        bg="gray.50"
        ml={6}
        mr={6}
      >
        <Text textAlign="center" color={textColor} fontSize="md">
          No ingredient information available.
        </Text>
      </Box>
    );
  }

  return (
    <>
      <Box
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.300"
        borderRadius="md"
        p={6}
        boxShadow="lg"
        bg="gray.50"
        ml={{ base: 6 }}
        mr={{ base: 6 }}
      >
        <List
          spacing={3}
          fontSize={{ base: "xs", md: "sm" }}
          w={{ md: "400px" }}
          h={{ md: "auto" }}
        >
          {ingredientInfo?.map((ingredient, index) => (
            <ListItem
              key={ingredient.ingredientName}
              marginTop={4}
              marginBottom={4}
            >
              <HStack spacing={3} align="middle">
                <ListIcon
                  as={ingredient.isIngredientVegan ? LuVegan : MdDoNotDisturbOn}
                  color={ingredient.isIngredientVegan ? "green" : "red"}
                  marginY="auto"
                  w="16px"
                  h="16px"
                />
                <VStack spacing={0} align="start" flex="1">
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="semibold"
                    color={textColor}
                  >
                    {formatUserInput(ingredient.ingredientName)}
                  </Text>
                  <Text
                    fontSize={{ base: "xs", md: "small" }}
                    color={textColor}
                  >
                    {ingredient.detailedInfo}
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
    </>
  );
}

export default IngredientInfoList;
