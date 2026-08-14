let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log(sum);