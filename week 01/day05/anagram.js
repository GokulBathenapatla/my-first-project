function isAnagram(word1, word2) {

    let firstWord = word1.split("").sort().join("");
    let secondWord = word2.split("").sort().join("");

    if (firstWord === secondWord) {
        console.log("Anagram");
    } else {
        console.log("Not an Anagram");
    }
}

isAnagram("tea", "eat");// time compleity of thisone is O(n log n)
//why because of here we using sort() here it will took lot a sort a large string thats why this o(n log n)