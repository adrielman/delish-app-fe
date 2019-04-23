import axios from "axios";

const api = axios.create({
  baseURL: "https://delish-recipe-api.herokuapp.com/api"
});

const RecipeApi = {
  deleteRecipe: async id => {
    await api.delete(`recipes/${id}`);
  },
  createRecipe: async recipe => {
    const response = await api.post("recipes", recipe);
    return response.data.data.id;
  },
  getRecipes: async () => {
    const response = await api.get("recipes");
    console.log("getRecipes", response.data);
    return response.data.data;
  },
  updateRecipe: async recipe => {
    await api.put(recipe);
  }
};

export default RecipeApi;
