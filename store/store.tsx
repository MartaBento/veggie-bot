import { APIResponse } from "@/types/apiResponse";
import { responseParse } from "@/utils/responseParser";
import { isProductVegan } from "@/utils/veganAnalyser";
import { create } from "zustand";

interface IngredientsStore {
  userInputIngredients: string[];
  error: boolean;
  loading: boolean;
  productIsVegan: boolean | null;
  setUserInputIngredients: (ingredients: string[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  fetchData: (ingredients: string[]) => Promise<void>;
  apiResponse: APIResponse | null;
}

const useIngredientStore = create<IngredientsStore>((set) => ({
  userInputIngredients: [],
  error: false,
  loading: false,
  apiResponse: null,
  productIsVegan: null,
  setUserInputIngredients: (ingredients) =>
    set({ userInputIngredients: ingredients }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  fetchData: async (ingredients) => {
    try {
      set({ loading: true });

      const url = "https://api.openai.com/v1/chat/completions";
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;

      const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a vegan ingredient checker. Provide the vegan status of each ingredient separately in the following format: [{ ingredient: ingredientName, vegan: true/false, reason: 'reason for being vegan or not here, in a detailed description' }]",
          },
          {
            role: "user",
            content: `Ingredients: ${ingredients}`,
          },
        ],
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
        });
      } else {
        set({ error: true, apiResponse: null, productIsVegan: null });
      }
    } catch (error) {
      set({ error: true, apiResponse: null, productIsVegan: null });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useIngredientStore;
