function reverseString(word) {

    let reversed = word.split("").reverse().join("");

    return reversed;
}

console.log(reverseString("gokul"));// here for thisone also o(n).
//why because of here we know how many characters are there if yyou reverse the string means within less time only we will get. 