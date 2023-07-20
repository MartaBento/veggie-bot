import { Link, Button, useColorModeValue } from "@chakra-ui/react";

function BuyMeACoffeeButton() {
  const buttonColor = useColorModeValue("#8B5D33", "#DAA520");
  const buttonTextColor = useColorModeValue("white", "#DAD7CD");

  return (
    <Link
      className="buyButton"
      target="_blank"
      href="https://www.buymeacoffee.com/martabento"
      aria-label="Support Marta Bento on Buy Me a Coffee"
      rel="noopener noreferrer"
    >
      <Button
        size="sm"
        bgColor={buttonColor}
        color={buttonTextColor}
        fontFamily="Nunito"
        _hover={{ opacity: 0.9, boxShadow: "md" }}
        _focus={{ boxShadow: "none" }}
        borderRadius="md"
        p={4}
      >
        🍵 Buy me a tea
      </Button>
    </Link>
  );
}

export default BuyMeACoffeeButton;
