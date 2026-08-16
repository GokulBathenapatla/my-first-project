//const student = {
   // name: "Gokul",
  //  age: 25,
 //   city: "Bangalore"
//};
//console.log(student.name);
//console.log(student.age);
//console.log(student.city);// this is without destructing this method is before es6.

const student = {
    name: "Gokul",
    age: 25,
    city: "Bangalore"
};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);// this es6 version js