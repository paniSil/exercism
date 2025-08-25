/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  return remainingTime === 0 ? 'Lasagna is done.' : remainingTime > 0 ? 'Not done, please wait.' : 'You forgot to set the timer.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const noodles = layers.filter(layer => layer === 'noodles').length * 50;
  const sauce = layers.filter(layer => layer === 'sauce').length * 0.2;
  return { noodles: noodles, sauce: sauce};
}

export function addSecretIngredient(list1, list2) {
  list2.push(list1[list1.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let ingredients = {...recipe};
  Object.keys(ingredients).forEach(function(key){ ingredients[key] *= portions / 2 });
  return ingredients;
}