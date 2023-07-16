import { Textarea, useColorModeValue } from "@chakra-ui/react";

function TextArea() {
  const placeholderColor = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("hunterGreen", "sage");
  const backgroundColor = useColorModeValue("timberwolf", "gray.700");
  const textColor = useColorModeValue("brunswickGreen", "whiteAlpha.900");

  return (
    <Textarea
      placeholder="Enter a list of ingredients separated by commas (e.g., egg, onion, tomato, cheese, pasta...)"
      size="lg"
      borderWidth="1px"
      borderColor={borderColor}
      minHeight="100px"
      _placeholder={{
        color: placeholderColor,
      }}
      resize="none"
      fontSize="sm"
      bg={backgroundColor}
      borderRadius="md"
      p={4}
      color={textColor}
      shadow="md"
      _focus={{
        borderColor: useColorModeValue("sage", "whiteAlpha.600"),
        shadow: "outline",
      }}
      _hover={{
        borderColor: useColorModeValue("fernGreen", "whiteAlpha.600"),
      }}
    />
  );
}

export default TextArea;
