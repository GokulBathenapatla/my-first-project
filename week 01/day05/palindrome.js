function isPalindrome(word) {

    let reversed = word.split("").reverse().join("");

    if (word === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("racecar"));


function isPalindrome(word) {

    let reversed = word.split("").reverse().join("");

    if (word === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("hello"));// here the time compleity is o(n).