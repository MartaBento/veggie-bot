import { IngredientInfo } from "@/types/apiResponse";

export function checkIfIngredientsAreVegan(ingredients: IngredientInfo[]): boolean {
  return ingredients.every((ingredient) => ingredient.isIngredientVegan === true);
}
