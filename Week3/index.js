function EmployeeInfo(name, salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + salary);
}

const currentDateTime = new Date();

console.log("This is my first program");
console.log("Program run on: " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (skills, studentID, labGrp) => {
    console.log("Student ID " + studentID + " Expert in " + skills);
    console.log("Lab Group Name " + labGrp);
};

EmpSkills("JavaScript", "3209279", "19");
