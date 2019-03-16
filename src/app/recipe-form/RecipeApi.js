import axios from "axios";

const api = axios.create({
  baseURL: "https://delish-recipe-api.herokuapp.com/api"
});

export async function deleteRecipe(id) {
  await api.delete(`recipes/${id}`);
}

export async function postRecipe(recipe) {
  await api.post("recipes", recipe);
}

// onSubmit() {
//   let date = new Date();

//   let output = {
//     name: this.state.name,
//     description: this.state.description,
//     image: this.state.imgUrl,
//     time: date.getTime(),
//     servings: this.state.servings,
//     link: this.state.source,
//     ingredients: this.state.ingredients,
//     instructions: this.state.recipes
//   };
//   fetch("https://delish-recipe-api.herokuapp.com/api/recipes", {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     redirect: "follow",
//     referrer: "no-referrer",
//     body: JSON.stringify(output)
//   }).then(response => response.json()); // parses response to JSON

//   console.log(JSON.stringify(output));
// }
