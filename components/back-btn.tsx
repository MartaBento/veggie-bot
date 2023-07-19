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
  const buttonColor = useColorModeValue("gray.700", "gray.200");
  const hoverColor = useColorModeValue("gray.800", "gray.300");

  return (
    <ButtonGroup
      size="sm"
      isAttached
      variant="ghost"
      onClick={onClick}
      fontFamily="Nunito"
      marginBottom={2}
    >
      <IconButton
        aria-label="Go back to main page"
        icon={<FiArrowLeft />}
        color={buttonColor}
        _hover={{ color: hoverColor }}
      />
      <Button color={buttonColor} _hover={{ color: hoverColor }}>
        Go Back
      </Button>
    </ButtonGroup>
  );
}

export default BackButton;
