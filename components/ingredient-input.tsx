import { Textarea, FormLabel, useColorModeValue, Box } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type IngredientInputProps = {
  onChange: (ingredients: string[]) => void;
};

function IngredientInput({ onChange }: IngredientInputProps) {
  const placeholderColor = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("#859c66", "#A3B18A");
  const backgroundColor = useColorModeValue("#DAD7CD", "gray.700");
  const textColor = useColorModeValue("#344E41", "whiteAlpha.900");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/\s+/g, " ").trim();
    const ingredients = cleanedValue.split(/[,\/\n|;]/);
    onChange(ingredients);
  };

  return (
    <Box>
      <FormLabel
        htmlFor="ingredients"
        fontSize={{ base: "xs", md: "sm" }} // Adjust font size for mobile
        fontWeight="bold"
        mb={1}
        color={useColorModeValue("gray.700", "gray.200")}
        fontFamily="Lato"
      >
        Product ingredients:
      </FormLabel>
      <Textarea
        id="ingredients"
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
    </Box>
  );
}

export default IngredientInput;
