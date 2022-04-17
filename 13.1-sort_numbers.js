const numbers = [1, -5, 666, 2, 400, 11];

const sortAsc= numbers.slice().sort((a,b) =>a-b);

console.log(sortAsc);

const sortDesc= numbers.slice().sort((a,b) =>b-a);

console.log(sortDesc);