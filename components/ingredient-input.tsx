import { maxIngredients } from "@/constants/ingredients";
import {
  Textarea,
  FormLabel,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

type IngredientInputProps = {
  onChange: (ingredients: string[]) => void;
};

function IngredientInput({ onChange }: IngredientInputProps) {
  const placeholderColor = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("#859c66", "#A3B18A");
  const backgroundColor = useColorModeValue("#DAD7CD", "gray.700");
  const textColor = useColorModeValue("#344E41", "whiteAlpha.900");

  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/\s+/g, " ").trim();

    // Use a more comprehensive regex to split ingredients
    const ingredients = cleanedValue.split(/,(?![^(]*\))/);

    const filteredIngredients = ingredients.map((ingredient) =>
      ingredient.trim()
    );

    const limitedIngredients = filteredIngredients.slice(0, maxIngredients);

    if (filteredIngredients.length > maxIngredients) {
      setIngredientsInput(limitedIngredients.join(", "));
      setShowErrorMessage(true);
      onChange(limitedIngredients);
    } else {
      setIngredientsInput(value);
      setShowErrorMessage(false);
      onChange(limitedIngredients);
    }
  };

  return (
    <Box>
      <FormLabel
        htmlFor="ingredients"
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight="bold"
        mb={1}
        color={useColorModeValue("gray.700", "gray.200")}
        fontFamily="Lato"
      >
        Product ingredients:
      </FormLabel>
      <Textarea
        id="ingredients"
        value={ingredientsInput}
        placeholder="Enter ingredients separated by commas (e.g., egg, onion, tomato, cheese, pasta...)"
        size="lg"
        borderWidth="1px"
        borderColor={borderColor}
        minHeight="100px"
        _placeholder={{
          color: placeholderColor,
        }}
        resize="none"
        fontSize={{ base: "sm", md: "md" }}
        bg={backgroundColor}
        borderRadius="md"
        p={{ base: 2, md: 4 }}
        color={textColor}
        shadow="lg"
        _focus={{
          borderColor: useColorModeValue("#A3B18A", "whiteAlpha.600"),
          shadow: "outline",
        }}
        _hover={{
          borderColor: useColorModeValue("#588157", "whiteAlpha.600"),
        }}
        onChange={handleInputChange}
        fontFamily="Nunito"
      />
      {showErrorMessage && (
        <Text color="red.500" fontWeight="bold" fontSize="sm" mt="2">
          You can only enter up to {maxIngredients} ingredients.
        </Text>
      )}
    </Box>
  );
}

export default IngredientInput;
