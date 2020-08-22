function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(element => element < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let upperChar = char.toUpperCase();
  return names.filter(element => element.charAt(0).toUpperCase() === upperChar);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  var qualifier = "to ";
  return words.filter(element => element.slice(0, 3) === qualifier);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(element => typeof (element) === "number" && element % 1 === 0);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(element => element.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(element => {
    let sqrt = Math.sqrt(element);
    return sqrt % 1 === 0 ? sqrt : parseFloat(sqrt.toFixed(2));
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var re = new RegExp(str, 'gi')
  return sentences.filter(element => element.match(re));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(element => Math.max(...element));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
