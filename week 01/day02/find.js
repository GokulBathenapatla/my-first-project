// find it means when we matches through the list or array anything or a number by checing one by one number in the array.
//let numbers =[20, 330, 50, 40, 90];
//let results = numbers.find(number => {
 //   return number > 425; // it will check with number 20 is greater than 425 if it is wrong means it will check with another number untill it matches the first number 
//}); // if it not matches with entire the array means it will give the output undefined.
//console.log(results)

//with objects
let employees =[
 { id:1, name: "gokul" },
 {id:2, name:"dhoni"},
 {id:3, name: "suresh"}
];
let employee =employees.find(employee => {
    return employee.id ===2;
});// here if you give id with 0 or other than this three numbers we will get undefined.
console.log(employee);// in this find method it will check number until it matches with one number and it will stop checking another numbers
//in filter it will check the entire array it will give the results.