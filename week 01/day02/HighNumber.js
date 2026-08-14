let numbers = [10, 50, 30, 80, 20];

let highest = numbers.reduce((max, number) => {
    return number > max ? number : max;
}, numbers[0]);

console.log(highest);