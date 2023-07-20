import { IngredientInfo } from "@/types/apiResponse";
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

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.300"
      borderRadius="md"
      p={6}
      boxShadow="lg"
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
                  {ingredient.ingredientName.charAt(0).toUpperCase() +
                    ingredient.ingredientName.slice(1)}
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
  );
}

export default IngredientInfoList;
