export interface IngredientInfo {
  ingredientName: string;
  isIngredientVegan: boolean;
  detailedInfo: string;
}

export interface FetchDataResult {
  isIngredientVegan: boolean;
  ingredientInfo: IngredientInfo[];
  errorMessage: string | null;
}

interface ChatCompletion {
  index: number;
  message: {
    role: string;
    content: string;
  };
  finish_reason: string;
}

export interface APIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChatCompletion[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
