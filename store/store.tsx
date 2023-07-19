import { IngredientInfo } from "@/types/apiResponse";
import { create } from "zustand";

interface IngredientsStore {
  userInputIngredients: string[];
  error: boolean;
  isLoading: boolean;
  productIsVegan: boolean | null;
  ingredientInfo: IngredientInfo[];
  setUserInputIngredients: (ingredients: string[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  setProductIsVegan: (isVegan: boolean | null) => void;
  setIngredientInfo: (info: IngredientInfo[]) => void;
}

const useIngredientStore = create<IngredientsStore>((set) => ({
  userInputIngredients: [],
  error: false,
  isLoading: false,
  productIsVegan: null,
  ingredientInfo: [],
  setUserInputIngredients: (ingredients) =>
    set({ userInputIngredients: ingredients }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ isLoading: loading }),
  setProductIsVegan: (isVegan) => set({ productIsVegan: isVegan }),
  setIngredientInfo: (info) => set({ ingredientInfo: info }),
}));

export default useIngredientStore;
