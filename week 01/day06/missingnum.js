function findMissing(numbers, start, end) {

    let expected = (start + end) * (end - start + 1) / 2;

    let actual = 0;

    for (let num of numbers) {
        actual += num;
    }

    return expected - actual;
}

console.log(findMissing([3, 4, 6, 7, 8], 3, 8));


