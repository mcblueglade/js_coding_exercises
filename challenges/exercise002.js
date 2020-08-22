function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich['fillings'];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return Object.entries(person).
    map(attribute => attribute[0] === 'city' && attribute[1] === "Manchester").
    reduce((p, c) => p || c);
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const maxPeoplePerBus = 40;
  let num = Math.floor(people / maxPeoplePerBus);
  return (people % maxPeoplePerBus === 0) ? num : ++num;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(element => element === "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.city === "Manchester" && person.address.postCode.charAt(0) === 'M');
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
