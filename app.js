function employee(employeeID, fullName, department, level, image) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = calcSalary(level);
    this.image = image;
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
let emp7 = new employee(18, "ahmad al3krb", "development", "Senior");

const main = document.querySelector("main");
const table = document.createElement("table");
main.appendChild(table);

const tr = document.createElement("tr");
table.appendChild(tr);
const th1 = document.createElement("td");
tr.appendChild(th1);
th1.textContent = "EmployeeID";
const th2 = document.createElement("td");
tr.appendChild(th2);
th2.textContent = "Full Name";
const th3 = document.createElement("td");
tr.appendChild(th3);
th3.textContent = "Department";
const th4 = document.createElement("td");
tr.appendChild(th4);
th4.textContent = "Level";
const th5 = document.createElement("td");
tr.appendChild(th5);
th5.textContent = "Salary";

// let employees = [emp1, emp2, emp3, emp4, emp5, emp6, emp7];
// function render() {
//     for (let i = 0; i < 6; i++) {
//         console.log(employees[i].fullName + " " + employees[i].salary);
//     }
// }

// render();


// function render() {
//     for (let row = 0; row < 7; row++) {
//         const tr = document.createElement("tr");
//         table.appendChild(tr);
//         const td1 = document.createElement("td");
//         tr.appendChild(td1);
//         td1.textContent = document.getElementById("empid").value;
//         const td2 = document.createElement("td");
//         tr.appendChild(td2);
//         td2.textContent = employees[row].fullName;
//         const td3 = document.createElement("td");
//         tr.appendChild(td3);
//         td3.textContent = employees[row].department;
//         const td4 = document.createElement("td");
//         tr.appendChild(td4);
//         td4.textContent = employees[row].level;
//         const td5 = document.createElement("td");
//         tr.appendChild(td5);
//         td5.textContent = employees[row].salary;
//     }
// }

// render();




let form =document.getElementById("form");
form.addEventListener('submit',function(event){
    event.preventDefault();
    const tr = document.createElement("tr");
        table.appendChild(tr);
        const td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.textContent = document.getElementById("empid").value;
        const td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.textContent = document.getElementById("fname").value;
        const td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.textContent = document.getElementById("department").value;
        const td4 = document.createElement("td");
        tr.appendChild(td4);
        let x=td4.textContent = document.getElementById("level").value;
        const td5 =document.createElement("td");
        tr.appendChild(td5);
        td5.textContent =calcSalary(document.getElementById("level").value);
        
        
        
        function calcSalary(level) {
            let salary = 0;
            if (String(level) == "Senior") {
                salary = Math.floor(Math.random() * 501) + 1500;
            }
            else if (level == "Mid-Senior") {
                salary = Math.floor(Math.random() * 501) + 1000;
            }
            else if (level == "Junior") {
                salary = Math.floor(Math.random() * 501) + 500;
            }
            return salary;
        };

})