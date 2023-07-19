import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

type BackButtonProps = {
  onClick: () => void;
};
function BackButton({ onClick }: BackButtonProps) {
  return (
    <ButtonGroup size="sm" isAttached variant="ghost" onClick={onClick}>
      <IconButton aria-label="Go back to main page" icon={<FiArrowLeft />} />
      <Button>Go Back</Button>
    </ButtonGroup>
  );
}

export default BackButton;
