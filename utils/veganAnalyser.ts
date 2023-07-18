import { IngredientInfo } from "@/types/apiResponse";

export function isProductVegan(ingredients: IngredientInfo[]): boolean {
  return ingredients.every((ingredient) => ingredient.vegan === true);
}
