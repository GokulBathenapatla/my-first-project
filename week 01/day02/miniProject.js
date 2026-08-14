let employees = [
    { name: "Gokul", salary: 42000 },
    { name: "Ramesh", salary: 58000 },
    { name: "Suresh", salary: 72000 },
    { name: "Ravi", salary: 49000 },
    { name: "Dhoni", salary: 85000 },
    { name: "Karthik", salary: 63000 }
];

let totalEmployees = employees.length;

let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

let averageSalary = totalSalary / totalEmployees;

let highestPaid = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});

let highSalary = employees.filter(employee => {
    return employee.salary > 50000;
});

console.log("Total employees:", totalEmployees);
console.log("Total salary:", totalSalary);
console.log("Average salary:", averageSalary);
console.log("Highest paid employee:", highestPaid);
console.log("Employees with salary above 50000:", highSalary);