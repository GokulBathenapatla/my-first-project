//const student = {
    //name: "Gokul",
  //  age: 25
//};

//const studentCopy = {
 //   ...student
//};

//console.log(studentCopy);

//now we will two objjects in a method
const student = {
    name: "Gokul",
    age: 25
};

const course = {
    nameOfCourse: "React",
    duration: "1 months"
};
const Total = {
    ...student,
    ...course
};
console.log(Total);// we will create and merge the obj
// through thisone directly we can change the eisting one through speard oper.


//with arrays
const firstTeam = ["Gokul", "Ramesh"];

const secondTeam = ["Suresh", "Ravi"];
// first we create an array and now we are merging into one array.
const allPlayers = [
    ...firstTeam,
    ...secondTeam
];

console.log(allPlayers);