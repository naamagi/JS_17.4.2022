

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.slice().sort());

console.log(foods.slice().sort((a, b) => b.localeCompare(a)));



console.log(foods.slice().sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())));
