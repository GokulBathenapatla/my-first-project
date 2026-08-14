//let, const, var here we will this three.
//let age = 45;// after assiging a value only we will assign new value without declartion we cant assign a value..
//age = 49;
//name = "gokul";
//age = 56.8888;
//BankBalance = 45000;
//isLoggedIn = "true";
//console.log(isLoggedIn); //through let keyword we can assign the values to the variables.

//let age = 20;
//if (age <= 20) {
   // console.log("hello"); // this is for if fun.
//}

//const name = "Gokul";
//name = "ramesh";
//console.log(name);// when we reassign a value we will get an error why because through const keyword we can't assign a new value.
//const name = "gokul";
//if ( name === "gokul") {
//    console.log("HelloWorks");
//} 

//var age = 50;
//var name = "gokul";
//var age = 65;
//var age = 50;
//console.log(age);// through var we will reassign the values to the variables and we will add var keyword ans assign a same value.


//datatypes

//let name = "gokul";// string  for values we will use single or double quatations.
//let age = 2.3; //number it will uses both number type and integer type values.
//const price = 400;
//const quantity = 5000;
//const total = price + quantity;
//console.log(total);
//console.log(age);

//let isLoggedIn = "true"; //boolean  it has only two values true or false.
//let value = "null"; // null value
//let result;  //undefined
//let number = [10, 20, 30]; //arrays

//const name = 'gokul';
//const isLoggedIn ="true";
//const isAdmin = "false";
//console.log(isAdmin);// we use boolean values for yes or no  or we will use true or false.

//let result;  //undefined
//let user;
//console.log(user);// here user variable is exists but value not been be assigned to it.
// for undefined value not provided yet intially after the api response we will get the value.


//for null we will create a vaiable and we assign null to the variable.

//let number = [10, 20, 30]; //arrays
//let user = {
//   name : "Hari",
//   age : 25
//};
//console.log(user);

//why we use data types in js means. differnt types of data behave diff values
// 10 + 50 = 60 when we use data type as a number.
// "10" + "50" = 1050 why because here we using quatations for the values that's why its giving the value number only it will take as a "string"
// 


//operators
//let a = 50;
//let b = 60;
//let c = 30;
//console.log(a + c);// it will add two numbers 
//console.log(a - b);// here it will sub of two numbers 
//console.log(a * c);// it will multiply two numbers 
//console.log(b / c);//it willl divide the values 
//console.log(b % a);//it will gives the remainder

//conditions
//let name = "gokul";
//if (name === "gokul") {
//   console.log("hi");
//} else {
//   console.log("hello");
//}

// a condition in javascript is allow to right a code and make a decision. 
//if condition
//let name = "gokul";
//if (name === "gokul") {
//   console.log(name);
//}

//if esle if you one conditon we will use if else and if you more than one condition we will use  else if 

//const age = 20;
//if (age >= 18) {
//  console.log("you have a right to vote");
//} else {
//  console.log("you dont have a right to vote");
//}

//let priority = "hello";

//if (priority === "critical") {
//    console.log("Handle immediately");
//} else if (priority === "high") {
//    console.log("Handle urgently");
//} else if (priority === "medium") {
//    console.log("Handle normally");
//} else {
//    console.log("Low priority");
//}

//when we will use = and == and ===
// = we will use only for decla value to a variabl.
// == we will check the conditions like 10 == 10 likke that.checks values not type 
/// === here it will check both values and type.


//logical operators 
//const age = 25;
///const hasLicense = true;

//if (age >= 18 && hasLicense === true) { // i tested with both let and const
//    console.log("You can drive");
//}

//or  operator
//let isAdmin = false;
//let isManager = true;

//if (isAdmin || isManager) {
//    console.log("You can access the dashboard");// it will print the condition why beacuse for (or) atleast one conditon should be true.
//}

//not operator
//let isLoggedIn = false;

//if (!isLoggedIn) {
//    console.log("Please login");
//}

//loops why we use means. a loop that repeats code.

//for loop
// const vehicles = ["KA01", "KA02", "KA03"];
//
// for (let i=0; i<vehicles.length; i++) {
//   console.log(vehicles);
// }

//while loop
//let count =1;
//while(count <= 4){
//   console.log(count);
//   count++;// if we miss this line we will create infinite loop.
//} 

//let count =11;
//do { // in js executes the do block before checks the condition.
//   console.log(count);
//   count++;
//} while (count <=5);

//function it means it is a resuable block of code that perform specific task.

//function Header() {
//   console.log("hello Gokul");
//} // here we difine only the function it will not return anything.

//fun with parameters
//function header(name) {
//   console.log("hello " + name);// here we are defing the function 
//   console.log("hello " + name);
//}
//header("gokul");// here we are calling the function
//header("hari");

//fun returns a value.

//function add(a , b) {
//   return a + b;
//}

//const result = add(10 , 20);
//console.log(result);

//function calculateTotal(price, quantity) {
//  return price * quantity;
//}
//const total = calculateTotal(400, 500);
//console.log(total);

// even or odd
//function checkEvenOdd(number) {
//    if (number % 2 === 0) {
//        return "Even";
//    } else {
//        return "Odd";
//    }
//}

//console.log(checkEvenOdd(1));
//console.log(checkEvenOdd(75));

//Largest of 3 Numbers
//function largestOfThreeNumbers(a, b, c) {
//    if (a >= b && a >= c) {
//        return a;
//    } else if (b >= a && b >= c) {
//        return b;
//    } else {
//        return c;
//    }
//}

//console.log(largestOfThreeNumbers(50, 25, 100));

//this is for n numbers 
//function findLargest(numbers) { //number is the parameter
  //  let largest = numbers[0];

    //for (let i = 1; i < numbers.length; i++) {
        
      //if (numbers[i] > largest) {
        //    largest = numbers[i];
        //}
    //}

    //return largest;
//}

//console.log(findLargest([10, 25, 15, 40, 8, 50]));

// reverse a string
//function reverseString(str) {
  //  return str.split("").reverse().join("");
//}

//console.log(reverseString("hello"));

//function reverseString(str) {
 //   return str.split("").reverse().join("");
//}

//console.log(reverseString("Gokul"));

//factorial
//function factorial(number) {
   // let result = 1;

    //for (let i = 1; i <= number; i++) {
     //   result = result * i;
   // }

 //   return result;
//}

//console.log(factorial(5));


//palindrome
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("level"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));