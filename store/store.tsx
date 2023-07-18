import { create } from "zustand";

interface IngredientsStore {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
}

const useIngredientStore = create<IngredientsStore>((set) => ({
  ingredients: [],
  setIngredients: (ingredients) => set({ ingredients }),
}));

export default useIngredientStore;
