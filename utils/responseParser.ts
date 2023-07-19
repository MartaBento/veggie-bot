import { APIResponse, IngredientInfo } from "@/types/apiResponse";

export function responseParse(response: APIResponse): IngredientInfo[] {
  const content = response.choices[0].message.content;
  let ingredientInfo: IngredientInfo[] = [];

  try {
    const parsedContent = JSON.parse(content);

    if (Array.isArray(parsedContent)) {
      ingredientInfo = parsedContent.map((item: any) => ({
        ingredientName: item.ingredient,
        vegan: item.vegan,
        reason: item.reason,
      }));
    }
  } catch (error) {
    console.error("Error parsing content:", error);
  }

  return ingredientInfo;
}
