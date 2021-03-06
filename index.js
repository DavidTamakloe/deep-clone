const deepClone = require("./deep-clone");

//Demonstration
const innerObject = { town: "Lerum", country: "Sweden" };
const original = {
  name: "Paddy",
  address: innerObject
};

console.log("");
console.log("WELCOME TO DEEP CLONE");
console.log("");
console.log("==========================================");
console.log(`original:`);
console.log(original);

const clone = deepClone(original);

console.log(`clone:`);
console.log(clone);
console.log("==========================================");

console.log("");

console.log(`Changing "town" on the inner object to "Accra"`);
innerObject.town = "Accra";

console.log("");

console.log("==========================================");
console.log(`Original object now has "town" as "Accra"`);
console.log(`original:`);
console.log(original);
console.log("");
console.log(`Clone object maintains "town" as "Lerum"`);
console.log(`clone:`);
console.log(clone);
console.log("==========================================");
console.log("");
