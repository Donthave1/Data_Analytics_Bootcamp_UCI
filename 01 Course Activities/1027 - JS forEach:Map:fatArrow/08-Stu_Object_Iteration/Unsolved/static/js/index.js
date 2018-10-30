// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE

// var dishes = [];
// var spices = [];

// recipes.forEach((recipe) => {
//   object.entries(recipe).forEach(([key, value]) => {
//     if (key === "dish") {
//       dishes.push(value);
//     }
//     else {
//       spices.push(value);
//     }
//   })
// });
// console.log(dishes);
// console.log(spices);

// recipes.forEach(recipe => {
// dishes.push(recipe.dish);
// spices.push(recipe.spice);
// })

var dishes = recipes.map(recipe => recipe.dish);
console.log("dish: ", dishes);

var spices = recipes.map(recipe => recipe.spice);
console.log("spice: ", spices);