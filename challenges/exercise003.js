function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num ** 2);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.slice(1).reduce(function(p,c) { return p + c[0].charAt(0).toUpperCase() + c.slice(1)},
                               words[0].charAt(0).toLowerCase() + words[0].slice(1));
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let arr1 = people.filter(x => x.subjects.length > 0 );
  totalSubjects = arr1.map(obj => obj.subjects ).reduce( function(p,c) {return p + c.length} ,0);
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return (menu.filter(menuItem => menuItem.ingredients.includes(ingredient) ).length > 0);
}

function duplicateNumbers(arr1, arr2) {

  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return Array.from(new Set(arr1.filter(element => arr2.includes(element)).sort((a, b) => a - b)));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
