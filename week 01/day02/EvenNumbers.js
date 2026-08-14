let numbers = [10, 15, 22, 31, 40, 55, 60, 90, 45];

let evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);