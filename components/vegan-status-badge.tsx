import { Badge } from "@chakra-ui/react";

type VeganStatusBadgeProps = {
  productIsVegan: boolean | null;
};
function VeganStatusBadge({ productIsVegan }: VeganStatusBadgeProps) {
  const badgeColor =
    productIsVegan === null ? "gray" : productIsVegan ? "green" : "red";

  return (
    <Badge variant="solid" colorScheme={badgeColor}>
      {productIsVegan === true
        ? "vegan"
        : productIsVegan === false
        ? "not vegan"
        : "unknown"}
    </Badge>
  );
}
export default VeganStatusBadge;
