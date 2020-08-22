function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const square_nums = (num) => num ** 2;
  return nums.map(square_nums);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  var camelCase = words[0].charAt(0).toLowerCase() + words[0].slice(1);
  words.slice(1).forEach(function (word) {
    camelCase += word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  var totalSubjects = 0;
  people.filter(function (x) { totalSubjects += x.subjects.length; });
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return (menu.filter(function (x) { return (x.ingredients.includes(ingredient)) }).length > 0);
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
