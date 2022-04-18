//1
const numbers = [4, -5, 666, 2, 400, 11];
const biggestNumber = numbers.reduce((acc, currentValue) => {
  return acc > currentValue ? acc : currentValue;
});
console.log(biggestNumber);

//2
const sumOfEvenNumbers = numbers.reduce((acc, currentValue) => {
  return currentValue % 2 === 0 ? acc + currentValue : acc;
}, 0);
console.log(sumOfEvenNumbers);

//3
const average = numbers.reduce((acc, currentValue, currentIndex) => {
  if (currentIndex === numbers.length - 1) {
    return (acc + currentValue) / numbers.length;
  }
  return acc + currentValue;
});
console.log(average);
