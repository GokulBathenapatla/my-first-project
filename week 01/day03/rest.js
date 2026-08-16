function addNumbers(...numbers) {
    console.log(numbers);
}

addNumbers(10, 20, 30, 40);// here also we will use ... for rest also and we will use same also in spread 
// here it complete diff method.


// add
function addNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0 );// here if you want add the number we will add zero
}

console.log(addNumbers(10, 20, 30));

//sub
function subNumbers(...numbers) {
    return numbers.reduce((total, number) => total * number);// here if you want add the number we will add zero
}

console.log(subNumbers(10, 20, 30));