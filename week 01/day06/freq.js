function frequencyCounter(numbers) {

    let map = new Map();

    for (let num of numbers) {

        map.set(num, (map.get(num) || 0) + 1);
    }

    return map;
}

console.log(frequencyCounter([3, 5, 5, 7, 8, 8, 8, 10]));


