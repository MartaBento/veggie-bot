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
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuVegan } from "react-icons/lu";
import { MdDoNotDisturbOn } from "react-icons/md";

type IngredientInfoProps = {
  ingredientInfo: IngredientInfo[];
};
function IngredientInfoList({ ingredientInfo }: IngredientInfoProps) {
  const textColor = useColorModeValue("gray.800", "gray.900");
  const buttonColorScheme = useColorModeValue("sage", "fernGreen");
  const [currentPage, setCurrentPage] = useState(1);

  const ingredientsPerPage = 5;
  const indexOfLastIngredient = currentPage * ingredientsPerPage;
  const indexOfFirstIngredient = indexOfLastIngredient - ingredientsPerPage;
  const currentIngredients = ingredientInfo.slice(
    indexOfFirstIngredient,
    indexOfLastIngredient
  );

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

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
        maxW="4xl"
      >
        <List spacing={3} fontSize="xs" w="400px" h="300px">
          {currentIngredients?.map((ingredient, index) => (
            <ListItem
              key={ingredient.ingredientName}
              marginTop={4}
              marginBottom={4}
            >
              <HStack spacing={3} align="middle">
                <ListIcon
                  as={ingredient.vegan ? LuVegan : MdDoNotDisturbOn}
                  color={ingredient.vegan ? "green" : "red"}
                  marginY="auto"
                  w="16px"
                  h="16px"
                />
                <VStack spacing={0} align="start" flex="1">
                  <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                    {ingredient.ingredientName.charAt(0).toUpperCase() +
                      ingredient.ingredientName.slice(1)}
                  </Text>
                  <Text fontSize="xs" color={textColor}>
                    {ingredient.reason}
                  </Text>
                </VStack>
              </HStack>
              {index !== currentIngredients.length - 1 && (
                <Divider my={2} borderColor="gray.300" />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
      <HStack mt={4} spacing={4}>
        <Button
          onClick={handlePreviousClick}
          isDisabled={currentPage === 1}
          leftIcon={<FaArrowLeft />}
          aria-label="Previous Page"
          bg={buttonColorScheme}
          _hover={{ bg: buttonColorScheme, color: "white" }}
          _focus={{ boxShadow: "none" }}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextClick}
          isDisabled={indexOfLastIngredient >= ingredientInfo.length}
          rightIcon={<FaArrowRight />}
          aria-label="Next Page"
          bg={buttonColorScheme}
          _hover={{ bg: buttonColorScheme, color: "white" }}
          _focus={{ boxShadow: "none" }}
        >
          Next
        </Button>
      </HStack>
    </>
  );
}

export default IngredientInfoList;
