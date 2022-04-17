const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
//a1
console.log(foods.slice().sort());
//a2
console.log(foods.slice().sort((a, b) => b.localeCompare(a)));

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
//b1
console.log(
  foodsWithUpperCase
    .slice()
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
);
//b2
console.log(
  foodsWithUpperCase
    .slice()
    .sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))
);

const words = ["apple", "supercalifragilisticexpialidocious", 
"hi", "zoo"];

//c1

console.log(words.sort((a,b) =>b.length - a.length));
