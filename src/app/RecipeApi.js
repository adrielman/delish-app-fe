import axios from "axios";

const api = axios.create({
  baseURL: "https://delish-recipe-api.herokuapp.com/api"
});

export const deleteRecipe = async id => {
  await api.delete(`recipes/${id}`);
};

export const createRecipe = async recipe => {
  await api.post("recipes", recipe);
};

export const getRecipes = async () => {
  const response = await api.get("recipes");
  return response.data;
};

export const updateRecipe = async recipe => {
  await api.put(recipe);
};
