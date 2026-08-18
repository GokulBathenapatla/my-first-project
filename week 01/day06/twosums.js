function twoSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]];
            }
        }
    }
}

console.log(twoSum([3, 5, 7, 10], 12));

