import {
  Button,
  ButtonGroup,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

type BackButtonProps = {
  onClick: () => void;
};

function BackButton({ onClick }: BackButtonProps) {
  const buttonColor = useColorModeValue("gray.800", "gray.200");
  const hoverColor = useColorModeValue("gray.900", "gray.300");

  return (
    <ButtonGroup
      size="sm"
      isAttached
      variant="outline"
      onClick={onClick}
      fontFamily="Nunito"
      marginBottom={2}
    >
      <IconButton
        aria-label="Go back to main page"
        icon={<FiArrowLeft />}
        color={buttonColor}
        _hover={{ color: hoverColor }}
        bg="transparent"
        fontSize="lg"
        borderRadius="full"
      />
      <Button
        color={buttonColor}
        _hover={{ color: hoverColor, bg: "transparent" }}
        bg="transparent"
        borderRadius="full"
        fontWeight="medium"
        fontSize="sm"
        _focus={{ boxShadow: "none" }}
      >
        Go Back
      </Button>
    </ButtonGroup>
  );
}

export default BackButton;
