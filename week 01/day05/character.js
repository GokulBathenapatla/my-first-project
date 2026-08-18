function checkCharacters(word) {// here we have only one loop and the loop will go only one time for every charcter.
    //so that's why o(n)

    let count = {};

    for (let char of word) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    console.log("Character Count:", count);

    console.log("Duplicates:");

    for (let char in count) {
        if (count[char] > 1) {
            console.log(char);
        }
    }
}

checkCharacters("programming");