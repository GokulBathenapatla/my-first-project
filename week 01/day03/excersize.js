//clone obj

const bike = {
    brand: "Yamaha",
    model: "R15",
    price: 180000
};

const bikeCopy = {
    ...bike
};

console.log(bikeCopy);

//merge arrays

const cities1 = ["Bangalore", "Mysore", "Chennai"];

const cities2 = ["Hyderabad", "Pune", "Mumbai"];

const allCities = [...cities1, ...cities2];

console.log(allCities);

// Nested Destructuring

const employee = {
    name: "Ramesh",
    job: {
        role: "Developer",
        salary: 55000
    }
};

const {
    name,
    job: { role, salary }
} = employee;

console.log(name);
console.log(role);
console.log(salary);

//Default Parameters it used only when discount was not given

function calculateDiscount(price, discount = 10) { //the js it will take 10 discount  by default.
    return price - (price * discount / 100);
}

console.log(calculateDiscount(2000));// here i didnt given discount it will took byy default 10%.
console.log(calculateDiscount(2000, 20));

//function conversion

//function square(number) {
//    return number * number;// this is the normal function
//}

//console.log(square(8));


//this is the arrow function

const square = number => number * number;// when we have one parameter like here (number) the brackkets are optional.
// when we have we put brackets.// when we dont have parametres we will written like this greet()
console.log(square(8));

// monthly salary to annualSalary

const employees = [
    { name: "gokul", monthlySalary: 45000 },
    { name: "ramesh", monthlySalary: 50000 },
    { name: "hari", monthlySalary: 46000 },
    { name: "vijay", monthlySalary: 52000 }
];//here in annual salary when we created the original data is store like that onlt here it will create new array.

const annualEmployees = employees.map(({ name, monthlySalary }) => ({ //map method checks every employee
    //name and monthsalary this are destructureing method
    name,
    annualSalary: monthlySalary * 12
    //it transform the data |
}));

console.log(annualEmployees);