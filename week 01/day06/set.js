//Removeing duplicate numbers
//set means it will store uniue values and inside array if you add same number inside an array double times it keep it as once.
const numbers = [10, 20, 10, 30, 20, 40];

const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);

// 

const names = new Set();

names.add("Gokul");
names.add("Ravi");
names.add("Suresh");
names.add("Gokul");

console.log(names);

console.log(names.has("Ravi"));

names.delete("Ravi");

console.log(names);