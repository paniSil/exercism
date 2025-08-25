// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var birds = 0;
  for (let counter = 0; counter < birdsPerDay.length; counter++) {
    birds += birdsPerDay[counter]
  }
  return birds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var lastDay = 7 * week; 
  var firstDay = 7 * week - 7;
  var birds = birdsPerDay.slice(firstDay, lastDay);
  return totalBirdCount(birds);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let counter = 0; counter < birdsPerDay.length; counter+=2) {
    birdsPerDay[counter]++;
  }
  return birdsPerDay
}
