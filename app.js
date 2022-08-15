function employee(employeeID, fullName, department, level) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = calcSalary(level);
}

function calcSalary(level) {
    let salary = 0;
    if (level == "Senior") {
        salary = Math.floor(Math.random() * 501) + 1500;
    }
    else if (level == "Mid-Senior") {
        salary = Math.floor(Math.random() * 501) + 1000;
    }
    else if (level == "Junior") {
        salary = Math.floor(Math.random() * 501) + 500;
    }
    return salary;
}


let emp1 = new employee(12, "ibrahim", "development", "Senior");
let emp2 = new employee(13, "mohamed", "full stack", "Mid-Senior");
let emp3 = new employee(14, "ahmad", "development", "Junior");
let emp4 = new employee(15, "abdullah khaldon", "development", "Mid-Senior");
let emp5 = new employee(16, "malek adel", "development", "Junior");
let emp6 = new employee(17, "jehad haded", "development", "Senior");


let employees = [emp1, emp2, emp3, emp4, emp5, emp6];
function render() {
    for (let i = 0; i < employees.length; i++) {

        console.log(employees[i].fullName+" "+employees[i].salary);
    }
}

render();
