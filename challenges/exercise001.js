function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let vatAddedPrice = (originalPrice * (1 + (vatRate / 100)));
  return (vatAddedPrice * 100) % 100 == 0 ? vatAddedPrice : parseFloat(vatAddedPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let reducedSalePrice = originalPrice * (1 - (reduction / 100));
  return (reducedSalePrice * 100) % 100 == 0 ? reducedSalePrice : parseFloat(reducedSalePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split("").reverse().join(""));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(user => user['type'] === "Linux").length
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let mean = scores.reduce((a, b) => a + b) / scores.length;
  return ((mean * 100) % 100 == 0) ? mean : mean = parseFloat(mean.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return (n % 3 == 0) && (n % 5 == 0) ? "fizzbuzz" : (n % 3 == 0) ? "fizz" : (n % 5 == 0) ? "buzz" : n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
