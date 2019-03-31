import axios from "axios";

const api = axios.create({
  baseURL: "https://delish-recipe-api.herokuapp.com/api"
});

const RecipeApi = {
  deleteRecipe: async id => {
    await api.delete(`recipes/${id}`);
  },
  createRecipe: async recipe => {
    await api.post("recipes", recipe);
  },
  getRecipes: async () => {
    const response = await api.get("recipes");
    return response.data;
  },
  updateRecipe: async recipe => {
    await api.put(recipe);
  }
};

export default RecipeApi;
