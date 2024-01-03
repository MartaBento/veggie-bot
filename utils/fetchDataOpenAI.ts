import { apiURL } from "@/constants/url";
import { responseParse } from "./responseParser";
import { FetchDataResult } from "@/types/apiResponse";
import { checkIfIngredientsAreVegan } from "./veganAnalyser";
import axios from "axios";

export async function fetchData(
  ingredients: string[]
): Promise<FetchDataResult> {
  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a vegan ingredient checker. Always provide the information in English, no matter the language the user uses. Provide the vegan status of each ingredient separately in JSON format: [{ ingredient: ingredient name, vegan: true/false, reason: 'reason for being vegan or not, with a very detailed description' }]",
      },
      {
        role: "user",
        content: `Ingredients: ${ingredients}`,
      },
    ],
    temperature: 0.2,
  };

  try {
    const response = await axios.post(apiURL, requestBody);

    if (!response.data) {
      throw new Error("An error occurred while processing your request.");
    }

    const data = await response.data;
    const ingredientInfo = responseParse(data);
    const isIngredientVegan = checkIfIngredientsAreVegan(ingredientInfo);

    return {
      ingredientInfo,
      isIngredientVegan,
      errorMessage: null,
    };
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error;
  }
}
