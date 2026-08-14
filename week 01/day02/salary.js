let employees = [
    { name: "Rahul", salary: 50000 },
    { name: "Priya", salary: 60000 },
    { name: "Arun", salary: 40000 },
    { name: "Sneha", salary: 75000 }
];

let lowSalaryEmployees = employees.filter(employee => {
    return employee.salary < 50000;
});

console.log(lowSalaryEmployees);