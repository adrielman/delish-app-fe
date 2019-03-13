import axios from "axios";

const api = axios.create({
  baseURL: "https://delish-recipe-api.herokuapp.com/api"
});

export async function deleteRecipe(id) {
  const response = await api.delete(`recipes/${id}`);
  console.log("it was called and this was the response : " + response);
}
