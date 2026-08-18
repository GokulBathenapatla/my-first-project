for (let i = 1; i <= n; i++) {//here the time compleity is o(n)
    //why beacuse here we are using only loop
    //1 loop -n times

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}