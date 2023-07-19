import { APIResponse, IngredientInfo } from "@/types/apiResponse";

export function responseParse(response: APIResponse): IngredientInfo[] {
  const content = response.choices[0].message.content;
  console.log("content", content);

  const ingredientRegex =
    /{ ingredient: '(.*?)', vegan: (.*?), reason: '(.*?)' }/g;

  const matches = Array.from(content.matchAll(ingredientRegex));

  const ingredientInfo: IngredientInfo[] = [];

  for (const [_, ingredientName, isVegan, reason] of matches) {
    ingredientInfo.push({
      ingredientName,
      vegan: isVegan === "true",
      reason,
    });
  }

  return ingredientInfo;
}
