import { Badge } from "@chakra-ui/react";

type VeganStatusBadgeProps = {
  productIsVegan: boolean | null;
};

function VeganStatusBadge({ productIsVegan }: VeganStatusBadgeProps) {
  const badgeColor = productIsVegan ? "green.600" : "red.600";

  const badgeText =
    productIsVegan === null
      ? "Unknown"
      : productIsVegan
      ? "Vegan"
      : "Not Vegan";

  return (
    <Badge
      variant="solid"
      bg={badgeColor}
      fontFamily="Montserrat"
      fontWeight="bold"
      textTransform="uppercase"
      fontSize={{ base: "xs", md: "sm" }}
      px={{ base: 2, md: 3 }}
      py={{ base: 2, md: 2 }}
      letterSpacing="wider"
      marginTop={2}
      marginBottom={6}
      borderRadius="md"
      textColor="white"
    >
      {badgeText}
    </Badge>
  );
}

export default VeganStatusBadge;
