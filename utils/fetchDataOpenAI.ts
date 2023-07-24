import { apiURL } from "@/constants/url";
import { responseParse } from "./responseParser";
import { FetchDataResult } from "@/types/apiResponse";
import { checkIfIngredientsAreVegan } from "./veganAnalyser";

export async function fetchData(ingredients: string[]): Promise<FetchDataResult> {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;

    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a vegan ingredient checker. If the user inputs a list of ingredients that are in a different language than English, translate the name of the ingredient in the 'reason' field, but in a natural way. If the product is vegan, you will provide the vegan status of the product in the field 'isProductVegan'. The ingredient name should be simplified - if you receive percentages, remove them. Provide the vegan status of each ingredient separately, in JSON format, like this: [{ isProductVegan: true/false, ingredient: the ingredient name, vegan: true/false, reason: 'reason for being vegan or not here, with a detailed description' }]",
          },
          {
            role: "user",
            content: `Ingredients: ${ingredients}`,
          },
        ],
        temperature: 0.2,
      };

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error('An error occurred while processing your request.');
      }
  
      const data = await response.json();
      const ingredientInfo = responseParse(data);
      const isIngredientVegan = checkIfIngredientsAreVegan(ingredientInfo);

      return {
        ingredientInfo,
        isIngredientVegan,
        errorMessage: null,
      };
    } catch (error) {
      console.error('Error during POST request:', error);
      throw error;
    }
  }
  