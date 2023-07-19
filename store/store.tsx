import { APIResponse, IngredientInfo } from "@/types/apiResponse";
import { responseParse } from "@/utils/responseParser";
import { isProductVegan } from "@/utils/veganAnalyser";
import { create } from "zustand";

interface IngredientsStore {
  userInputIngredients: string[];
  error: boolean;
  isLoading: boolean;
  productIsVegan: boolean | null;
  setUserInputIngredients: (ingredients: string[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  fetchData: (ingredients: string[]) => Promise<void>;
  apiResponse: APIResponse | null;
  ingredientInfo: IngredientInfo[] | null;
}

const useIngredientStore = create<IngredientsStore>((set) => ({
  userInputIngredients: [],
  error: false,
  isLoading: false,
  apiResponse: null,
  productIsVegan: null,
  ingredientInfo: [],
  setUserInputIngredients: (ingredients) =>
    set({ userInputIngredients: ingredients }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ isLoading: loading }),
  fetchData: async (ingredients) => {
    try {
      set({ isLoading: true });

      const url = "https://api.openai.com/v1/chat/completions";
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;

      const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a vegan ingredient checker. Provide the vegan status of each ingredient separately in the following format: [{ ingredient: ingredientName, vegan: true/false, reason: 'reason for being vegan or not here, in a detailed description. if the user inputs an ingredient that is not English, please find a way to translate the name of the ingredient here, in a natural way' }]",
          },
          {
            role: "user",
            content: `Ingredients: ${ingredients}`,
          },
        ],
        temperature: 0.2,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        const ingredientInfo = responseParse(data);
        const productIsVegan = isProductVegan(ingredientInfo);

        set({
          error: false,
          apiResponse: data,
          productIsVegan: productIsVegan,
          ingredientInfo: ingredientInfo,
        });
      } else {
        set({
          error: true,
          apiResponse: null,
          productIsVegan: null,
          ingredientInfo: [],
        });
      }
    } catch (error) {
      set({
        error: true,
        apiResponse: null,
        productIsVegan: null,
        ingredientInfo: [],
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useIngredientStore;
