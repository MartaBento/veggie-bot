import { APIResponse } from "@/types/apiResponse";
import { create } from "zustand";

interface IngredientsStore {
  ingredientList: string[];
  error: boolean;
  loading: boolean;
  setIngredients: (ingredients: string[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  fetchData: (ingredients: string[]) => Promise<void>;
  ingredientsInfoData: APIResponse | null;
}

const useIngredientStore = create<IngredientsStore>((set) => ({
  ingredientList: [],
  error: false,
  loading: false,
  ingredientsInfoData: null,
  setIngredients: (ingredients) => set({ ingredientList: ingredients }),
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
          { role: "system", content: "You are a vegan ingredient checker." },
          {
            role: "system",
            content:
              "Please provide the vegan status of each ingredient separately, like this: [{ingredient: 'egg', vegan: false, reason: 'reason for being vegan or not here'}]",
          },
          {
            role: "user",
            content: `Ingredients: ${ingredients
              .map((ingredient) => ingredient)
              .join(", ")}`,
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

        set({ error: false, ingredientsInfoData: data });
      } else {
        set({ error: true, ingredientsInfoData: null });
      }
    } catch (error) {
      set({ error: true, ingredientsInfoData: null });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useIngredientStore;
