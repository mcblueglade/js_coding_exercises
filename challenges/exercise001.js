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
 
  var vatAddedPrice = (originalPrice * (1 + (vatRate/100)));
 
  //If this is not a whole number, format as a float with 2 demical places 
  if ((vatAddedPrice * 100) % 100 != 0) { 
    vatAddedPrice = parseFloat(vatAddedPrice.toFixed(2));
  }
  return vatAddedPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  var reducedSalePrice = originalPrice * (1-(reduction/100))
  
  //If this is not a whole number, format as a float with 2 demical places
  if ((reducedSalePrice * 100) % 100 != 0) { 
    reducedSalePrice = parseFloat(reducedSalePrice.toFixed(2));
  }
  return reducedSalePrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  var middleChar = str.toString();
  var middleIndex = Math.floor(middleChar.length / 2)

  //Even length string then get the middle 2 chars
  if ((middleChar.length % 2) == 0) {
    middleChar = middleChar.slice(middleIndex - 1, middleIndex + 1);
  }
  //Odd length string so get the middle char only
  else {
    middleChar = middleChar.charAt(middleIndex);
  }
  return middleChar;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  var reversedWords = [];
  words.forEach(function(word) {
    reversedWords.push( word.split("").reverse().join("") );
  });
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  var counter = 0;
  users.forEach(function(user) {
    if (user['type'] == 'Linux') { counter++; }
  });
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  var mean = undefined;
  var totalScore = 0;
  scores.forEach(function(score) {
    totalScore += score;
  });

  if (scores.length > 0) {
    mean = totalScore / scores.length;
    if ((mean * 100) % 100 != 0) {
      mean = parseFloat(mean.toFixed(2));
    } 
  }
  return mean;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  if ( (n % 3 == 0) && (n % 5 == 0) ) { return "fizzbuzz"}
  else if (n % 3 == 0) { return "fizz"}
  else if (n % 5 == 0) { return "buzz"}
  else return n;
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
